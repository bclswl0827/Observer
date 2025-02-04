package helicorder

import (
	"sync"
	"time"

	"github.com/anyshake/observer/drivers/explorer"
	"github.com/anyshake/observer/services"
	"github.com/anyshake/observer/utils/cache"
	"github.com/anyshake/observer/utils/logger"
	"github.com/bclswl0827/heligo"
	"github.com/shirou/gopsutil/v4/mem"
)

func (m *HelicorderService) Start(options *services.Options, waitGroup *sync.WaitGroup) {
	defer waitGroup.Done()

	enabled, err := options.Config.Services.GetValue(m.GetServiceName(), "enable", "bool")
	if err != nil {
		logger.GetLogger(m.GetServiceName()).Errorln(err)
		return
	}
	if !enabled.(bool) {
		logger.GetLogger(m.GetServiceName()).Infoln("service has been disabled")
		return
	}

	basePath, err := options.Config.Services.GetValue(m.GetServiceName(), "path", "string")
	if err != nil {
		logger.GetLogger(m.GetServiceName()).Errorln(err)
		return
	}
	m.basePath = basePath.(string)

	lifeCycle, err := options.Config.Services.GetValue(m.GetServiceName(), "lifecycle", "int")
	if err != nil {
		logger.GetLogger(m.GetServiceName()).Errorln(err)
		return
	}
	m.lifeCycle = lifeCycle.(int)

	m.stationCode = options.Config.Stream.Station
	m.networkCode = options.Config.Stream.Network
	m.locationCode = options.Config.Stream.Location
	m.loadDefault()

	if imageSize, err := options.Config.Services.GetValue(m.GetServiceName(), "size", "int"); err == nil {
		m.imageSize = imageSize.(int)
	}
	if spanSamples, err := options.Config.Services.GetValue(m.GetServiceName(), "samples", "int"); err == nil {
		m.spanSamples = spanSamples.(int)
	}
	if scaleFactor, err := options.Config.Services.GetValue(m.GetServiceName(), "scale", "float"); err == nil {
		m.scaleFactor = scaleFactor.(float64)
	}

	dataProvider := &provider{
		database:      options.Database,
		queryCache:    cache.NewKv(HELICORDER_TIME_SPAN),
		stationCode:   m.stationCode,
		networkCode:   m.networkCode,
		locationCode:  m.locationCode,
		channelPrefix: options.Config.Stream.Channel,
	}

	logger.GetLogger(m.GetServiceName()).Infoln("service has been started")
	defer logger.GetLogger(m.GetServiceName()).Infoln("service has been stopped")

	// To calculate next plot time
	calcDuration := func(currentTime time.Time) time.Duration {
		timsSpanMinute := int(time.Hour.Minutes())
		currentMinute := currentTime.Minute()
		// Minutes to next time span
		nextQuarter := (currentMinute/timsSpanMinute + 1) * timsSpanMinute % 60
		nextTime := time.Date(
			currentTime.Year(),
			currentTime.Month(),
			currentTime.Day(),
			currentTime.Hour(),
			nextQuarter,
			0, // Reset seconds
			0,
			currentTime.Location(),
		)
		if nextQuarter <= currentMinute {
			nextTime = nextTime.Add(time.Hour)
		}
		return nextTime.Sub(currentTime)
	}

	currentTime := options.TimeSource.Get()
	timer := time.NewTimer(calcDuration(currentTime))
	defer timer.Stop()

	for {
		select {
		case <-options.CancelToken.Done():
			return
		case <-timer.C:
			// Reset timer to next plot time
			currentTime = options.TimeSource.Get()
			timer.Reset(calcDuration(currentTime))

			// Determine if eligible to enable cache
			// Need 1GB of available memory for storing query result
			vmStat, err := mem.VirtualMemory()
			if err != nil {
				logger.GetLogger(m.GetServiceName()).Errorln(err)
				return
			}
			dataProvider.useCache = vmStat.Available > 1*1024*1024*1024

			// Subtract one minute to avoid date rollover
			currentTime = currentTime.Add(-time.Minute)
			for _, channelCode := range []string{
				explorer.EXPLORER_CHANNEL_CODE_Z,
				explorer.EXPLORER_CHANNEL_CODE_E,
				explorer.EXPLORER_CHANNEL_CODE_N,
			} {
				// Create helicorder context
				helicorderCtx, err := heligo.New(dataProvider, 24*time.Hour, HELICORDER_TIME_SPAN)
				if err != nil {
					logger.GetLogger(m.GetServiceName()).Errorln(err)
					return
				}

				// Update channel code
				dataProvider.setChannelCode(channelCode)
				channelName := dataProvider.GetChannel()
				logger.GetLogger(m.GetServiceName()).Infof("start plotting helicorder for %s", channelName)

				err = helicorderCtx.Plot(currentTime, m.spanSamples, m.scaleFactor, HELICORDER_LINE_WIDTH)
				if err != nil {
					logger.GetLogger(m.GetServiceName()).Errorln(err)
					continue
				}

				filePath := m.getFilePath(channelName, currentTime)
				err = helicorderCtx.Save(m.imageSize, filePath)
				if err != nil {
					logger.GetLogger(m.GetServiceName()).Errorln(err)
					continue
				}

				logger.GetLogger(m.GetServiceName()).Infof("helicorder for %s has been saved", channelName)
			}

			// Clear query cache
			dataProvider.queryCache.Clear()
			// Clean expired helicorder images
			err = m.handleClean()
			if err != nil {
				logger.GetLogger(m.GetServiceName()).Errorln(err)
			}
		}
	}
}

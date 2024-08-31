package explorer

import (
	"bytes"
	"encoding/binary"
	"errors"
	"fmt"
	"math"
	"time"
	"unsafe"

	"github.com/alphadose/haxmap"
	"github.com/anyshake/observer/utils/fifo"
	messagebus "github.com/vardius/message-bus"
)

var (
	LEGACY_PACKET_FRAME_HEADER   = []byte{0xFC, 0x1B}
	MAINLINE_PACKET_FRAME_HEADER = []byte{0xFA, 0xDE}
)

// In legacy mode, each packet contains 3 channels, n samples per channel.
// The packet is sent at an interval of (1000 / sample rate) milliseconds.
// Set n = 5 (also in Explorer) fits the common sample rates (25, 50, 100, 125 Hz).
const LEGACY_PACKET_CHANNEL_SIZE = 5

// Legacy packet structure, fixed size.
// Each channel has a checksum, which is the XOR of all bytes in the channel.
type legacyPacket struct {
	Z_Axis   [LEGACY_PACKET_CHANNEL_SIZE]int32
	E_Axis   [LEGACY_PACKET_CHANNEL_SIZE]int32
	N_Axis   [LEGACY_PACKET_CHANNEL_SIZE]int32
	Checksum [3]uint8
}

func (g *legacyPacket) length() int {
	return int(unsafe.Sizeof(g.Z_Axis) + unsafe.Sizeof(g.E_Axis) + unsafe.Sizeof(g.N_Axis) + unsafe.Sizeof(g.Checksum))
}

func (g *legacyPacket) decode(data []byte) error {
	err := binary.Read(bytes.NewReader(data), binary.LittleEndian, g)
	if err != nil {
		return err
	}

	// Using XOR algorithm
	calcChecksum := [3]uint8{0, 0, 0}
	zAxisOffset := int(unsafe.Sizeof(g.Z_Axis))
	for i := 0; i < zAxisOffset; i++ {
		calcChecksum[0] ^= data[i]
	}
	eAxisOffset := zAxisOffset + int(unsafe.Sizeof(g.E_Axis))
	for i := zAxisOffset; i < eAxisOffset; i++ {
		calcChecksum[1] ^= data[i]
	}
	nAxisOffset := eAxisOffset + int(unsafe.Sizeof(g.N_Axis))
	for i := eAxisOffset; i < nAxisOffset; i++ {
		calcChecksum[2] ^= data[i]
	}
	for i := 0; i < len(calcChecksum); i++ {
		if calcChecksum[i] != g.Checksum[i] {
			return fmt.Errorf("checksum mismatch, expected %v, got %v", g.Checksum, calcChecksum)
		}
	}

	return nil
}

// In mainline mode, each packet contains 3 channels, n samples per channel.
// The packet is sent at an interval of (1000 / sample rate) milliseconds.
// Set n = 5 (also in Explorer) fits the common sample rates (25, 50, 100, 125 Hz).
const MAINLINE_PACKET_CHANNEL_SIZE = 5

// Mainline packet header structure, fixed size.
// The VariableData be Device ID, Latitude, Longitude, Elevation in int32 / float32 format.
type mainlinePacket struct {
	Timestamp    int64
	VariableData [4]byte // Can be int32 or float32
	VariableName string  // Exclude from length calculation
	Z_axis       [MAINLINE_PACKET_CHANNEL_SIZE]int32
	E_axis       [MAINLINE_PACKET_CHANNEL_SIZE]int32
	N_axis       [MAINLINE_PACKET_CHANNEL_SIZE]int32
	Checksum     uint8
}

func (g *mainlinePacket) length() int {
	return int(unsafe.Sizeof(g.Timestamp) +
		unsafe.Sizeof(g.VariableData) +
		unsafe.Sizeof(g.Z_axis) +
		unsafe.Sizeof(g.E_axis) +
		unsafe.Sizeof(g.N_axis) +
		unsafe.Sizeof(g.Checksum))
}

func (g *mainlinePacket) decode(data []byte) error {
	// Restore header checksum, note that the byte order is little-endian
	checksumIndex := len(data) - int(unsafe.Sizeof(g.Checksum))
	g.Checksum = data[checksumIndex]

	// Using XOR algorithm to calculate the header checksum
	calcHeaderChecksum := uint8(0)
	for i := 0; i < checksumIndex; i++ {
		calcHeaderChecksum ^= data[i]
	}
	if calcHeaderChecksum != g.Checksum {
		return fmt.Errorf("header checksum mismatch, expected %d, got %d", g.Checksum, calcHeaderChecksum)
	}

	// Restore the header data, note that the byte order is little-endian
	switch (g.Timestamp / time.Second.Milliseconds()) % 4 {
	case 0:
		g.VariableName = "device_id"
	case 1:
		g.VariableName = "latitude"
	case 2:
		g.VariableName = "longitude"
	case 3:
		g.VariableName = "elevation"
	}
	variableDataIndex := int(unsafe.Sizeof(g.Timestamp) + unsafe.Sizeof(g.VariableData))
	copy(g.VariableData[:], data[unsafe.Sizeof(g.Timestamp):variableDataIndex])
	g.Timestamp = int64(binary.LittleEndian.Uint64(data[:unsafe.Sizeof(g.Timestamp)]))

	// Restore the channel data, note that the byte order is little-endian
	zAxisOffset := variableDataIndex + int(unsafe.Sizeof(g.Z_axis))
	err := binary.Read(bytes.NewReader(data[variableDataIndex:zAxisOffset]), binary.LittleEndian, g.Z_axis[:])
	if err != nil {
		return err
	}
	eAxisOffset := zAxisOffset + int(unsafe.Sizeof(g.E_axis))
	err = binary.Read(bytes.NewReader(data[zAxisOffset:eAxisOffset]), binary.LittleEndian, g.E_axis[:])
	if err != nil {
		return err
	}
	nAxisOffset := eAxisOffset + int(unsafe.Sizeof(g.N_axis))
	return binary.Read(bytes.NewReader(data[eAxisOffset:nAxisOffset]), binary.LittleEndian, g.N_axis[:])
}

type ExplorerDriverImpl struct {
	logger         ExplorerLogger
	legacyPacket   legacyPacket
	mainlinePacket mainlinePacket
}

func (e *ExplorerDriverImpl) handleReadLegacyPacket(deps *ExplorerDependency, fifoBuffer *fifo.Buffer) {
	recvSize := len(LEGACY_PACKET_FRAME_HEADER) + e.legacyPacket.length()

	// Read data from the transport continuously
	go func() {
		buf := make([]byte, recvSize/2)
		for {
			select {
			case <-deps.CancelToken.Done():
				e.logger.Infof("cancelling read data from transport")
				return
			default:
				n, err := deps.Transport.Read(buf, 100*time.Millisecond, false)
				if err != nil {
					e.logger.Errorf("failed to read data from transport: %v", err)
					continue
				}

				fifoBuffer.Write(buf[:n])
			}
		}
	}()

	// Reference: https://stackoverflow.com/a/51424566
	// Calculate the duration to the next whole second to allivate the drift
	calcDuration := func(currentTime time.Time, duration time.Duration) time.Duration {
		return currentTime.Round(duration).Add(duration).Sub(currentTime)
	}

	// Read data from the FIFO buffer continuously
	var (
		packetBuffer = []legacyPacket{}
		ticker       = time.NewTimer(calcDuration(time.Now(), time.Second))
		timer        = time.NewTimer(time.Millisecond)
	)
	for {
		timer.Reset(time.Millisecond)

		select {
		case <-deps.CancelToken.Done():
			ticker.Stop()
			return
		case currentTick := <-ticker.C:
			if len(packetBuffer) > 0 {
				currentTime, err := deps.FallbackTime.Get()
				if err != nil {
					continue
				}

				deps.Health.SetUpdatedAt(currentTime)
				deps.Health.SetReceived(deps.Health.GetReceived() + 1)

				var (
					z_axis_count []int32
					e_axis_count []int32
					n_axis_count []int32
				)
				for _, packet := range packetBuffer {
					z_axis_count = append(z_axis_count, packet.Z_Axis[:]...)
					e_axis_count = append(e_axis_count, packet.E_Axis[:]...)
					n_axis_count = append(n_axis_count, packet.N_Axis[:]...)
				}

				sampleRate := len(packetBuffer) * LEGACY_PACKET_CHANNEL_SIZE
				deps.Health.SetSampleRate(sampleRate)
				finalPacket := ExplorerData{
					SampleRate: sampleRate,
					Z_Axis:     z_axis_count,
					E_Axis:     e_axis_count,
					N_Axis:     n_axis_count,
					Timestamp:  currentTime.UTC().Add(-time.Second).UnixMilli(),
				}
				deps.messageBus.Publish("explorer", &finalPacket)
				packetBuffer = []legacyPacket{}

				ticker.Reset(calcDuration(currentTick, time.Second))
			}
		case <-timer.C:
			dat, err := fifoBuffer.Peek(LEGACY_PACKET_FRAME_HEADER, recvSize)
			if err != nil {
				continue
			}

			// Read the packet data
			err = e.legacyPacket.decode(dat[len(LEGACY_PACKET_FRAME_HEADER):])
			if err != nil {
				e.logger.Warnf("failed to decode legacy packet: %v", err)
				deps.Health.SetErrors(deps.Health.GetErrors() + 1)
			} else {
				packetBuffer = append(packetBuffer, e.legacyPacket)
			}
		}
	}
}

func (e *ExplorerDriverImpl) handleReadMainlinePacket(deps *ExplorerDependency, fifoBuffer *fifo.Buffer) {
	recvSize := len(MAINLINE_PACKET_FRAME_HEADER) + e.mainlinePacket.length()

	// Read data from the transport continuously
	go func() {
		buf := make([]byte, recvSize/2)
		for {
			select {
			case <-deps.CancelToken.Done():
				e.logger.Infof("cancelling read data from transport")
				return
			default:
				n, err := deps.Transport.Read(buf, 100*time.Millisecond, false)
				if err != nil {
					e.logger.Errorf("failed to read data from transport: %v", err)
					continue
				}

				fifoBuffer.Write(buf[:n])
			}
		}
	}()

	// Read data from the FIFO buffer continuously
	var (
		packetBuffer = []mainlinePacket{}
		nextTick     = int64(0)
		timer        = time.NewTimer(time.Millisecond)
	)
	for {
		timer.Reset(time.Millisecond)

		select {
		case <-deps.CancelToken.Done():
			return
		case <-timer.C:
			dat, err := fifoBuffer.Peek(MAINLINE_PACKET_FRAME_HEADER, recvSize)
			if err != nil {
				continue
			}
			err = e.mainlinePacket.decode(dat[len(MAINLINE_PACKET_FRAME_HEADER):])
			if err != nil {
				e.logger.Warnf("failed to decode mainline packet: %v", err)
				deps.Health.SetErrors(deps.Health.GetErrors() + 1)
				continue
			}

			// Update the device ID, latitude, longitude, elevation
			switch e.mainlinePacket.VariableName {
			case "device_id":
				deps.Config.SetDeviceId(binary.LittleEndian.Uint32(e.mainlinePacket.VariableData[:]))
			case "latitude":
				latitude := math.Float32frombits(binary.LittleEndian.Uint32(e.mainlinePacket.VariableData[:]))
				if latitude >= -90 && latitude <= 90 {
					deps.Config.SetLatitude(float64(latitude))
				}
			case "longitude":
				longitude := math.Float32frombits(binary.LittleEndian.Uint32(e.mainlinePacket.VariableData[:]))
				if longitude >= -180 && longitude <= 180 {
					deps.Config.SetLongitude(float64(longitude))
				}
			case "elevation":
				elevation := math.Float32frombits(binary.LittleEndian.Uint32(e.mainlinePacket.VariableData[:]))
				if elevation >= 0 {
					deps.Config.SetElevation(float64(elevation))
				}
			}

			// Append the packet to the buffer
			if nextTick == 0 {
				nextTick = e.mainlinePacket.Timestamp
			} else {
				packetBuffer = append(packetBuffer, e.mainlinePacket)
			}

			if math.Abs(float64(e.mainlinePacket.Timestamp-nextTick)) <= EXPLORER_ALLOWED_JITTER_MS {
				// Update the next tick even if the buffer is empty
				nextTick = e.mainlinePacket.Timestamp + time.Second.Milliseconds()
				if len(packetBuffer) == 0 {
					continue
				}

				// Merge the packet buffer into a single packet
				var (
					z_axis_count []int32
					e_axis_count []int32
					n_axis_count []int32
				)
				for _, packet := range packetBuffer {
					z_axis_count = append(z_axis_count, packet.Z_axis[:]...)
					e_axis_count = append(e_axis_count, packet.E_axis[:]...)
					n_axis_count = append(n_axis_count, packet.N_axis[:]...)
				}

				// Publish the final packet
				sampleRate := len(packetBuffer) * MAINLINE_PACKET_CHANNEL_SIZE
				finalPacket := ExplorerData{
					SampleRate: sampleRate,
					Z_Axis:     z_axis_count,
					E_Axis:     e_axis_count,
					N_Axis:     n_axis_count,
					Timestamp:  e.mainlinePacket.Timestamp - time.Second.Milliseconds(),
				}
				deps.messageBus.Publish("explorer", &finalPacket)

				// Update the health status
				deps.Health.SetSampleRate(sampleRate)
				deps.Health.SetReceived(deps.Health.GetReceived() + 1)
				deps.Health.SetUpdatedAt(time.UnixMilli(e.mainlinePacket.Timestamp).UTC())

				packetBuffer = []mainlinePacket{}
			} else if e.mainlinePacket.Timestamp-nextTick > EXPLORER_ALLOWED_JITTER_MS {
				// Update the next tick, clear the buffer if the jitter exceeds the threshold
				nextTick = e.mainlinePacket.Timestamp + time.Second.Milliseconds()
				packetBuffer = []mainlinePacket{}
			}
		}
	}
}

func (e *ExplorerDriverImpl) readerDaemon(deps *ExplorerDependency) {
	fifoBuffer := fifo.New(65536)

	if deps.Config.GetLegacyMode() {
		e.handleReadLegacyPacket(deps, &fifoBuffer)
	} else {
		e.handleReadMainlinePacket(deps, &fifoBuffer)
	}
}

func (e *ExplorerDriverImpl) Init(deps *ExplorerDependency, logger ExplorerLogger) error {
	e.logger = logger

	currentTime, err := deps.FallbackTime.Get()
	if err != nil {
		return err
	}

	deps.Health.SetStartTime(currentTime)
	deps.subscribers = haxmap.New[string, ExplorerEventHandler]()
	deps.messageBus = messagebus.New(1024)
	deps.Config.SetDeviceId(math.MaxUint32)

	// Get device ID in EEPROM
	if !deps.Config.GetLegacyMode() {
		var (
			startTime   = time.Now()
			readTimeout = 5 * time.Second
		)
		for time.Since(startTime) <= readTimeout {
			ok, _ := deps.Transport.Filter(MAINLINE_PACKET_FRAME_HEADER, time.Second)
			if !ok {
				continue
			}
			headerBuf := make([]byte, e.mainlinePacket.length())
			_, err := deps.Transport.Read(headerBuf, time.Second, false)
			if err != nil {
				continue
			}
			err = e.mainlinePacket.decode(headerBuf)
			if err != nil {
				continue
			}
			if e.mainlinePacket.VariableName == "device_id" {
				deps.Config.SetDeviceId(binary.LittleEndian.Uint32(e.mainlinePacket.VariableData[:]))
				break
			}
		}
		if time.Since(startTime) > readTimeout {
			return errors.New("failed to get device ID, please check the device")
		}
	}

	go e.readerDaemon(deps)
	return nil
}

func (e *ExplorerDriverImpl) Subscribe(deps *ExplorerDependency, clientId string, handler ExplorerEventHandler) error {
	if _, ok := deps.subscribers.Get(clientId); ok {
		return errors.New("this client has already subscribed")
	}
	deps.subscribers.Set(clientId, handler)
	deps.messageBus.Subscribe("explorer", handler)
	return nil
}

func (e *ExplorerDriverImpl) Unsubscribe(deps *ExplorerDependency, clientId string) error {
	fn, ok := deps.subscribers.Get(clientId)
	if !ok {
		return errors.New("this client has not subscribed")
	}

	deps.subscribers.Del(clientId)
	return deps.messageBus.Unsubscribe("explorer", fn)
}

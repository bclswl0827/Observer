package seedlink

import (
	"net"
	"strconv"

	"github.com/anyshake/observer/feature"
	"github.com/anyshake/observer/utils/duration"
)

type DATA struct{}

// Callback of "DATA" command, implements SeedLinkCommandCallback interface
func (*DATA) Callback(sl *SeedLinkGlobal, cl *SeedLinkClient, options *feature.FeatureOptions, streamer SeedLinkStreamer, conn net.Conn, args ...string) error {
	switch len(args) {
	case 3:
		fallthrough
	case 2:
		fallthrough
	case 1:
		seq, err := strconv.ParseInt(args[0], 16, 64)
		if err != nil {
			conn.Write([]byte(RES_ERR))
			return err
		}
		cl.Sequence = seq + 1
		cl.StartTime, _ = duration.Timestamp(options.Status.System.Offset)
	default:
		_, err := conn.Write([]byte(RES_ERR))
		return err
	}
	_, err := conn.Write([]byte(RES_OK))
	return err
}

// Fallback of "DATA" command, implements SeedLinkCommandCallback interface
func (*DATA) Fallback(sl *SeedLinkGlobal, cl *SeedLinkClient, options *feature.FeatureOptions, conn net.Conn, args ...string) {
	conn.Close()
}

package miniseed

import (
	"os"
	"path/filepath"
	"strings"
	"time"
)

func (m *MiniSEED) handleList(basePath, stationCode, networkCode string, lifeCycle int) ([]miniSeedFileInfo, error) {
	var files []miniSeedFileInfo

	entries, err := os.ReadDir(basePath)
	if err != nil {
		return nil, err
	}

	for _, entry := range entries {
		if !entry.IsDir() && filepath.Ext(entry.Name()) == ".mseed" &&
			strings.Contains(entry.Name(), stationCode) &&
			strings.Contains(entry.Name(), networkCode) {

			info, err := entry.Info()
			if err != nil {
				return nil, err
			}

			fileSize := info.Size()
			if fileSize == 0 {
				continue
			}

			modTime := info.ModTime().UTC()
			fileTTL := -1
			if lifeCycle > 0 {
				fileTTL = lifeCycle - int(time.Since(modTime).Hours()/24)
			}

			files = append(files, miniSeedFileInfo{
				TTL:  fileTTL,
				Name: info.Name(),
				Time: modTime.UTC().UnixMilli(),
				Size: info.Size(),
			})
		}
	}

	return files, nil
}

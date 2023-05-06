package trace

type Trace struct{}

type Binding struct {
	Source string `form:"source" json:"source" xml:"source" binding:"required"`
}

type EarthquakeList struct {
	Verfied   bool    `json:"verfied"`
	Timestamp int64   `json:"timestamp"`
	Event     string  `json:"event"`
	Region    string  `json:"region"`
	Depth     float64 `json:"depth"`
	Latitude  float64 `json:"latitude"`
	Longitude float64 `json:"longitude"`
	Distance  float64 `json:"distance"`
	Magnitude float64 `json:"magnitude"`
	Estimated float64 `json:"estimated"`
}

type DataSource interface {
	Fetch() ([]byte, error)
	Property() (string, string)
	Parse([]byte) (map[string]interface{}, error)
	List(latitude, longitude float64) ([]EarthquakeList, error)
	Format(float64, float64, map[string]interface{}) ([]EarthquakeList, error)
}
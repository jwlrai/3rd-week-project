# Current Weather Status & the Forcast

This web application is created for the purpose of providing information about the current weather status and the weather forcast for the current location of the users. In this web application i have used two different api.

### For the detection of the users current location, city, region and country i have used http://ipinfo.io Api

####  ipinfo.io Api Details :
```
Url : http://ipinfo.io/?token={api_key},
Response Type : json
Example :

{
  "ip": "your current ip address",
  "hostname": "hostname",
  "city": "Current city name",
  "region": "Current region",
  "country": "Country Name",
  "loc": " Geo-location",
  "postal": "postal Code",
  "org": "Isp name"
}
```
### For the current weather status: temprature, air pollution and weather forcast i have used https://openweathermap.org Api

#### https://openweathermap.org Api Details for

#####  Current weather temperature
```
	Url : http://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={api_key}
	Response Type : json
	Example :

	{"coord":{"lon":139,"lat":35},
	"sys":{"country":"JP","sunrise":1369769524,"sunset":1369821049},
	"weather":[{"id":804,"main":"clouds","description":"overcast clouds","icon":"04n"}],
	"main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04},
	"wind":{"speed":7.31,"deg":187.002},
	"rain":{"3h":0},
	"clouds":{"all":92},
	"dt":1369824698,
	"id":1851632,
	"name":"Shuzenji",
	"cod":200}
```
#####  Current weather forcast
```	
	Url : http://api.openweathermap.org/data/2.5/forecast?lat={latitude}&lon={longitude}&appid={api_key}
	Response Type : json
	Example :

	"city":{"id":1851632,"name":"Shuzenji",
	"coord":{"lon":138.933334,"lat":34.966671},
	"country":"JP",
	"cod":"200",
	"message":0.0045,
	"cnt":38,
	"list":[{
        	"dt":1406106000,
        	"main":{
            		"temp":298.77,
            		"temp_min":298.77,
            		"temp_max":298.774,
            		"pressure":1005.93,
            		"sea_level":1018.18,
            		"grnd_level":1005.93,
            		"humidity":87,
            		"temp_kf":0.26},
        		"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],
        		"clouds":{"all":88},
        		"wind":{"speed":5.71,"deg":229.501},
        		"sys":{"pod":"d"},
        		"dt_txt":"2014-07-23 09:00:00"}
        ]}
```
#####  Current air-pollution
```
	Url : http://api.openweathermap.org/pollution/v1/co/{latitude},{longitude}/current.json?appid={api_key}
	Response Type : json
	Response Format

		#time => ISO 8601 timestamp
		#location=>object - location for which data is provided
			#latitude => float - latitude for returned data 
			#longitude=>  float - longitude for returned data
		#data=>  array of objects - carbon monoxide information
			#value=>  float - carbon monoxide volume mixing ratio 
			#pressure => float - atmospheric pressure at the point of measurement, hPa. Recommended for scientific use at pressure levels between 215 and 0.00464 hPa 
			#precision => float - measurement precision

```


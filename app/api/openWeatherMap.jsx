var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=37616f29cd04a674618efb6a255b0df6';

module.exports = {
  getTemp: function(location) {
    // Take plain-text string and encode to URL-friendly i.e. space to %20
    var encodedLocation = encodeURIComponent(location);

    // ES6 template string.  When using back-tick, you can inject variables directly into string using ${}
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    // axios uses promises
    return axios.get(requestUrl).then(function(res) {
      console.log("location", location);
      console.log("encoded location", encodedLocation);
      console.log("reqquestUrl", requestUrl);
      console.log(res);
      // Extra error checking because openWeatherMap API returns funky responses
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function() {
      throw new Error('Unable to fetch weather.');
      // throw new Error(res.data.message);
    });
  }
}

var axios =  require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=e93c9b1819b9b592322f0b65a4da5e40';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(response) {
      if (response.data.count == 0) {
        throw new Error(response.data.message);
      } else {
        return response.data.list[0].main.temp;
      }
    }, function(response) {
      throw new Error(response.data.message);
    });
  }
}

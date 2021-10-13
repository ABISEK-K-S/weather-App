import { WEATHER } from "./../types/weatherType";
import axios from "axios";

export const updateWeatherData = (data) => {
  return {
    type: WEATHER.UPDATE_WEATHER_INFO,
    data: data
  };
};

export const getLocationData = (data) => async (dispatch) => {
  var requestData = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/weather",
    params: {
      q: data
    },
    headers: {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "78dd49b4a3msh0007a845e1bcdcdp1053f3jsnf8fe2065abcb"
    }
  };
  axios
    .request(requestData)
    .then(function (response) {
      let weatherReports = {
        name: response.data.name,
        temp: response.data.main.temp,
        humidity: response.data.main.humidity,
        pressure: response.data.main.pressure
      };
      dispatch(updateWeatherData(weatherReports));
    })
    .catch(function (error) {
      console.error(error);
    });
};

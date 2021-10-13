import { WEATHER } from "./../types/weatherType";

const INITIAL_STATE = {
  weatherInfo: ""
};

const WeatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WEATHER.UPDATE_WEATHER_INFO:
      return {
        ...state,
        weatherInfo: action.data
      };

    default:
      return state;
  }
};

export default WeatherReducer;

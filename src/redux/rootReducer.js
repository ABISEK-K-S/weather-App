import { combineReducers } from "redux";

import WeatherReducer from "./reducers/weatherReducer";

const rootReducer = combineReducers({
  WeatherReducer
});

export default rootReducer;

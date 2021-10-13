import React, { useState } from "react";
import { getLocationData } from "../../redux/actions/weatherAction";
import { connect } from "react-redux";

function Weather(props) {
  let state = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"
  ];
  const initialData = () => {
    props.getLocationData(state[0]);
    return state[0];
  };
  const [selectedState, setState] = useState(initialData);
  const handleChange = () => {
    const value = document.getElementById("weather").value;
    setState(value);
    props.getLocationData(value);
  };
  const time = state.map((key) => {
    return <option>{key}</option>;
  });
  return (
    <div className="row row-mobile  ">
      Weather
      <div className="shadow p-3 mb-5 bg-white rounded">
        <form className="row justify-content-center ">
          <span className=" row justify-content-center input">
            Select state
          </span>
          <select
            className="w-100 select_state"
            id="weather"
            value={selectedState}
            onChange={(e) => handleChange(e)}
          >
            {time}
          </select>
        </form>

        <div class="row justify-content-center  mb-5 mt-3 rounded weather_result">
          <div class="col-3 text-center">
            Temperature
            <div className="w-100 measurements">
              {props.WeatherInfo.weatherInfo.temp} *C
            </div>
          </div>
          <div class="col-3 text-center">
            Humidity
            <div className="w-100 measurements">
              {props.WeatherInfo.weatherInfo.humidity}
            </div>
          </div>
          <div class="col-3 text-center">
            Pressure
            <div className="w-100 measurements">
              {props.WeatherInfo.weatherInfo.pressure}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    WeatherInfo: state.WeatherReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLocationData: (data) => dispatch(getLocationData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

import React, { useEffect, useState } from "react";
import getWeather from "../api-calls/getWeather";
import WeatherIcon from "./WeatherIcon";
import WeatherInfo from "./WeatherInfo";
import WeatherStatement from "./WeatherStatement";

const WeatherWrapper = ({ location }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    getWeather(location).then((weatherData) => {
      setWeather(weatherData["current_weather"]);
    });
  }, [location]);

  return (
    <div className="weather-wrapper">
      <WeatherStatement weatherData={weather} location={location} />
      <WeatherIcon weatherData={weather} />
      <WeatherInfo weatherData={weather} />
    </div>
  );
};

export default WeatherWrapper;

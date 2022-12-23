import React from "react";

const WeatherIcon = ({ weatherData }) => {
  const getWeatherEmoji = ({ weathercode }) => {
    const emojis = {
      sunny: "🌞",
      overCast: "🌥",
      lightRain: "🌦",
      heavyRain: "🌧",
      snow: "⛄",
      fog: "🌁",
      thunder: "🌩",
    };
    if (weathercode > 94) {
      return emojis.thunder;
    } else if (weathercode > 65) {
      return emojis.snow;
    } else if (weathercode > 61) {
      return emojis.heavyRain;
    } else if (weathercode > 50) {
      return emojis.lightRain;
    } else if (weathercode > 44) {
      return emojis.fog;
    } else if (weathercode > 2) {
      return emojis.overCast;
    } else {
      return emojis.sunny;
    }
  };

  return <p className="weather-icon">{getWeatherEmoji(weatherData)}</p>;
};

export default WeatherIcon;

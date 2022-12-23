import { useState } from "react";
import getCity from "../api-calls/getCity";

const WeatherStatement = ({ weatherData, location }) => {
  const [city, setCity] = useState("");
  const getStatement = ({ weathercode }) => {
    const statements = {
      sunny: "sunny innit.",
      overCast: "meh...",
      cold: "bloody baltic...",
      lightRain: "raining again...",
      heavyRain: "pi**in it down...",
      snow: "f*kin freezin...",
      fog: "...wait where have you gone?",
      thunder: "mad thundery bro.",
    };

    if (weathercode > 94) {
      return statements.thunder;
    } else if (weathercode > 65) {
      return statements.snow;
    } else if (weathercode > 61) {
      return statements.heavyRain;
    } else if (weathercode > 50) {
      return statements.lightRain;
    } else if (weathercode > 44) {
      return statements.fog;
    } else if (weathercode > 2) {
      return statements.overCast;
    } else {
      return statements.sunny;
    }
  };

  const locationStr = () => {
    return getCity(location.latitude, location.longitude).then((res) => {
      setCity(res.city);
    });
  };

  locationStr();

  return (
    <p className="statement">
      The weather in {city}, is {getStatement(weatherData)}
    </p>
  );
};

export default WeatherStatement;

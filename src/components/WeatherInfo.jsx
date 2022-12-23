const WeatherInfo = ({ weatherData }) => {
  return (
    <ul className="list">
      <li>Temperature: {weatherData.temperature}°C</li>
      <li>Windspeed: {weatherData.windspeed} kph</li>
    </ul>
  );
};

export default WeatherInfo;

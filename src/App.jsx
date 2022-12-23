import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import LocationWrapper from "./components/LocationWrapper";
import WeatherWrapper from "./components/WeatherWrapper";

function App() {
  const [location, setLocation] = useState();
  return (
    <div className="App">
      <Header />
      <LocationWrapper setLocation={setLocation} />
      {!location ? null : <WeatherWrapper location={location} />}
    </div>
  );
}

export default App;

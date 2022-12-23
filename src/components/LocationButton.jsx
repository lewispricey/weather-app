import React from "react";

const LocationButton = ({ setLocation }) => {
  const handleClick = () => {
    navigator.geolocation.getCurrentPosition((location) => {
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    });
  };

  return (
    <button className="button" onClick={handleClick}>
      Get My Location
    </button>
  );
};

export default LocationButton;

import { useEffect, useState } from "react";
import Weather from "./Weather";
import weatherFetch from "./../utils/weatherFetch";
import CoordinatesDisplay from "./CoordinatesDisplay";
import postData from "./../utils/postData";

const Geolocation = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLocation({ lat: lat, lon: lon });
        setWeatherData(await weatherFetch(lat, lon));
      });
    } else {
      console.log("geolocation not available");
    }
  }, []);

  const handleClick = ({ lat, lon }, { weather, air }) => {
    postData(lat, lon, weather, air);
  };

  return (
    <div className="geolocation">
      <CoordinatesDisplay location={location} />
      <button onClick={() => handleClick(location, weatherData)}>
        Check In
      </button>
      <Weather weatherData={weatherData} />
    </div>
  );
};

export default Geolocation;

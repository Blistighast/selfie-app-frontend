import { useEffect, useState } from "react";

const Geolocation = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLocation({ lat: lat, lon: lon });
      });
    } else {
      console.log("geolocation not available");
    }
  }, []);

  const postData = async (lat, lon) => {
    const data = { lat, lon };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const resp = await fetch("http://localhost:4000/api", options);
    const json = await resp.json();
    return json;
  };

  const handleClick = async ({ lat, lon }) => {
    postData(lat, lon);
  };

  return (
    <div className="geolocation">
      <p className="latitude"> Latitude: {location.lat}</p>
      <p className="longitude"> Longitude: {location.lon}</p>
      <button onClick={() => handleClick(location)}>Post to Database</button>
    </div>
  );
};

export default Geolocation;

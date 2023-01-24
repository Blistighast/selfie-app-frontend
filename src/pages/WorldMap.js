import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect } from "react";
import { useState } from "react";
import kelvinToFahr from "./../utils/kelvinConverter";

const WorldMap = () => {
  const [locationsList, setLocationsList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch("http://localhost:4000/api");
      const data = await resp.json();
      setLocationsList(data);
    };

    getData();
  }, []);

  return (
    <div id="map" className="worldmap">
      <div>
        <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locationsList.map((location) => (
            <Marker position={[location.lat, location.lon]} key={location._id}>
              <Popup>
                <p>
                  {kelvinToFahr(location.weather.main.temp).toFixed(1)}
                  {"\u00b0"}F <br /> at time of check in
                </p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default WorldMap;

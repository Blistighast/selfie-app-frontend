import { useEffect, useState } from "react";
import server_url from "./../utils/server_url";

const LocationsList = () => {
  const [locationsList, setLocationsList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(`${server_url}/api`);
      // const resp = await fetch("http://localhost:4000/api");
      const data = await resp.json();
      setLocationsList(data);
    };

    getData();
  }, []);

  return (
    <div className="locationsList">
      <div>
        {locationsList.map((location) => {
          const date = new Date(location.timeStamp);
          return (
            <div key={location._id} className="location">
              <p>Latitude {location.lat}</p>
              <p>Longitude {location.lon}</p>
              <p>{date.toLocaleString()}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LocationsList;

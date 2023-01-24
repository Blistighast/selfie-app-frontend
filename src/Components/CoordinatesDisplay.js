const CoordinatesDisplay = ({ location }) => {
  return (
    <div>
      {location.lat ? (
        <div>
          <p className="latitude"> Latitude: {location.lat.toFixed(2)}</p>
          <p className="longitude"> Longitude: {location.lon.toFixed(2)}</p>
        </div>
      ) : null}
    </div>
  );
};

export default CoordinatesDisplay;

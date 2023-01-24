import kelvinToFahr from "./../utils/kelvinConverter";

const Weather = ({ weatherData }) => {
  return (
    <div className="weather-layout">
      {weatherData ? (
        <div className="weather">
          <p>
            The weather here is{" "}
            <span>{weatherData.weather.weather[0].description}</span> with a
            temp of{" "}
            <span>
              {kelvinToFahr(weatherData.weather.main.temp).toFixed(1)}
              {"\u00b0"}F
            </span>{" "}
            and with a wind speed of{" "}
            <span>{weatherData.weather.wind.speed}mph</span>
          </p>
          {weatherData.air.results[0] ? (
            <p className="airQuality">
              The concentration of particulates is{" "}
              <span>
                {weatherData.air.results[0].measurements[0].value}{" "}
                {weatherData.air.results[0].measurements[0].unit}
              </span>
            </p>
          ) : (
            <div>There are no particulate sensors around this location</div>
          )}
        </div>
      ) : (
        <div>getting location...</div>
      )}
    </div>
  );
};

export default Weather;

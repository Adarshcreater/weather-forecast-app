import React from 'react';

const CurrentWeather = ({ weather }) => {
  const { main, weather: weatherDetails, name } = weather;
  const weatherIcon = `wi wi-owm-${weatherDetails[0].id}`;

  return (
    <div className="current-weather">
      <h2>{name}</h2>
      <div className="icon">
        <i className={weatherIcon}></i>
      </div>
      <p>{weatherDetails[0].description}</p>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Pressure: {main.pressure} hPa</p>
    </div>
  );
};

export default CurrentWeather;

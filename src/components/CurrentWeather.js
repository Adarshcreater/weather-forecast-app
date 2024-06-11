// src/components/CurrentWeather.js
import React from 'react';

const CurrentWeather = ({ data }) => {
  return (
    <div className="current-weather">
      <h2>{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <p>{Math.round(data.main.temp - 273.15)}°C</p>
    </div>
  );
};

export default CurrentWeather;

// src/components/Forecast.js
import React from 'react';

const Forecast = ({ data }) => {
  if (!data || !data.list) {
    return <p>Loading forecast data...</p>;
  }

  // Group weather data by date
  const groupedByDate = data.list.reduce((acc, forecast) => {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(forecast);
    return acc;
  }, {});

  return (
    <div className="forecast-container">
      {Object.keys(groupedByDate).map((date, index) => (
        <div className="forecast-day" key={index}>
          <p>{date}</p>
          {groupedByDate[date].map((forecast, idx) => (
            <div key={idx}>
              <p>{forecast.weather[0].description}</p>
              <p>{Math.round(forecast.main.temp - 273.15)}°C</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Forecast;

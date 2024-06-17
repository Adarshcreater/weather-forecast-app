import React from 'react';

const Forecast = ({ forecast }) => {
  const forecastList = forecast.list.filter((item, index) => index % 8 === 0);

  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-container">
        {forecastList.map((day, index) => {
          const date = new Date(day.dt * 1000).toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
          });
          const weatherIcon = `wi wi-owm-${day.weather[0].id}`;
          return (
            <div className="forecast-day" key={index}>
              <h4>{date}</h4>
              <div className="icon">
                <i className={weatherIcon}></i>
              </div>
              <p>{day.weather[0].description}</p>
              <p>Temp: {day.main.temp}°C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;

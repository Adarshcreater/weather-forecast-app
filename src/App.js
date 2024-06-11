// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import SearchBar from './components/SearchBar'; 
import Loading from './components/Loading';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState('Mumbai');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const currentWeatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e670e7958da160c425a25bbb72601997`
        );
        setWeatherData(currentWeatherResponse.data);

        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e670e7958da160c425a25bbb72601997`
        );
        setForecastData(forecastResponse.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, [city]);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div className="app">
      <h1>Weather Forecast</h1>
      <SearchBar onSearch={handleSearch} /> {/* Make sure SearchBar component is rendered */}
      {loading ? (
        <Loading />
      ) : (
        <>
          {weatherData && <CurrentWeather data={weatherData} />}
          {forecastData && <Forecast data={forecastData} />}
        </>
      )}
    </div>
  );
};

export default App;

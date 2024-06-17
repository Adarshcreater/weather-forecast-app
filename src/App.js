import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState('Mumbai');

  const fetchWeather = async (city) => {
    try {
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e670e7958da160c425a25bbb72601997&units=metric`);
      setWeather(weatherResponse.data);
      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e670e7958da160c425a25bbb72601997&units=metric`);
      setForecast(forecastResponse.data);
    } catch (error) {
      console.error("Error fetching the weather data", error);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <div>
      <h1>Weather Forecast</h1>
      <SearchBar setCity={setCity} />
      {weather && <CurrentWeather weather={weather} />}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;

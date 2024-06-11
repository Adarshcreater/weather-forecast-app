// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState('');

  const handleChange = (e) => {
    setSearchCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchCity);
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        value={searchCity}
        onChange={handleChange}
        placeholder="Enter city name"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

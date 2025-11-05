import React, { useEffect, useState } from "react";
import './weather.css'
export default function () {
  const API_KEY = "eaa6c27f02bcb3f304a9c5b2621b014e";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [city, setCity] = useState(null);

  async function weatheApi(BASE_URL, API_KEY, search) {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}?q=${search}&appid=${API_KEY}`);
      const result = await response.json();
      if (result && result.weather) {
        setLoading(false);
        setCity(result);
      } else{
        setError('City is not Found!!')
    }

    setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("us-en", {
      weekday: "long",
      month: "long",
      day: 'numeric',
      year: "numeric",
    });
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  function handleSubmit() {
    if(search.trim() === '') return
    weatheApi(BASE_URL, API_KEY, search);
    setSearch('')
  }

  useEffect(() => {
    weatheApi(BASE_URL, API_KEY, "Nigeria");
  }, []);

  return (
    <div className="weather-container">
      <div className="search-container">
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={search}
          placeholder="Search for any country..."
        />

        <button className="search-btn" onClick={handleSubmit} type="submit">
          search
        </button>
      </div>

    
      {loading && <div className="loading">Loading Please Wait !!!</div>}

      {error ? <div className="error">This data cannot be fetched!!!</div>: city && city.weather ? (
        <div className="data-container">
          <h2>
            {city.name}, <span>{city.sys.country}</span>
          </h2>
          <div className="date">{getCurrentDate()}</div>
            <h4>{city.main.temp}</h4>
            <p className="description">
                {city.weather[0].description}
            </p>
            <div className="weather-details">
                <p><span>Wind Speed :</span>{city.wind.speed}</p>
                <p><span>Humidity :</span>{city.main.humidity}</p>
            </div>
        </div>
      ) : null}
    </div>
  );
}

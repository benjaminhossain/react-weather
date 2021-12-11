import React, { useState } from "react";
const api = {
  key: "c9ad0afc9e2a31e16f3c6f0150e6c341",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [cityName, setCityName] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${cityName}&units=imperial&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setCityName('');
          console.log(result);
        });
    }
  }
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for a city..."
            onChange={e => setCityName(e.target.value)}
            value={cityName}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">
                <div className="location">{weather.name}, {weather.sys.country}</div>
              </div>
              <div className="weather">
                <div className="temp">
                  {Math.round(weather.main.temp)}F
                </div>
                <div className="feels-like">
                  Feels like {Math.round(weather.main.feels_like)}F
                </div>
                <div className="condition">{weather.weather[0].main}</div>
              </div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;

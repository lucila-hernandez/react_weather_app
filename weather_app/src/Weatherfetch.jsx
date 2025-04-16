import { useState, useEffect } from 'react';
import DisplayWeather from './Displayweather';

function Weatherfetch({ zipCode, unit }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (zipCode.length === 5) {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=${unit}&appid=${apiKey}`;

        try {
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }

          const data = await response.json();
          setWeatherData(data);
        } catch (error) {
          setError(error.message);
        }
      }
    };

    fetchWeather();
  }, [zipCode, unit]);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°</p>
        </div>
      )}
    </div>
  );
}

export default Weatherfetch;

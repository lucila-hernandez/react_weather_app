import { useState, useEffect } from 'react';
import ZipCodeForm from './Zipcodeform';  
import UnitSelect from './Unitselect';    
import DisplayWeather from './Displayweather';
import './app.css'

function App() {
  const [zipCode, setZipCode] = useState('');
  const [unit, setUnit] = useState('metric'); 
  const [weatherData, setWeatherData] = useState(null); 
  const [error, setError] = useState(null); 

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

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
          setError(null);  
        } catch (error) {
          setError(error.message); 
        }
      }
    };

    fetchWeather(); 
  }, [zipCode, unit]);

  return (
    <div className="app-container">
      <h1>Weather App</h1>
      
      <ZipCodeForm zipCode={zipCode} setZipCode={setZipCode} /> 
      
      <UnitSelect unit={unit} onUnitChange={handleUnitChange} /> 

      {error && <p style={{ color: 'red' }}>Error: {error}</p>} 

      {weatherData && !error && (  
        <DisplayWeather weatherData={weatherData} error={error} />
      )}

      {!zipCode && !weatherData && !error && <p>Please enter a zip code to get the weather.</p>}
    </div>
  );
}

export default App;

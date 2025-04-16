function DisplayWeather({ weatherData, error }) {
  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  if (weatherData && weatherData.cod === 200) {
    return (
      <div>
        <h2>Weather in {weatherData.name}</h2>
        <p>Temperature: {weatherData.main.temp}°</p>
        <p>Weather: {weatherData.weather[0].description}</p>
      </div>
    );
  }

}

export default DisplayWeather;

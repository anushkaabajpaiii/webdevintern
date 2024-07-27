const apiUrl = 'https://api.weatherapi.com/v1/'; // Define the API URL
const apiKey = '74c4546f69b94e02a8a193957241407'; // Define the API key

document.getElementById('search-btn').addEventListener('click', async () => {
  try {
    const city = document.getElementById('city').value;
    console.log(`City input: ${city}`);
    const response = await fetch(`${apiUrl}current.json?q=${city}&key=${apiKey}`);
    const data = await response.json();
    console.log(`API Response: ${JSON.stringify(data)}`);

    if (data.error) {
      alert("City not found!");
      return;
    }

    // Parse the data correctly according to the API documentation
    const temp_c = data.current.temp_c;
    console.log(`Temperature: ${temp_c}°C`);
    document.getElementById('city-name').textContent = data.location.name;
    document.getElementById('weather-desc').textContent = data.current.condition.text;
    document.getElementById('temp').textContent = `Temperature: ${temp_c.toFixed(2)}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.current.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.current.wind_kph} km/h`;
  } catch (error) {
    console.error(error);
    alert("Error fetching weather data!");
  }
});
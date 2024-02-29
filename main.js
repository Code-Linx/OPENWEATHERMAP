async function getWeather() {
  const cityInput = document.getElementById("cityInput");
  const weatherInfo = document.getElementById("weatherInfo");

  if (cityInput.value.trim() === "") {
    alert("Please enter a city.");
    return;
  }

  try {
    const apiKey = "5beb24a113b39e7ea7727fa620ffddce";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
    const description = data.weather[0].description;

    weatherInfo.innerHTML = `<p>${cityInput.value}: ${temperature}°C, ${description}</p>`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    weatherInfo.innerHTML =
      "<p>Failed to fetch weather data. Please try again.</p>";
  }
}

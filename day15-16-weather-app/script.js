/* ============================================
   Days 15-16: Weather App
   Fetching live data with the fetch() API
   Uses Open-Meteo — free, no API key required
   ============================================ */

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const statusEl = document.getElementById("status");
const weatherCard = document.getElementById("weatherCard");

// Weather code -> description + emoji (from Open-Meteo docs)
const WEATHER_CODES = {
  0: ["Clear sky", "☀️"],
  1: ["Mainly clear", "🌤️"],
  2: ["Partly cloudy", "⛅"],
  3: ["Overcast", "☁️"],
  45: ["Fog", "🌫️"],
  48: ["Rime fog", "🌫️"],
  51: ["Light drizzle", "🌦️"],
  53: ["Drizzle", "🌦️"],
  55: ["Heavy drizzle", "🌧️"],
  61: ["Light rain", "🌦️"],
  63: ["Rain", "🌧️"],
  65: ["Heavy rain", "🌧️"],
  71: ["Light snow", "🌨️"],
  73: ["Snow", "🌨️"],
  75: ["Heavy snow", "❄️"],
  80: ["Rain showers", "🌦️"],
  81: ["Rain showers", "🌧️"],
  82: ["Violent showers", "⛈️"],
  95: ["Thunderstorm", "⛈️"],
  96: ["Storm with hail", "⛈️"],
  99: ["Storm with hail", "⛈️"],
};

// Main function: city name -> coordinates -> weather
async function getWeather(city) {
  try {
    setStatus("Loading...");
    weatherCard.classList.add("hidden");

    // STEP 1: Geocoding API — convert city name to lat/lon
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
    const geoRes = await fetch(geoUrl);

    // Error handling: network / server problems
    if (!geoRes.ok) throw new Error("Geocoding request failed");

    const geoData = await geoRes.json();

    // Error handling: city not found
    if (!geoData.results || geoData.results.length === 0) {
      throw new Error(`City "${city}" not found. Check the spelling.`);
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // STEP 2: Weather API — fetch current conditions for those coordinates
    const weatherUrl =
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
      `&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code`;
    const weatherRes = await fetch(weatherUrl);

    if (!weatherRes.ok) throw new Error("Weather request failed");

    const weatherData = await weatherRes.json();

    displayWeather(name, country, weatherData.current);
    setStatus("");
  } catch (error) {
    // All errors end up here
    console.error(error);
    setStatus(error.message, true);
  }
}

// Update the DOM with fetched data
function displayWeather(name, country, current) {
  const [description, icon] = WEATHER_CODES[current.weather_code] || ["Unknown", "❓"];

  document.getElementById("cityName").textContent = `${name}, ${country}`;
  document.getElementById("condition").textContent = description;
  document.getElementById("temperature").textContent = `${Math.round(current.temperature_2m)}°C`;
  document.getElementById("weatherIcon").textContent = icon;
  document.getElementById("feelsLike").textContent = `${Math.round(current.apparent_temperature)}°C`;
  document.getElementById("humidity").textContent = `${current.relative_humidity_2m}%`;
  document.getElementById("wind").textContent = `${Math.round(current.wind_speed_10m)} km/h`;

  weatherCard.classList.remove("hidden");
}

function setStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.classList.toggle("error", isError);
}

// --- Event listeners ---

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city === "") {
    setStatus("Please enter a city name.", true);
    return;
  }
  getWeather(city);
});

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") searchBtn.click();
});

// Load a default city on page open
getWeather("Lahore");

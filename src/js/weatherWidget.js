const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');

const getLocalStorage = (city) => {
  const cityFromLS = localStorage.getItem('city');
  if (cityFromLS) {
    city.value = cityFromLS;
  } else {
    city.value = 'Minsk';
    localStorage.setItem('city', city.value);
  }
};

const setLocalStorage = (city) => {
  localStorage.setItem('city', city.value);
};

export async function getWeather() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&APPID=d191e6c3f127212f0c950537a4382b4d&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
}

const setCity = (event) => {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
};

window.addEventListener('DOMContentLoaded', () => {
  getLocalStorage(city);
});

window.addEventListener('beforeunload', () => {
  setLocalStorage(city);
});

city.addEventListener('change', getWeather);
city.addEventListener('keypress', setCity);
window.addEventListener('load', getWeather);

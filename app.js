const apiKey = 'a615e18d830608d3c0ad1c10d0ebb505';
const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
const main = document.querySelector('main');
const form = document.querySelector('form');
const search = document.querySelector('#search');

async function getWeatherByLocation(city) {
  const resp = await fetch(url(city), {
    origin: 'cors'
  });
  const respData = await resp.json();
  AddWeatherToPage(respData);
};

function AddWeatherToPage(data) {
  const temp = KtoC(data.main.temp);

  const weather = document.createElement('div');
  weather.classList.add('weather');
  weather.innerHTML = `
  <h2><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />${temp}°C</h2>
  <p>in ${search.value}</p>
  <small>${data.weather[0].main}</small>
  `;
  main.innerHTML = '';
  main.appendChild(weather);
}

function KtoC(K) {
  return Math.floor(K - 273.15);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = search.value;

  if (city) {
    getWeatherByLocation(city);
  }
})

'http://openweathermap.org/img/w/${data.weather[0].icon}.png'
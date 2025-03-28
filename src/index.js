import './styles.css';

const time = document.getElementById('time');
const date = document.getElementById('date');
const content = document.getElementById('content');
let now = new Date();
date.innerHTML = now.toDateString();

setInterval(() => {
  let now = new Date();
  date.innerHTML = now.toDateString();
  time.innerHTML = now.toLocaleTimeString().trim();
}, 1000);

const btn = document.getElementById('submit');

btn.addEventListener('click', function (e) {
  let city = document.getElementById('input').value;
  e.preventDefault();
  console.log(city);
  if (!city) {
    console.log('Enter the City Name');
  } else {
    getData(city);
    city = '';
  }
});

async function getData(city) {
  const url = `https://api.weatherstack.com/current?access_key=b7b20a549137e7c63097fb4a5f1bee88&query=${city}`;
  console.log(url);
  const options = {
    method: 'GET',
  };
  try {
    const data = await fetch(url, options);
    const res = await data.json();
    if (res.success === false) {
      console.log('Invaid City Name');
      alert('Invalid City Name');
    } else {
      const windthHumidity = res.current.humidity;
      console.log(windthHumidity);

      content.innerHTML = '';
      content.innerHTML = `<div id="details" class="w-100 ">

                  <h1>${res.location.name}</h1>
                  <h2>${res.location.region}</h2>
                  <h4>Temperature: ${res.current.temperature} °C</h4>
                    <h4>Wind speed: ${res.current.wind_speed} Km/hr</h4>
                    <div class="d-flex flex-row align-items-center ">
                    <h4 class="me-3">Humidity</h4>
                      <div class="progress flex-grow-1 " role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-warning border-0" style="width: ${windthHumidity}%"></div>
                      </div>
                    </div>
                    <h4>UV index : ${res.current.uv_index}</h4>
                  </div>`;
      console.log(res);
    }
  } catch (error) {
    console.error('error in fetching');
  }
}

import './styles.css';

const time = document.getElementById('time');
const date = document.getElementById('date');
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
    } else {
      console.log(res);
    }
  } catch (error) {
    console.error('error in fetching');
  }
}

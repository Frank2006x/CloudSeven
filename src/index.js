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

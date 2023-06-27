import '/src/css/style.css';
import '/src/css/owfont-regular.css';
import { showTime, showDate } from './clockCalendar.js';
import { showGreeting, setLocalStorage, getLocalStorage } from './greeting.js';

const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');

if (time) {
  showTime(time);
}

if (date) {
  showDate(date);
}

if (greeting) {
  showGreeting(greeting);
}

window.addEventListener('beforeunload', () => {
  setLocalStorage(name);
});
window.addEventListener('load', () => {
  getLocalStorage(name);
});

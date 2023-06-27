import '/src/css/style.css';
import '/src/css/owfont-regular.css';
import { showTime, showDate } from './clockCalendar.js';
import { showGreeting } from './greeting.js';
import { setBg } from './imageSlider.js';

const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');

if (time) {
  showTime(time);
}

if (date) {
  showDate(date);
}

if (greeting) {
  showGreeting(greeting);
}

setBg();

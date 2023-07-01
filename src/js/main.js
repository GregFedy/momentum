import '/src/css/owfont-regular.css';
import '/src/css/style.css';
import { showTime, showDate } from './clockCalendar.js';
import { showGreeting } from './greeting.js';
import { setBg } from './imageSlider.js';
import './weatherWidget.js';
import './quoteOfTheDayWidget.js';

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

import '/src/css/style.css';
import '/src/css/owfont-regular.css';
import { showTime, showDate } from './clockCalendar.js';

const time = document.querySelector('.time');
const date = document.querySelector('.date');

if (time) {
  showTime(time);
}

if (date) {
  showDate(date);
}

import { getTimeOfDay } from './greeting.js';

let randomNum;
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};
getRandomIntInclusive(1, 20);

export const setBg = () => {
  const timeOfDay = getTimeOfDay();
  const bgNum = String(randomNum).padStart(2, 0);
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.addEventListener('load', () => {
    document.body.style.backgroundImage = 'url(' + img.src + ')';
  });
};

window.addEventListener('DOMContentLoaded', function () {
  document.body.style.backgroundImage = 'none';
});

const getSlideNext = () => {
  if (randomNum < 20) {
    randomNum += 1;
  } else {
    randomNum = 1;
  }
  setBg();
};

const getSlidePrev = () => {
  if (randomNum > 1) {
    randomNum -= 1;
  } else {
    randomNum = 20;
  }
  setBg();
};

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

export const getTimeOfDay = () => {
  const hour = new Date().getHours();

  if (hour >= 0 && hour < 6) {
    return 'night';
  } else if (hour < 12) {
    return 'morning';
  } else if (hour < 18) {
    return 'afternoon';
  } else {
    return 'evening';
  }
};

export const showGreeting = (element) => {
  const date = new Date();
  const millisecondsUntilNextSecond = 1000 - date.getMilliseconds();
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay}`;
  element.textContent = greetingText;
  setTimeout(() => showGreeting(element), millisecondsUntilNextSecond);
};

const setLocalStorage = (name) => {
  localStorage.setItem('name', name.value);
};

const getLocalStorage = (name) => {
  const nameFromLS = localStorage.getItem('name');

  if (nameFromLS !== null) {
    name.value = nameFromLS;
  }
};

const name = document.querySelector('.name');

window.addEventListener('beforeunload', () => {
  setLocalStorage(name);
});

window.addEventListener('load', () => {
  getLocalStorage(name);
});

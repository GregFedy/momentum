const updateElement = (el, format) => {
  const date = new Date();
  const millisecondsUntilNextSecond = 1000 - date.getMilliseconds();
  const value = date.toLocaleString('en-US', format);
  el.textContent = value;
  setTimeout(() => updateElement(el, format), millisecondsUntilNextSecond);
};

const showTime = (el) => {
  const format = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };
  updateElement(el, format);
};

const showDate = (el) => {
  const format = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  updateElement(el, format);
};

export { showTime, showDate };

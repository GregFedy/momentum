// Constants
const changeQuoteBtn = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

// Functions
export const getQuotes = async () => {
  const apiKey = import.meta.env.VITE_API_KEY_QUOTES;
  const url =
    'https://famous-quotes4.p.rapidapi.com/random?category=finance&count=1';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
    },
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`Ошибка загрузки: ${res.statusText}`);
    }
    const data = await res.json();
    quote.textContent = data[0]?.text;
    author.textContent = data[0]?.author;
  } catch (err) {
    console.error('Произошла ошибка:', err);
  }
};

// Event listeners
window.addEventListener('DOMContentLoaded', getQuotes);
changeQuoteBtn.addEventListener('click', getQuotes);

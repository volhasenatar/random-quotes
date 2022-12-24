import quoteArray from './quoteArray';

function generateRandomQuote() {
  const quote = document.querySelector('h1');

  let randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
  quote.textContent = randomQuote;
}

export default generateRandomQuote;

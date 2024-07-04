const getRandomQuote = require('./index');

(async () => {
  const quote = await getRandomQuote();
  if (quote) {
    console.log('Quote:', quote.quoteText);
    console.log('Author:', quote.quoteAuthor);
  } else {
    console.log('Failed to fetch a quote.');
  }
})();
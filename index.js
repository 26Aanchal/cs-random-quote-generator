const axios = require('axios');

// Function to fetch a random quote from an API
const getRandomQuote = async () => {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    const { content, author } = response.data;

    return {
      quoteText: content,
      quoteAuthor: author
    };
  } catch (error) {
    console.error('Error fetching quote:', error.message);
    return null;
  }
};

// Exporting the function for use in other modules
module.exports = getRandomQuote;
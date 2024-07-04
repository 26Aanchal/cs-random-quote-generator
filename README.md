# cs-random-quote-generator

This is an npm package which can be used to get a random quote along with the author of that quote.




## Installation

Installation

```bash
  npm install cs-random-quote-generator
```
    
## Usage/Examples

```javascript
const getRandomQuote = require('cs-random-quote-generator');

async function fetchAndDisplayQuote() {
  try {
    const quote = await getRandomQuote();
    console.log(`"${quote.quoteText}" - ${quote.quoteAuthor}`);
  } catch (error) {
    console.error('Failed to fetch quote:', error);
  }
}

fetchAndDisplayQuote();
```


## License

[Apache-2.0](https://choosealicense.com/licenses/apache-2.0/)


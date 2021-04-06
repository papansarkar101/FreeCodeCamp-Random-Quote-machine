import react, {useEffect, useState} from 'react';
import './style.scss';
import axios from 'axios';

const App = () => {
  const [quote, allQuote] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    axios
    .get('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
    .then(res => allQuote(res.data.quotes[0]))
  }
  
  const tweetUrl = "https://www.twitter.com/intent/tweet?text=" + quote.text + "-" + quote.author

  return (
    <div className="App">
      <div id="quote-box">
        <div className="quote">
          <p id="text">
            {quote.text} 
          </p>
          <h5 id="author">
            - {quote.author}
          </h5>
        </div>
        
        <div className="buttons"> 
          <a id="tweet-quote" className="button" href={tweetUrl} target="_blank" title="Tweet this quote!" rel="noreferrer"> Tweet this quote &nbsp;
            <i className="fa fa-twitter"></i>
          </a>

          <button id="new-quote" className="button" onClick={fetchQuote}>
            New Quote
          </button>
        </div>

        
      </div>
    </div>
  );
}

export default App;

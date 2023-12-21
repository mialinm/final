import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [animeQuote, setAnimeQuote] = useState('');


  const fetchRandomAnimeQuote = async () => {
    try {
      const response = await axios.get('https://animechan.xyz/api/random');
      console.log(response.data); 
    } catch (error) {
      console.error('Error fetching anime quote:', error);
    }
  };
  
  fetchRandomAnimeQuote();
  

  return (
    <div className="App">
      <h1>Random Anime Quote</h1>
      <p>{animeQuote}</p>
      <button onClick={fetchRandomAnimeQuote}>Get Another Quote</button>
    </div>
  );
}

export default App;

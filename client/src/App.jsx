import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [animeQuote, setAnimeQuote] = useState('');

  useEffect(() => {
    fetchRandomAnimeQuote();
  }, []);

  const fetchRandomAnimeQuote = async () => {
    try {
      console.log('Fetching anime quote...'); // Log to check if the function is being executed
      const response = await axios.get('http://localhost:5000/random-anime-quote');
      console.log('Response:', response.data); // Log the received data
      setAnimeQuote(response.data?.quote || 'No quote available');
    } catch (error) {
      console.error('Error fetching anime quote:', error);
    }
  };
  

  return (
    <div className="App">
      <h1>Random Anime Quote</h1>
      <p>{animeQuote}</p>
      <button onClick={fetchRandomAnimeQuote}>Get Another Quote</button>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [animeQuote, setAnimeQuote] = useState('');

  const handleButtonClick = () => {
    fetchRandomAnimeQuote('saitama');
  };

  const fetchRandomAnimeQuote = async (characterName) => {
    try {
      const response = await fetch(`http://localhost:5001/random-anime-quote?name=${characterName}`);
      if (!response.ok) {
        throw new Error('NOPE');
      }
      const data = await response.json();
      setAnimeQuote(data.quote);
    } catch (error) {
      console.error('ERROR:', error);
    }
  };

  useEffect(() => {
    fetchRandomAnimeQuote('saitama');
  }, []);

  return (
    <div className="app-container">
      <div className="content">
        <h1 className="title">Random Anime Quote for Saitama</h1>
        <p className="quote">{animeQuote}</p>
        <button className="quote-button" onClick={handleButtonClick}>
          Get Another Quote
        </button>
      </div>
    </div>
  );
}

export default App;

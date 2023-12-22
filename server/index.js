const express = require('express');
const https = require('https');
const app = express();
const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('Server is running.');
});

app.get('/random-anime-quote', async (req, res) => {
  try {
    const characterName = req.query.name || 'saitama';
    const apiUrl = `https://animechan.xyz/api/random/character?name=${characterName}`;
    
    https.get(apiUrl, (apiRes) => {
      let data = '';
      
      apiRes.on('data', (chunk) => {
        data += chunk;
      });

      apiRes.on('end', () => {
        const quote = JSON.parse(data);
        res.json(quote);
      });
    });
  } catch (error) {
    console.error('ERROR:', error);
    res.status(500).json({ error: 'NOPE' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

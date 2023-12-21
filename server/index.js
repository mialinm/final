const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); 
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running.');
});


app.get('/random-anime-quote', async (req, res) => {
  try {

    const response = await axios.get('https://animechan.xyz/api/random');
    const { data } = response;

    res.json(data); 
  } catch (error) {
    console.error('Error fetching anime quote:', error);
    res.status(500).json({ error: 'Failed to fetch anime quote' });
    
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

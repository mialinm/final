const express = require('express')
const app = express()
const PORT = 5000

const animeQuotes = [
    "Quote 1 from Anime",
    "Quote 2 from Anime",
    "Quote 3 from Anime",
]

app.get('/random-quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * animeQuotes.length)
    const randomQuote = animeQuote[randomIndex]
    res.json({ quote: randomQuote})
})

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}')
})
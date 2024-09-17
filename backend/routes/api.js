const express = require('express');
const axios = require('axios');
const Ticker = require('../models/Ticker');

const router = express.Router();

// Fetch and store data
const fetchAndStoreData = async () => {
  const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
  const tickers = Object.values(response.data).slice(0, 10);

  await Ticker.deleteMany({});
  await Ticker.insertMany(tickers.map(ticker => ({
    name: ticker.name,
    last: ticker.last,
    buy: ticker.buy,
    sell: ticker.sell,
    volume: ticker.volume,
    base_unit: ticker.base_unit,
  })));
};

// Get stored data
router.get('/tickers', async (req, res) => {
  try {
    // Fetch and store data before retrieving it
    await fetchAndStoreData();

    const tickers = await Ticker.find();
    res.json(tickers);
  } catch (err) {
    console.error('Error fetching data', err);
    res.status(500).send('Server error');
  }
});

module.exports = router;

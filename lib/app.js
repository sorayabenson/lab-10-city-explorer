const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const request = require('superagent');
const { formatLocation, formatWeather, formatReviews } = require('./munging.js');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // http logging

app.get('/location', async(req, res) => {
  try {
    const cityName = req.query.search;

    const locationData = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_API_KEY}&q=${cityName}&format=json`);

    const shapedResponse = formatLocation(locationData.body);
    
    res.json(shapedResponse);

  } catch(e) {
    
    res.status(500).json({ error: e.message });
  }
});

app.get('/weather', async(req, res) => {
  try {
    const lat = req.query.latitude;
    const lon = req.query.longitude;

    const weatherData = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lon}&key=${process.env.WEATHER_API_KEY}`);

    const shapedResponse = formatWeather(weatherData.body);

    res.json(shapedResponse);
    
  } catch(e) {
    
    res.status(500).json({ error: e.message });
  }
});

app.get('/reviews', async(req, res) => {
  try {
    const lat = req.query.latitude;
    const lon = req.query.longitude;

    const reviewData = await request
      .get(`https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lon}`)
      .set({ 'Authorization': `Bearer ${process.env.REVIEW_API_KEY}` });

    const shapedResponse = formatReviews(reviewData.body);

    res.json(shapedResponse);
  } catch(e) {
    
    res.status(500).json({ error: e.message });
  }
});

// app.get('/weather', async(req, res) => {
//   try {
//     res.json([
//       {
//         forecast: 'Partly cloudy until afternoon.',
//         time: 'Mon Jan 01 2001'
//       },
//       {
//         forecast: 'Mostly cloudy in the morning.',
//         time: 'Tue Jan 02 2001'
//       },
//     ]);
//   } catch(e) {
    
//     res.status(500).json({ error: e.message });
//   }
// });

app.use(require('./middleware/error'));

module.exports = app;

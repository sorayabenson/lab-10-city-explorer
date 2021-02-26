// need one munge per api this is what gives the data the shape it needs.

// /location needs {formatted_query: '', latitude: '', longitude: ''}

function formatLocation(locationData) {
  return {
    formatted_query: locationData[0].display_name,
    latitude: locationData[0].lat,
    longitude: locationData[0].lon,
  };
}

// /weather needs {forecast: '', time: ''}

function formatWeather(weatherData) {
  
  const shapedResponse = weatherData.data.map(item => {
    return {
      forecast: item.weather.description,
      time: new Date(item.ts * 1000).toDateString(),
    };
  });

  const finalResponse = shapedResponse.slice(0, 5);
  return finalResponse;

}

// /reviews need {name: '', image_url: '', price: '', rating: '', url: ''}

function formatReviews(reviewData) {
    
  const shapedResponse = reviewData.businesses.map(item => {
    return {
      name: item.name,
      image_url: item.image_url,
      price: item.price,
      rating: item.rating,
      url: item.url
    };
  });
    
  const finalResponse = shapedResponse.slice(0, 20);
  return finalResponse;
}

// /trails need {name: '', location: '', length: '', stars: '' star_votes: '', summary: '', trail_url: '', conditions: '', condition_date: '', condition_time: ''}

module.exports = {
  formatLocation,
  formatWeather,
  formatReviews
};
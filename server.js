const express = require('express'); 
const request = require('request'); 
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(bodyParser.json());

const proxyport = process.env.PORT || 5000;
const itineraryserver = process.env.ITINERARY || 'http://54.190.52.239';
const calendarserver = process.env.CALENDAR || 'http://3.23.167.116';
const reviewserver = process.env.REVIEWS || 'http://3.12.90.50:3000';
const galleryserver = process.env.GALLERY || 'http://13.52.101.132';

app.use(express.static(path.join(__dirname)));

app.get('', (req, res) => {
  res.sendFile("index.html");
})

app.get('/api/trip/:id/price', function(req, res) {
    console.log("Calendar get");

  request( `${calendarserver}/api/trip/${req.params.id}/price`, function (error, response, body) {
    if( !error && response.statusCode === 200 ) {
      res.send(body)
    }
  })
}); 

app.get('/api/trip/:id/calendar', function(req, res) {
  console.log("Calendar get");
  request( `${calendarserver}/${req.params.id}/calendar`, function (error, response, body) {
    if( !error && response.statusCode === 200 ) {
      console.log(response.json());
      res.send(body)
    }
  })
}); 

app.get('/reviews/:id', function(req, res) {
  request( `${reviewserver}/reviews/${req.params.id}`, function (error, response, body) {
    if( !error && response.statusCode === 200 ) {
      res.send(body)
    }
  })
});

app.get('/reviews', function(req, res) {
   request(`${reviewserver}/reviews`, function (error, response, body) {
    if( !error && response.statusCode === 200 ) {
      res.send(body)
    }
  })
});

app.put('/reviews', function(req, res) {
  console.log(req.body);
  request( `${galleryserver}/reviews`, function(error, response, body) {
    if( !error && response.statusCode === 200 ) {
      res.send(body)
    }
  })
});

app.get('/tripAdvisor/:id/gallery', function(req, res) {
  console.log(req.params.id);
  request( `${galleryserver}/tripAdvisor/${req.params.id}/gallery`, function (error, response, body) {
    console.log("Response:")
    console.log(response);
    if( !error && response.statusCode === 200 ) {
      res.send(body)
    }
  })
});

app.get('/tour/:id', function(req, res) {
  request( `${itineraryserver}/tour/${req.params.id}`, function (error, response, body) {
    if( !error && response.statusCode === 200 ) {
      res.send(body)
    }
  })
});

app.get('/tour', function(req, res) {
   request( `${itineraryserver}/tour/`, function (error, response, body) {
    if( !error && response.statusCode === 200 ) {
      res.send(body)
    }
  })
});

app.listen(proxyport);
console.log( `Server running on port ${proxyport}`);

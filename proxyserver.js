var express = require('express'); 
var request = require('request'); 
var app = express();

app.get('/travelers*', function(req, res) {
  /* request( url and endpoint, function (error, response, body) {
    if( !error && response.statusCode === 200 ) {
      res.send(body)
    }
  })*/
}); 

app.get('/reviews*', function(req, res) {
  /* request( url and endpoint, function (error, response, body) {
    if( !error && response.statusCode === 200 ) {
      res.send(body)
    }
  })*/
});

app.get('/gallery*', function(req, res) {
  /* request( url and endpoint, function (error, response, body) {
    if( !error && response.statusCode === 200 ) {
      res.send(body)
    }
  })*/
});

app.get('/itinerary*', function(req, res) {
  /* request( url and endpoint, function (error, response, body) {
    if( !error && response.statusCode === 200 ) {
      res.send(body)
    }
  })*/
});

const proxyport = 5000;

app.listen(proxyport);
console.log( `Server running on port ${proxyport}`);

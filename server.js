const express = require('express'); 
const request = require('request'); 
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname)));

app.get('', (req, res) => {
  res.sendFile("index.html");
})

app.get('/:id/price', function(req, res) {
  request( 'http://localhost:3002/api/trip/:id/price', function (error, response, body) {
    if( !error && response.statusCode === 200 ) {
      res.send(body)
    }
  })
}); 

app.get('/:id/calendar', function(req, res) {
  request( 'http://localhost:3002/api/trip/:id/calendar', function (error, response, body) {
    if( !error && response.statusCode === 200 ) {
      res.send(body)
    }
  })
}); 

app.get('/reviews/:id', function(req, res) {
  console.log("camerooooooon");
  request( 'http://localhost:3001/reviews/:id', function (error, response, body) {
    if( !error && response.statusCode === 200 ) {
      res.send(body)
    }
  })
});

app.get('/reviews/', function(req, res) {
   request( 'http://localhost:3001/reviews/', function (error, response, body) {
    if( !error && response.statusCode === 200 ) {
      res.send(body)
    }
  })
});

app.put('/reviews/', function(req, res) {
  request( 'http://localhost:3001/reviews/', function (error, response, body) {
    if( !error && response.statusCode === 200 ) {
      res.send(body)
    }
  })
});


app.get('/tripAdvisor/:id/gallery', function(req, res) {
  request( 'http://localhost:9999/tripAdvisor/:id/gallery', function (error, response, body) {
    if( !error && response.statusCode === 200 ) {
      res.send(body)
    }
  })
});

// app.get('/tour/:id', function(req, res) {
//   /* request( url and endpoint, function (error, response, body) {
//     if( !error && response.statusCode === 200 ) {
//       res.send(body)
//     }
//   })*/
// });

app.get('/tour', function(req, res) {
   request( 'http://localhost:3000/tour', function (error, response, body) {
    if( !error && response.statusCode === 200 ) {
      res.send(body)
    }
  })
});


// https://stackoverflow.com/questions/10435407/proxy-with-express-js
// https://www.youtube.com/watch?v=1xo-0gCVhTU

const proxyport = 5000;

app.listen(proxyport);
console.log( `Server running on port ${proxyport}`);

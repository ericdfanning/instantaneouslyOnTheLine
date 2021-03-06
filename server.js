var express = require('express');
var app = express();
var browserify = require('browserify-middleware');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

var port = 3301
app.set('port', port);
app.listen(app.get('port'), function() {
  console.log('Listening on port: ', port)
});


app.use(bodyParser.json()); // allows you to retrieve data from the body of requests made to this server
app.use(cors()); // sets up the headers to allow cross origin requests

app.use(express.static(path.join(__dirname, './client')));

app.get('/bundle.js', browserify('./client/index.js', {
  transform: [ [ require('babelify'), { presets: ['es2015', 'react'] } ] ]
}));

app.get('/index.html', browserify('./client/index.js', {
  transform: [ [ require('babelify'), { presets: ['es2015', 'react'] } ] ]
}), function(req, res) {
	console.log('hey dude index.html')
});

app.get('/', function(req, res) {
	// this block will execute every time someone successfully navigates to the homepage.
	console.log('hey dude /') 
	res.status(200)
	res.end()
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/index.html'))
})

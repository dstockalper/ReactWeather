var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000; // PORT can be passed to us by Heroku

// Express middleware
app.use(function(req, res, next) { // reroute all https to http, so openweather API works
	if(req.headers['x-forwarded-proto'] === 'http') {
		next(); // Process request as normal
	} else {
		res.redirect('http://' + req.hostname + req.url);
	}
});
app.use(express.static('public'));

app.listen(PORT, function(){
	console.log('Express server is up on port ' + PORT);
});

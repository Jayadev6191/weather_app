var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request= require('request');
var cheerio= require('cheerio');

var routes = require('./routes/index');
var users = require('./routes/users');
var scrape = require('./routes/scrape');

var YQL = require('yql');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/scrape', scrape);
app.use('/users', users);

app.post('/',function(req,res){
	console.log(req.body.city);
	var query = new YQL('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+req.body.city+'")');
	query.exec(function(err,data) {
	  console.log(data);
	  var location = data.query.results.channel.location;
	  var condition = data.query.results.channel.item.condition;
	  console.log(location);
	  res.send(data.query.results.channel);
	  // console.log('The current weather in ' + location.city + ', ' + location.region + ' is ' + condition.temp + ' degrees.');
	});
});

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
    // var err = new Error('Not Found');
    // err.status = 404;
    // next(err);
// });

// error handlers

module.exports = app;
app.listen(3000);
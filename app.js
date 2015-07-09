var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request= require('request');
var cheerio= require('cheerio');

var routes = require('./routes/index');
var users = require('./routes/users');
var scrape = require('./routes/scrape');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/scrape', scrape);
app.use('/users', users);

app.get('/',function(req,res){
	console.log('hi');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

module.exports = app;
app.listen(3000);
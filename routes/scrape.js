var express = require('express');
var fs = require('fs');
var request= require('request');
var cheerio= require('cheerio');
var rp=require('request-promise');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	console.log('hi');
	var cities=fs.readFileSync('public/data/cities.json','utf8');
	console.log(cities.length);
	// if(cities.length==0){
		console.log('go scrape wiki');
		rp('https://en.wikipedia.org/wiki/List_of_United_States_cities_by_population#Incorporated_places_over_100.2C000_population').then(function(process){
			var obj={};
			var $=cheerio.load(process);
			var state;
			var city;
			var i=0;		
			$('table.wikitable').find('tr').each(function(){
				i=i+1;
				state=$(this).find('td:nth-child(3) > a').html();
				city=$(this).find('td:nth-child(2) > a').html();
				
				if(obj.hasOwnProperty(state)){
					if(city!==null){
						obj[state].push(city);	
					}
				}else{
					if(state!==null){
						obj[state]=[];	
					}
					if(city!==null){
						obj[state].push(city);	
					}
				}
				if(i==295){
					return false;
				}
			});
			console.log(JSON.stringify(obj));
			fs.writeFileSync('public/data/cities.json', JSON.stringify(obj)); 
	});
	res.send('scraped');
});

module.exports = router;

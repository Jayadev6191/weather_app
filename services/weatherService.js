weatherApp.service('weatherService',['$resource',function($resource){
	// rest call
	this.city="Santa Clara,CA";
	this.days=3;
	console.log('weather service called');
	
	var weatherAPI=$resource("http://api.openweathermap.org/data/2.5/forecast/daily",
		{
			callback:"JSON_CALLBACK"
		},
		{
			get:{
					method:"JSONP"
				}
		});
	console.log(this.days);
	var weatherResult=weatherAPI.get({q:this.city,cnt:this.days});
	weatherResult.$promise.then(function(data){
		console.log(data.list);
	});
	
}]);

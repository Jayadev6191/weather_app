weatherApp.factory('WeatherService',['$resource',function($resource){
	return{
		city:"Santa Clara,CA",
		weatherApi:function(city,days){
			this.city=city;
			this.days=days;
			
			// rest call
			var weatherAPI=$resource("http://api.openweathermap.org/data/2.5/forecast/daily",
				{
					callback:"JSON_CALLBACK"
				},
				{
					get:{
							method:"JSONP"
						}
				});
		
			var weatherResult=weatherAPI.get({q:this.city,cnt:this.days});
			return weatherResult;
		}
	};
}]);

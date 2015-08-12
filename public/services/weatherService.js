weatherApp.factory('WeatherService',['$resource','$http','$q',function($resource,$http,$q){
	var weather_obj={};
		
		weather_obj.getWeather=function(city){
			var deferred = $q.defer();
			console.log(city);
			var city_obj={'city':city};
			$http.post('/',city_obj).success(function(data){
					deferred.resolve(data);
			},function(error){
					deferred.resolve(error);
			});
			
			return deferred.promise;
		};
		// city:"Santa Clara,CA",
		// weatherApi:function(city,days){
			// this.city=city;
			// this.days=days;	
			// // rest call
			// var weatherAPI=$resource("http://api.openweathermap.org/data/2.5/forecast/daily",
				// {
					// callback:"JSON_CALLBACK"
				// },
				// {
					// get:{
							// method:"JSONP"
						// }
				// });
			// var weatherResult=weatherAPI.get({q:this.city,cnt:this.days});
			// return weatherResult;
		// }
		
		return weather_obj;
	
}]);

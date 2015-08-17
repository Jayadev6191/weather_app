weatherApp.factory('WeatherService',['$resource','$http','$q',function($resource,$http,$q){
	var weather_obj={};
		
		weather_obj.getWeather=function(city){
			var deferred = $q.defer();
			console.log(city);
			var city_obj={'city':city};
			$http.post('/',city_obj).success(function(data){
					deferred.resolve(data);
			},function(error){
					deferred.reject(error);
			});
			
			return deferred.promise;
		};
		
		weather_obj.getWeathericon=function(text){
			var deferred = $q.defer();
			var icon;
			switch(text){
				
				case 'Sunny':
						icon="wi wi-day-sunny";
						break;
						
				case 'Mostly Sunny':
						icon="wi wi-day-sunny";
						break;
						
				case 'Cloudy':
						icon="wi wi-day-cloudy";
						break;
				
				case 'Partly Cloudy':
						icon="wi wi-day-cloudy";
						break;
				
				case 'Clear':
						icon="wi wi-day-sunny";
						break;
						
				case 'Mostly Clear':
						icon="wi wi-day-sunny";
						break;
						
				}
			
			deferred.resolve(icon);
			
			return deferred.promise;
		};
		
		return weather_obj;
	
}]);

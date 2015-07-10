weatherApp.factory('cityService',['$http','$q',function($http,$q){
	var cityService={};
	
	cityService.getCities=function(currentState){
		console.log(currentState.state);
		var deferred = $q.defer(); 
			$http.get('../data/cities.json').success(function(data){
					console.log(data[currentState.state]);
					deferred.resolve(data);
			},function(error){
					deferred.resolve(error);
			});
		return deferred.promise;
	};
	
	return cityService;
}]);
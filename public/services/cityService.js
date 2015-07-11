weatherApp.factory('cityService',['$http','$q',function($http,$q){
	var cityService={};
	
	cityService.getCities=function(currentState){
		var deferred = $q.defer(); 
			$http.get('../data/cities.json').success(function(data){
					deferred.resolve(data[currentState.state]);
			},function(error){
					deferred.resolve(error);
			});
		return deferred.promise;
	};
	
	return cityService;
}]);
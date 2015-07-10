weatherApp.factory('stateService',['$http','$q',function($http,$q){
	var statesService={};
	
	statesService.getStates=function(){
		var deferred = $q.defer(); 
		$http.get('../data/states.json').success(function(data){
				deferred.resolve(data);
		},function(error){
				deferred.resolve(error);
		});
		return deferred.promise;
	};
	
	return statesService;
}]);
weatherApp.controller('MainCtrl',['$scope','$resource','$routeParams','weatherService',function($scope,$resource,$routeParams,weatherService){
	$scope.city=weatherService.city;
	$scope.days=$routeParams.days || 2;
	
	$scope.weatherAPI=$resource("http://api.openweathermap.org/data/2.5/forecast/daily",
		{
			callback:"JSON_CALLBACK"
		},
		{
			get:{
					method:"JSONP"
				}
		});
		
	$scope.weatherResult=$scope.weatherAPI.get({q:$scope.city,cnt:$scope.days});
	
	$scope.covertToCelsius=function(degK){
		return Math.round((degK-272.15));
	};
	
	$scope.covertToDate=function(dt){
		return new Date(dt * 1000);
	};
		
}]);
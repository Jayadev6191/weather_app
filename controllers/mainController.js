weatherApp.controller('MainCtrl',['$scope','$resource','$routeParams','weatherService','renderChart',function($scope,$resource,$routeParams,weatherService,renderChart){
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
	$scope.weatherResult.$promise.then(function(data){
		console.log(data.list);
	});
	
	
	$scope.covertToCelsius=function(degK){
		return Math.round((degK-272.15));
	};
	
	$scope.covertToDate=function(dt){
		return new Date(dt * 1000);
	};
	
		
	$scope.redirect=function(){
		$scope.link="https://github.com/novus/nvd3";
		window.location.href=$scope.link;
	};
	
	
}]);
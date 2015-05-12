weatherApp.controller('MainCtrl',['$scope','$routeParams','WeatherService','renderChart',function($scope,$routeParams,WeatherService,renderChart){
	$scope.city=WeatherService.city;
	$scope.days=2;
	
	$scope.covertToCelsius=function(degK){
		return Math.round((degK-272.15));
	};
	
	$scope.covertToDate=function(dt){
		return new Date(dt * 1000);
	};
		
	$scope.time=function(time){
		console.log(time);
		return time;
	};
	
	$scope.getForecast=function(){
		console.log($scope.city+' '+$scope.days);
		$scope.weatherResult = WeatherService.weatherApi($scope.city, $scope.days);
		$scope.weatherResult.$promise.then(function(data) {
			console.log(data.list);
		}); 
	};
	// renderChart.renderUtilChart();
}]);
weatherApp.controller('MainCtrl',['$scope','$routeParams','weatherService','renderChart',function($scope,$routeParams,weatherService,renderChart){
	$scope.city=weatherService.city;
	$scope.days=$routeParams.days || weatherService.days;
	
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
	
	renderChart.renderUtilChart();
}]);
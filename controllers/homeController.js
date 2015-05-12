weatherApp.controller('HomeCtrl',['$scope','$resource','WeatherService',function($scope,$resource,WeatherService){
	$scope.city=WeatherService.city;
	
	// Watch city name and update city inside weatherService. It is read by mainController.
	
	$scope.$watch('city',function(){
		WeatherService.city=$scope.city;
	});
	
	$scope.redirect=function(){
		$scope.link="http://stackoverflow.com";
		window.location.replace($scope.link);
	};
	
}]);
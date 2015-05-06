var weatherApp=angular.module('weatherApp',['ngRoute','ngResource']);

//routes

weatherApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/home.htm',
        controller: 'HomeCtrl'
      }).when('/main', {
        templateUrl: 'partials/main.htm',
        controller: 'MainCtrl'
      }).when('/main/:days', {
        templateUrl: 'partials/main.htm',
        controller: 'MainCtrl'
      });
});




weatherApp.service('weatherService',[function(){
	// rest call
	this.city="Santa Clara,CA";
	console.log('weather service called');
	
}]);

weatherApp.controller('HomeCtrl',['$scope','$resource','weatherService',function($scope,$resource,weatherService){

	$scope.city=weatherService.city;
	
	// Watch city name and update city inside weatherService. It is read by mainController.
	
	$scope.$watch('city',function(){
		weatherService.city=$scope.city;
	});
	
}]);
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
	
	
	$scope.a=10;
	$scope.weatherResult=$scope.weatherAPI.get({q:$scope.city,cnt:$scope.days});
	
	$scope.covertToCelsius=function(degK){
		return Math.round((degK-272.15));
	};
	
	
	$scope.covertToDate=function(dt){
		return new Date(dt * 1000);
	};	
}]);
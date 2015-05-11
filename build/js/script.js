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

weatherApp.controller('dummyController',['$scope',function($scope){
	$scope.a=10;
	
	$scope.error=function(){
		$scope.b=12;
	};
}]);
weatherApp.controller('HomeCtrl',['$scope','$resource','weatherService',function($scope,$resource,weatherService){
	$scope.city=weatherService.city;
	
	// Watch city name and update city inside weatherService. It is read by mainController.
	
	$scope.$watch('city',function(){
		weatherService.city=$scope.city;
	});
	
	$scope.redirect=function(){
		$scope.link="http://stackoverflow.com";
		window.location.replace($scope.link);
	};
	
}]);
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
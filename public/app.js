var weatherApp=angular.module('weatherApp',['ngRoute','ngResource']);

//routes

weatherApp.config(function ($routeProvider,$locationProvider) {
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
      
      $locationProvider.html5Mode({
			enabled : true
		});
});



var weatherApp=angular.module('weatherApp',['ngRoute','ngResource']);

//routes

weatherApp.config(function ($routeProvider,$locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      }).when('/main/:days', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      });
      
      $locationProvider.html5Mode({
			enabled : true
		});
});



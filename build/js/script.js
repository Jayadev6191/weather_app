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




weatherApp.factory('renderChart',function(){
	return {
		renderUtilChart:function(){
		console.log('renderChart called inside');
		function data() {
		  var sin = [],
		      cos = [];
		
		  for (var i = 0; i < 100; i++) {
		    sin.push({x: i, y: Math.sin(i/5)});
		  }
		
		  return [
		    {
		      values: sin,
		      key: 'Sine Wave',
		      color: '#a27f00'
		    },
		    
		  ];
		}

		nv.addGraph(function(){
		  var chart = nv.models.lineChart()
		  	.showXAxis(true)
		  	.showYAxis(true)
		    .interactive(true)
		    .tooltips(true)
		    .showLegend(false);
		    
		  chart.xAxis
		    .axisLabel('Time (ms)')
		    .tickFormat(d3.format(',r'));
		
		  chart.yAxis
		    .axisLabel('Voltage (v)')
		    .tickFormat(d3.format('.02f'));
		
		  d3.select('#chart svg')
		    .datum(data())
		    .transition().duration(500)
		    .call(chart);
		
		  nv.utils.windowResize(chart.update);
		
		  return chart;
		  });
		}
	};
});

weatherApp.factory('WeatherService',['$resource',function($resource){
	return{
		city:"Santa Clara,CA",
		weatherApi:function(city,days){
			this.city=city;
			this.days=days;
			
			// rest call
			var weatherAPI=$resource("http://api.openweathermap.org/data/2.5/forecast/daily",
				{
					callback:"JSON_CALLBACK"
				},
				{
					get:{
							method:"JSONP"
						}
				});
		
			var weatherResult=weatherAPI.get({q:this.city,cnt:this.days});
			return weatherResult;
		}
	};
}]);

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
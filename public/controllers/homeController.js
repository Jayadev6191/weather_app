weatherApp.controller('HomeCtrl',['$scope','$resource','stateService','cityService','WeatherService','currentCityService','geopluginService',function($scope,$resource,stateService,cityService,WeatherService,currentCityService,geopluginService){
	
	// var container=document.getElementById("contact_column_inner");
	// console.log(container);
	
	initLocalClock();

/*
 * Starts any clocks using the user's local time
 * From: cssanimation.rocks/clocks
 */
	function initLocalClock() {
	  // Get the local time using JS
	  $scope.date = new Date;
	  $scope.minute = $scope.date.getMinutes();
	  $scope.seconds = $scope.date.getSeconds();
	  $scope.hour = $scope.date.getHours();
	  
	  
	
	  // Create an object with each hand and it's angle in degrees
	  $scope.hands = [
	    {
	      hand: 'hour',
	      angle: ($scope.hour * 30) + ($scope.minute / 2)
	    },
	    {
	      hand: 'minute',
	      angle: ($scope.minute * 6)
	    }
	  ];
	  
	  var t = setTimeout(function(){initLocalClock()},500);
	  $('#time').html($scope.hour+':'+$scope.minute+' '+meridian);
	}
	
	
	var meridian;
	if($scope.hour >= 12){
		meridian="p.m";
	}else{
		meridian="a.m";
	}
	
	stateService.getStates().then(function(data){
		$scope.states=data;
	});
	
	currentCityService.getCity().then(function(geopoints){
		geopluginService.getCurrentLocation(geopoints).then(function(data){
			$scope.city=data;
			$('#location').css('display','block');
			
			WeatherService.getWeather($scope.city).then(function(data){
				
			});
			
		});
	});
	
	
	$scope.selectState=function(state){
		$scope.state=state;
		cityService.getCities(state).then(function(cities){
			$scope.cities=cities;
			console.log($scope.cities);
		});
	};
	
	$scope.selectCity=function(city){
		$scope.city=city;
		console.log($scope.city);
	};
	
	$(document).on("click", "#submit_primary", function(e) {
		$scope.weatherResult = WeatherService.weatherApi($scope.city,1);
		$scope.weatherResult.$promise.then(function(data) {
			console.log(data.list);
		}); 
	});
	
	$scope.covertToCelsius=function(degK){
		return Math.round((degK-272.15));
	};
	
	$scope.covertToDate=function(dt){
		return new Date(dt * 1000);
	};
	
	$(document).ready(function(){
		// alert(geoplugin_city());
	});
	
	$(document).on('mouseenter','#query',function(){
		$('#weather_get').css({ "z-index": "1110",'display':'block'});
	});
	
	
	$(document).on('mouseleave','#query',function(){
		$('#weather_get').css({ 'display':'none'});
	});
	 
}]);
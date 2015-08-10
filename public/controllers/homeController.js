weatherApp.controller('HomeCtrl',['$scope','$resource','stateService','cityService','WeatherService','currentCityService','geopluginService',function($scope,$resource,stateService,cityService,WeatherService,currentCityService,geopluginService){
	
	
	initLocalClock();

/*
 * Starts any clocks using the user's local time
 * From: cssanimation.rocks/clocks
 */
	function initLocalClock() {
	  // Get the local time using JS
	  var date = new Date;
	  var minute = date.getMinutes();
	  var hour = date.getHours();
	
	  // Create an object with each hand and it's angle in degrees
	  var hands = [
	    {
	      hand: 'hour',
	      angle: (hour * 30) + (minute / 2)
	    },
	    {
	      hand: 'minute',
	      angle: (minute * 6)
	    }
	  ];
	  console.log(hands);
	  // Loop through each of these hands to set their angle
	  for (var j = 0; j < hands.length; j++) {
	    var elements = document.querySelectorAll('.' + hands[j].hand);
	    for (var k = 0; k < elements.length; k++) {
	        elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
	        elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
	    }
	  }
	}
	
	
	
	stateService.getStates().then(function(data){
		$scope.states=data;
	});
	
	currentCityService.getCity().then(function(geopoints){
		geopluginService.getCurrentLocation(geopoints).then(function(data){
			console.log(data);
			$scope.city=data;
			$('#location').css('display','block');
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
	
	// $(document).on('mouseenter','#weather_get',function(){
		// $('#weather_get').css('display','block');
	// });
	
	$(document).on('mouseleave','#query',function(){
		$('#weather_get').css({ 'display':'none'});
	});
	 
}]);
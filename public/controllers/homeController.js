weatherApp.controller('HomeCtrl',['$scope','stateService','cityService','WeatherService','currentCityService','geopluginService','getDateService','iconService',function($scope,stateService,cityService,WeatherService,currentCityService,geopluginService,getDateService,iconService){
	// var container=document.getElementById("contact_column_inner");
	// console.log(container);
	
	$scope.today_date=getDateService.getDate();
	
	
	initLocalClock();

/*
 * Starts any clocks using the user's local time
 * From: cssanimation.rocks/clocks
 */
	function initLocalClock() {
	  // Get the local time using JS
	  $scope.date = new Date;
	  // console.log($scope.date.getDay());
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
	  
	  if($scope.minute <10){
		$scope.minute='0'+$scope.minute;
	  }
	  
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
					console.log(data);
					$scope.temp={
						"temperature":data.item.condition.temp,
						"date":$scope.today_date,
						"text":data.item.condition.text
					};
					console.log(data.item.pubDate);
					$scope.text=data.item.condition.text;
					console.log(iconService.getIcon($scope.text));
					$('#current_icon').find('article i').attr('class',data);
					
					WeatherService.getWeathericon($scope.text).then(function(data){
						// $(document).find('#current_icon article i').attr('class',data);
						if(data!=undefined){
							$('#current_icon').find('article i').attr('class',data);	
						}
						else{
							alert("weather type"+$scope.text+"undefined");
						}
					});
					
					$scope.forecast=data.item.forecast.splice(1,data.item.forecast.length);
					console.log($scope.forecast);
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
	
	
	$(document).on('mouseenter','#query',function(){
		$('#weather_get').css({ "z-index": "1110",'display':'block'});
	});
	
	$(document).on('mouseleave','#query',function(){
		$('#weather_get').css({ 'display':'none'});
	});
	 
}]);
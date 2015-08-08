weatherApp.controller('HomeCtrl',['$scope','$resource','stateService','cityService','WeatherService',function($scope,$resource,stateService,cityService,WeatherService){
	stateService.getStates().then(function(data){
		$scope.states=data;
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
		alert(geoplugin_city());
	});
	
	$(document).on('mouseenter','#location',function(){
		$('#weather_get').css({ "z-index": "1110",'display':'block'});
	});
	
	$(document).on('mouseenter','#weather_get',function(){
		$('#weather_get').css('display','block');
	});
	
	$(document).on('mouseleave','#location',function(){
		$('#weather_get').css({ "z-index": "1000",'display':'block'});
	});
	 
}]);
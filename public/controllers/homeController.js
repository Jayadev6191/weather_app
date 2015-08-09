weatherApp.controller('HomeCtrl',['$scope','$resource','stateService','cityService','WeatherService','currentCityService',function($scope,$resource,stateService,cityService,WeatherService,currentCityService){
	stateService.getStates().then(function(data){
		$scope.states=data;
	});
	
	currentCityService.getCity().then(function(data){
		console.log(data);
		geocoder = new google.maps.Geocoder();
		var latlng = new google.maps.LatLng(data.latitude, data.longitude);
		
		geocoder.geocode(
		    {'latLng': latlng}, 
		    function(results, status) {
		        if (status == google.maps.GeocoderStatus.OK) {
		                if (results[0]) {
		                    var add= results[0].formatted_address ;
		                    var  value=add.split(",");
		
		                    count=value.length;
		                    country=value[count-1];
		                    state=value[count-2];
		                    city=value[count-3];
		                    alert("city name is: " + city);
		                }
		                else  {
		                    alert("address not found");
		                }
		        }
		         else {
		            alert("Geocoder failed due to: " + status);
		        }
		    }
		);
		
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
weatherApp.factory('currentCityService',['$http','$q',function($http,$q){
	var currentCity={};
	
	currentCity.getCity=function(){
		var deferred = $q.defer();
		    if (navigator.geolocation) {
		        navigator.geolocation.getCurrentPosition(function(position){
				    var coordinates={
				    	"latitude":	position.coords.latitude,
				    	"longitude": position.coords.longitude
				    };
				    // console.log(coordinates);
				    deferred.resolve(coordinates);
		        });
		    } else { 
		    	deferred.reject("Geolocation is not supported by this browser.");
		        console.log("Geolocation is not supported by this browser.");
		    }
		    return deferred.promise;
	};
	
	return currentCity;
}]);
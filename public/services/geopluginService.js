weatherApp.factory('geopluginService',['$http','$q',function($http,$q){
	var geopluginService={};
	
	geopluginService.getCurrentLocation=function(geopoints){
		var deferred = $q.defer();
		
		geocoder = new google.maps.Geocoder();
		var latlng = new google.maps.LatLng(geopoints.latitude, geopoints.longitude);
		
		geocoder.geocode({'latLng': latlng},function(results, status) {
		        if (status == google.maps.GeocoderStatus.OK) {
		        	console.log(results);
		                if (results[0]) {
		                    var add= results[0].formatted_address ;
		                    var  value=add.split(",");
		                    count=value.length;
		                    country=value[count-1];
		                    state=value[count-2];
		                    city=value[count-3];
		                    deferred.resolve(city);
		                }
		                else  {
		                    alert("address not found");
		                }
		        }
		         else {
		            alert("Geocoder failed due to: " + status);
		            deferred.reject("Geocoder failed due to: " + status);
		        }
		    }
		);    
		return deferred.promise;
	};
	
	return geopluginService;
}]);
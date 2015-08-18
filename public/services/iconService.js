weatherApp.factory('iconService',['$http','$q',function($http,$q){
	var iconService={};
	
	iconService.getIcon=function(text){
		console.log('icon');
			var icon;
			switch(text){
				
				case 'Sunny':
						icon="wi wi-day-sunny";
						break;
						
				case 'Mostly Sunny':
						icon="wi wi-day-sunny";
						break;
						
				case 'Cloudy':
						icon="wi wi-day-cloudy";
						break;
				
				case 'Partly Cloudy':
						icon="wi wi-day-cloudy";
						break;
				
				case 'Clear':
						icon="wi wi-day-sunny";
						break;
						
				case 'Mostly Clear':
						icon="wi wi-day-sunny";
						break;
						
				case 'Fair':
						icon="wi wi-day-sunny";
						break;
						
				}
				return icon;
	};
	
	return iconService;
}]);
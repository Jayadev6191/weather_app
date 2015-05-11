weatherApp.controller('HomeCtrl',['$scope','$resource','weatherService',function($scope,$resource,weatherService){
	$scope.city=weatherService.city;
	
	// Watch city name and update city inside weatherService. It is read by mainController.
	
	$scope.$watch('city',function(){
		weatherService.city=$scope.city;
	});
	
	$scope.redirect=function(){
		$scope.link="http://stackoverflow.com";
		window.location.replace($scope.link);
	};
	
}]);
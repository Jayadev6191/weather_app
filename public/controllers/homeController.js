weatherApp.controller('HomeCtrl',['$scope','$resource','stateService','cityService',function($scope,$resource,stateService,cityService){
	stateService.getStates().then(function(data){
		$scope.states=data;
	});
	
	$scope.selectState=function(state){
		cityService.getCities(state).then(function(data){
			console.log(data);
		});
	};
	
	
}]);
weatherApp.factory('stateService',['$scope','$http',function($scope,$http){
	console.log('hi');
	
	$http.get('../data/states.json').success(function(data){
			console.log(data);
	});
}]);
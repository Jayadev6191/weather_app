weatherApp.controller('dummyController',['$scope',function($scope){
	$scope.a=10;
	
	$scope.error=function(){
		$scope.b=12;
	};
}]);
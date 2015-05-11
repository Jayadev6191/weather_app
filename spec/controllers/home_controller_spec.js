describe("HomeCtrl",function(){
	var $rootScope,
		$scope,
		controller,
		mockWeatherService;
	
	beforeEach(function(){
		module('weatherApp');
		
		inject(function($injector){
			$rootScope=$injector.get('$rootScope');
			$scope=$rootScope.$new();
			controller=$injector.get('$controller')('HomeCtrl',{$scope:$scope});
		});
	});
	
	describe('city to be defined',function(){
		it('city should always be defined',function(){
			expect($scope.city).toBeDefined();
		});
	});
	
	
	// it('should watch city name', function() {
		// // make an initial selection
		// $scope.city = 'Santa Clara,CA';
		// $scope.$digest();
// 
		// // make another one
		// $scope.city = 'San Jose,CA';
		// $scope.$digest();
// 
		// // simulate a ng-change which should revert to the previous value
		// expect($scope.city).toEqual('San Jose,CA');
	// }); 

	
	describe('redirect',function(){
		it('should redirect to stackoverflow website',function(){
			$scope.redirect();
			expect($scope.link).toEqual("http://stackoverflow.com");
		});
	});
	

	
	
});

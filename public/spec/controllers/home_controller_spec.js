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

	
	describe('redirect',function(){
		it('should redirect to stackoverflow website',function(){
			$scope.redirect();
			expect($scope.link).toEqual("http://stackoverflow.com");
		});
	});
	

	
	
});

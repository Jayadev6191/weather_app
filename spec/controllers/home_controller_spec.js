describe("dummyController",function(){
	var $rootScope,
		$scope,
		controller;
	
	beforeEach(function(){
		module('weatherApp');
		
		inject(function($injector){
			$rootScope=$injector.get('$rootScope');
			$scope=$rootScope.$new();
			controller=$injector.get('$controller')('dummyController',{$scope:$scope});
		});
		
	});
	
	describe('a',function(){
		it('should be 10',function(){
			expect($scope.a).toEqual(10);
		});
	});
	
	
	describe('b',function(){
		it('should be 8',function(){
			$scope.error();
			expect($scope.b).toEqual(12);
		});
	});
	
	
});

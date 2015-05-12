describe('it should show tooltips correctly',function(){
	 var $rootScope, $scope, $controller,$window;
	 beforeEach(function(){
		module('weatherApp');
		
		inject(function($injector){
			$rootScope=$injector.get('$rootScope');
			$scope=$rootScope.$new();
			controller=$injector.get('$controller')('MainCtrl',{$scope:$scope});
		});
	});
	
	it('should have tooltips and interactive options to be truthy',function(){
		nv.addGraph();
		expect(nv.models.lineChart().interactive()).toBeTruthy();
		expect(nv.models.lineChart().tooltips()).toBeTruthy();
	});
		
});

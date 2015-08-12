weatherApp.directive('weathericon',function(){
	return{
		restrict: 'A',
		link:function($scope,$elem,$attr){
			
			switch($scope.obj.text){
				case 'Partly Cloudy':
						$scope.icon="wi wi-day-cloudy";
						break;
				
				case 'Sunny':
						$scope.icon="wi wi-day-sunny";
						break;
				
				case 'Clear':
						$scope.icon="wi wi-day-sunny";
						break;
				}
				
				console.log($scope.icon);
				
				$elem.find('article i').attr('class',$scope.icon);
		}
	};
});

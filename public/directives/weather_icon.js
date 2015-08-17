weatherApp.directive('weathericon',function(){
	return{
		restrict: 'A',
		link:function($scope,$elem,$attr){
			
			switch($scope.obj.text){
				
				case 'Sunny':
						$scope.icon="wi wi-day-sunny";
						break;
						
				case 'Mostly Sunny':
						$scope.icon="wi wi-day-sunny";
						break;
						
				case 'Cloudy':
						$scope.icon="wi wi-day-cloudy";
						break;
				
				case 'Partly Cloudy':
						$scope.icon="wi wi-day-cloudy";
						break;
				
				case 'Clear':
						$scope.icon="wi wi-day-sunny";
						break;
						
				case 'Mostly Clear':
						$scope.icon="wi wi-day-sunny";
						break;
						
				// case 'Mostly Sunny':
						// $scope.icon="wi wi-day-sunny";
						// break;
				}
				
				$elem.find('article i').attr('class',$scope.icon);
		}
	};
});

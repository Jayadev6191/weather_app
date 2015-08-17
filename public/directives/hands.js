weatherApp.directive('hands',function(){
	return{
		restrict: 'A',
		link:function($scope,$elem,$attr){
			for(var i=0;i<$scope.hands.length;i++){
				if($scope.hands[i].hand==$elem.attr('class')){
					$elem.css('webkitTransform','rotateZ('+ $scope.hands[i].angle +'deg)');
					$elem.css('transform','rotateZ('+ $scope.hands[i].angle +'deg)');
				}
			}
		}
	};
});

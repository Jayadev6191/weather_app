weatherApp.directive('currentweather',function(){
	return{
		restrict: 'E',
		template:'<div class="col-md-6">\
		 					<div id="temp">{{temp.temperature}}&#176</div>\
		 					<div>{{temp.text}}</div>\
		 					<div>{{temp.date}}</div>\
		 				</div>\
		 				<div class="col-md-6" >\
		 					<div id="current_icon" currentweather>\
		 						<article>\
		 							<i></i>\
		 						</article>\
		 					</div>\
		 				</div>',
		link:function($scope,$elem,$attr){
			
		}
	};
});

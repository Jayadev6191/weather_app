weatherApp.directive('currentweather',function(){
	return{
		restrict: 'E',
		template:'<div class="row">\
						<div class="col-md-6">\
	 						<div id="temp">{{temp.temperature}}&#176</div>\
	 					</div>\
	 					<div class="col-md-6" >\
		 					<div id="current_icon" currentweather>\
		 						<article>\
		 							<div id="icon">\
		 								<i></i>\
		 							</div>\
		 							<div id="icon_text">{{temp.text}}</div>\
		 						</article>\
		 					</div>\
	 					</div>\
				  <div>'
	};
});

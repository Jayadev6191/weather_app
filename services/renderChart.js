weatherApp.factory('renderChart',function(){
	renderUtilChart=function(){
		function data() {
		  var sin = [],
		      cos = [];
		
		  for (var i = 0; i < 100; i++) {
		    sin.push({x: i, y: Math.sin(i/5)});
		  }
		
		  return [
		    {
		      values: sin,
		      key: 'Sine Wave',
		      color: '#a27f00'
		    },
		    
		  ];
		}

		nv.addGraph(function(){
		  var chart = nv.models.lineChart()
		  	.showXAxis(true)
		  	.showYAxis(true)
		    .interactive(false)
		    .tooltips(true)
		    .showLegend(false);
		    
		  chart.xAxis
		    .axisLabel('Time (ms)')
		    .tickFormat(d3.format(',r'));
		
		  chart.yAxis
		    .axisLabel('Voltage (v)')
		    .tickFormat(d3.format('.02f'));
		
		  d3.select('#chart svg')
		    .datum(data())
		    .transition().duration(500)
		    .call(chart);
		
		  nv.utils.windowResize(chart.update);
		
		  return chart;
		});
	};
	
	return renderUtilChart;
});

module.exports=function(grunt){
	grunt.initConfig({
	  concat: {
	    js:{
	    	src:['app.js','services/weatherService.js','controllers/homeController.js','controllers/mainController.js'],
	    	dest:'build/js/script.js'
	    },
	    css:{
	    	src:['assets/css/*.css'],
	    	dest:'build/css/style.css'
	    },
	  },
	  watch: {
	  		options: {
      			livereload: true,
    		},
		    js: {
		      files: ['app.js','services/weatherService.js','controllers/*.js'],
		      tasks: ['concat:js'],
		    },
		    css: {
		      files: ['assets/css/*.css'],
		      tasks: ['concat:css'],
		    },
		},
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['concat','watch']);
	
};

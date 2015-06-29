'use strict';
 
var
  LIVERELOAD_PORT = 35729,
  lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT }),
  mountFolder = function( connect, dir ) {
    return connect.static(require('path').resolve(dir));
  };
  
module.exports=function(grunt){
	grunt.initConfig({
	  concat: {
	    js:{
	    	src:['app.js','services/*.js','controllers/*.js'],
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
		      files: ['app.js','services/*.js','controllers/*.js'],
		      tasks: ['concat:js'],
		    },
		    css: {
		      files: ['assets/css/*.css'],
		      tasks: ['concat:css'],
		    },
		    html:{
		    	files: ['partials/*.html'],
		    },
		    spec:{
		    	files:['spec/controllers/home_controller_spec.js']
		    }
		},
		

		karma: { 
				unit: { 
					configFile:'karma.conf.js'
				}
		}

	});
	
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['karma','concat','watch']);
	
};

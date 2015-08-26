'use strict';

module.exports = function (grunt) {


  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt);


  grunt.initConfig({

  	watch : {
  		less : {
  			files : ['less/*.less'],
  			tasks : ['less']
  		}
  	},

  	less : {
  		dev : {
  			files : {'css/agency.css':'less/agency.less'},
	  		options : {
	  			sourceMap : true,
	  			compress : true
	  		}
  		}
  	}

  });

}
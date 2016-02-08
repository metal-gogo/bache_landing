/**
 * Created by danie on 2/8/2016.
 */
'use strict';

module.exports = function(grunt) {

	// https://github.com/sindresorhus/load-grunt-tasks
	require('load-grunt-tasks')(grunt);

	// http://gruntjs.com/configuring-tasks#grunt-configuration
	grunt.initConfig({

		/* https://www.npmjs.com/package/grunt-contrib-jshint */
		/* http://jshint.com/docs/options/ */
		jshint: {
			user: ['app/js/**/*.js', '!app/js/jQuery.js'],

			gruntfile: {
				options: {
					node: true
				},
				files: {
					src: ['Gruntfile.js']
				}
			}
		},

		/* https://www.npmjs.com/package/grunt-contrib-imagemin */
		imagemin: {
			target: {
				files: [{
					expand: true,
					cwd: 'app/img/',
					src: ['**/*.{jpg,gif,svg,jpeg,png}'],
					dest: 'dist/img/'
				}]
			}
		},

		// https://www.npmjs.com/package/grunt-contrib-clean
		clean: {
			dist: {
				src: ['dist/']
			}
		},

		// https://www.npmjs.com/package/grunt-contrib-watch
		watch: {
			css_min: {
				files: ['app/css/*.css'],
				tasks: ['uglify_css']
			},
			images: {
				files: ['**/*.{jpg,gif,svg,jpeg,png}'],
				tasks: ['image_min']
			},
			js_min: {
				files: ['app/js/*.js'],
				tasks: ['jsmin']
			}
		},

		cssmin: {
			minify: {
				files: [{
					expand: true,
					cwd: 'app/css/',
					src: ['*.css', '!*.min.css'],
					dest: 'dist/css/',
					ext: '.min.css'
				}]
			}
		},

		uglify: {
			options: {
				mangle: false
			},
		    my_target: {
				files : {
					'dist/js/home.min.js' : 'js/home.js'
				}
			}
		},

		ftpush: {
			build_css: {
				auth: {
					host: 'kokonutstudio.com',
					port: 21,
					authKey: 'bacheLanding'
				},
				src: 'dist/css',
				dest: '/public_html/bachelanding/dist/css',
			},
			build_img: {
				auth: {
					host: 'kokonutstudio.com',
					port: 21,
					authKey: 'bacheLanding'
				},
				src: 'dist/images',
				dest: '/public_html/bachelanding/dist/images'
			},
			build_js: {
				auth: {
					host: 'kokonutstudio.com',
					port: 21,
					authKey: 'bacheLanding'
				},
				src: 'dist/js',
				dest: '/public_html/bachelanding/dist/js'
			}
		}
	});

// Tasks to run

	// default task   > grunt
	grunt.registerTask('default', ['watch']);

	// CSS min task   > grunt
	grunt.registerTask('uglify_css', ['cssmin', 'ftpush:build_css']);

	// JS min task   > grunt
	grunt.registerTask('jsmin', ['uglify', 'ftpush:build_js']);

	// Image optimization task   > grunt
	grunt.registerTask('image_min', ['imagemin', 'ftpush:build_img']);

};
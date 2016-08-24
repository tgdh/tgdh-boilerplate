module.exports = function ( grunt ) {
	/*
	 * Time taken for grunt tasks
	 */
	require( 'time-grunt' )( grunt );


	/*
	 * Load all Grunt tasks
	 */

	require( 'load-grunt-tasks' )( grunt );
	grunt.loadNpmTasks( 'assemble' );


	/*
	 * Define variables for tasks
	 */

	var vars = {
		pkg: grunt.file.readJSON( 'package.json' ),
		assetsFolder: 'assets',
		siteFolder: 'src',
		assetsBuildFolder: 'dev/assets'
//		assetsBuildFolder: '../umbraco-starterkit/UmbracoStarterKit/assets'
	};


	/*
	 * Set location to load grunt tasks form
	 */

	vars.config = {
		src: 'tasks/*.js'
	};

	var configs = require( 'load-grunt-configs' )( grunt, vars );

	grunt.initConfig( configs );


	/*
	 * Define tasks
	 */

	grunt.registerTask( 'dev', [
		'concurrent:dev1',
		'concurrent:dev2',
		'concurrent:dev3',
		'processhtml:dev',
		'pixrem',
		'images:dev',
		'rename',
		'todo',
		'watch',
		'assemble:dev'
	]);

	grunt.registerTask( 'build', [
		'css:build',
		'js:build',
		'images:build',
		'templates:build',
		'todo',
		'humans_txt',
		'assemble'
	]);

	grunt.registerTask( 'templates:build', [
		'processhtml:dist',
		'versioning',
//		'inline',
		'rename',
		'copy:robots'
	]);

	grunt.registerTask( 'css:dev', [
		'sass',
		'autoprefixer',
		'stripmq',
		'pixrem'
	]);

	grunt.registerTask( 'css:build', [
		'sass',
		'autoprefixer',
		'css_mqpacker',
		'stripmq',
		'pixrem',
		'cssmin'
	]);

	grunt.registerTask( 'js:dev', [
		'modernizr',
		'jshint',
		'concat'
	]);

	grunt.registerTask( 'js:build', [
		'js:dev',
		'uglify'
	]);

	grunt.registerTask( 'images:dev', [
		'copy:images'
	]);

	grunt.registerTask( 'images:build', [
		'copy:images',
		'svgmin:svg',
		'svg2png',
		'imageoptim'
	]);

	grunt.registerTask( 'assemble:dev', [
		'assemble'
	]);

};
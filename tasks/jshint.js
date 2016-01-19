'use strict';
module.exports = {
	options: {
		jshintrc: '.jshintrc',
		ignores: [
			'<%= assetsFolder %>/js/enhance.js',
			'<%= assetsFolder %>/js/lib/modernizr.js'
		]
	},
	all: {
		files: {
			src: [
				'Gruntfile.js',
				'<%= assetsFolder %>/js/**/*.js'
			]
		}
	}
};
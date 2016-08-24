'use strict';
module.exports = {
	site: {
		options: {
			data: '<%= siteFolder %>/data/**/*.{json,yml}',
			flatten: true,
			layoutdir: '<%= siteFolder %>/layouts',
			layout: 'default.hbs',
			partials: [ '<%= siteFolder %>/components/**/*.hbs' ]
		},
		src: '<%= siteFolder %>/pages/*.hbs',
		dest: 'dev'
	}
};
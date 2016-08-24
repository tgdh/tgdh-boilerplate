'use strict';
module.exports = {
	head: {
		files: {
			'<%= assetsBuildFolder %>/js/head.js': '<%= assetsBuildFolder %>/js/head.js'
		}
	},
	fulljs: {
		files: {
			'<%= assetsBuildFolder %>/js/main.js': '<%= assetsBuildFolder %>/js/main.js'
		}
	}
};
'use strict';
module.exports = {
	options: {
		grepFiles: [
			'<%= siteFolder %>/Views/Master.html',
		]
	},
	js: {
		src: [
			'<%= assetsBuildFolder %>/js/main.js',
			'<%= assetsBuildFolder %>/js/head.js'
		]
	},
	css: {
		src: [
			'<%= assetsBuildFolder %>/css/style.min.css',
			'<%= assetsBuildFolder %>/css/ie.min.css'
		]
	}
};
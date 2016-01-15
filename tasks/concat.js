'use strict';
module.exports = {
	head: {
		src: [
			'<%= assetsBuildFolder %>/js/lib/modernizr.js',
			'<%= assetsFolder %>/_components/picturefill/dist/picturefill.js',
			'<%= assetsFolder %>/js/lib/lazysizes.config.js',
			'<%= assetsFolder %>/_components/lazysizes/lazysizes.js',
			'<%= assetsFolder %>/_components/lazysizes/plugins/unveilhooks/ls.unveilhooks.js'
		],
		dest: '<%= assetsBuildFolder %>/js/head.js'
	},
	fulljs: {
		src: [
			'<%= assetsFolder %>/js/utils/*js',
			'<%= assetsFolder %>/js/components/*js',
			'<%= assetsFolder %>/js/main.js'
		],
		dest: '<%= assetsBuildFolder %>/js/main.js'
	}
};
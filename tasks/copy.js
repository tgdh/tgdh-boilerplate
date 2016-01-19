'use strict';
module.exports = {
	images: {
		files: [
			{
				expand: true,
				cwd: '<%= assetsFolder %>/img/',
				src: [ '*' ],
				dest: '<%= assetsBuildFolder %>/img'
			}
		]
	},
	components: {
		files: [
			{
				src: '<%= assetsFolder %>_components/html5shiv/dist/html5shiv.min.js',
				dest: '<%= assetsBuildFolder %>/js'
			}
		]
	},
	robots: {
		files: [
			{
				src: '<%= assetsFolder %>/robots.txt',
				dest: '<%= siteFolder %>/robots.txt'
			}
		]
	}
};
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
	robots: {
		files: [
			{
				src: '<%= assetsFolder %>/robots.txt',
				dest: '<%= siteFolder %>/robots.txt'
			}
		]
	}
};
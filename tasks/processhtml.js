'use strict';
module.exports = {
	dist: {
		files: {
			'<%= siteFolder %>/Views/Master.html': ['<%= siteFolder %>/Views/Master.tpl.html']
		}
	},
	dev: {
		files: {
			'<%= siteFolder %>/Views/Master.html': ['<%= siteFolder %>/Views/Master.tpl.html']
		}
	}
};
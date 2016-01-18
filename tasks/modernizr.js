'use strict';
module.exports = {
    dist: {
        'dest' : '<%= assetsBuildFolder %>/js/lib/modernizr.js',
        'parseFiles': true,
        'customTests': [],
        'devFile': false,
        'outputFile': '<%= assetsBuildFolder %>/js/lib/modernizr-output.js',
        'tests': [
            // Tests
        ],
        'options': [
            'setClasses'
        ],
        'files' : {
            'src' : ['<%= assetsFolder %>/js/**/*.js','<%= assetsFolder %>/sass/**/*.scss']
        },
        'uglify': false
    }
};
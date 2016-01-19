'use strict';
module.exports = {
    dist: {
        'dest' : '<%= assetsFolder %>/js/lib/modernizr.js',
        'parseFiles': true,
        'customTests': [],
        'devFile': false,
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
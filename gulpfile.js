/* ===========================================================
	# TODO

    // http://www.andismith.com/blog/2014/05/the-perfect-workflow/

    // JS
        - Compare jshint to lint
        - Look into browserify or webpack

    // Assets/templates
        - Add versioning to Assets

    // Images
        - Need to look at this completely
        - Gulpicon would be good ot look at

=========================================================== */

'use strict';

var paths = {
    assetsFolder: 'assets',
    siteFolder: 'src',
    assetsBuildFolder: 'test-assets'
}

/* ===========================================================
	# Scripts
=========================================================== */

var headScripts = [
    paths.assetsFolder + '/js/lib/modernizr.js',
    paths.assetsFolder + '/js/utils/is-modern.js',
    paths.assetsFolder + '/_components/picturefill/dist/picturefill.js',
    paths.assetsFolder + '<%= assetsFolder %>/js/lib/lazysizes.config.js',
    paths.assetsFolder + '<%= assetsFolder %>/_components/lazysizes/lazysizes.js',
    paths.assetsFolder + '<%= assetsFolder %>/_components/lazysizes/plugins/unveilhooks/ls.unveilhooks.js'
];

var mainScripts = [
    paths.assetsFolder + '/js/components/jquery.tabs.js',
    paths.assetsFolder + '/js/main.js'
];

/* ===========================================================
	# vars
=========================================================== */

var gulp = require('gulp'),
    merge = require('merge-stream'),
    del = require('del'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });

var isProduction = false;

var AUTOPREFIXER_BROWSERS = [
    'last 2 versions',
    '> 1%',
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

/* ===========================================================
	# Tasks
=========================================================== */

// CSS
gulp.task( 'css', function() {
    return gulp.src( paths.assetsFolder + '/sass/*.scss' )
        .pipe( $.newer('.tmp/styles') )
        .pipe( $.sourcemaps.init() )
        .pipe( $.sass({
            precision: 10
        }).on('error', $.sass.logError))
        .pipe( $.autoprefixer( AUTOPREFIXER_BROWSERS ) )
        .pipe( gulp.dest('.tmp/styles') )
        .pipe( $.if( isProduction, $.combineMq({ beautify: false }) ) )
        .pipe( $.if( isProduction, $.cssnano() ) )
//        .pipe( $.size({ title: '[CSS]' }) )
        .pipe( $.sourcemaps.write( './' ) )
        .pipe( gulp.dest( paths.assetsBuildFolder + '/css' ) );
//        .pipe( $.notify({ message: 'CSS: <%= file.relative %>' }) );
});

// @todo js: Compare jshint to lint
// @todo js: look into browserify
gulp.task('js', function() {
    var head = gulp.src( headScripts )
        .pipe( $.newer('.tmp/scripts') )
        .pipe( gulp.dest('.tmp/scripts') )
        .pipe( $.concat('head.js') )
        .pipe( $.if( isProduction, $.uglify({preserveComments: 'some'}) ) )
//        .pipe( $.size({title: '[Head JS]'}) )
        .pipe( gulp.dest( paths.assetsBuildFolder + '/js') );
//        .pipe( $.notify({ message: 'JS: <%= file.relative %>' }) );

    var main = gulp.src( mainScripts )
        .pipe( $.newer('.tmp/scripts') )
        .pipe( $.sourcemaps.init() )
        .pipe( $.sourcemaps.write() )
        .pipe( $.jshint('.jshintrc') )
        .pipe( $.jshint.reporter('default') )
        .pipe( gulp.dest('.tmp/scripts') )
        .pipe( $.concat('main.js') )
        .pipe( $.if( isProduction, $.uglify({preserveComments: 'some'}) ) )
//        .pipe( $.size({title: '[Main JS]'}) )
        .pipe( $.sourcemaps.write('.') )
        .pipe( gulp.dest( paths.assetsBuildFolder + '/js' ) );
//        .pipe( $.notify({ message: 'JS: <%= file.relative %>' }) );

    return merge( head, main );
});

// modernizr
gulp.task('modernizr', function(){
    return gulp.src([
        '!' + paths.assetsFolder + '/js/lib/modernizr.js',
        paths.assetsFolder + '/js/**/*.js',
        paths.assetsFolder + '/sass/**/*.scss'
    ])
    .pipe( $.modernizr({
        'options': ['setClasses']
    }) )
    .pipe( gulp.dest( paths.assetsFolder + '/js/lib') );
});

// Optimize images
// gulp.task('images', function() {
//     return gulp.src( paths.assetsFolder + '/img/**/*')
//         .pipe( $.cache( $.imagemin({
//             progressive: true,
//             interlaced: true
//         })))
//         .pipe( gulp.dest( paths.assetsBuildFolder + '/img') )
//         .pipe( $.size({title: 'images'}) )
//         .pipe( $.notify({ message: 'images task complete' }) );
// });


// @todo svgmin, svg2png,
// compare imageoptim vs imagemin
// imageoptim does png, jpg, gif - only works on mac
// imagemin does svg, jpg, png, gif
gulp.task('images', function() {
  return gulp.src( paths.assetsFolder + '/img/**/*')
    .pipe(
        $.cache(
            $.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })
        )
    )
    .pipe( gulp.dest( paths.assetsBuildFolder + '/img') );
});

// Clear the image cache to force reoptims
gulp.task('clearCache', function (done) {
  return $.cache.clearAll(done);
});

gulp.task('clean', function() {
    return del([
        '.tmp',
        paths.assetsBuildFolder + '/css',
        paths.assetsBuildFolder + '/js',
        paths.assetsBuildFolder + '/img'
    ]);
});

gulp.task( 'watch', function() {
    gulp.watch( paths.assetsFolder + '/sass/**/*.scss', [ 'css' ] );
    gulp.watch( paths.assetsFolder + '/js/**/*.js', [ 'js' ] );
    gulp.watch( paths.assetsFolder + '/images/**/*', ['images'] );
} );


// gulp dev
gulp.task('dev', ['clean'], function() {
    isProduction = false;
    gulp.start('modernizr', 'css', 'js', 'watch');
});

// gulp build
gulp.task('build', ['clean'], function() {
    isProduction = true;
    gulp.start('modernizr', 'css', 'js', 'images');
});

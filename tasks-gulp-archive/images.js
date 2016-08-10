'use strict';
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

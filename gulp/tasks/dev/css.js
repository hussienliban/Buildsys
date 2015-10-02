var gulp       = require('gulp'),
    notify     = require("gulp-notify"),
    postcss    = require('gulp-postcss'),
    cssnext    = require('postcss-cssnext'),
    message    = require('../../notifyMessages').css,
    config     = require('../../config').css.dev,
    psOption   = require('../../config').postcss;



gulp.task('css:dev', function(){
 var processors = [
        cssnext(psOption.cssnext),
    ];
  return gulp.src(config.src)
             .pipe(notify(message))
             .pipe(postcss(processors))
             .pipe(gulp.dest(config.dest));
});

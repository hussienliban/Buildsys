var gulp      = require('gulp'),
    notify    = require("gulp-notify"),
    postcss   = require('gulp-postcss'),
    cssnext   = require('postcss-cssnext'),
    message   = require('../../notifyMessages').css,
    config    = require('../../config').css.dev;



gulp.task('css:dev', function(){
 var processors = [
        cssnext({
            'browers':          ['last 2 version'],
            'customProperties': true,
            'colorFunction':    true,
            'customSelectors':  true,
            'sourcemap':        true,
            'customProperties': true,
            'compress':         false
        })
    ];
  return gulp.src(config.src)
             .pipe(notify(message))
             .pipe(postcss(processors))
             .pipe(gulp.dest(config.dest));
});

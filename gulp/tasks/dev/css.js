var gulp     = require('gulp'),
    postCss  = require('gulp-postcss'),
    cssnext  = require('gulp-cssnext'),
    config   = require('../../config').css.dev;



gulp.task('css:dev', function(){
  console.log('processing css')
  return gulp.src(config.src)
             .pipe(postCss([cssnext]))
             .pipe(gulp.dest(config.dest));
});

var gulp         = require('gulp'),
    notify       = require("gulp-notify"),
    postcss      = require('gulp-postcss'),
    cssnext      = require('postcss-cssnext'),
    cssnano      = require('cssnano'),
    atImport     = require("postcss-import"),
    message      = require('../../notifyMessages').css,
    config       = require('../../config').css.dev,
    pcConfig     = require('../../config').postcss,
    merge        = require('ramda/src/merge');


var postcssPlugins = {
   plugins: [cssnano]
}

var processors = [
    atImport,
    cssnext(merge(postcssPlugins, pcConfig.cssnext)),
    cssnano,
];

gulp.task('css:dev', function(){
  return gulp.src(config.src)
             .pipe(notify(message))
             .pipe(postcss(processors, pcConfig.options))
             .pipe(gulp.dest(config.dest));
});

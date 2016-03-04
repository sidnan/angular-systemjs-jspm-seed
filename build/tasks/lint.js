var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var paths = require('../paths');

gulp.task('lint', function () {
  return gulp.src(paths.sourceJs)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

var gulp = require('gulp');
var paths = require('../paths');

gulp.task('movestyles', function () {
  var srcPaths = [
    './jspm_packages/github/twbs/bootstrap@3.3.5/**/*',
    './jspm_packages/github/angular-ui/bower-ui-grid@3.0.7/ui-grid.css',
    './jspm_packages/github/angular-ui/bower-ui-grid@3.0.7/*.svg',
    './jspm_packages/github/angular-ui/bower-ui-grid@3.0.7/*.ttf',
    './jspm_packages/github/angular-ui/bower-ui-grid@3.0.7/*.woff'
  ];

  gulp.src('./jspm_packages/github/twbs/bootstrap@3.3.5/fonts/*')
  .pipe(gulp.dest(paths.assetsStylesOutput+'/fonts'));

  return gulp.src(srcPaths)
    .pipe(gulp.dest(paths.assetsStylesOutput+'/styles'))
});

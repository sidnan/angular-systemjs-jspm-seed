var gulp = require('gulp');
var Server = require('karma').Server;
var runSequence = require('run-sequence');


gulp.task('karma:start', function() {
  new Server({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true
  }).start();
});

// gulp.task('test', ['build','karma:start']);


gulp.task('test', function() {
    runSequence('build', 'karma:start', function() {
        console.log('End of unit test');
    });
});

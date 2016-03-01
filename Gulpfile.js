'use strict';

var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  watch = require('gulp-watch'),
  livereload = require('gulp-livereload'),
  karma = require('karma').Server,
  gjspm = require('gulp-jspm'),
  sourcemaps = require('gulp-sourcemaps');
 

gulp.task('jspm', function(){
    return gulp.src(['public/src/app.js'])
      .pipe(sourcemaps.init())
      .pipe(gjspm({ selfExecutingBundle: true, verbose: true }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('public/build/'));
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new karma({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

//register nodemon task
gulp.task('nodemon', function () {
  nodemon({ script: './bin/www', env: { 'NODE_ENV': 'development' }})
    .on('restart');
});

gulp.task('prodmon', function () {
  nodemon({ script: './bin/www', env: { 'NODE_ENV': 'production', 'PORT': 8080 }})
    .on('restart');
})

// Rerun the task when a file changes
gulp.task('watch', function() {
    var server = livereload();
    gulp.src(['*.js','routes/*.js', 'public/*.js'], { read: true })
        .pipe(watch({ emit: 'all' }))

    gulp.watch(['*.js','routes/*.js', 'views/**/*.*', 'public/**/*.*']).on('change', function(file) {
      server.changed(file.path);
  });
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['nodemon', 'watch']);
gulp.task('server', ['test', 'default']);
gulp.task('prod', ['jspm', 'prodmon']);
'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

var BUILD = 'build/';

gulp.task('clean', function() {
  return del(BUILD + '*');
});

gulp.task('build', function() {
  return gulp.src(['vendor/**/*.js'])
    .pipe(babel({presets: ['es2015']}))
    .pipe(uglify())
    .pipe(gulp.dest(BUILD));
});

gulp.task('default', ['build']);

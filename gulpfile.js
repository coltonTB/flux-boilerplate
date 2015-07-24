var gulp = require('gulp'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    stylus = require('gulp-stylus'),
    fs = require('fs');

gulp.task('browserify', function(){
  browserify('./js/app.jsx')
    .transform([reactify])
    .bundle()
    .pipe(fs.createWriteStream('./build/bundle.js'))
});

gulp.task('stylus', function(){
  gulp.src('./stylesheets/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['browserify']);
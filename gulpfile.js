var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    stylus = require('gulp-stylus'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream');

var b = watchify(browserify('./js/app.js')); 
b.transform(reactify);
b.on('update', bundle);

function bundle() {
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build'));
}

gulp.task('browserify', bundle);

gulp.task('stylus', function(){
  gulp.src('./stylesheets/main.styl')
    .pipe(watch('./stylesheets/*.styl'))
    .pipe(stylus())
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['browserify', 'stylus']);



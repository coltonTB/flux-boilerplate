var 
  gulp = require('gulp'),
  browserify = require('browserify'),
  reactify = require('reactify'),
  stylus = require('gulp-stylus'),
  watchify = require('watchify'),
  source = require('vinyl-source-stream'),
  b = watchify(browserify('./src/app.js')),

  bundle = function() {
    return b.bundle()
      .on('error', function(err){
        process.stderr.write(err.toString()+"\n")
      })
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./build'));
  };


// Set up watchify events
b.transform(reactify);
b.on('update', function(fileName){
  process.stdout.write('Updating: ' + fileName[0] + "\n")
  bundle();
});


// Define Gulp Tasks
gulp.task('browserify', bundle);

gulp.task('stylus', function() {
  gulp.src('./stylesheets/index.styl')
    .pipe(stylus())
    .pipe(source('style.css'))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['browserify', 'stylus']);



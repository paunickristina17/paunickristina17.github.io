var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');

//var order = require('gulp-order');
//var concat = require('gulp-concat');
//var uglify = require('gulp-uglyfly');

gulp.task('default', function() {
  console.log('Hello Kristina');
});


gulp.task('sass', function() {
  return gulp.src('app/scss/main.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/main/css/'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('minifyCSS', function(){
  return gulp.src('app/main/css/main.css')
   .pipe(rename('main.min.css'))
   .pipe(cleanCSS())
   .pipe(gulp.dest('dist/css'));
})

gulp.task('buildCSS', function() {
  runSequence('sass', 'minifyCSS');
});



//gulp.task('concatJS', function() {
 // gulp.src('app/js_development/**/*.js')
  //.pipe(order([
   // "plugins/slick.js",
   // "**/*.js"
 /* ]))
  .pipe(concat('main.js'))
  .pipe(gulp.dest('app/main/js/'));
});


gulp.task('uglifyJS', function() {
  return gulp.src('app/main/js/main.js')
  .pipe(rename('main.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js/'))
  .pipe(browserSync.stream());
});



gulp.task('buildJS', function() {
  runSequence('concatJS', 'uglifyJS');
});*/


gulp.task('watch', function() {

  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });

 // gulp.watch('app/js_development/**/*.js', ['buildJS']);
  gulp.watch('app/scss/**/*.scss', ['buildCSS']);
  gulp.watch('app/*.html', browserSync.reload);

});




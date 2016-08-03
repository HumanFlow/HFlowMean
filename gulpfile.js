var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');

gulp.task('default', ['watch']);

gulp.task('jshint', function() {
  return gulp.src('*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
}); 

gulp.task('watch', function() {
    gulp.watch('*.js', ['jshint']);
});
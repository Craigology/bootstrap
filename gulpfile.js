var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('build-less', function(){
  return gulp.src('less/bootstrap.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'));
});

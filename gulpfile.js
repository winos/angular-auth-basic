// dependencies
var gulp = require('gulp')
, concat = require('gulp-concat')
, uglify = require('gulp-uglify')
, del = require('del')

gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['build'])
});
/*
- Config demo task
*/
gulp.task('ugly-concat', () => {
  gulp
    .src(['lib/auth/auth-basic.js', 'lib/auth/services/authorizer.js'])
    .pipe(concat('auth-basic.min.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('build/js'))
})

gulp.task('default', ['clean','ugly-concat'])

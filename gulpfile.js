var gulp = require('gulp');
var jshint = require('gulp-jshint');
gulp.task('task-name', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});
var sass = require('gulp-sass');
gulp.task('sass', function() {
    return gulp.src('scss/style.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('css'))
});
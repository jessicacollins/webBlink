var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
   gulp.src('scss/*.scss')
       .pipe(sass())
       .pipe(autoprefixer({
               browsers: ['last 5 versions'],
               cascade: false
           }))
       .pipe(gulp.dest('css'));
});


gulp.task('js', function() {

 gulp.src([
     './bower_components/jquery/dist/jquery.js',
     './bower_components/handlebars/handlebars.js',
 	    'js/*.js'
 	])
   .pipe(concat('build.js'))
   .pipe(uglify())
   .pipe(gulp.dest('js/'));

});

// Rerun the task when a file changes
gulp.task('watch', function() {
gulp.watch(['js/*.js'], ['js']);
gulp.watch(['scss/*.scss'], ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'sass']);
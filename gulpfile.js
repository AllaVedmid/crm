var gulp = require('gulp'),
	less = require('gulp-less'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');


gulp.task('less', function() {  
   return gulp.src('./less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./build/css/'));
});


gulp.task('script', function() {
	return gulp.src('./js/*.js')
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('build/js'));
});

gulp.task('imagemin', function() {  
   return gulp.src('./img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img/'));
});

gulp.task('jshint', function() {
	 return gulp.src('./js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});


gulp.task('watch', function(){
	gulp.watch('./js/*.js', ['script'])
	gulp.watch('./less/*.less' , ['less']);
});



gulp.task('default', ['script', 'less', 'watch', 'jshint']);
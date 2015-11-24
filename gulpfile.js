
var gulp  = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync').create();
livereload = require('gulp-livereload');


gulp.task('default', ['watch']);

gulp.task('copyAllFiles', function() {
 // gulp.src('app/src/**/*').pipe(gulp.dest('app/dist/'));
  gulp.src('app/src/**/*')
  	.pipe(gulp.dest('app/dist/'))
  	.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('app/src/**/*', ['copyAllFiles']);
});


gulp.task('server', function() {
	browserSync.init({
        server: "./app/dist"
    });	
  gulp.watch('app/src/**/*', ['copyAllFiles']);
  gulp.watch("app/src/**/*").on('change', browserSync.reload);
});

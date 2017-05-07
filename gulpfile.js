var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('opn');

gulp.task('connect', function () {
    connect.server({
        root: 'src',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./src/index.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./src/*.*'], ['html']);
    open('http://localhost:8080');
});

gulp.task('default', ['connect', 'watch']);

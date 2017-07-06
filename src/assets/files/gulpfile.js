var gulp = require('gulp');

gulp.task('concat-css', require('./gulp-scripts/concat-css'));
gulp.task('concat-js', require('./gulp-scripts/concat-js'));
gulp.task('build', ['concat-css', 'concat-js']);

gulp.task('default', ['build', 'watch']);

gulp.task('watch', function () {
    gulp.watch(['app/**/*.css', 'assets/css/**/*.css'], ['concat-css']);
    gulp.watch(['app/**/*.js', 'config/**/*/js'], ['concat-js']);
});
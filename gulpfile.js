/**
 * Created by wushuyi on 2015/9/18.
 */
var gulp = require('gulp');
var run = require('gulp-run');

gulp.task('default', ['build-css', 'build-js'], function () {
    run('echo "build...!"').exec();
});

gulp.task('build-css', function () {
    run("npm run build-css").exec();
});

gulp.task('build-js', ['clear-cache'], function () {
    run('npm run build-js').exec();
});

gulp.task('build-cache', ['clear-cache'], function () {
    run('npm run build-cache').exec();
});
gulp.task('clear-cache', function () {
    run('npm run clear-cache').exec();
});
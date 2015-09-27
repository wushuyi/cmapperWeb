/**
 * Created by wushuyi on 2015/9/18.
 */
var gulp = require('gulp');
var run = require('gulp-run');

gulp.task('default', ['build-css', 'build-js'], function () {
    run('echo "ok!').exec();
});

gulp.task('build-css', function () {
    run("lessc --no-color --autoprefix assets/css/style.less > assets/css/style.css").exec();
});

gulp.task('build-js', ['clear-cache'], function () {
    run('jspm bundle ./assets/js/main ./build/build.js --minify --inject').exec();
});

gulp.task('build-cache', ['clear-cache'], function () {
    run('jspm bundle ./bundle.config.js ./cache/cache.js --inject').exec();
});
gulp.task('clear-cache', function () {
    run('jspm unbundle').exec();
});
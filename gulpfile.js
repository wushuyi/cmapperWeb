/**
 * Created by wushuyi on 2015/9/18.
 */
var gulp = require('gulp');
var run = require('gulp-run');

gulp.task('default',['build-css','build-js'], function () {
    run('echo "ok!').exec();
});

gulp.task('build-css', function () {
    run("lessc --no-color --autoprefix assets/css/style.less > assets/css/style.css").exec();
});

gulp.task('build-js', function () {
    run('node ./tools/build.js').exec();
});
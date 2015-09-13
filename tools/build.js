/**
 * Created by wushuyi on 2015/9/13.
 */
var path = require("path");
var Builder = require('systemjs-builder');

var builder = new Builder({
    baseURL: './assets',
    defaultJSExtensions: true,
    transpiler: 'babel',
    main: 'js/main.js',
    map: {
        'Director': 'libs/Director/1.2.8/director.js',
        'jquery': 'libs/jquery/2.1.4/jquery.js',
        'iScroll': 'libs/iScroll/5.1.3/iscroll-lite.js',
        'Hammer': 'libs/hammer.js/2.0.4/hammer.js',
        'EventEmitter': 'libs/EventEmitter/4.2.9/EventEmitter.js',
        'velocity': 'libs/velocity/1.2.2/velocity.js',
        'Swiper': 'libs/Swiper/3.1.2/js/swiper.js',
    }
})
    .build('js/main.js', './assets/outfile.js', {minify: true,})
    .then(function () {
        console.log('Build complete');
    })
    .catch(function (err) {
        console.log('Build error');
        console.log(err);
    });
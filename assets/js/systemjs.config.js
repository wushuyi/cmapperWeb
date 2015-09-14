/**
 * Created by wushuyi on 2015/9/13.
 */
System.config({
    baseURL: 'assets',
    defaultJSExtensions: true,
    transpiler: 'babel',
    main: 'js/main.js',
    paths: {
        'babel': 'libs/babel-core/5.8.9/browser.js',
    },
    map: {
        'Director': 'libs/Director/1.2.8/director.js',
        'jquery': 'libs/jquery/2.1.4/jquery.js',
        'iScroll': 'libs/iScroll/5.1.3/iscroll-lite.js',
        'Hammer': 'libs/hammer.js/2.0.4/hammer.js',
        'EventEmitter': 'libs/EventEmitter/4.2.9/EventEmitter.js',
        'velocity': 'libs/velocity/1.2.2/velocity.js',
        'Swiper': 'libs/Swiper/3.1.2/js/swiper.js',
        'lodash': 'libs/lodash.js/3.9.3/lodash.js',
    }
});

System.import('js/main.js');
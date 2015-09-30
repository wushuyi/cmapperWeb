System.register(['Modernizr', 'holder', 'jquery', './router/index.js', './utils/env.js', 'device', './utils/androidInputBug.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    //import './style.js';
    'use strict';

    var $, register_all, router, env, device, androidInputBug;
    return {
        setters: [function (_Modernizr) {}, function (_holder) {}, function (_jquery) {
            $ = _jquery['default'];
        }, function (_routerIndexJs) {
            register_all = _routerIndexJs['default'];
            router = _routerIndexJs.router;
        }, function (_utilsEnvJs) {
            env = _utilsEnvJs['default'];
        }, function (_device) {
            device = _device['default'];
        }, function (_utilsAndroidInputBugJs) {
            androidInputBug = _utilsAndroidInputBugJs['default'];
        }],
        execute: function () {

            $('#nav, .prevent_touch').on('touchstart', function (evt) {
                evt.preventDefault();
            });
            register_all();
            router.init('/gftj');

            if (device.android()) {
                androidInputBug();
            }

            window.env = env;
        }
    };
});

//# sourceMappingURL=main.js.map
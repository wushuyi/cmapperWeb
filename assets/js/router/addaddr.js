System.register(['../page/addaddr.js', '../utils/env.js', './utils.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var AddAddrPage, env, isModal;

    function register(router) {
        var route = '/add_addr';
        var page = 'add_addr_page';

        router.on(route, function () {
            if (env[page]) {
                return false;
            }
            //env.mainlayout && env.mainlayout.viewMoveDefault();
            env[page] = new AddAddrPage();
        });
        router.on('after', route, function () {
            if (isModal()) {
                return false;
            }
            env[page].destroy();
            delete env[page];
        });
    }

    return {
        setters: [function (_pageAddaddrJs) {
            AddAddrPage = _pageAddaddrJs['default'];
        }, function (_utilsEnvJs) {
            env = _utilsEnvJs['default'];
        }, function (_utilsJs) {
            isModal = _utilsJs.isModal;
        }],
        execute: function () {
            _export('default', register);
        }
    };
});

//# sourceMappingURL=addaddr.js.map
System.register(['../page/addaddr', '../utils/env', './utils'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var AddAddrPage, env, isModal, isPropPage;

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
            if (isModal() || isPropPage()) {
                return false;
            }
            env[page].destroy();
            delete env[page];
        });
    }

    return {
        setters: [function (_pageAddaddr) {
            AddAddrPage = _pageAddaddr['default'];
        }, function (_utilsEnv) {
            env = _utilsEnv['default'];
        }, function (_utils) {
            isModal = _utils.isModal;
            isPropPage = _utils.isPropPage;
        }],
        execute: function () {
            _export('default', register);
        }
    };
});

//# sourceMappingURL=addaddr.js.map
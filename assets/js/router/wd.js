System.register(['../page/wd', '../utils/env', './utils'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var WdPage, env, isModal, isPropPage;

    function register(router) {
        var route = '/wd';
        var page = 'wd_page';

        router.on(route, function () {
            if (env[page]) {
                return false;
            }
            env.mainlayout && env.mainlayout.viewMoveDefault();
            env[page] = new WdPage();
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
        setters: [function (_pageWd) {
            WdPage = _pageWd['default'];
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

//# sourceMappingURL=wd.js.map
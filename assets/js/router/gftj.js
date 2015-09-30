System.register(['../page/gftj', '../utils/env', './utils'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var GftjPage, env, isModal, isPropPage;

    function register(router) {
        var route = '/gftj';
        var page = 'gftj_page';

        router.on(route, function (id) {
            if (env[page]) {
                return false;
            }
            env.mainlayout && env.mainlayout.viewMoveDefault();
            env[page] = new GftjPage();
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
        setters: [function (_pageGftj) {
            GftjPage = _pageGftj['default'];
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

//# sourceMappingURL=gftj.js.map
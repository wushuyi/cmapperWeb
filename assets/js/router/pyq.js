System.register(['../page/pyq.js', '../utils/env.js', './utils.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var PyqPage, env, isModal;

    function register(router) {
        var route = '/pyq';
        var page = 'pyq_page';

        router.on(route, function () {
            if (env[page]) {
                return false;
            }
            env.mainlayout && env.mainlayout.viewMoveDefault();
            env[page] = new PyqPage();
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
        setters: [function (_pagePyqJs) {
            PyqPage = _pagePyqJs['default'];
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

//# sourceMappingURL=pyq.js.map
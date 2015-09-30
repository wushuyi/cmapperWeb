System.register(['../page/role', '../utils/env', './utils'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/18.
     */
    'use strict';

    var RolePage, env, isModal, isPropPage;

    function register(router) {
        var route = '/role/:id';
        var page = 'role_page';

        router.on(route, function (id) {
            if (env[page]) {
                return false;
            }
            env[page] = new RolePage({
                id: id
            });
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
        setters: [function (_pageRole) {
            RolePage = _pageRole['default'];
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

//# sourceMappingURL=role.js.map
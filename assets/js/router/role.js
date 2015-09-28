System.register(['../page/role.js', '../utils/env.js', './utils.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/18.
     */
    'use strict';

    var RolePage, env, isModal;

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
            if (isModal()) {
                return false;
            }
            env[page].destroy();
            delete env[page];
        });
    }

    return {
        setters: [function (_pageRoleJs) {
            RolePage = _pageRoleJs['default'];
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

//# sourceMappingURL=role.js.map
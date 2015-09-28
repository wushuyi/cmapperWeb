System.register(['../page/maplist.js', '../utils/env.js', './utils.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/14.
     */
    'use strict';

    var MapListPage, env, isModal;

    function register(router) {
        var route = 'mapinfo/list/:id';
        var page = 'mapinfo_list_page';

        router.on(route, function (id) {
            if (env[page]) {
                return false;
            }
            env[page] = new MapListPage({
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
        setters: [function (_pageMaplistJs) {
            MapListPage = _pageMaplistJs['default'];
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

//# sourceMappingURL=maplist.js.map
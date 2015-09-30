System.register(['../page/maplist', '../utils/env', './utils'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/14.
     */
    'use strict';

    var MapListPage, env, isModal, isPropPage;

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
            if (isModal() || isPropPage()) {
                return false;
            }
            env[page].destroy();
            delete env[page];
        });
    }

    return {
        setters: [function (_pageMaplist) {
            MapListPage = _pageMaplist['default'];
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

//# sourceMappingURL=maplist.js.map
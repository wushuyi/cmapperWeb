System.register(['../page/mapinfo', '../utils/env', './utils'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/14.
     */
    'use strict';

    var MapInfoPage, env, isModal, isPropPage;

    function register(router) {
        var route = '/mapinfo/archives/:id';
        var page = 'mapinfo_archives_page';

        router.on(route, function (id) {
            if (env[page]) {
                return false;
            }
            env[page] = new MapInfoPage({
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
        setters: [function (_pageMapinfo) {
            MapInfoPage = _pageMapinfo['default'];
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

//# sourceMappingURL=mapinfo.js.map
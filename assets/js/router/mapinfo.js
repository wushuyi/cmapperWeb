System.register(['../page/mapinfo.js', '../utils/env.js', './utils.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/14.
     */
    'use strict';

    var MapInfoPage, env, isModal;

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
            if (isModal()) {
                return false;
            }
            env[page].destroy();
            delete env[page];
        });
    }

    return {
        setters: [function (_pageMapinfoJs) {
            MapInfoPage = _pageMapinfoJs['default'];
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

//# sourceMappingURL=mapinfo.js.map
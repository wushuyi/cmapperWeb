System.register(['../page/follow.js', '../utils/env.js', './utils.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var FollowPage, env, isModal;

    function register(router) {
        var route = '/follow/:type/:id';
        var page = 'follow_page';

        router.on(route, function (id) {
            if (env[page]) {
                return false;
            }
            env[page] = new FollowPage({
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
        setters: [function (_pageFollowJs) {
            FollowPage = _pageFollowJs['default'];
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

//# sourceMappingURL=follow.js.map
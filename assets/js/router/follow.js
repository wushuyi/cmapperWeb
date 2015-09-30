System.register(['../page/follow', '../utils/env', './utils'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var FollowPage, env, isModal, isPropPage;

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
            if (isModal() || isPropPage()) {
                return false;
            }
            env[page].destroy();
            delete env[page];
        });
    }

    return {
        setters: [function (_pageFollow) {
            FollowPage = _pageFollow['default'];
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

//# sourceMappingURL=follow.js.map
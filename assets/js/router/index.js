System.register(['director', './gftj', './pyq', './fxdt', './wd', './mapinfo', './maplist', './modal', './prop-page', './role', './follow', './addaddr', './directions', '../utils/env', './utils'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var Director, register_gftj, register_pyq, register_fxdt, register_wd, register_mapinfo, register_maplist, register_modal, register_prop_page, register_role, register_follow, register_addaddr, register_directions, env, routeHistory, getRouter, isModal, router;

    function register_all() {
        register_gftj(router);
        register_pyq(router);
        register_fxdt(router);
        register_wd(router);
        register_mapinfo(router);
        register_maplist(router);
        register_modal(router);
        register_prop_page(router);
        register_role(router);
        register_follow(router);
        register_addaddr(router);
        register_directions(router);
    }

    return {
        setters: [function (_director) {
            Director = _director['default'];
        }, function (_gftj) {
            register_gftj = _gftj['default'];
        }, function (_pyq) {
            register_pyq = _pyq['default'];
        }, function (_fxdt) {
            register_fxdt = _fxdt['default'];
        }, function (_wd) {
            register_wd = _wd['default'];
        }, function (_mapinfo) {
            register_mapinfo = _mapinfo['default'];
        }, function (_maplist) {
            register_maplist = _maplist['default'];
        }, function (_modal) {
            register_modal = _modal['default'];
        }, function (_propPage) {
            register_prop_page = _propPage['default'];
        }, function (_role) {
            register_role = _role['default'];
        }, function (_follow) {
            register_follow = _follow['default'];
        }, function (_addaddr) {
            register_addaddr = _addaddr['default'];
        }, function (_directions) {
            register_directions = _directions['default'];
        }, function (_utilsEnv) {
            env = _utilsEnv['default'];
        }, function (_utils) {
            routeHistory = _utils.routeHistory;
            getRouter = _utils.getRouter;
            isModal = _utils.isModal;
        }],
        execute: function () {
            router = new Director.Router();

            _export('router', router);

            router.configure({
                before: function before() {
                    routeHistory.push(getRouter());
                    window.routeHistory = routeHistory;
                }
            });
            env.router = router;
            env.first_page = '/gftj';
            _export('default', register_all);
        }
    };
});

//# sourceMappingURL=index.js.map
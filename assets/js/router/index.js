System.register(['director', './gftj.js', './pyq.js', './fxdt.js', './wd.js', './mapinfo.js', './maplist.js', './modal.js', './role.js', './follow.js', './addaddr.js', '../utils/env.js', './utils.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var Director, register_gftj, register_pyq, register_fxdt, register_wd, register_mapinfo, register_maplist, register_modal, register_role, register_follow, register_addaddr, env, routeHistory, getRouter, isModal, router;

    function register_all() {
        register_gftj(router);
        register_pyq(router);
        register_fxdt(router);
        register_wd(router);
        register_mapinfo(router);
        register_maplist(router);
        register_modal(router);
        register_role(router);
        register_follow(router);
        register_addaddr(router);
    }

    return {
        setters: [function (_director) {
            Director = _director['default'];
        }, function (_gftjJs) {
            register_gftj = _gftjJs['default'];
        }, function (_pyqJs) {
            register_pyq = _pyqJs['default'];
        }, function (_fxdtJs) {
            register_fxdt = _fxdtJs['default'];
        }, function (_wdJs) {
            register_wd = _wdJs['default'];
        }, function (_mapinfoJs) {
            register_mapinfo = _mapinfoJs['default'];
        }, function (_maplistJs) {
            register_maplist = _maplistJs['default'];
        }, function (_modalJs) {
            register_modal = _modalJs['default'];
        }, function (_roleJs) {
            register_role = _roleJs['default'];
        }, function (_followJs) {
            register_follow = _followJs['default'];
        }, function (_addaddrJs) {
            register_addaddr = _addaddrJs['default'];
        }, function (_utilsEnvJs) {
            env = _utilsEnvJs['default'];
        }, function (_utilsJs) {
            routeHistory = _utilsJs.routeHistory;
            getRouter = _utilsJs.getRouter;
            isModal = _utilsJs.isModal;
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
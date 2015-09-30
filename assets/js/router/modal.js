System.register(['../page/modal.js', '../utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/17.
     */
    'use strict';

    var ModalManage, env;

    function register(router) {

        {
            (function () {
                var route = '/modal/select-map/:id';
                var page = 'select_map_modal';
                router.on(route, function (id) {
                    env[page] = new ModalManage({
                        id: id,
                        modal: 'selectMap'
                    });
                });
                router.on('after', route, function () {
                    env[page].destory();
                    delete env[page];
                });
            })();
        }

        {
            (function () {
                var route = '/modal/add-addr-info/:id';
                var page = 'add_addr_info_modal';
                router.on(route, function (id) {
                    env[page] = new ModalManage({
                        id: id,
                        modal: 'addAddrInfo'
                    });
                });
                router.on('after', route, function () {
                    env[page].destory();
                    delete env[page];
                });
            })();
        }

        {
            (function () {
                var route = '/modal/create-map';
                var page = 'create_map_modal';
                router.on(route, function () {
                    env[page] = new ModalManage({
                        modal: 'createMap'
                    });
                });
                router.on('after', route, function () {
                    env[page].destory();
                    delete env[page];
                });
            })();
        }

        {
            (function () {
                var route = '/modal/croppe';
                var page = 'croppe_modal';
                router.on(route, function () {
                    env[page] = new ModalManage({
                        modal: 'cropper'
                    });
                });
                router.on('after', route, function () {
                    env[page].destory();
                    delete env[page];
                });
            })();
        }
    }

    return {
        setters: [function (_pageModalJs) {
            ModalManage = _pageModalJs['default'];
        }, function (_utilsEnvJs) {
            env = _utilsEnvJs['default'];
        }],
        execute: function () {
            _export('default', register);
        }
    };
});

//# sourceMappingURL=modal.js.map
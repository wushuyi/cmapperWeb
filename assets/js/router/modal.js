/**
 * Created by wushuyi on 2015/9/17.
 */
import {default as ModalManage} from '../page/modal.js'
import env from '../utils/env.js'

function register(router) {
    {
        let route = '/modal/set';
        let page = 'set_modal';
        router.on(route, function () {
            env[page] = new ModalManage({
                modal: 'set',
            });
        });
        router.on('after', route, function () {
            env[page].destory();
            delete env[page];
        });
    }

    {
        let route = '/modal/address/:id';
        let page = 'address_modal';
        router.on(route, function (id) {
            env[page] = new ModalManage({
                id: id,
                modal: 'address',
            });
        });
        router.on('after', route, function () {
            env[page].destory();
            delete env[page];
        });
    }

    {
        let route = '/modal/select-map/:id';
        let page = 'select_map_modal';
        router.on(route, function (id) {
            env[page] = new ModalManage({
                id: id,
                modal: 'selectMap',
            });
        });
        router.on('after', route, function () {
            env[page].destory();
            delete env[page];
        });
    }

    {
        let route = '/modal/add-addr-info/:id';
        let page = 'add_addr_info_modal';
        router.on(route, function (id) {
            env[page] = new ModalManage({
                id: id,
                modal: 'addAddrInfo',
            });
        });
        router.on('after', route, function () {
            env[page].destory();
            delete env[page];
        });
    }

    {
        let route = '/modal/create-map';
        let page = 'create_map_modal';
        router.on(route, function () {
            env[page] = new ModalManage({
                modal: 'createMap',
            });
        });
        router.on('after', route, function () {
            env[page].destory();
            delete env[page];
        });
    }

}

export default register;
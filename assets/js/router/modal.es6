/**
 * Created by wushuyi on 2015/9/17.
 */
import {default as ModalManage} from '../page/modal.js'
import env from '../utils/env.js'

function register(router) {

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

    {
        let route = '/modal/croppe';
        let page = 'croppe_modal';
        router.on(route, function () {
            env[page] = new ModalManage({
                modal: 'cropper',
            });
        });
        router.on('after', route, function () {
            env[page].destory();
            delete env[page];
        });
    }
}

export default register;
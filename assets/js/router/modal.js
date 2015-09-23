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

}

export default register;
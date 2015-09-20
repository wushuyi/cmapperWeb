/**
 * Created by wushuyi on 2015/9/17.
 */
import {default as ModalManage} from '../page/modal.js'
import env from '../utils/env.js'

function register(router) {
    let route = '/modal/set';
    router.on(route, function () {
        env.modal = new ModalManage({
            modal: 'set',
            close_router: env.page_status && env.page_status.now || '/wd'
        });
        //env.wd_page = new WdPage();
    });
    router.on('after', 'route', function () {
        //env.wd_page.destroy();
        //delete env.wd_page;
    });

    route = '/modal/address/:id';
    router.on(route, function (id) {
        env.modal = new ModalManage({
            id: id,
            modal: 'address',
            close_router: env.page_status && env.page_status.now || '/wd'
        });
        //env.wd_page = new WdPage();
    });
    router.on('after', 'route', function () {
        //env.wd_page.destroy();
        //delete env.wd_page;
    });
}

export default register;
/**
 * Created by wushuyi on 2015/9/17.
 */
import {default as ModalManage} from '../page/modal.js'
import env from '../utils/env.js'

function register(router) {
    let route = '/modal/:page';
    router.on(route, function (page) {
        env.modal = new ModalManage({
            modal: page,
            close_router: env.page_status &&  env.page_status.now || '/wd'
        });
        //env.wd_page = new WdPage();
    });
    router.on('after', 'route', function () {
        //env.wd_page.destroy();
        //delete env.wd_page;
    });
}

export default register;
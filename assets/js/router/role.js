/**
 * Created by wushuyi on 2015/9/18.
 */
import {default as RolePage} from '../page/role.js'
import env from '../utils/env.js'

function register(router) {
    let route = '/role/:id';
    router.on('before', route, function () {
        env.page_status = env.page_status || {};
        env.page_status.now = route;
    });
    router.on(route, function () {
        if (env.wd_page) {
            return false;
        }
        env.wd_page = new RolePage();
    });
    router.on('after', route, function () {
        if (env.router.getRoute(0) === 'modal') {
            return false;
        }
        env.wd_page.destroy();
        delete env.wd_page;
    });
}

export default register;
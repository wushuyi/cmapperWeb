/**
 * Created by wushuyi on 2015/9/13.
 */
import {default as GftjPage} from '../page/gftj.js'
import env from '../utils/env.js'

function register(router) {
    let route = '/gftj';
    router.on('before', route, function () {
        env.page_status = env.page_status || {};
        env.page_status.now = route;
    });
    router.on(route, function () {
        env.gftj_page = new GftjPage();
    });
    router.on('after', route, function () {
        env.page_status = env.page_status || {};
        env.page_status.prve = route;
        env.gftj_page.destroy();
        delete env.gftj_page;
    });
}

export default register;
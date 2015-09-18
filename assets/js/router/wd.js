/**
 * Created by wushuyi on 2015/9/13.
 */
import {default as WdPage} from '../page/wd.js'
import env from '../utils/env.js'
import {getRouter} from './utils.js'

function register(router) {
    let route = '/wd';
    router.on('before', route, function () {
        env.page_status = env.page_status || {};
        env.page_status.now = getRouter();
    });
    router.on(route, function () {
        if(env.wd_page){
            return false;
        }
        env.wd_page = new WdPage();
    });
    router.on('after', route, function () {
        env.page_status = env.page_status || {};
        env.page_status.prve = route;
        if(env.router.getRoute(0) === 'modal'){
            return false;
        }
        env.wd_page.destroy();
        delete env.wd_page;
    });
}

export default register;
/**
 * Created by wushuyi on 2015/9/13.
 */
import {default as GftjPage} from '../page/gftj.js'
import env from '../utils/env.js'
import {routeHistory, getRouter} from './utils.js'

function register(router) {
    let route = '/gftj';
    let page = 'gftj_page';

    router.on(route, function (id) {
        if (env[page]) {
            return false;
        }
        env[page] = new GftjPage();
    });
    router.on('after', route, function () {
        env[page].destroy();
        delete env[page];
    });
}

export default register;
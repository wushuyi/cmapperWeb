/**
 * Created by wushuyi on 2015/9/13.
 */
import {default as WdPage} from '../page/wd.js'
import env from '../utils/env.js'
import {isModal} from './utils.js'

function register(router) {
    let route = '/wd';
    let page = 'wd_page';

    router.on(route, function () {
        if (env[page]) {
            return false;
        }
        env[page] = new WdPage();
    });
    router.on('after', route, function () {
        if(isModal()){
            return false;
        }
        env[page].destroy();
        delete env[page];
    });
}

export default register;
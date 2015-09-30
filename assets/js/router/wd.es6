/**
 * Created by wushuyi on 2015/9/13.
 */
import {default as WdPage} from '../page/wd'
import env from '../utils/env'
import {isModal, isPropPage} from './utils'

function register(router) {
    let route = '/wd';
    let page = 'wd_page';

    router.on(route, function () {
        if (env[page]) {
            return false;
        }
        env.mainlayout && env.mainlayout.viewMoveDefault();
        env[page] = new WdPage();
    });
    router.on('after', route, function () {
        if (isModal() || isPropPage()) {
            return false;
        }
        env[page].destroy();
        delete env[page];
    });
}

export default register;
/**
 * Created by wushuyi on 2015/9/13.
 */
import {default as GftjPage} from '../page/gftj'
import env from '../utils/env'
import {isModal, isPropPage} from './utils'

function register(router) {
    let route = '/gftj';
    let page = 'gftj_page';

    router.on(route, function (id) {
        if (env[page]) {
            return false;
        }
        env.mainlayout && env.mainlayout.viewMoveDefault();
        env[page] = new GftjPage();
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
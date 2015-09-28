/**
 * Created by wushuyi on 2015/9/13.
 */
import {default as PyqPage} from '../page/pyq.js'
import env from '../utils/env.js'
import {isModal} from './utils.js'

function register(router) {
    let route = '/pyq';
    let page = 'pyq_page';

    router.on(route, function () {
        if (env[page]) {
            return false;
        }
        env.mainlayout && env.mainlayout.viewMoveDefault();
        env[page] = new PyqPage();
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
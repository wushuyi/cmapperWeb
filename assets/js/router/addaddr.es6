/**
 * Created by wushuyi on 2015/9/13.
 */
import {default as AddAddrPage} from '../page/addaddr.js'
import env from '../utils/env.js'
import {isModal} from './utils.js'

function register(router) {
    let route = '/add_addr';
    let page = 'add_addr_page';

    router.on(route, function () {
        if (env[page]) {
            return false;
        }
        //env.mainlayout && env.mainlayout.viewMoveDefault();
        env[page] = new AddAddrPage();
    });
    router.on('after', route, function () {
        if (isModal()) {
            return false;
        }
        env[page].destroy();
        delete env[page];
    });
}

export default register;
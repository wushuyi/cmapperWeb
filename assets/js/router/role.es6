/**
 * Created by wushuyi on 2015/9/18.
 */
import {default as RolePage} from '../page/role.js'
import env from '../utils/env.js'
import {isModal} from './utils.js'

function register(router) {
    let route = '/role/:id';
    let page = 'role_page';

    router.on(route, function (id) {
        if (env[page]) {
            return false;
        }
        env[page] = new RolePage({
            id: id,
        });
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
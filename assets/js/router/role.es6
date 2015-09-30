/**
 * Created by wushuyi on 2015/9/18.
 */
import {default as RolePage} from '../page/role'
import env from '../utils/env'
import {isModal, isPropPage} from './utils'

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
        if (isModal() || isPropPage()) {
            return false;
        }
        env[page].destroy();
        delete env[page];
    });
}

export default register;
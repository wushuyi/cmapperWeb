/**
 * Created by wushuyi on 2015/9/18.
 */
import {default as RolePage} from '../page/role.js'
import env from '../utils/env.js'
import {pageStatus, getRouter} from './utils.js'

function register(router) {
    let route = '/role/:id';
    router.on('before', route, function () {
        pageStatus.set('now', getRouter());
    });
    router.on(route, function (id) {
        if (env.wd_role) {
            return false;
        }
        env.wd_role = new RolePage({
            id: id,
            close_router: pageStatus.get('prve')
        });
    });
    router.on('after', route, function () {
        pageStatus.set('prve', pageStatus.get('now'));
        env.wd_role.destroy();
        delete env.wd_role;
    });
}

export default register;
/**
 * Created by wushuyi on 2015/9/13.
 */
import {default as FollowPage} from '../page/follow'
import env from '../utils/env'
import {isModal, isPropPage} from './utils'

function register(router) {
    let route = '/follow/:type/:id';
    let page = 'follow_page';

    router.on(route, function (id) {
        if (env[page]) {
            return false;
        }
        env[page] = new FollowPage({
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
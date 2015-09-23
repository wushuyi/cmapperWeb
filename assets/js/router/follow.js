/**
 * Created by wushuyi on 2015/9/13.
 */
import {default as FollowPage} from '../page/follow.js'
import env from '../utils/env.js'
import {routeHistory} from './utils.js'

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
        env[page].destroy();
        delete env[page];
    });
}

export default register;
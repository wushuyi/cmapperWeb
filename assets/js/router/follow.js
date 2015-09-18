/**
 * Created by wushuyi on 2015/9/13.
 */
import {default as FollowPage} from '../page/follow.js'
import env from '../utils/env.js'
import {pageStatus, getRouter} from './utils.js'

function register(router) {
    let route = '/follow/:type/:id';
    router.on('before', route, function () {
        pageStatus.set('now', getRouter());
    });
    router.on(route, function (id) {
        if (env.follow_page) {
            return false;
        }
        env.follow_page = new FollowPage({
            id: id,
            close_router: pageStatus.get('prve')
        });
    });
    router.on('after', route, function () {
        pageStatus.set('prve', pageStatus.get('now'));
        env.follow_page.destroy();
        delete env.follow_page;
    });
}

export default register;
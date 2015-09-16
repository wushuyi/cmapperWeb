/**
 * Created by wushuyi on 2015/9/14.
 */
import {default as MapListPage} from '../page/maplist.js'
import env from '../utils/env.js'

function register(router) {
    let route = 'mapinfo/list/:id';
    router.on(route, function () {
        env.page_status = env.page_status || {};
        env.page_status.now = route;
    });
    router.on(route, function (id) {
        env.maplist_page = new MapListPage({
            id: id,
            close_route: env.mapinfo_close_route
        });
    });
    router.on('after', route, function () {
        env.maplist_page.destroy();
        delete env.maplist_page;
    });
}

export default register;
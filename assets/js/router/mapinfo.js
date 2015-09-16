/**
 * Created by wushuyi on 2015/9/14.
 */
import {default as MapInfoPage} from '../page/mapinfo.js'
import env from '../utils/env.js'

function register(router) {
    let route = '/mapinfo/archives/:id';
    router.on(route, function () {
        env.page_status = env.page_status || {};
        env.page_status.now = route;
    });
    router.on(route, function (id) {
        env.mapinfo_close_route = env.page_status.prve;
        env.mapinfo_page = new MapInfoPage({
            id: id,
            close_route: env.mapinfo_close_route
        });
    });
    router.on('after', route, function () {
        env.mapinfo_page.destroy();
        delete env.mapinfo_page;
    });
}

export default register;
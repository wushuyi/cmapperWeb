/**
 * Created by wushuyi on 2015/9/14.
 */
import {default as MapInfoPage} from '../page/mapinfo.js'
import env from '../utils/env.js'

function register(router) {
    let route = '/mapinfo/archives/:id';
    router.on(route, function (id) {
        env.mapinfo_page = new MapInfoPage({
            id: id,
        });
    });
    router.on('after', route, function () {
        env.mapinfo_page.destroy();
        delete env.mapinfo_page;
    });
}

export default register;
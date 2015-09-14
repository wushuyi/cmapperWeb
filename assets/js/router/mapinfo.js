/**
 * Created by wushuyi on 2015/9/14.
 */
import {default as MapInfoPage} from '../page/mapinfo.js'
import env from '../utils/env.js'

function register(router) {
    router.on('/mapinfo', function () {
        env.mapinfo_page = new MapInfoPage();
    });
    router.on('after', '/mapinfo', function () {
        env.mapinfo_page.destroy();
        delete env.mapinfo_page;
    });
}

export default register;
/**
 * Created by wushuyi on 2015/9/13.
 */
import {default as WdPage} from '../page/wd.js'
import env from '../utils/env.js'

function register(router) {
    router.on('/wd', function () {
        env.wd_page = new WdPage();
    });
    router.on('after', '/wd', function () {
        env.wd_page.destroy();
        delete env.wd_page;
    });
}

export default register;
/**
 * Created by wushuyi on 2015/9/13.
 */
import {default as GftjPage} from '../page/gftj.js'
import env from '../utils/env.js'

function register(router) {
    router.on('/gftj', function () {
        env.gftj_page = new GftjPage();
    });
    router.on('after', '/gftj', function () {
        env.gftj_page.destroy();
        delete env.gftj_page;
    });
}

export default register;
/**
 * Created by wushuyi on 2015/9/13.
 */
import {default as GftjPage} from '../page/pyq.js'
import env from '../utils/env.js'

function register(router) {
    router.on('/pyq', function () {
        env.pyq_page = new GftjPage();
    });
    router.on('after', '/pyq', function () {
        env.pyq_page.destroy();
        delete env.pyq_page;
    });
}

export default register;
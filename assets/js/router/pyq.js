/**
 * Created by wushuyi on 2015/9/13.
 */
import {default as PyqPage} from '../page/pyq.js'
import env from '../utils/env.js'

function register(router) {
    router.on('/pyq', function () {
        env.pyq_page = new PyqPage();
    });
    router.on('after', '/pyq', function () {
        env.pyq_page.destroy();
        delete env.pyq_page;
    });
}

export default register;
/**
 * Created by wushuyi on 2015/9/13.
 */
import {default as FxdtPage} from '../page/fxdt.js'
import env from '../utils/env.js'

function register(router) {
    router.on('/fxdt', function () {
        env.fxdt_page = new FxdtPage();
    });
    router.on('after', '/fxdt', function () {
        env.fxdt_page.destroy();
        delete env.fxdt_page;
    });
}

export default register;
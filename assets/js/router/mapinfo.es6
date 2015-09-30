/**
 * Created by wushuyi on 2015/9/14.
 */
import {default as MapInfoPage} from '../page/mapinfo'
import env from '../utils/env'
import {isModal, isPropPage} from './utils'

function register(router) {
    let route = '/mapinfo/archives/:id';
    let page = 'mapinfo_archives_page';

    router.on(route, function (id) {
        if (env[page]) {
            return false;
        }
        env[page] = new MapInfoPage({
            id: id,
        });
    });
    router.on('after', route, function () {
        if (isModal() || isPropPage()) {
            return false;
        }
        env[page].destroy();
        delete env[page];
    });
}

export default register;
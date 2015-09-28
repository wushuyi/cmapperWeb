/**
 * Created by wushuyi on 2015/9/14.
 */
import {default as MapListPage} from '../page/maplist.js'
import env from '../utils/env.js'
import {isModal} from './utils.js'

function register(router) {
    let route = 'mapinfo/list/:id';
    let page = 'mapinfo_list_page';

    router.on(route, function (id) {
        if (env[page]) {
            return false;
        }
        env[page] = new MapListPage({
            id: id,
        });
    });
    router.on('after', route, function () {
        if(isModal()){
            return false;
        }
        env[page].destroy();
        delete env[page];
    });
}

export default register;
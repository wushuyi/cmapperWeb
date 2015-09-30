/**
 * Created by wushuyi on 2015/9/30.
 */
/**
 * Created by wushuyi on 2015/9/17.
 */
import {default as PageManage} from '../page/prop-page'
import env from '../utils/env'
import {isModal} from './utils'

function register(router) {
    {
        let route = '/page/set';
        let page = 'set_page';
        router.on(route, function () {
            console.log('run set');
            env[page] = new PageManage({
                modal: 'set'
            });
        });
        router.on('after', route, function () {
            if(isModal()){
                return false;
            }
            env[page].destory();
            delete env[page];
        });
    }

    {
        let route = '/page/address/:id';
        let page = 'address_page';
        router.on(route, function (id) {
            env[page] = new PageManage({
                id: id,
                modal: 'address',
            });
        });
        router.on('after', route, function () {
            if(isModal()){
                return false;
            }
            env[page].destory();
            delete env[page];
        });
    }


}

export default register;
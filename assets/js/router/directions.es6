/**
 * Created by wushuyi on 2015/9/30.
 */
import {default as DirectionsPage} from '../page/directions'
import env from '../utils/env'
import {isModal} from './utils'

function register(router) {
    let route = '/directions';
    let page = 'directions_page';

    router.on(route, function () {
        if (env[page]) {
            return false;
        }
        env[page] = new DirectionsPage();
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
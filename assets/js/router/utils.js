/**
 * Created by wushuyi on 2015/9/18.
 */
import {default as env} from '../utils/env.js'

export function getRouter() {
    let path = env.router.getRoute();
    path.unshift('');
    return path.join('/');
}


export let pageStatus = {
    set: function (sataus, router) {
        env.page_status = env.page_status || {};
        env.page_status[sataus] = router;
    },
    get: function (status) {
        env.page_status = env.page_status || {};
        return env.page_status[status] || ''
    }
};
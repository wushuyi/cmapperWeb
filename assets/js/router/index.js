/**
 * Created by wushuyi on 2015/9/13.
 */
import Director from 'Director'
import {default as register_gftj} from './gftj.js'
import {default as register_pyq} from './pyq.js'
import {default as register_fxdt} from './fxdt.js'
import {default as register_wd} from './wd.js'
import {default as register_mapinfo} from './mapinfo.js'
import {default as register_maplist} from './maplist.js'
import {default as register_modal} from './modal.js'
import {default as register_role} from './role.js'
import {default as  register_follow} from './follow.js'
import env from '../utils/env.js'
import {routeHistory, getRouter, isModal} from './utils.js'

export let router = new Director.Router();
router.configure({
    before: function () {
        routeHistory.push(getRouter());
        window.routeHistory = routeHistory;
    }
});
env.router = router;
env.first_page = '/gftj';
function register_all() {
    register_gftj(router);
    register_pyq(router);
    register_fxdt(router);
    register_wd(router);
    register_mapinfo(router);
    register_maplist(router);
    register_modal(router);
    register_role(router);
    register_follow(router);
}

export default register_all;
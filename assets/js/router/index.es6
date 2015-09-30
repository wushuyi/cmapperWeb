/**
 * Created by wushuyi on 2015/9/13.
 */
import Director from 'director'
import {default as register_gftj} from './gftj'
import {default as register_pyq} from './pyq'
import {default as register_fxdt} from './fxdt'
import {default as register_wd} from './wd'
import {default as register_mapinfo} from './mapinfo'
import {default as register_maplist} from './maplist'
import {default as register_modal} from './modal'
import {default as register_prop_page} from './prop-page'
import {default as register_role} from './role'
import {default as  register_follow} from './follow'
import {default as  register_addaddr} from './addaddr'
import {default as  register_directions} from './directions'
import env from '../utils/env'
import {routeHistory, getRouter, isModal} from './utils'

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
    register_prop_page(router);
    register_role(router);
    register_follow(router);
    register_addaddr(router);
    register_directions(router);
}

export default register_all;
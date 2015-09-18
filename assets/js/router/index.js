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
import env from '../utils/env.js'

export let router = new Director.Router();
env.router = router;
function register_all() {
    register_gftj(router);
    register_pyq(router);
    register_fxdt(router);
    register_wd(router);
    register_mapinfo(router);
    register_maplist(router);
    register_modal(router);
    register_role(router);
}

export default register_all;
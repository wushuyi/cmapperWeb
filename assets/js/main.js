/**
 * Created by wushuyi on 2015/9/13.
 */
import {default as register_all, router} from './router/index.js'
import env from './utils/env.js'

register_all();
router.init('/gftj');

window.env = env;
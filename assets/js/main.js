/**
 * Created by wushuyi on 2015/9/13.
 */
//import './style.js';
import 'Modernizr';
import 'holder';

import $ from 'jquery'
import {default as register_all, router} from './router/index.js'
import env from './utils/env.js'

$('#nav, .prevent_touch').on('touchstart', (evt) => {
    evt.preventDefault();
});
register_all();
router.init('/gftj');



window.env = env;
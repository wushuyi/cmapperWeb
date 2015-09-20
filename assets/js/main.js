/**
 * Created by wushuyi on 2015/9/13.
 */
import $ from 'jquery'
import {default as register_all, router} from './router/index.js'
import env from './utils/env.js'

$(document.body).on('touchmove', (evt) => {
    evt.preventDefault();
});

$('.wrapper').on('touchmove', (evt) => {
    evt.stopPropagation();
});
register_all();
router.init('/gftj');

window.env = env;
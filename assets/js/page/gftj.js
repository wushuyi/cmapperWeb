/**
 * Created by wushuyi on 2015/9/13.
 */
import $ from 'jquery'
import Swiper from 'Swiper'
import {default as BasePage} from './base.js'
import iScroll from 'iScroll';
import {default as env} from '../utils/env.js'


class GftjPage extends BasePage {
    constructor(...arg) {
        if (arg[0] === false) {
            return false;
        }
        super(false);
        this.initialize(...arg);
    }

    initialize() {
        super.initialize();
        //this.my_scroll = new iScroll('.content');
        //this.my_swiper = new Swiper('.swiper-container', {
        //    speed: 400,
        //    loop: true,
        //    pagination: '.swiper-pagination',
        //    autoplay: 2500,
        //    autoplayDisableOnInteraction: false,
        //});
        let $el = {};
        this.$el = $el;
        $el.nav = $('.nav-item[data-router="/gftj"]');
        $el.page = $('#page_gftj');
        super.startPage();
    }

    destroy() {
        super.endPage();

        this.$el = null;
        //this.my_scroll.destroy();
        //this.my_swiper.destroy();
    }

}

export default GftjPage;
/**
 * Created by wushuyi on 2015/9/13.
 */
import $ from 'jquery'
//import Swiper from 'Swiper'
import {default as BasePage} from './base.js'
//import iScroll from 'iScroll';


class PyqPage extends BasePage {
    constructor(...arg) {
        if (arg[0] === false) {
            return false;
        }
        super(false);
        this.initialize(...arg);
    }

    initialize() {
        super.initialize();
        let $el = {};
        this.$el = $el;
        $el.nav = $('.nav-item[data-router="/pyq"]');
        $el.page = $('#page_pyq');

        super.startPage();
    }

    destroy() {
        super.endPage();

        this.$el = null;
    }

}

export default PyqPage;
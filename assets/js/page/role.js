/**
 * Created by wushuyi on 2015/9/18.
 */
import $ from 'jquery'
//import Swiper from 'Swiper'
import {default as BasePage} from './base.js'
import iScroll from 'iScroll';
import {routeHistory} from '../router/utils.js'
import {default as env} from '../utils/env.js'

class RolePage extends BasePage {
    constructor(...arg) {
        if (arg[0] === false) {
            return false;
        }
        super(false);
        this.initialize(...arg);
    }

    initialize(options) {
        super.initialize();
        let $el = {};
        this.$el = $el;
        let iscrolls = {};
        this.iscrolls = iscrolls;
        $el.page = $('#page_role');
        $el.close = $el.page.find('.close');
        //$el.close.attr('data-router', options.close_router);
        $el.close.one('tap.rolepage', function () {
            routeHistory.goback();
        });
        super.startPage();
        iscrolls.content = new iScroll($el.page.get(0));
    }

    destroy() {
        let iscrolls = this.iscrolls;
        let self = this;
        let $el = this.$el;
        super.endPage(() => {
            $.each($el, function (key, el) {
                el.off('.rolepage');
            });
            $.each(iscrolls, function (key, iscroll) {
                iscroll.destroy();
            });
            self.$el = null;
        });
    }

}

export default RolePage;
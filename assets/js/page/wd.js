/**
 * Created by wushuyi on 2015/9/13.
 */
import $ from 'jquery'
//import Swiper from 'Swiper'
import {default as BasePage} from './base.js'
import iScroll from 'iScroll';


class WdPage extends BasePage {
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
        let iscrolls = {};
        this.iscrolls = iscrolls;
        $el.nav = $('.nav-item[data-router="/wd"]');
        $el.page = $('#page_wd');
        super.startPage();
        iscrolls.content = new iScroll($el.page.get(0));
    }

    destroy() {
        let iscrolls = this.iscrolls;
        super.endPage(() => {
            $.each(iscrolls, function (key, iscroll) {
                iscroll.destroy();
            });
            this.$el = null;
        });
    }

}

export default WdPage;
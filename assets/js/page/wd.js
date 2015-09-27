/**
 * Created by wushuyi on 2015/9/13.
 */
import $ from 'jquery'
//import Swiper from 'Swiper'
import {default as BasePage} from './base.js'
import iscroll from 'iscroll';
import {default as env} from '../utils/env.js'


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
        iscrolls.content = new iscroll($el.page.get(0));

        this.onReview = function () {
            iscrolls.content.refresh();
        };
        env.mainlayout.on('review', this.onReview);
    }

    destroy() {
        let self = this;
        let iscrolls = this.iscrolls;
        let $el = this.$el;
        super.endPage(() => {
            env.mainlayout.off('review', self.onReview);
            $.each(iscrolls, function (key, iscroll) {
                iscroll.destroy();
            });
            self.$el = null;
        });
    }

}

export default WdPage;
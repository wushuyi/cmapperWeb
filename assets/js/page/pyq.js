/**
 * Created by wushuyi on 2015/9/13.
 */
import $ from 'jquery'
import {default as BasePage} from './base.js'
import iScroll from 'iScroll';
import {default as env} from '../utils/env.js'


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
        let iscrolls = {};
        this.iscrolls = iscrolls;
        $el.nav = $('.nav-item[data-router="/pyq"]');
        $el.page = $('#page_pyq');
        super.startPage();
        iscrolls.content = new iScroll($el.page.get(0));

        this.onReview = function () {
            iscrolls.content.refresh();
        };
        env.mainlayout.on('review', this.onReview);
    }

    destroy() {
        let self = this;
        let iscrolls = this.iscrolls;

        super.endPage(() => {
            env.mainlayout.off('review', self.onReview);
            $.each(iscrolls, function (key, iscroll) {
                iscroll.destroy();
            });
            this.$el = null;
        });
    }

}

export default PyqPage;
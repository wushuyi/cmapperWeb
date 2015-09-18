/**
 * Created by wushuyi on 2015/9/18.
 */
import $ from 'jquery'
import {default as BasePage} from './base.js'
import iScroll from 'iScroll';


class FollowPage extends BasePage {
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
        $el.page = $('#page_follow');
        $el.close = $el.page.find('.close');
        $el.close.attr('data-router', options.close_router);
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

export default FollowPage;
/**
 * Created by wushuyi on 2015/9/18.
 */
import $ from 'jquery'
import {default as BasePage} from './base.js'
import iscroll from 'iscroll';
import {routeHistory} from '../router/utils.js'
import {default as env} from '../utils/env.js'


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
        $el.close.one('tap.followpage', function () {
            routeHistory.goback();
        });
        super.startPage();
        iscrolls.content = new iscroll($el.page.get(0));
    }

    destroy() {
        let self = this;
        let $el = this.$el;
        let iscrolls = this.iscrolls;
        super.endPage(() => {
            $.each($el, function (key, el) {
                el.off('.followpage');
            });
            $.each(iscrolls, function (key, iscroll) {
                iscroll.destroy();
            });
            this.$el = null;
        });
    }

}

export default FollowPage;
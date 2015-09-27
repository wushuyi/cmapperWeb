/**
 * Created by wushuyi on 2015/9/13.
 */
import $ from 'jquery'
import {default as BasePage} from './base.js'
import iscroll from 'iscroll';
import {default as env} from '../utils/env.js'


class AddAddrPage extends BasePage {
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
        $el.page = $('#page_add_addr');
        $el.map_xjdd = $('#map-xjdd');
        $el.map_add_btn = $('#map_add_btn');
        super.startPage();
        iscrolls.content = new iscroll($el.page.get(0));

        this.onReview = function () {
            iscrolls.content.refresh();
        };
        env.mainlayout.on('review', this.onReview);

        $el.map_xjdd.hide();
        $el.map_add_btn.show();
        setTimeout(function () {
            env.mainlayout.viewMoveAnima(600);
        }, 0);
    }

    destroy() {
        let self = this;
        let iscrolls = this.iscrolls;
        let $el = this.$el;
        $el.map_xjdd.show();
        $el.map_add_btn.hide();
        super.endPage(() => {
            env.mainlayout.off('review', self.onReview);
            $.each(iscrolls, function (key, iscroll) {
                iscroll.destroy();
            });
            self.$el = null;
        });
    }

}

export default AddAddrPage;
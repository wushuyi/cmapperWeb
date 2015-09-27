/**
 * Created by wushuyi on 2015/9/13.
 */
import $ from 'jquery'
import Swiper from 'Swiper'
import {default as BasePage} from './base.js'
import iscroll from 'iscroll';
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
        let $el = {};
        let iscrolls = {};
        this.$el = $el;
        this.iscrolls = iscrolls;
        $el.nav = $('.nav-item[data-router="/gftj"]');
        $el.page = $('#page_gftj');
        $el.swiper = $el.page.find('.swiper-container');
        $el.topPeople = $('.top-people');
        $el.classify1 = $('.classify1');
        $el.classify2 = $('.classify2');
        super.startPage();


        this.my_swiper = new Swiper($el.swiper.get(0), {
            speed: 400,
            loop: true,
            pagination: '.swiper-pagination',
            autoplay: 2500,
            autoplayDisableOnInteraction: false,
        });

        this.initiscrolls();
    }

    initiscrolls() {
        let $el = this.$el;
        let iscrolls = this.iscrolls;

        let reset_horizontal = function ($element) {
            let $child = $($element.children()[0]);
            let $grand_child = $($child.children()[0]);

            $child.width(10000);
            $child.width($grand_child.width());
        };

        reset_horizontal($el.topPeople);
        reset_horizontal($el.classify1);
        reset_horizontal($el.classify2);

        iscrolls.content = new iscroll($el.page.get(0));
        iscrolls.topPeople = new iscroll($el.topPeople.get(0), {
            scrollX: true,
            scrollY: false,
        });

        iscrolls.classify1 = new iscroll($el.classify1.get(0), {
            scrollX: true,
            scrollY: false,
        });
        iscrolls.classify2 = new iscroll($el.classify2.get(0), {
            scrollX: true,
            scrollY: false,
        });

        this.onReview = function () {
            iscrolls.content.refresh();
        };
        env.mainlayout.on('review', this.onReview);
    }

    destroy() {
        let self = this;
        let iscrolls = this.iscrolls;

        super.endPage(()=> {
            env.mainlayout.off('review', self.onReview);
            $.each(iscrolls, function (key, iscroll) {
                iscroll.destroy();
            });

            self.my_swiper.destroy();
            self.$el = null;
        });
    }

}

export default GftjPage;
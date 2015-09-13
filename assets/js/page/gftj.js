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
        let $el = {};
        let iscrolls = {};
        this.$el = $el;
        this.iscrolls = iscrolls;
        $el.nav = $('.nav-item[data-router="/gftj"]');
        $el.page = $('#page_gftj');
        $el.swiper = $('.swiper-container');
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

        this.initIscrolls();
    }

    initIscrolls() {
        let $el = this.$el;
        let iscrolls = this.iscrolls;

        let reset_horizontal = function($element){
            let $child = $($element.children()[0]);
            let $grand_child = $($child.children()[0]);

            $child.width(10000);
            $child.width($grand_child.width());
        };

        reset_horizontal($el.topPeople);
        reset_horizontal($el.classify1);
        reset_horizontal($el.classify2);

        iscrolls.content = new iScroll($el.page.get(0));
        iscrolls.topPeople = new iScroll($el.topPeople.get(0), {
            scrollX: true,
            scrollY: false,
        });

        iscrolls.classify1 = new iScroll($el.classify1.get(0), {
            scrollX: true,
            scrollY: false,
        });
        iscrolls.classify2 = new iScroll($el.classify2.get(0), {
            scrollX: true,
            scrollY: false,
        });

        env.mainlayout.on('review', function(){
            iscrolls.content.refresh();
        });
    }

    destroy() {
        let iscrolls = this.iscrolls;

        super.endPage(()=> {
            $.each(iscrolls, function (key, iscroll) {
                iscroll.destroy();
            });

            this.my_swiper.destroy();
            this.$el = null;
        });
    }

}

export default GftjPage;
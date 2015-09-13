/**
 * Created by wushuyi on 2015/9/13.
 */
import $ from 'jquery'
import '../utils/jquery.touch.js'
import {default as MainLayout} from '../component/main_layout.js'
import {default as env} from '../utils/env.js'
import {transitionEnd, animationEnd} from '../utils/wsy_utils.js'

class PageBase {
    constructor(...arg) {
        if (arg[0] === false) {
            return false;
        }
        this.initialize(...arg);
    }

    initialize() {
        this.initMainLayout();
        this.initRouterEvent();
    }

    initMainLayout() {
        if (env.mainlayout) {
            return false;
        }
        env.mainlayout = new MainLayout({
            move_min_height: 128,
            $height_control: $('.height-control'),
            $main: $('.main'),
            $map: $('.map'),
            $nav: $('.nav'),
            $content: $('.content'),
            $out_box: $('.wrapper')
        });
    }

    initRouterEvent() {
        if (env.init_router_event) {
            return false;
        }
        env.init_router_event = true;
        $(document).on('click', 'a', (evt) => {
            evt.preventDefault();
        });
        $('.wrapper').on('tap', '[data-router]', function (evt) {
            evt.preventDefault();
            let $self = $(this);
            let uri = $self.data('router');
            env.router.setRoute(uri);
        });
    }

    startPage() {
        let $el = this.$el;
        $el.nav.addClass('active');

        $el.page.removeClass('cached');
        $el.page.addClass('page-content');
        if (env.page) {
            $el.page.one(animationEnd, function () {
                $el.page.removeClass('page-from-right-to-center');
            });
            $el.page.addClass('page-content page-from-right-to-center');
        }
        env.page = true;
    }

    endPage() {
        let $el = this.$el;
        $el.nav.removeClass('active');

        $el.page.removeClass('page-content');
        if (env.page) {
            $el.page.one(animationEnd, function () {
                $el.page.removeClass('page-from-center-to-left');
                $el.page.addClass('cached')
            });
            $el.page.addClass('page-from-center-to-left');
        }
    }
}

export default PageBase
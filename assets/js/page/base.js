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
            default_height: 254,
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
            if (env.router_wait) {
                return false;
            }
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
        env.router_wait = true;
        let callback = ()=> {
            env.router_wait = false;
        };
        if (env.page) {
            env.mainlayout.viewMoveAnima(env.mainlayout._data.default_height);
            $el.page.one(animationEnd, function () {
                $el.page.removeClass('page-from-right-to-center');
                callback();
            });
            $el.page.addClass('page-content page-from-right-to-center');
        } else {
            callback();
        }
        env.page = true;
    }

    endPage(cb) {
        let $el = this.$el;
        $el.nav.removeClass('active');

        $el.page.removeClass('page-content');
        if (env.page) {
            let timeout;
            let fireback = function () {
                clearTimeout(timeout);
                $el.page.removeClass('page-from-center-to-left');
                $el.page.addClass('cached');
                if (cb) {
                    cb();
                }
            };
            // 修护回退没执行bug
            timeout = setTimeout(() => {
                fireback();
            }, 600);
            $el.page.one(animationEnd, function () {
                fireback()
            });
            $el.page.addClass('page-from-center-to-left');
        }
    }
}

export default PageBase
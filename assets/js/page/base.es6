/**
 * Created by wushuyi on 2015/9/13.
 */
import $ from 'jquery'
import _ from 'lodash'
import '../utils/jquery.touch'
import {default as MainLayout} from '../component/main_layout'
import {default as env} from '../utils/env'
import {transitionEnd, animationEnd} from '../utils/wsy_utils'
import {default as initGmap} from '../component/map'

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
        this.initGoolgeMap();
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

    initGoolgeMap() {
        if (env.initGoolgeMap) {
            return false;
        }
        env.initGoolgeMap = true;
        setTimeout(function () {
            initGmap();
        }, 0);
    }

    initRouterEvent() {
        if (env.init_router_event) {
            return false;
        }
        env.init_router_event = true;
        $(document).on('click', 'a', (evt) => {
            evt.preventDefault();
        });
        $(document.body).on('tap', '[data-router]', function (evt) {
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
        if ($el.nav) {
            $el.nav.addClass('active');
        }

        $el.page.removeClass('cached');
        $el.page.addClass('page-content');
        env.router_wait = true;
        let callback = ()=> {
            env.router_wait = false;
        };
        if (env.page) {
            //env.mainlayout.viewMoveAnima(env.mainlayout._data.default_height);
            //$el.page.one(animationEnd, function () {
            //    $el.page.removeClass('page-from-right-to-center');
            //    callback();
            //});
            //$el.page.addClass('page-content page-from-right-to-center');

            callback();
        } else {
            callback();
        }
        env.page = true;
    }

    endPage(cb) {
        let $el = this.$el;
        if ($el.nav) {
            $el.nav.removeClass('active');
        }

        $el.page.removeClass('page-content');
        if (env.page) {
            //let fireback = _.once(()=> {
            //    $el.page.removeClass('page-from-center-to-left');
            //    $el.page.addClass('cached');
            //    if (cb) {
            //        cb();
            //    }
            //});
            // 修护回退没执行bug
            //setTimeout(() => {
            //    fireback();
            //}, 500);
            //$el.page.one(animationEnd, function () {
            //    fireback()
            //});
            //$el.page.addClass('page-from-center-to-left');
            $el.page.addClass('cached');
            if (cb) {
                cb();
            }
        }
    }
}

export default PageBase
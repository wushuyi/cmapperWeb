/**
 * Created by wushuyi on 2015/9/13.
 */
import $ from 'jquery'
import _ from 'lodash'
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
        if (env.gmap) {
            return false;
        }
        let $map = $('#map');
        env.mainlayout.on('moveStart', function () {
            $map.height('100%');
            //google.maps.event.trigger(env.gmap, 'resize');
        });
        env.mainlayout.on('moveEnd', function (res) {
            $map.height(res);
        });
        if (!window.google) {
            return false;
        }
        env.gmap = new google.maps.Map($map.get(0), {
            center: new google.maps.LatLng(27.653981735563498, 117.98527836799622),
            zoom: 14,
            disableDefaultUI: true,
        });

        env.mainlayout.on('moveEnd', function (res) {
            google.maps.event.trigger(env.gmap, 'resize');
        });
        let $map_xjdd = $('<div id="map-xjdd">新建地点</div>');
        let $map_dw = $('<div id="map-dw">定位</div>');
        let $map_ctl = $('<div id="map-ctl"></div>').append($map_xjdd).append($map_dw);
        env.gmap.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push($map_ctl.get(0));
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
        if ($el.nav) {
            $el.nav.removeClass('active');
        }

        $el.page.removeClass('page-content');
        if (env.page) {
            let fireback = _.once(()=> {
                $el.page.removeClass('page-from-center-to-left');
                $el.page.addClass('cached');
                if (cb) {
                    cb();
                }
            });
            // 修护回退没执行bug
            setTimeout(() => {
                fireback();
            }, 500);
            $el.page.one(animationEnd, function () {
                fireback()
            });
            $el.page.addClass('page-from-center-to-left');
        }
    }
}

export default PageBase
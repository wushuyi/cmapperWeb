/**
 * Created by wushuyi on 2015/9/30.
 */
import $ from 'jquery';
import sweetalert from 'sweetalert';
//import Swiper from 'Swiper'
import {default as BasePage} from './base';
import iscroll from 'iscroll';
import {default as env} from '../utils/env';

class Polyline {
    constructor(map) {
        this.drawList = [];
        this.cleanList = [];
        this.map = map;
    }

    add(fn) {
        this.drawList.push(fn);
    }

    cleanDraw() {
        let self = this;
        let length = self.cleanList.length;
        for (let i = 0; i < length; i++) {
            self.map.removePolyline(self.cleanList[i]);
        }
        this.cleanList = [];
    }

    draw(step_count) {
        let self = this;
        this.cleanDraw();
        for (let i = 0; i <= step_count; i++) {
            self.cleanList.push(self.drawList[i]());
        }
    }
}

class DirectionsPage extends BasePage {
    constructor(...arg) {
        if (arg[0] === false) {
            return false;
        }
        super(false);
        this.initialize(...arg);
    }

    directions(options) {
        let map = env.gmap;
        let self = this;
        let $el = this.$el;
        $el.address_list.empty();
        map.removeRoutes();
        map.cleanRoute();
        map.getRoutes({
            origin: [-12.044012922866312, -77.02470665341184],
            destination: [-12.090814532191756, -77.02271108990476],
            travelMode: options.mode,
            callback: function (e) {
                //console.log(e);
                let route = e[e.length - 1];
                if (e.length > 0) {
                    var polyline_options = {
                        path: route.overview_path,
                        strokeColor: '#00CCFF',
                        strokeOpacity: 0.6,
                        strokeWeight: 6
                    };
                    map.drawPolyline(polyline_options);
                    self.directions_info(route);
                }


            },
            error: function (e) {
                if (e.status === 'ZERO_RESULTS') {
                    sweetalert('对不起,该模式无法找到导航路径!');
                }
                //console.log(e)
            }
        });
    }

    directions_info(route) {
        let map = env.gmap;
        let $el = this.$el;


        let polyline = new Polyline(map);
        let count = 0;
        map.travelRoute({
            route: route,
            step: function (data) {
                let $info_box = $('<li><div class="info-box">' + data.instructions + '</div></li>');
                $el.address_list.append($info_box);
                polyline.add(function () {
                    return map.drawPolyline({
                        path: data.path,
                        strokeColor: '#131540',
                        strokeOpacity: 0.6,
                        strokeWeight: 6
                    });
                });
                $info_box.data('count', count);
                $info_box.on('tap', function () {
                    map.setCenter(data.end_location.lat(), data.end_location.lng());
                    polyline.draw($info_box.data('count'));
                });
                count++;
                //console.log(data);
            },
        });
        this.iscrolls.content.refresh();
    }

    initialize() {
        //alert('run');
        let self = this;
        super.initialize();
        let $el = {};
        this.$el = $el;
        let iscrolls = {};
        this.iscrolls = iscrolls;
        $el.page = $('#page_directions');
        super.startPage();
        env.mainScroll = iscrolls.content = new iscroll($el.page.get(0));

        this.onReview = function () {
            iscrolls.content.refresh();
        };
        env.mainlayout.on('review', this.onReview);
        $el.map_xjdd = $('#map-xjdd');
        $el.map_add_btn = $('#map_add_btn');

        $el.bicyclingBtn = $el.page.find('.bicycling');
        $el.transitBtn = $el.page.find('.transit');
        $el.drivingBtn = $el.page.find('.driving');
        $el.modeSwichBtn = $el.page.find('.btn');
        $el.address_list = $el.page.find('.address-list ul');
        //console.log($el.address_list);
        env.mainlayout.viewMoveAnima(500);
        $el.map_xjdd.hide();
        $el.map_add_btn.hide();

        env.gmap.setCenter(-12.044012922866312, -77.02470665341184);

        $el.modeSwichBtn.on('tap.directions', function (evt) {
            let $self = $(this);
            $el.modeSwichBtn.removeClass('active');
            $self.addClass('active');
        });
        $el.bicyclingBtn.on('tap.directions', function (evt) {
            self.directions({
                mode: 'bicycling',
            });
        });
        $el.transitBtn.on('tap.directions', function (evt) {
            self.directions({
                mode: 'transit',
            });
        });
        $el.drivingBtn.on('tap.directions', function (evt) {
            self.directions({
                mode: 'driving',
            });
        });
        $el.drivingBtn.trigger('tap.directions');
    }

    destroy() {
        let self = this;
        let iscrolls = this.iscrolls;
        let $el = this.$el;
        $.each($el, function (index, el) {
            el.off('.directions');
        });
        env.gmap.cleanRoute();
        $el.map_xjdd.show();
        $el.map_add_btn.show();
        $el.address_list.empty();

        super.endPage(() => {
            env.mainlayout.off('review', self.onReview);
            $.each(iscrolls, function (key, iscroll) {
                iscroll.destroy();
            });
            self.$el = null;
        });
    }

}

export default DirectionsPage;
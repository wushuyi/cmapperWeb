/**
 * Created by wushuyi on 2015/9/13.
 */
import $ from 'jquery'
import Swiper from 'Swiper'
import {default as BasePage} from './base.js'
import iscroll from 'iscroll';
import env from '../utils/env.js'
import {routeHistory} from '../router/utils.js'


class MapListPage extends BasePage {
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
        $el.page = $('#page_maplist');
        $el.close = $el.page.find('.tab-close');
        $el.tabArchives = $el.page.find('.tab-archives');
        super.startPage();
        $el.close.one('tap.maplist', function () {
            let list = routeHistory.get('all');
            let route;
            do {
                route = list.pop();
                //console.log('pop:', route)
            } while (route && route.indexOf('/mapinfo') !== -1);
            env.router.setRoute(route || env.first_page);
        });
        $el.tabArchives.attr('data-router', '/mapinfo/archives/' + options.id);

        env.mainScroll = iscrolls.content = new iscroll($el.page.get(0));
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

export default MapListPage;
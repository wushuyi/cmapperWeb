/**
 * Created by wushuyi on 2015/9/13.
 */
import $ from 'jquery'
import Swiper from 'Swiper'
import {default as BasePage} from './base.js'
import iScroll from 'iScroll';
import env from '../utils/env.js'


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
        $el.close.attr('data-router', options.close_route);
        $el.close.on('tap', function(){
            delete env.mapinfo_close_route;
        });
        $el.tabArchives.attr('data-router', '/mapinfo/archives/' + options.id);

        iscrolls.content = new iScroll($el.page.get(0));
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
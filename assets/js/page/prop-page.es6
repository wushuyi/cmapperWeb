/**
 * Created by wushuyi on 2015/9/30.
 */
import $ from 'jquery';
import _ from 'lodash';
import iscroll from 'iscroll';
import hammer from 'hammer';
import canvas2blob from 'canvas2blob';
import loadImage from 'loadImage';
import 'cropper';

import {transitionEnd} from '../utils/wsy_utils'
import {routeHistory, isModal} from '../router/utils'
import {default as env} from '../utils/env'


class PageManage {

    constructor(...arg) {
        this.initialize(...arg);
    }

    initialize(options) {
        let $el = {};
        this.iscrolls = {};
        this.$el = $el;
        $el.modalBox = $('#prop-page');
        $el.mask = $el.modalBox.find('.mask');
        this['page_' + options.modal](options);
        this.sub_destory = this['page_' + options.modal + '_destory'] || null;
    }

    public_init() {
        let $el = this.$el;
        $el.modalBox.show();
        $el.modal.show();
        $el.close = $el.modal.find('.close');

        $el.close.on('tap.pagemanage', function () {
            $el.modal.removeClass('active');
            $el.mask.removeClass('active');
            routeHistory.goback();
        });

        setTimeout(function () {
            $el.mask.addClass('active');
            $el.modal.addClass('active');
        }, 100);
    }

    page_set(options) {
        let $el = this.$el;

        $el.modal = $('#page-set');
        this.public_init();
    }

    page_address(options) {
        let $el = this.$el;
        let iscrolls = this.iscrolls;
        $el.modal = $('#page-address');
        this.public_init();
        $el.scroll = $el.modal.find('.scroll');
        env.mainScroll = iscrolls.content = new iscroll($el.scroll.get(0));
        $el.swichBox = $el.modal.find('.swich-box');
        $el.checkbox = $el.swichBox.find('input[type=checkbox]');
        $el.swichBox.on('tap.pagemanage', function () {
            $el.checkbox.prop('checked', !$el.checkbox.prop('checked'));
        });
    }


    destory() {
        let self = this;
        let $el = this.$el;
        let iscrolls = this.iscrolls;
        $.each($el, function (key, el) {
            el.off('.pagemanage');
        });
        $.each(iscrolls, function (key, iscroll) {
            //console.log(iscroll);
            iscroll.destroy();
        });
        if (self.sub_destory) {
            self.sub_destory();
        }
        setTimeout(function () {
            $el.modalBox.hide();
            $el.modal.hide();
            self.$el = null;
        }, 600);
    }
}

export  default PageManage;
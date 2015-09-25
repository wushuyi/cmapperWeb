/**
 * Created by wushuyi on 2015/9/17.
 */
import $ from 'jquery'
import iScroll from 'iScroll'
import {transitionEnd} from '../utils/wsy_utils.js'
import {routeHistory, isModal} from '../router/utils.js'
import {default as env} from '../utils/env.js'


class ModalManage {

    constructor(...arg) {
        this.initialize(...arg);
    }

    initialize(options) {
        let $el = {};
        this.iscrolls = {};
        this.$el = $el;
        $el.modalBox = $('#modal-box');
        $el.mask = $el.modalBox.find('.mask');
        this['modal_' + options.modal](options);
    }

    public_init(){
        let $el = this.$el;
        $el.modalBox.show();
        $el.modal.show();
        $el.close = $el.modal.find('.close');

        $el.close.on('tap.modalmanage', function () {
            $el.modal.removeClass('active');
            $el.mask.removeClass('active');
            routeHistory.goback();
        });

        setTimeout(function () {
            $el.mask.addClass('active');
            $el.modal.addClass('active');
        }, 100);
    }

    modal_set(options) {
        let $el = this.$el;

        $el.modal = $('#modal-set');
        this.public_init();
    }

    modal_address(options) {
        let $el = this.$el;
        let iscrolls = this.iscrolls;
        $el.modal = $('#modal-address');
        this.public_init();
        $el.scroll = $el.modal.find('.scroll');
        iscrolls.content = new iScroll($el.scroll.get(0));
    }

    modal_selectMap() {
        let $el = this.$el;
        let iscrolls = this.iscrolls;
        $el.modal = $('#modal-select-map');
        this.public_init();
        $el.scroll = $el.modal.find('.scroll');
        iscrolls.content = new iScroll($el.scroll.get(0));
    }

    modal_addAddrInfo() {
        let $el = this.$el;
        let iscrolls = this.iscrolls;
        $el.modal = $('#modal-add-addr-info');
        this.public_init();
        $el.scroll = $el.modal.find('.scroll');
        iscrolls.content = new iScroll($el.scroll.get(0));
    }

    modal_createMap() {
        let $el = this.$el;
        let iscrolls = this.iscrolls;
        $el.modal = $('#modal-create-map');
        this.public_init();
        $el.scroll = $el.modal.find('.scroll');
        iscrolls.content = new iScroll($el.scroll.get(0));
    }

    destory() {
        let self = this;
        let $el = this.$el;
        let iscrolls = this.iscrolls;
        $.each($el, function (key, el) {
            el.off('.modalmanage');
        });
        $.each(iscrolls, function (key, iscroll) {
            //console.log(iscroll);
            iscroll.destroy();
        });
        if (isModal()) {
            $el.modal.hide();
            $el.modal.removeClass('active');
            self.$el = null;
            return false;
        }
        setTimeout(function () {
            $el.modalBox.hide();
            $el.modal.hide();
            self.$el = null;
        }, 600);
    }
}

export  default ModalManage;
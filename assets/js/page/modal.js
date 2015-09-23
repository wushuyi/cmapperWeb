/**
 * Created by wushuyi on 2015/9/17.
 */
import $ from 'jquery'
import {transitionEnd} from '../utils/wsy_utils.js'
import {routeHistory} from '../router/utils.js'
import {default as env} from '../utils/env.js'

class ModalManage {

    constructor(...arg) {
        this.initialize(...arg);
    }

    initialize(options) {
        let $el = {};
        this.$el = $el;
        $el.modalBox = $('#modal-box');
        this['modal_' + options.modal](options);
    }

    modal_set(options) {
        let $el = this.$el;

        $el.modal = $('#modal-set');
        $el.modalBox.show();
        $el.close = $el.modal.find('.close');

        $el.close.on('tap.modalmanage', function () {
            $el.modal.removeClass('active');
            routeHistory.goback();
        });

        setTimeout(function () {
            $el.modal.addClass('active');
        }, 100);
    }

    modal_address(options) {
        let $el = this.$el;

        $el.modal = $('#modal-address');
        $el.modalBox.show();
        $el.close = $el.modal.find('.close');

        $el.close.one('tap.modalmanage', function () {
            $el.modal.removeClass('active');
            routeHistory.goback();
        });

        setTimeout(function () {
            $el.modal.addClass('active');
        }, 100);
    }

    destory() {
        let $el = this.$el;
        $.each($el, function (key, el) {
            el.off('.modalmanage');
        });
        setTimeout(function () {
            $el.modalBox.hide();
        }, 400);
    }
}

export  default ModalManage;
/**
 * Created by wushuyi on 2015/9/17.
 */
import $ from 'jquery'
import {transitionEnd} from '../utils/wsy_utils.js'

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

        $el.close.attr('data-router', options.close_router);
        $el.close.on('tap', function () {
            $el.modal.removeClass('active');
        });

        $el.modal.one(transitionEnd, function () {
            $el.modal.one(transitionEnd, function () {
                $el.modalBox.hide();
            });
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

        $el.close.attr('data-router', options.close_router);
        $el.close.on('tap', function () {
            $el.modal.removeClass('active');
        });

        //$el.modal.one(transitionEnd, function () {
        //    $el.modal.one(transitionEnd, function () {
        //        $el.modalBox.hide();
        //    });
        //});

        setTimeout(function () {
            $el.modal.addClass('active');
        }, 100);
    }
}

export  default ModalManage;
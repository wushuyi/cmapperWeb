/**
 * Created by wushuyi on 2015/9/17.
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
        this.sub_destory = this['modal_' + options.modal + '_destory'] || null;
    }

    public_init() {
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
        env.mainScroll = iscrolls.content = new iscroll($el.scroll.get(0));
        $el.swichBox = $el.modal.find('.swich-box');
        $el.checkbox = $el.swichBox.find('input[type=checkbox]');
        $el.swichBox.on('tap.modalmanage', function () {
            $el.checkbox.prop('checked', !$el.checkbox.prop('checked'));
        });
    }

    modal_selectMap() {
        let $el = this.$el;
        let iscrolls = this.iscrolls;
        $el.modal = $('#modal-select-map');
        this.public_init();
        $el.scroll = $el.modal.find('.scroll');
        env.mainScroll = iscrolls.content = new iscroll($el.scroll.get(0));
    }

    modal_addAddrInfo() {
        let $el = this.$el;
        let iscrolls = this.iscrolls;
        $el.modal = $('#modal-add-addr-info');
        this.public_init();
        $el.scroll = $el.modal.find('.scroll');
        env.mainScroll = iscrolls.content = new iscroll($el.scroll.get(0));
    }

    modal_createMap() {
        let $el = this.$el;
        let iscrolls = this.iscrolls;
        $el.modal = $('#modal-create-map');
        this.public_init();
        $el.scroll = $el.modal.find('.scroll');
        env.mainScroll = iscrolls.content = new iscroll($el.scroll.get(0));

        $el.imgFile = $el.modal.find('.img-file');

        if (env.cropperOutput) {
            let uri = URL.createObjectURL(env.cropperOutput);
            $el.imgFile.css('background-image', 'url(' + uri + ')');
        }
        $el.imgInput = $el.imgFile.find('input');
        $el.imgInput.on('change.modalmanage', function (evt) {
            let file = evt.target.files[0];
            loadImage(file, function (canvas) {
                canvas.toBlob(function (blob) {
                    let uri = URL.createObjectURL(blob);
                    env.cropperInput = uri;
                    env.cropperOpts = {
                        width: 524,
                        height: 200
                    };
                    env.router.setRoute('/modal/croppe');
                    $el.imgInput.val('');
                })
            }, {
                canvas: true,
                maxWidth: 1024,
                maxHeight: 1024,
            });
        });
    }

    modal_cropper() {
        let $el = this.$el;
        let self = this;

        $el.modal = $('#modal-cropper');
        $el.save_btn = $el.modal.find('.save-btn');
        $el.cropper_box = $el.modal.find('.cropper-img-box');
        this.public_init();
        if (!env.cropperOpts) {
            new Error('not set cropperOpts!');
            return false;
        }

        let initCropper = function ($img) {
            let cropper = $img.cropper({
                aspectRatio: env.cropperOpts.width / env.cropperOpts.height,
                autoCropArea: 0.9,
                strict: false,
                guides: false,
                highlight: false,
                dragCrop: false,
                cropBoxMovable: false,
                cropBoxResizable: false
            }).data('cropper');
            let cache = {rotation: 0};
            let mc = new hammer.Manager(cropper.$cropper.get(0));
            let rotate = new hammer.Rotate();
            mc.add(rotate);
            mc.on('rotatemove', function (e) {
                console.log(e);
                let rotation = e.rotation;
                cropper.rotate(parseFloat((rotation - cache.rotation).toFixed(2)));
                cache.rotation = rotation;
            });
            mc.on('rotateend', function (e) {
                cache.rotation = 0;
            });
            self.hammer = mc;
            return cropper;
        };

        if (!env.cropperInput) {
            env.router.setRoute('/gftj');
            return false;
        }

        let loadCb = _.once(function (img) {
            env.cropperInput = null;
            let $img = $(img);
            $el.cropper_box.append(img);
            self.cropper = env.cropper = initCropper($img);

            $el.save_btn.one('tap.modalmanage', function (evt) {
                let canvas = self.cropper.getCroppedCanvas({
                    width: env.cropperOpts.width,
                    height: env.cropperOpts.height
                });
                canvas.toBlob(function (blob) {
                    env.cropperOutput = blob;
                    routeHistory.goback();
                });
            });
        });

        loadImage(env.cropperInput, loadCb);
    }

    modal_cropper_destory() {
        //console.log('run');
        //console.log(this);
        let $el = this.$el;
        this.hammer.destroy();
        this.cropper.destroy();
        $el.cropper_box.find('img').remove();
        env.cropper = null;
        env.cropperOpts = null;
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
        if (self.sub_destory) {
            self.sub_destory();
        }
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
System.register(['jquery', 'lodash', 'iscroll', 'hammer', 'canvas2blob', 'loadImage', 'cropper', '../utils/wsy_utils', '../router/utils', '../utils/env'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/17.
     */
    'use strict';

    var $, _, iscroll, hammer, canvas2blob, loadImage, transitionEnd, routeHistory, isModal, env, ModalManage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }, function (_lodash) {
            _ = _lodash['default'];
        }, function (_iscroll) {
            iscroll = _iscroll['default'];
        }, function (_hammer) {
            hammer = _hammer['default'];
        }, function (_canvas2blob) {
            canvas2blob = _canvas2blob['default'];
        }, function (_loadImage) {
            loadImage = _loadImage['default'];
        }, function (_cropper) {}, function (_utilsWsy_utils) {
            transitionEnd = _utilsWsy_utils.transitionEnd;
        }, function (_routerUtils) {
            routeHistory = _routerUtils.routeHistory;
            isModal = _routerUtils.isModal;
        }, function (_utilsEnv) {
            env = _utilsEnv['default'];
        }],
        execute: function () {
            ModalManage = (function () {
                function ModalManage() {
                    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
                        arg[_key] = arguments[_key];
                    }

                    _classCallCheck(this, ModalManage);

                    this.initialize.apply(this, arg);
                }

                _createClass(ModalManage, [{
                    key: 'initialize',
                    value: function initialize(options) {
                        var $el = {};
                        this.iscrolls = {};
                        this.$el = $el;
                        $el.modalBox = $('#modal-box');
                        $el.mask = $el.modalBox.find('.mask');
                        this['modal_' + options.modal](options);
                        this.sub_destory = this['modal_' + options.modal + '_destory'] || null;
                    }
                }, {
                    key: 'public_init',
                    value: function public_init() {
                        var $el = this.$el;
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
                }, {
                    key: 'modal_set',
                    value: function modal_set(options) {
                        var $el = this.$el;

                        $el.modal = $('#modal-set');
                        this.public_init();
                    }
                }, {
                    key: 'modal_address',
                    value: function modal_address(options) {
                        var $el = this.$el;
                        var iscrolls = this.iscrolls;
                        $el.modal = $('#modal-address');
                        this.public_init();
                        $el.scroll = $el.modal.find('.scroll');
                        env.mainScroll = iscrolls.content = new iscroll($el.scroll.get(0));
                    }
                }, {
                    key: 'modal_selectMap',
                    value: function modal_selectMap() {
                        var $el = this.$el;
                        var iscrolls = this.iscrolls;
                        $el.modal = $('#modal-select-map');
                        this.public_init();
                        $el.scroll = $el.modal.find('.scroll');
                        env.mainScroll = iscrolls.content = new iscroll($el.scroll.get(0));
                    }
                }, {
                    key: 'modal_addAddrInfo',
                    value: function modal_addAddrInfo() {
                        var $el = this.$el;
                        var iscrolls = this.iscrolls;
                        $el.modal = $('#modal-add-addr-info');
                        this.public_init();
                        $el.scroll = $el.modal.find('.scroll');
                        env.mainScroll = iscrolls.content = new iscroll($el.scroll.get(0));
                    }
                }, {
                    key: 'modal_createMap',
                    value: function modal_createMap() {
                        var $el = this.$el;
                        var iscrolls = this.iscrolls;
                        $el.modal = $('#modal-create-map');
                        this.public_init();
                        $el.scroll = $el.modal.find('.scroll');
                        env.mainScroll = iscrolls.content = new iscroll($el.scroll.get(0));

                        $el.imgFile = $el.modal.find('.img-file');

                        if (env.cropperOutput) {
                            var uri = URL.createObjectURL(env.cropperOutput);
                            $el.imgFile.css('background-image', 'url(' + uri + ')');
                        }
                        $el.imgInput = $el.imgFile.find('input');
                        $el.imgInput.on('change.modalmanage', function (evt) {
                            var file = evt.target.files[0];
                            loadImage(file, function (canvas) {
                                canvas.toBlob(function (blob) {
                                    var uri = URL.createObjectURL(blob);
                                    env.cropperInput = uri;
                                    env.cropperOpts = {
                                        width: 524,
                                        height: 200
                                    };
                                    env.router.setRoute('/modal/croppe');
                                    $el.imgInput.val('');
                                });
                            }, {
                                canvas: true,
                                maxWidth: 1024,
                                maxHeight: 1024
                            });
                        });
                    }
                }, {
                    key: 'modal_cropper',
                    value: function modal_cropper() {
                        var $el = this.$el;
                        var self = this;

                        $el.modal = $('#modal-cropper');
                        $el.save_btn = $el.modal.find('.save-btn');
                        $el.cropper_box = $el.modal.find('.cropper-img-box');
                        this.public_init();
                        if (!env.cropperOpts) {
                            new Error('not set cropperOpts!');
                            return false;
                        }

                        var initCropper = function initCropper($img) {
                            var cropper = $img.cropper({
                                aspectRatio: env.cropperOpts.width / env.cropperOpts.height,
                                autoCropArea: 0.9,
                                strict: false,
                                guides: false,
                                highlight: false,
                                dragCrop: false,
                                cropBoxMovable: false,
                                cropBoxResizable: false
                            }).data('cropper');
                            var cache = { rotation: 0 };
                            var mc = new hammer.Manager(cropper.$cropper.get(0));
                            var rotate = new hammer.Rotate();
                            mc.add(rotate);
                            mc.on('rotatemove', function (e) {
                                console.log(e);
                                var rotation = e.rotation;
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

                        var loadCb = _.once(function (img) {
                            env.cropperInput = null;
                            var $img = $(img);
                            $el.cropper_box.append(img);
                            self.cropper = env.cropper = initCropper($img);

                            $el.save_btn.one('tap.modalmanage', function (evt) {
                                var canvas = self.cropper.getCroppedCanvas({
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
                }, {
                    key: 'modal_cropper_destory',
                    value: function modal_cropper_destory() {
                        //console.log('run');
                        //console.log(this);
                        var $el = this.$el;
                        this.hammer.destroy();
                        this.cropper.destroy();
                        $el.cropper_box.find('img').remove();
                        env.cropper = null;
                        env.cropperOpts = null;
                    }
                }, {
                    key: 'destory',
                    value: function destory() {
                        var self = this;
                        var $el = this.$el;
                        var iscrolls = this.iscrolls;
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
                }]);

                return ModalManage;
            })();

            _export('default', ModalManage);
        }
    };
});

//# sourceMappingURL=modal.js.map
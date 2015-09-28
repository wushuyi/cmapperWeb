System.register(['jquery', 'iscroll', '../utils/wsy_utils.js', '../router/utils.js', '../utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/17.
     */
    'use strict';

    var $, iscroll, transitionEnd, routeHistory, isModal, env, ModalManage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }, function (_iscroll) {
            iscroll = _iscroll['default'];
        }, function (_utilsWsy_utilsJs) {
            transitionEnd = _utilsWsy_utilsJs.transitionEnd;
        }, function (_routerUtilsJs) {
            routeHistory = _routerUtilsJs.routeHistory;
            isModal = _routerUtilsJs.isModal;
        }, function (_utilsEnvJs) {
            env = _utilsEnvJs['default'];
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
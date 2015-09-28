System.register(['jquery', 'Swiper', './base.js', 'iscroll', '../utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var $, Swiper, BasePage, iscroll, env, GftjPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }, function (_Swiper) {
            Swiper = _Swiper['default'];
        }, function (_baseJs) {
            BasePage = _baseJs['default'];
        }, function (_iscroll) {
            iscroll = _iscroll['default'];
        }, function (_utilsEnvJs) {
            env = _utilsEnvJs['default'];
        }],
        execute: function () {
            GftjPage = (function (_BasePage) {
                function GftjPage() {
                    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
                        arg[_key] = arguments[_key];
                    }

                    _classCallCheck(this, GftjPage);

                    if (arg[0] === false) {
                        return false;
                    }
                    _get(Object.getPrototypeOf(GftjPage.prototype), 'constructor', this).call(this, false);
                    this.initialize.apply(this, arg);
                }

                _inherits(GftjPage, _BasePage);

                _createClass(GftjPage, [{
                    key: 'initialize',
                    value: function initialize() {
                        _get(Object.getPrototypeOf(GftjPage.prototype), 'initialize', this).call(this);
                        var $el = {};
                        var iscrolls = {};
                        this.$el = $el;
                        this.iscrolls = iscrolls;
                        $el.nav = $('.nav-item[data-router="/gftj"]');
                        $el.page = $('#page_gftj');
                        $el.swiper = $el.page.find('.swiper-container');
                        $el.topPeople = $('.top-people');
                        $el.classify1 = $('.classify1');
                        $el.classify2 = $('.classify2');
                        _get(Object.getPrototypeOf(GftjPage.prototype), 'startPage', this).call(this);

                        this.my_swiper = new Swiper($el.swiper.get(0), {
                            speed: 400,
                            loop: true,
                            pagination: '.swiper-pagination',
                            autoplay: 2500,
                            autoplayDisableOnInteraction: false
                        });

                        this.initiscrolls();
                    }
                }, {
                    key: 'initiscrolls',
                    value: function initiscrolls() {
                        var $el = this.$el;
                        var iscrolls = this.iscrolls;

                        var reset_horizontal = function reset_horizontal($element) {
                            var $child = $($element.children()[0]);
                            var $grand_child = $($child.children()[0]);

                            $child.width(10000);
                            $child.width($grand_child.width());
                        };

                        reset_horizontal($el.topPeople);
                        reset_horizontal($el.classify1);
                        reset_horizontal($el.classify2);

                        env.mainScroll = iscrolls.content = new iscroll($el.page.get(0));
                        iscrolls.topPeople = new iscroll($el.topPeople.get(0), {
                            scrollX: true,
                            scrollY: false
                        });

                        iscrolls.classify1 = new iscroll($el.classify1.get(0), {
                            scrollX: true,
                            scrollY: false
                        });
                        iscrolls.classify2 = new iscroll($el.classify2.get(0), {
                            scrollX: true,
                            scrollY: false
                        });

                        this.onReview = function () {
                            iscrolls.content.refresh();
                        };
                        env.mainlayout.on('review', this.onReview);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var self = this;
                        var iscrolls = this.iscrolls;

                        _get(Object.getPrototypeOf(GftjPage.prototype), 'endPage', this).call(this, function () {
                            env.mainlayout.off('review', self.onReview);
                            $.each(iscrolls, function (key, iscroll) {
                                iscroll.destroy();
                            });

                            self.my_swiper.destroy();
                            self.$el = null;
                        });
                    }
                }]);

                return GftjPage;
            })(BasePage);

            _export('default', GftjPage);
        }
    };
});

//# sourceMappingURL=gftj.js.map
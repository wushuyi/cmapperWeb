System.register(['jquery', './base.js', 'iscroll', '../router/utils.js', '../utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/18.
     */
    'use strict';

    var $, BasePage, iscroll, routeHistory, env, FollowPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }, function (_baseJs) {
            BasePage = _baseJs['default'];
        }, function (_iscroll) {
            iscroll = _iscroll['default'];
        }, function (_routerUtilsJs) {
            routeHistory = _routerUtilsJs.routeHistory;
        }, function (_utilsEnvJs) {
            env = _utilsEnvJs['default'];
        }],
        execute: function () {
            FollowPage = (function (_BasePage) {
                function FollowPage() {
                    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
                        arg[_key] = arguments[_key];
                    }

                    _classCallCheck(this, FollowPage);

                    if (arg[0] === false) {
                        return false;
                    }
                    _get(Object.getPrototypeOf(FollowPage.prototype), 'constructor', this).call(this, false);
                    this.initialize.apply(this, arg);
                }

                _inherits(FollowPage, _BasePage);

                _createClass(FollowPage, [{
                    key: 'initialize',
                    value: function initialize(options) {
                        _get(Object.getPrototypeOf(FollowPage.prototype), 'initialize', this).call(this);
                        var $el = {};
                        this.$el = $el;
                        var iscrolls = {};
                        this.iscrolls = iscrolls;
                        $el.page = $('#page_follow');
                        $el.close = $el.page.find('.close');
                        $el.close.one('tap.followpage', function () {
                            routeHistory.goback();
                        });
                        _get(Object.getPrototypeOf(FollowPage.prototype), 'startPage', this).call(this);
                        env.mainScroll = iscrolls.content = new iscroll($el.page.get(0));
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var _this = this;

                        var self = this;
                        var $el = this.$el;
                        var iscrolls = this.iscrolls;
                        _get(Object.getPrototypeOf(FollowPage.prototype), 'endPage', this).call(this, function () {
                            $.each($el, function (key, el) {
                                el.off('.followpage');
                            });
                            $.each(iscrolls, function (key, iscroll) {
                                iscroll.destroy();
                            });
                            _this.$el = null;
                        });
                    }
                }]);

                return FollowPage;
            })(BasePage);

            _export('default', FollowPage);
        }
    };
});

//# sourceMappingURL=follow.js.map
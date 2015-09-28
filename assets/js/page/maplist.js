System.register(['jquery', 'Swiper', './base.js', 'iscroll', '../utils/env.js', '../router/utils.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var $, Swiper, BasePage, iscroll, env, routeHistory, MapListPage;

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
        }, function (_routerUtilsJs) {
            routeHistory = _routerUtilsJs.routeHistory;
        }],
        execute: function () {
            MapListPage = (function (_BasePage) {
                function MapListPage() {
                    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
                        arg[_key] = arguments[_key];
                    }

                    _classCallCheck(this, MapListPage);

                    if (arg[0] === false) {
                        return false;
                    }
                    _get(Object.getPrototypeOf(MapListPage.prototype), 'constructor', this).call(this, false);
                    this.initialize.apply(this, arg);
                }

                _inherits(MapListPage, _BasePage);

                _createClass(MapListPage, [{
                    key: 'initialize',
                    value: function initialize(options) {
                        _get(Object.getPrototypeOf(MapListPage.prototype), 'initialize', this).call(this);
                        var $el = {};
                        this.$el = $el;
                        var iscrolls = {};
                        this.iscrolls = iscrolls;
                        $el.page = $('#page_maplist');
                        $el.close = $el.page.find('.tab-close');
                        $el.tabArchives = $el.page.find('.tab-archives');
                        _get(Object.getPrototypeOf(MapListPage.prototype), 'startPage', this).call(this);
                        $el.close.one('tap.maplist', function () {
                            var list = routeHistory.get('all');
                            var route = undefined;
                            do {
                                route = list.pop();
                                //console.log('pop:', route)
                            } while (route && route.indexOf('/mapinfo') !== -1);
                            env.router.setRoute(route || env.first_page);
                        });
                        $el.tabArchives.attr('data-router', '/mapinfo/archives/' + options.id);

                        env.mainScroll = iscrolls.content = new iscroll($el.page.get(0));
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var _this = this;

                        var iscrolls = this.iscrolls;
                        _get(Object.getPrototypeOf(MapListPage.prototype), 'endPage', this).call(this, function () {
                            $.each(iscrolls, function (key, iscroll) {
                                iscroll.destroy();
                            });
                            _this.$el = null;
                        });
                    }
                }]);

                return MapListPage;
            })(BasePage);

            _export('default', MapListPage);
        }
    };
});

//# sourceMappingURL=maplist.js.map
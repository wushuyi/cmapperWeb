System.register(['jquery', './base.js', 'iscroll', '../utils/wsy_utils.js', '../router/utils.js', '../utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/14.
     */
    'use strict';

    var $, BasePage, iscroll, proxy, routeHistory, env, MapInfoPage;

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
        }, function (_utilsWsy_utilsJs) {
            proxy = _utilsWsy_utilsJs.proxy;
        }, function (_routerUtilsJs) {
            routeHistory = _routerUtilsJs.routeHistory;
        }, function (_utilsEnvJs) {
            env = _utilsEnvJs['default'];
        }],
        execute: function () {
            MapInfoPage = (function (_BasePage) {
                function MapInfoPage() {
                    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
                        arg[_key] = arguments[_key];
                    }

                    _classCallCheck(this, MapInfoPage);

                    if (arg[0] === false) {
                        return false;
                    }
                    _get(Object.getPrototypeOf(MapInfoPage.prototype), 'constructor', this).call(this, false);
                    this.initialize.apply(this, arg);
                }

                _inherits(MapInfoPage, _BasePage);

                _createClass(MapInfoPage, [{
                    key: 'initialize',
                    value: function initialize(options) {
                        _get(Object.getPrototypeOf(MapInfoPage.prototype), 'initialize', this).call(this);
                        var $el = {};
                        this.$el = $el;
                        var iscrolls = {};
                        this.iscrolls = iscrolls;
                        $el.page = $('#page_mapinfo');
                        $el.close = $el.page.find('.tab-close');
                        $el.tabList = $el.page.find('.tab-list');
                        $el.commentList = $el.page.find('.comment-list');
                        $el.prompt = $el.commentList.next('.prompt');
                        $el.hotNumBox = $('.hot-num-box');
                        $el.commentBox = $('.comment-box');
                        _get(Object.getPrototypeOf(MapInfoPage.prototype), 'startPage', this).call(this);
                        env.mainScroll = iscrolls.content = new iscroll($el.page.get(0));

                        $el.close.one('tap.mapinfo', function () {
                            var list = routeHistory.get('all');
                            var route = undefined;
                            do {
                                route = list.pop();
                                //console.log('pop:', route)
                            } while (route && route.indexOf('/mapinfo') !== -1);
                            env.router.setRoute(route || env.first_page);
                        });
                        $el.tabList.attr('data-router', '/mapinfo/list/' + options.id);
                        var pullFunc = proxy(function () {
                            if (this.pullUpActionLock) {
                                return true;
                            }
                            if (iscrolls.content.maxScrollY - iscrolls.content.y > 100) {
                                this.pullUpAction();
                            }
                        }, this);
                        iscrolls.content.on('scrollStart', function () {
                            $el.page.one('touchend.mapinfo', pullFunc);
                        });

                        var $updata = $el.commentBox.find('.updata');
                        var $submit = $el.commentBox.find('.submit');
                        var $input = $el.commentBox.find('.input');
                        $el.hotNumBox.one('tap.mapinfo', '.comment-num', function () {
                            $updata.velocity({
                                height: 112
                            }, {
                                complete: function complete() {
                                    iscrolls.content.refresh();
                                }
                            });
                        });
                        $submit.on('tap.mapinfo', function () {
                            $input.val('');
                        });
                    }
                }, {
                    key: 'pullUpAction',
                    value: function pullUpAction() {
                        var temp = '<li>' + '<div class="comment clearfix">' + '<div class="avatar"></div>' + '<div class="msg">评论这是一条评论它评论评论这是一条评论它评论评论这是一条评论它评论</div>' + '<div class="btn-bar">' + '<div class="btn"></div>' + '<div class="btn"></div>' + '<div class="btn"></div>' + '</div>' + '</div>' + '</li>';
                        var reshtml = '';
                        for (var i = 10; i > 0; i--) {
                            reshtml = reshtml + temp;
                        }
                        this.pullUpActionLock = true;
                        var $el = this.$el;
                        var iscrolls = this.iscrolls;
                        var scrollTo = $el.commentList.find('.comment:last').get(0);

                        $el.loading = $('<li class="loading">loging...</li>');
                        $el.prompt.hide();
                        $el.commentList.append($el.loading);
                        iscrolls.content.refresh();
                        setTimeout(proxy(function () {
                            $el.loading.hide().remove();
                            $el.commentList.append(reshtml);
                            $el.prompt.show();
                            iscrolls.content.refresh();
                            this.pullUpActionLock = false;
                            iscrolls.content.scrollToElement(scrollTo, 1000);
                        }, this), 3000);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var iscrolls = this.iscrolls;
                        var self = this;
                        var $el = this.$el;
                        _get(Object.getPrototypeOf(MapInfoPage.prototype), 'endPage', this).call(this, function () {
                            iscrolls.content.off('scrollStart');
                            $.each($el, function (index, el) {
                                el.off('.mapinfo');
                            });
                            $.each(iscrolls, function (key, iscroll) {
                                iscroll.destroy();
                            });
                            self.$el = null;
                        });
                    }
                }]);

                return MapInfoPage;
            })(BasePage);

            _export('default', MapInfoPage);
        }
    };
});

//# sourceMappingURL=mapinfo.js.map
System.register(['jquery', 'lodash', '../utils/jquery.touch', '../component/main_layout', '../utils/env', '../utils/wsy_utils', '../component/map'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var $, _, MainLayout, env, transitionEnd, animationEnd, initGmap, PageBase;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }, function (_lodash) {
            _ = _lodash['default'];
        }, function (_utilsJqueryTouch) {}, function (_componentMain_layout) {
            MainLayout = _componentMain_layout['default'];
        }, function (_utilsEnv) {
            env = _utilsEnv['default'];
        }, function (_utilsWsy_utils) {
            transitionEnd = _utilsWsy_utils.transitionEnd;
            animationEnd = _utilsWsy_utils.animationEnd;
        }, function (_componentMap) {
            initGmap = _componentMap['default'];
        }],
        execute: function () {
            PageBase = (function () {
                function PageBase() {
                    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
                        arg[_key] = arguments[_key];
                    }

                    _classCallCheck(this, PageBase);

                    if (arg[0] === false) {
                        return false;
                    }
                    this.initialize.apply(this, arg);
                }

                _createClass(PageBase, [{
                    key: 'initialize',
                    value: function initialize() {
                        this.initMainLayout();
                        this.initRouterEvent();
                        this.initGoolgeMap();
                    }
                }, {
                    key: 'initMainLayout',
                    value: function initMainLayout() {
                        if (env.mainlayout) {
                            return false;
                        }
                        env.mainlayout = new MainLayout({
                            move_min_height: 128,
                            default_height: 254,
                            $height_control: $('.height-control'),
                            $main: $('.main'),
                            $map: $('.map'),
                            $nav: $('.nav'),
                            $content: $('.content'),
                            $out_box: $('.wrapper')
                        });
                    }
                }, {
                    key: 'initGoolgeMap',
                    value: function initGoolgeMap() {
                        if (env.initGoolgeMap) {
                            return false;
                        }
                        env.initGoolgeMap = true;
                        setTimeout(function () {}, 0);
                    }
                }, {
                    key: 'initRouterEvent',
                    value: function initRouterEvent() {
                        if (env.init_router_event) {
                            return false;
                        }
                        env.init_router_event = true;
                        $(document).on('click', 'a', function (evt) {
                            evt.preventDefault();
                        });
                        $(document.body).on('tap', '[data-router]', function (evt) {
                            evt.preventDefault();
                            if (env.router_wait) {
                                return false;
                            }
                            var $self = $(this);
                            var uri = $self.data('router');
                            env.router.setRoute(uri);
                        });
                    }
                }, {
                    key: 'startPage',
                    value: function startPage() {
                        var $el = this.$el;
                        if ($el.nav) {
                            $el.nav.addClass('active');
                        }

                        $el.page.removeClass('cached');
                        $el.page.addClass('page-content');
                        env.router_wait = true;
                        var callback = function callback() {
                            env.router_wait = false;
                        };
                        if (env.page) {
                            //env.mainlayout.viewMoveAnima(env.mainlayout._data.default_height);
                            //$el.page.one(animationEnd, function () {
                            //    $el.page.removeClass('page-from-right-to-center');
                            //    callback();
                            //});
                            //$el.page.addClass('page-content page-from-right-to-center');

                            callback();
                        } else {
                            callback();
                        }
                        env.page = true;
                    }
                }, {
                    key: 'endPage',
                    value: function endPage(cb) {
                        var $el = this.$el;
                        if ($el.nav) {
                            $el.nav.removeClass('active');
                        }

                        $el.page.removeClass('page-content');
                        if (env.page) {
                            //let fireback = _.once(()=> {
                            //    $el.page.removeClass('page-from-center-to-left');
                            //    $el.page.addClass('cached');
                            //    if (cb) {
                            //        cb();
                            //    }
                            //});
                            // 修护回退没执行bug
                            //setTimeout(() => {
                            //    fireback();
                            //}, 500);
                            //$el.page.one(animationEnd, function () {
                            //    fireback()
                            //});
                            //$el.page.addClass('page-from-center-to-left');
                            $el.page.addClass('cached');
                            if (cb) {
                                cb();
                            }
                        }
                    }
                }]);

                return PageBase;
            })();

            _export('default', PageBase);
        }
    };
});

//initGmap();

//# sourceMappingURL=base.js.map
System.register(['jquery', 'hammer', 'velocity', 'EventEmitter', '../utils/jquery.hammer.event.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var $, hammer, EventEmitter, MainLayout;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }, function (_hammer) {
            hammer = _hammer['default'];
        }, function (_velocity) {}, function (_EventEmitter2) {
            EventEmitter = _EventEmitter2['default'];
        }, function (_utilsJqueryHammerEventJs) {}],
        execute: function () {
            MainLayout = (function (_EventEmitter) {
                function MainLayout() {
                    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
                        arg[_key] = arguments[_key];
                    }

                    _classCallCheck(this, MainLayout);

                    _get(Object.getPrototypeOf(MainLayout.prototype), 'constructor', this).call(this);
                    this.initialize.apply(this, arg);
                }

                _inherits(MainLayout, _EventEmitter);

                _createClass(MainLayout, [{
                    key: 'initialize',
                    value: function initialize(options) {
                        this.$el = {};
                        this.top = null;
                        this.moveCtl = {
                            nowOn: null,
                            panMoveUp: true,
                            panMoveDown: true
                        };
                        this.max_height = null;

                        this.lock = false;
                        this.oldRes = options.default_height;

                        this.$el.height_control = options.$height_control;
                        this.$el.map = options.$map;
                        this.$el.main = options.$main;
                        this.$el.nav = options.$nav;
                        this.$el.content = options.$content;
                        var _data = {
                            win_height: options.$out_box.height(),
                            nav_height: this.$el.nav.height(),
                            move_min_height: options.move_min_height
                        };
                        _data.move_top_res = _data.move_min_height;
                        _data.move_bottom_res = _data.win_height - _data.nav_height - _data.move_min_height;
                        _data.tap_top_res = _data.move_min_height;
                        _data.tap_bottom_res = _data.win_height - _data.move_min_height - _data.nav_height;
                        _data.doubletap_top_res = 0;
                        _data.doubletap_bottom_res = _data.win_height - _data.nav_height;
                        _data.default_height = options.default_height;

                        this._data = _data;

                        this.initListener();
                    }
                }, {
                    key: 'initListener',
                    value: function initListener() {
                        this.inithammer();
                        this.initControl();
                    }
                }, {
                    key: 'inithammer',
                    value: function inithammer() {
                        var mc = new hammer.Manager(this.$el.height_control.get(0));
                        this.hammer = mc;
                        var pan = new hammer.Pan({ direction: hammer.DIRECTION_VERTICAL });
                        //let doubletap = new hammer.Tap({event: 'doubletap', taps: 2});
                        var singletap = new hammer.Tap({ event: 'singletap' });
                        mc.add([pan, singletap]);
                        //doubletap.recognizeWith('singletap');
                        //singletap.requireFailure('doubletap');
                        this.$el.height_control.data('hammer', mc);
                    }
                }, {
                    key: 'initControl',
                    value: function initControl() {
                        //this.$el.height_control.on('touchstart', function(){
                        //    console.log(touchstart)
                        //})
                        this.$el.height_control.on('panstart.mainlayout', $.proxy(this.panStart, this));
                        this.$el.height_control.on('panmove.mainlayout', $.proxy(this.panMove, this));
                        this.$el.height_control.on('panend.mainlayout', $.proxy(this.panEnd, this));
                        this.$el.height_control.on('singletap.mainlayout', $.proxy(this.singleTap, this));
                        //this.$el.height_control.on('doubletap.mainlayout', $.proxy(this.doubletap, this));
                    }
                }, {
                    key: 'panStart',
                    value: function panStart(evt) {
                        this.top = parseInt(this.$el.main.css('top').split('px')[0]);
                        this.emit('moveStart');
                    }
                }, {
                    key: 'panEnd',
                    value: function panEnd(evt) {
                        this.emit('moveEnd', this.oldRes);
                    }
                }, {
                    key: 'panMove',
                    value: function panMove(evt) {
                        if (this.lock === true) {
                            return false;
                        }
                        var res = this.top + evt.gesture.deltaY;
                        var moveCtl = this.moveCtl;
                        var _data = this._data;
                        if (moveCtl.nowOn && moveCtl.nowOn === 'top') {
                            if (res < _data.doubletap_top_res) {
                                res = _data.doubletap_top_res;
                            } else if (res > _data.move_top_res) {
                                moveCtl.nowOn = null;
                            }
                        } else if (moveCtl.nowOn && moveCtl.nowOn === 'bottom') {
                            if (res > _data.doubletap_bottom_res) {
                                res = _data.doubletap_bottom_res;
                            } else if (res < _data.move_bottom_res) {
                                moveCtl.nowOn = null;
                            }
                        } else {
                            if (res < _data.move_top_res) {
                                res = _data.move_top_res;
                                this.moveCtl.panMoveUp = false;
                            } else if (res > _data.move_bottom_res) {
                                res = _data.move_bottom_res;
                                this.moveCtl.panMoveDown = false;
                            }
                        }
                        this.viewMove(res);
                    }
                }, {
                    key: 'singleTap',
                    value: function singleTap(evt) {
                        if (this.lock === true) {
                            return false;
                        }
                        var _data = this._data;
                        var content_height = this.$el.content.height();
                        var map_height = this._data.win_height - this.$el.main.height();
                        var res = null;
                        if (content_height > map_height) {
                            res = _data.tap_top_res;
                        } else {
                            res = _data.tap_bottom_res;
                        }
                        if (map_height === _data.tap_top_res) {
                            res = _data.tap_bottom_res;
                        }
                        if (map_height === _data.tap_bottom_res) {
                            res = _data.tap_top_res;
                        }
                        this.viewMoveAnima(res);
                    }
                }, {
                    key: 'doubletap',
                    value: function doubletap(evt) {
                        if (this.lock === true) {
                            return false;
                        }
                        var _data = this._data;
                        var content_height = this.$el.content.height();
                        var map_height = this._data.win_height - this.$el.main.height();
                        var res = null;
                        if (content_height > map_height) {
                            res = _data.doubletap_top_res;
                        } else {
                            res = _data.doubletap_bottom_res;
                        }
                        if (map_height === _data.doubletap_top_res) {
                            res = _data.doubletap_bottom_res;
                        }
                        if (map_height === _data.doubletap_bottom_res) {
                            res = _data.doubletap_top_res;
                        }
                        this.viewMoveAnima(res);
                    }
                }, {
                    key: 'viewMove',
                    value: function viewMove(res) {
                        if (this.oldRes === res) {
                            return false;
                        }
                        this.oldRes = res;
                        this.$el.main.css({
                            top: res + 'px'
                        });
                        this.$el.map.css({
                            height: res + 'px'
                        });
                        this.emit('review');
                    }
                }, {
                    key: 'viewMoveAnima',
                    value: function viewMoveAnima(res) {
                        if (this.oldRes === res) {
                            return false;
                        }
                        this.oldRes = res;
                        this.lock = true;
                        var self = this;
                        var _data = this._data;
                        if (res === _data.doubletap_bottom_res) {
                            this.moveCtl.nowOn = 'bottom';
                        } else if (res == _data.doubletap_top_res) {
                            this.moveCtl.nowOn = 'top';
                        }

                        this.$el.main.velocity({
                            properties: {
                                top: res
                            },
                            options: {
                                //mobileHA: false
                                begin: function begin() {
                                    self.emit('moveStart');
                                },
                                progress: function progress() {
                                    self.emit('review');
                                },
                                complete: function complete() {
                                    self.lock = false;
                                    self.emit('moveEnd', self.oldRes);
                                }
                            }
                        });
                        this.$el.map.velocity({
                            properties: {
                                height: res
                            },
                            options: {
                                mobileHA: false
                            }
                        });
                    }
                }, {
                    key: 'viewMoveDefault',
                    value: function viewMoveDefault() {
                        var _data = this._data;
                        if (this.oldRes !== _data.default_height) {
                            this.viewMoveAnima(_data.default_height);
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.hammer.destroy();
                        this.$el.height_control.off('.mainlayout');
                        this.$el = null;
                    }
                }]);

                return MainLayout;
            })(EventEmitter);

            _export('default', MainLayout);
        }
    };
});

//# sourceMappingURL=main_layout.js.map
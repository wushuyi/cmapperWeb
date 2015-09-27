/**
 * Created by wushuyi on 2015/9/13.
 */
import $ from 'jquery'
import hammer from 'hammer'
import 'velocity'
import EventEmitter from 'EventEmitter'
import '../utils/jquery.hammer.event.js'

class MainLayout extends EventEmitter {
    constructor(...arg) {
        super();
        this.initialize(...arg);
    }

    initialize(options) {
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
        let _data = {
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
        _data.default_height = options.default_height

        this._data = _data;

        this.initListener();
    }

    initListener() {
        this.inithammer();
        this.initControl();
    }

    inithammer() {
        let mc = new hammer.Manager(this.$el.height_control.get(0));
        this.hammer = mc;
        let pan = new hammer.Pan({direction: hammer.DIRECTION_VERTICAL});
        //let doubletap = new hammer.Tap({event: 'doubletap', taps: 2});
        let singletap = new hammer.Tap({event: 'singletap'});
        mc.add([pan, singletap]);
        //doubletap.recognizeWith('singletap');
        //singletap.requireFailure('doubletap');
        this.$el.height_control.data('hammer', mc);
    }

    initControl() {
        //this.$el.height_control.on('touchstart', function(){
        //    console.log(touchstart)
        //})
        this.$el.height_control.on('panstart.mainlayout', $.proxy(this.panStart, this));
        this.$el.height_control.on('panmove.mainlayout', $.proxy(this.panMove, this));
        this.$el.height_control.on('panend.mainlayout', $.proxy(this.panEnd, this));
        this.$el.height_control.on('singletap.mainlayout', $.proxy(this.singleTap, this));
        //this.$el.height_control.on('doubletap.mainlayout', $.proxy(this.doubletap, this));
    }

    panStart(evt) {
        this.top = parseInt(this.$el.main.css('top').split('px')[0]);
        this.emit('moveStart');
    }

    panEnd(evt) {
        this.emit('moveEnd', this.oldRes);
    }

    panMove(evt) {
        if (this.lock === true) {
            return false;
        }
        let res = this.top + evt.gesture.deltaY;
        let moveCtl = this.moveCtl;
        let _data = this._data;
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
        this.viewMove(res)
    }

    singleTap(evt) {
        if (this.lock === true) {
            return false;
        }
        let _data = this._data;
        let content_height = this.$el.content.height();
        let map_height = this._data.win_height - this.$el.main.height();
        let res = null;
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

    doubletap(evt) {
        if (this.lock === true) {
            return false;
        }
        let _data = this._data;
        let content_height = this.$el.content.height();
        let map_height = this._data.win_height - this.$el.main.height();
        let res = null;
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

    viewMove(res) {
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

    viewMoveAnima(res) {
        if (this.oldRes === res) {
            return false;
        }
        this.oldRes = res;
        this.lock = true;
        let self = this;
        let _data = this._data;
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
                begin: function () {
                    self.emit('moveStart');
                },
                progress: function () {
                    self.emit('review');
                },
                complete: function () {
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

    viewMoveDefault() {
        let _data = this._data;
        if (this.oldRes !== _data.default_height) {
            this.viewMoveAnima(_data.default_height)
        }
    }

    destroy() {
        this.hammer.destroy();
        this.$el.height_control.off('.mainlayout');
        this.$el = null;
    }
}

export default MainLayout
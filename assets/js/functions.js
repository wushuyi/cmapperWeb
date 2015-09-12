//FastClick.attach(document.body);

$el = {};
$el.body = $('body');
$el.body.on('touchmove touchstart', function (evt) {
    evt.preventDefault();
});

var MainLayout = (function ($, Hammer, EventEmitter, WSYUtils, win) {
    var main = function main(options) {
        this.initialize.apply(this, arguments);
    };
    var p = WSYUtils.extend(main, EventEmitter);
    p.initialize = function (options) {
        //console.log(options);
        this.$el = {};
        this.top = null;
        this.moveCtl = {
            nowOn: null,
            panMoveUp: true,
            panMoveDown: true
        };
        this.max_height = null;

        this.lock = false;
        this.oldRes = null;

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

        this._data = _data;
        this.initListener();
    };
    p.initListener = function () {
        this.initHammer();
        this.initControl();
    };
    p.destroy = function () {
        this.$el.height_control.removeData('hammer');
        this.$el.height_control.off('.mainlayout');
    };
    p.initHammer = function () {
        var mc = new Hammer.Manager(this.$el.height_control.get(0));
        var pan = new Hammer.Pan({direction: Hammer.DIRECTION_VERTICAL});
        var doubletap = new Hammer.Tap({event: 'doubletap', taps: 2});
        var singletap = new Hammer.Tap({event: 'singletap'});
        mc.add([pan, doubletap, singletap]);
        doubletap.recognizeWith('singletap');
        singletap.requireFailure('doubletap');
        this.$el.height_control.data('hammer', mc);
    };
    p.initControl = function () {
        this.$el.height_control.on('panstart.mainlayout', WSYUtils.proxy(this.panStart, this));
        this.$el.height_control.on('panmove.mainlayout', WSYUtils.proxy(this.panMove, this));
        this.$el.height_control.on('singletap.mainlayout', WSYUtils.proxy(this.singleTap, this));
        this.$el.height_control.on('doubletap.mainlayout', WSYUtils.proxy(this.doubletap, this));
    };

    p.panStart = function (evt) {
        this.top = parseInt(this.$el.main.css('top').split('px')[0]);
    };
    p.panMove = function (evt) {
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
        this.viewMove(res)
    };

    p.singleTap = function () {
        if (this.lock === true) {
            return false;
        }
        var _data = this._data;
        var content_height = this.$el.content.height();
        var map_height = this.$el.map.height();
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
    };
    p.doubletap = function () {
        if (this.lock === true) {
            return false;
        }
        var _data = this._data;
        var content_height = this.$el.content.height();
        var map_height = this.$el.map.height();
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
    };

    p.viewMove = function (res) {
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
    };
    p.viewMoveAnima = function (res) {
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
            }
        });
        this.$el.map.velocity({
            properties: {
                height: res
            },
            options: {
                mobileHA: false,
                progress: function () {
                    //console.log(num++);
                    self.emit('review');
                },
                complete: function () {
                    self.lock = false;
                }
            }
        });
    };
    return main;
})
(jQuery, Hammer, EventEmitter, WSYUtils, window);


var myScroll = new IScroll('.content');
//var map = new google.maps.Map($('#map').get(0), {
//    center: new google.maps.LatLng(27.653981735563498, 117.98527836799622),
//    zoom: 14,
//    //disableDefaultUI: true,
//});
var mainlayout = new MainLayout({
    move_min_height: 128,
    $height_control: $('.height-control'),
    $main: $('.main'),
    $map: $('.map'),
    $nav: $('.nav'),
    $content: $('.content'),
    $out_box: $('.wrapper')
});
mainlayout.on('review', function (evt) {
    //console.log('review');
    myScroll.refresh();
    //google.maps.event.trigger(map, 'resize');
});


$el.nav_items = $('.nav-list .nav-item');
$el.nav_items.on('tap', function (evt) {
    $self = $(this);
    $el.nav_items.removeClass('active');
    $self.addClass('active');
});
FastClick.attach(document.body);

$el = {};
$el.wrapper = $('.wrapper');
$el.wrapper.on('touchmove touchstart', function (evt) {
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
        this.max_height = null;

        this.tapTimeOut = null;
        this.oldRes = null;

        this.$el.height_control = options.$height_control;
        this.$el.map = options.$map;
        this.$el.main = options.$main;
        this.$el.nav = options.$nav;
        this.$el.content = options.$content;

        this._data = {
            win_height: $(win).height(),
            nav_height: this.$el.nav.height(),
            move_min_height: options.move_min_height
        };
        this._data.move_top_res = this._data.move_min_height;
        this._data.move_bottom_res = this._data.win_height - this._data.nav_height - this._data.move_min_height;
        this._data.tap_top_res = this._data.move_min_height;
        this._data.tap_bottom_res = this._data.win_height - this._data.move_min_height - this._data.nav_height;
        this._data.doubletap_top_res = 0;
        this._data.doubletap_bottom_res = this._data.win_height - this._data.nav_height;
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
        this.$el.height_control.hammer({
            preset: [
                [Hammer.Pan, {
                    direction: Hammer.DIRECTION_VERTICAL,
                    threshold: 1
                }],
                [Hammer.Tap],
                [Hammer.Tap, {event: 'doubletap', taps: 2}, ['tap']],
            ]
        });
    };
    p.initControl = function () {
        this.$el.height_control.on('panstart.mainlayout', WSYUtils.proxy(this.panStart, this));
        this.$el.height_control.on('panup.mainlayout pandown.mainlayout', WSYUtils.proxy(this.panMove, this));
        this.$el.height_control.on('doubletap.mainlayout tap.mainlayout', WSYUtils.proxy(this.tapProcess, this));
    };
    p.panStart = function (evt) {
        this.top = parseInt(this.$el.main.css('top').split('px')[0]);
    };
    p.panMove = function (evt) {
        var res = this.top + evt.gesture.deltaY;
        //if ((evt.type === 'panup' && (res < this._data.move_top_res)) ||
        //    (evt.type === 'pandown' && res > this._data.move_bottom_res)) {
        //    return false;
        //}
        //if((this.oldRes && evt.type === 'panup' && (this.oldRes === this._data.move_top_res)))
        if (res < this._data.move_top_res) {
            res = this._data.move_top_res;
        }
        if (res > this._data.move_bottom_res) {
            res = this._data.move_bottom_res
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
    p.clearTapTimeOut = function () {
        if (this.tapTimeOut) {
            clearTimeout(this.tapTimeOut);
        }
        this.tapTimeOut = null;
    };
    p.tapProcess = function (evt) {
        if (evt.type === 'tap') {
            this.clearTapTimeOut();
            var tapRunFunc = WSYUtils.proxy(this.tapRun, this);
            var clearTapTimeOutFunc = WSYUtils.proxy(this.clearTapTimeOut, this);
            this.tapTimeOut = setTimeout(function () {
                clearTapTimeOutFunc();
                tapRunFunc();
            }, 300);
            return false;
        }
        if (evt.type == 'doubletap') {
            this.clearTapTimeOut();
            this.doubletapRun();
        }
    };
    p.tapRun = function () {
        var self = this;
        var content_height = this.$el.content.height();
        var map_height = this.$el.map.height();
        var res = null;

        if (map_height == this._data.tap_top_res || map_height == this._data.tap_bottom_res) {
            return false;
        }
        if (content_height > map_height) {
            res = this._data.tap_top_res;
        } else {
            res = this._data.tap_bottom_res;
        }
        //var num = 0;
        this.$el.map.velocity({
            properties: {
                height: res
            },
            options: {
                progress: function () {
                    //console.log(num++);
                    self.emit('review');
                }
            }
        });
        this.$el.main.velocity({
            properties: {
                top: res
            }
        });
    };
    p.doubletapRun = function () {
        var self = this;
        var content_height = this.$el.content.height();
        var map_height = this.$el.map.height();
        var res = null;

        if (map_height == this._data.doubletap_top_res || map_height == this._data.doubletap_bottom_res) {
            return false;
        }
        if (content_height > map_height) {
            res = this._data.doubletap_top_res;
        } else {
            res = this._data.doubletap_bottom_res;
        }
        this.$el.map.velocity({
            properties: {
                height: res
            },
            options: {
                progress: function () {
                    //console.log(num++);
                    self.emit('review');
                }
            }
        });
        this.$el.main.velocity({
            properties: {
                top: res
            },
        });
    };
    return main;
})
(jQuery, Hammer, EventEmitter, WSYUtils, window);


var myScroll = new IScroll('.content');
var map = new google.maps.Map($('#map').get(0), {
    center: new google.maps.LatLng(27.653981735563498, 117.98527836799622),
    zoom: 14,
    //disableDefaultUI: true,
});
var mainlayout = new MainLayout({
    move_min_height: 150,
    $height_control: $('.height-control'),
    $main: $('.main'),
    $map: $('.map'),
    $nav: $('.nav'),
    $content: $('.content')
});
mainlayout.on('review', function (evt) {
    //console.log('review');
    myScroll.refresh();
    google.maps.event.trigger(map, 'resize');
});


$el.nav_items = $('.nav-list .nav-item');
$el.nav_items.on('click', function (evt) {
    var $self = $(this);
    $el.nav_items.removeClass('active');
    $self.addClass('active');
});

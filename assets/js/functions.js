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

        this.$el.height_control = options.$height_control;
        this.$el.map = options.$map;
        this.$el.main = options.$main;
        this.$el.nav = options.$nav;

        this.max_height = $(window).height() - this.$el.nav.height();
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
                }]
            ]
        });
    };
    p.initControl = function () {
        this.$el.height_control.on('panstart.mainlayout', WSYUtils.proxy(this.panStart, this));
        this.$el.height_control.on('panup.mainlayout pandown.mainlayout', WSYUtils.proxy(this.panMove, this));
    };
    p.panStart = function (evt) {
        this.top = parseInt(this.$el.main.css('top').split('px')[0]);
    };
    p.panMove = function (evt) {
        //console.log(evt.gesture.deltaY);
        var res = this.top + evt.gesture.deltaY;
        if (res < 100) {
            res = 100;
        }
        if (res > this.max_height) {
            res = this.max_height
        }
        this.$el.main.css({
            top: res + 'px'
        });
        this.$el.map.css({
            height: res + 'px'
        });
        this.emit('review');
    };
    return main;
})(jQuery, Hammer, EventEmitter, WSYUtils, window);


var myScroll = new IScroll('.content');

var mainlayout = new MainLayout({
    $height_control: $('.height-control'),
    $main: $('.main'),
    $map: $('.map'),
    $nav: $('.nav')
});
mainlayout.on('review', function (evt) {
    myScroll.refresh();
});


$el.nav_items = $('.nav-list .nav-item');
$el.nav_items.on('click', function (evt) {
    var $self = $(this);
    //console.log(evt);
    $el.nav_items.removeClass('active');
    $self.addClass('active');
});

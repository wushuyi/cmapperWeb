/**
 * Created by wushuyi on 2015/9/10.
 */
(function ($, Hammer) {
    Hammer.Manager.prototype.emit = (function (originalEmit) {
        return function (type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);

    $.event.special['tap'] = {
        setup: function () {
            var self = this;
            var $self = $(this);
            var mc = new Hammer.Manager(self);
            var tap = new Hammer.Tap({event: 'tap'});
            mc.add(tap);
            $self.data('hammer-tap', mc);
        },
        teardown: function () {
            var $self = $(this);
            $self.removeData('hammer-tap')
        }
    };
})(jQuery, Hammer);
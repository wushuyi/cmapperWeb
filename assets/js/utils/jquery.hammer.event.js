System.register(['jquery', 'hammer'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/10.
     */
    'use strict';

    var $, hammer;
    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }, function (_hammer) {
            hammer = _hammer['default'];
        }],
        execute: function () {

            hammer.Manager.prototype.emit = (function (originalEmit) {
                return function (type, data) {
                    originalEmit.call(this, type, data);
                    $(this.element).trigger({
                        type: type,
                        gesture: data
                    });
                };
            })(hammer.Manager.prototype.emit);

            //$.event.special['tap'] = {
            //    setup: function () {
            //        var self = this;
            //        var $self = $(this);
            //        var mc = new hammer.Manager(self);
            //        var tap = new hammer.Tap({event: 'tap'});
            //        mc.add(tap);
            //        $self.data('hammer-tap', mc);
            //    },
            //    teardown: function () {
            //        var $self = $(this);
            //        var mc = $self.data('hammer-tap');
            //        mc.destroy();
            //        $self.removeData('hammer-tap');
            //    }
            //};
        }
    };
});

//# sourceMappingURL=jquery.hammer.event.js.map
System.register(['jquery'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/27.
     */
    'use strict';

    var $;

    _export('default', androidInputBug);

    function androidInputBug() {
        var $input = $('input, textarea');
        var $wrapper = $('.wrapper');
        var $win = $(window);
        var $body = $(document.body);
        var winH = undefined;
        var $signal = $({});
        var keyboardIsShow = false;
        var $focusinInput = null;
        $body.on('focusin', 'input, textarea', function (evt) {
            $focusinInput = $(this);
            var top = $focusinInput.offset().top;
            $wrapper.css('margin-top', -top + 200);
        });
        $signal.on('keyboard-show', function () {});
        $signal.on('keyboard-hide', function () {
            //alert('keyboard-hide');
            //$body.off('touchstart.keyboard');
            $wrapper.css('margin-top', 0);
            $focusinInput.hide();
            setTimeout(function () {
                $focusinInput.show();
                env.mainScroll.refresh();
            }, 10);
        });

        setTimeout(function () {
            winH = $win.height();
            setInterval(function () {
                if (!keyboardIsShow) {
                    if (winH > $win.height()) {
                        $signal.trigger('keyboard-show');
                        keyboardIsShow = true;
                    }
                } else {
                    if (winH === $win.height()) {
                        $signal.trigger('keyboard-hide');
                        keyboardIsShow = false;
                    }
                }
            }, 500);
        }, 800);
    }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }],
        execute: function () {}
    };
});

//$body.on('touchstart.keyboard', function () {
//    $signal.trigger('keyboard-hide');
//    keyboardIsShow = false;
//});

//# sourceMappingURL=androidInputBug.js.map
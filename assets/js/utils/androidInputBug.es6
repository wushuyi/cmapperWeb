/**
 * Created by wushuyi on 2015/9/27.
 */
import $ from 'jquery';
export default function androidInputBug() {
    let $input = $('input, textarea');
    let $wrapper = $('.wrapper');
    let $win = $(window);
    let $body = $(document.body);
    let winH;
    let $signal = $({});
    let keyboardIsShow = false;
    let $focusinInput = null;
    $body.on('focusin', 'input, textarea', function (evt) {
        $focusinInput = $(this);
        let top = $focusinInput.offset().top;
        $wrapper.css('margin-top', -top + 200);
    });
    $signal.on('keyboard-show', function () {
        //$body.on('touchstart.keyboard', function () {
        //    $signal.trigger('keyboard-hide');
        //    keyboardIsShow = false;
        //});
    });
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
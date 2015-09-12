/**
 * Created by wushuyi on 2015/9/10.
 */
(function (global) {

    function extend(subclass, superclass) {
        function o() {
            this.constructor = subclass;
        }

        o.prototype = superclass.prototype;
        return (subclass.prototype = new o());
    }

    function promote(subclass, prefix) {
        var subP = subclass.prototype, supP = (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__;
        if (supP) {
            subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
            for (var n in supP) {
                if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) {
                    subP[prefix + n] = supP[n];
                }
            }
        }
        return subclass;
    }

    function proxy(method, scope) {
        var aArgs = Array.prototype.slice.call(arguments, 2);
        return function () {
            return method.apply(scope, Array.prototype.slice.call(arguments, 0).concat(aArgs));
        };
    }

    var exports = {
        extend: extend,
        promote: promote,
        proxy: proxy
    };

    global.WSYUtils = exports;
})(window);
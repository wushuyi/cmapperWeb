System.register([], function (_export) {
    /**
     * Created by wushuyi on 2015/9/10.
     */
    "use strict";

    var transitionEnd, animationEnd;

    _export("extend", extend);

    _export("promote", promote);

    _export("proxy", proxy);

    function extend(subclass, superclass) {
        function o() {
            this.constructor = subclass;
        }

        o.prototype = superclass.prototype;
        return subclass.prototype = new o();
    }

    function promote(subclass, prefix) {
        var subP = subclass.prototype,
            supP = Object.getPrototypeOf && Object.getPrototypeOf(subP) || subP.__proto__;
        if (supP) {
            subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
            for (var n in supP) {
                if (subP.hasOwnProperty(n) && typeof supP[n] == "function") {
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

    return {
        setters: [],
        execute: function () {
            transitionEnd = (function () {
                var div = document.createElement("div");
                var transitions = {
                    transition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "mozTransitionEnd",
                    OTransition: "oTransitionEnd",
                    msTransition: "MSTransitionEnd"
                };

                for (var t in transitions) {
                    if (div.style[t] !== undefined) {
                        return transitions[t];
                    }
                }
            })();

            _export("transitionEnd", transitionEnd);

            animationEnd = (function () {
                var div = document.createElement("div");
                var transitions = {
                    animation: "animationend",
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "mozAnimationEnd",
                    OAnimation: "oAnimationEnd",
                    msAnimation: "MSAnimationEnd"
                };

                for (var t in transitions) {
                    if (div.style[t] !== undefined) {
                        return transitions[t];
                    }
                }
            })();

            _export("animationEnd", animationEnd);
        }
    };
});

//# sourceMappingURL=wsy_utils.js.map
/**
 * Created by wushuyi on 2015/9/10.
 */
export function extend(subclass, superclass) {
    function o() {
        this.constructor = subclass;
    }

    o.prototype = superclass.prototype;
    return (subclass.prototype = new o());
}

export function promote(subclass, prefix) {
    let subP = subclass.prototype, supP = (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__;
    if (supP) {
        subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
        for (let n in supP) {
            if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) {
                subP[prefix + n] = supP[n];
            }
        }
    }
    return subclass;
}

export function proxy(method, scope) {
    let aArgs = Array.prototype.slice.call(arguments, 2);
    return function () {
        return method.apply(scope, Array.prototype.slice.call(arguments, 0).concat(aArgs));
    };
}

export let transitionEnd = (function () {
    let div = document.createElement('div');
    let transitions = {
        transition: 'transitionend',
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'mozTransitionEnd',
        OTransition: 'oTransitionEnd',
        msTransition: 'MSTransitionEnd'
    };

    for (let t in transitions) {
        if (div.style[t] !== undefined) {
            return transitions[t];
        }
    }
})();

export let animationEnd = (function () {
    let div = document.createElement('div');
    let transitions = {
        animation: 'animationend',
        WebkitAnimation: 'webkitAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        OAnimation: 'oAnimationEnd',
        msAnimation: 'MSAnimationEnd'
    };

    for (let t in transitions) {
        if (div.style[t] !== undefined) {
            return transitions[t];
        }
    }
})();
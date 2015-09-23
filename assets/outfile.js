"bundle";
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
(function(global, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document ? factory(global, true) : function(w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return factory(w);
    };
  } else {
    factory(global);
  }
}(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
  var arr = [];
  var slice = arr.slice;
  var concat = arr.concat;
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var support = {};
  var document = window.document,
      version = "2.1.4",
      jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
      },
      rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      rmsPrefix = /^-ms-/,
      rdashAlpha = /-([\da-z])/gi,
      fcamelCase = function(all, letter) {
        return letter.toUpperCase();
      };
  jQuery.fn = jQuery.prototype = {
    jquery: version,
    constructor: jQuery,
    selector: "",
    length: 0,
    toArray: function() {
      return slice.call(this);
    },
    get: function(num) {
      return num != null ? (num < 0 ? this[num + this.length] : this[num]) : slice.call(this);
    },
    pushStack: function(elems) {
      var ret = jQuery.merge(this.constructor(), elems);
      ret.prevObject = this;
      ret.context = this.context;
      return ret;
    },
    each: function(callback, args) {
      return jQuery.each(this, callback, args);
    },
    map: function(callback) {
      return this.pushStack(jQuery.map(this, function(elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function() {
      return this.pushStack(slice.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor(null);
    },
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };
  jQuery.extend = jQuery.fn.extend = function() {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;
    if (typeof target === "boolean") {
      deep = target;
      target = arguments[i] || {};
      i++;
    }
    if (typeof target !== "object" && !jQuery.isFunction(target)) {
      target = {};
    }
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      if ((options = arguments[i]) != null) {
        for (name in options) {
          src = target[name];
          copy = options[name];
          if (target === copy) {
            continue;
          }
          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && jQuery.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            }
            target[name] = jQuery.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  };
  jQuery.extend({
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    isReady: true,
    error: function(msg) {
      throw new Error(msg);
    },
    noop: function() {},
    isFunction: function(obj) {
      return jQuery.type(obj) === "function";
    },
    isArray: Array.isArray,
    isWindow: function(obj) {
      return obj != null && obj === obj.window;
    },
    isNumeric: function(obj) {
      return !jQuery.isArray(obj) && (obj - parseFloat(obj) + 1) >= 0;
    },
    isPlainObject: function(obj) {
      if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
        return false;
      }
      if (obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
        return false;
      }
      return true;
    },
    isEmptyObject: function(obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },
    type: function(obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
    },
    globalEval: function(code) {
      var script,
          indirect = eval;
      code = jQuery.trim(code);
      if (code) {
        if (code.indexOf("use strict") === 1) {
          script = document.createElement("script");
          script.text = code;
          document.head.appendChild(script).parentNode.removeChild(script);
        } else {
          indirect(code);
        }
      }
    },
    camelCase: function(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    },
    nodeName: function(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },
    each: function(obj, callback, args) {
      var value,
          i = 0,
          length = obj.length,
          isArray = isArraylike(obj);
      if (args) {
        if (isArray) {
          for (; i < length; i++) {
            value = callback.apply(obj[i], args);
            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = callback.apply(obj[i], args);
            if (value === false) {
              break;
            }
          }
        }
      } else {
        if (isArray) {
          for (; i < length; i++) {
            value = callback.call(obj[i], i, obj[i]);
            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = callback.call(obj[i], i, obj[i]);
            if (value === false) {
              break;
            }
          }
        }
      }
      return obj;
    },
    trim: function(text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },
    makeArray: function(arr, results) {
      var ret = results || [];
      if (arr != null) {
        if (isArraylike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }
      return ret;
    },
    inArray: function(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    merge: function(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;
      for (; j < len; j++) {
        first[i++] = second[j];
      }
      first.length = i;
      return first;
    },
    grep: function(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert;
      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);
        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }
      return matches;
    },
    map: function(elems, callback, arg) {
      var value,
          i = 0,
          length = elems.length,
          isArray = isArraylike(elems),
          ret = [];
      if (isArray) {
        for (; i < length; i++) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      }
      return concat.apply([], ret);
    },
    guid: 1,
    proxy: function(fn, context) {
      var tmp,
          args,
          proxy;
      if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      }
      if (!jQuery.isFunction(fn)) {
        return undefined;
      }
      args = slice.call(arguments, 2);
      proxy = function() {
        return fn.apply(context || this, args.concat(slice.call(arguments)));
      };
      proxy.guid = fn.guid = fn.guid || jQuery.guid++;
      return proxy;
    },
    now: Date.now,
    support: support
  });
  jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });
  function isArraylike(obj) {
    var length = "length" in obj && obj.length,
        type = jQuery.type(obj);
    if (type === "function" || jQuery.isWindow(obj)) {
      return false;
    }
    if (obj.nodeType === 1 && length) {
      return true;
    }
    return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
  }
  var Sizzle = (function(window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        },
        MAX_NEGATIVE = 1 << 31,
        hasOwn = ({}).hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,
        indexOf = function(list, elem) {
          var i = 0,
              len = list.length;
          for (; i < len; i++) {
            if (list[i] === elem) {
              return i;
            }
          }
          return -1;
        },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        whitespace = "[\\x20\\t\\r\\n\\f]",
        characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        identifier = characterEncoding.replace("w", "w#"),
        attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + characterEncoding + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)",
        rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
          "ID": new RegExp("^#(" + characterEncoding + ")"),
          "CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
          "TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
          "ATTR": new RegExp("^" + attributes),
          "PSEUDO": new RegExp("^" + pseudos),
          "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
          "bool": new RegExp("^(?:" + booleans + ")$", "i"),
          "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        },
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        rescape = /'|\\/g,
        runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
        funescape = function(_, escaped, escapedWhitespace) {
          var high = "0x" + escaped - 0x10000;
          return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
        },
        unloadHandler = function() {
          setDocument();
        };
    try {
      push.apply((arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes);
      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {apply: arr.length ? function(target, els) {
          push_native.apply(target, slice.call(els));
        } : function(target, els) {
          var j = target.length,
              i = 0;
          while ((target[j++] = els[i++])) {}
          target.length = j - 1;
        }};
    }
    function Sizzle(selector, context, results, seed) {
      var match,
          elem,
          m,
          nodeType,
          i,
          groups,
          old,
          nid,
          newContext,
          newSelector;
      if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
        setDocument(context);
      }
      context = context || document;
      results = results || [];
      nodeType = context.nodeType;
      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      }
      if (!seed && documentIsHTML) {
        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
          if ((m = match[1])) {
            if (nodeType === 9) {
              elem = context.getElementById(m);
              if (elem && elem.parentNode) {
                if (elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } else {
                return results;
              }
            } else {
              if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                results.push(elem);
                return results;
              }
            }
          } else if (match[2]) {
            push.apply(results, context.getElementsByTagName(selector));
            return results;
          } else if ((m = match[3]) && support.getElementsByClassName) {
            push.apply(results, context.getElementsByClassName(m));
            return results;
          }
        }
        if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
          nid = old = expando;
          newContext = context;
          newSelector = nodeType !== 1 && selector;
          if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
            groups = tokenize(selector);
            if ((old = context.getAttribute("id"))) {
              nid = old.replace(rescape, "\\$&");
            } else {
              context.setAttribute("id", nid);
            }
            nid = "[id='" + nid + "'] ";
            i = groups.length;
            while (i--) {
              groups[i] = nid + toSelector(groups[i]);
            }
            newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
            newSelector = groups.join(",");
          }
          if (newSelector) {
            try {
              push.apply(results, newContext.querySelectorAll(newSelector));
              return results;
            } catch (qsaError) {} finally {
              if (!old) {
                context.removeAttribute("id");
              }
            }
          }
        }
      }
      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    function createCache() {
      var keys = [];
      function cache(key, value) {
        if (keys.push(key + " ") > Expr.cacheLength) {
          delete cache[keys.shift()];
        }
        return (cache[key + " "] = value);
      }
      return cache;
    }
    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    function assert(fn) {
      var div = document.createElement("div");
      try {
        return !!fn(div);
      } catch (e) {
        return false;
      } finally {
        if (div.parentNode) {
          div.parentNode.removeChild(div);
        }
        div = null;
      }
    }
    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = attrs.length;
      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
      if (diff) {
        return diff;
      }
      if (cur) {
        while ((cur = cur.nextSibling)) {
          if (cur === b) {
            return -1;
          }
        }
      }
      return a ? 1 : -1;
    }
    function createInputPseudo(type) {
      return function(elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    function createButtonPseudo(type) {
      return function(elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    function createPositionalPseudo(fn) {
      return markFunction(function(argument) {
        argument = +argument;
        return markFunction(function(seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length;
          while (i--) {
            if (seed[(j = matchIndexes[i])]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    }
    support = Sizzle.support = {};
    isXML = Sizzle.isXML = function(elem) {
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;
      return documentElement ? documentElement.nodeName !== "HTML" : false;
    };
    setDocument = Sizzle.setDocument = function(node) {
      var hasCompare,
          parent,
          doc = node ? node.ownerDocument || node : preferredDoc;
      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      }
      document = doc;
      docElem = doc.documentElement;
      parent = doc.defaultView;
      if (parent && parent !== parent.top) {
        if (parent.addEventListener) {
          parent.addEventListener("unload", unloadHandler, false);
        } else if (parent.attachEvent) {
          parent.attachEvent("onunload", unloadHandler);
        }
      }
      documentIsHTML = !isXML(doc);
      support.attributes = assert(function(div) {
        div.className = "i";
        return !div.getAttribute("className");
      });
      support.getElementsByTagName = assert(function(div) {
        div.appendChild(doc.createComment(""));
        return !div.getElementsByTagName("*").length;
      });
      support.getElementsByClassName = rnative.test(doc.getElementsByClassName);
      support.getById = assert(function(div) {
        docElem.appendChild(div).id = expando;
        return !doc.getElementsByName || !doc.getElementsByName(expando).length;
      });
      if (support.getById) {
        Expr.find["ID"] = function(id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var m = context.getElementById(id);
            return m && m.parentNode ? [m] : [];
          }
        };
        Expr.filter["ID"] = function(id) {
          var attrId = id.replace(runescape, funescape);
          return function(elem) {
            return elem.getAttribute("id") === attrId;
          };
        };
      } else {
        delete Expr.find["ID"];
        Expr.filter["ID"] = function(id) {
          var attrId = id.replace(runescape, funescape);
          return function(elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        };
      }
      Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag);
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function(tag, context) {
        var elem,
            tmp = [],
            i = 0,
            results = context.getElementsByTagName(tag);
        if (tag === "*") {
          while ((elem = results[i++])) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }
          return tmp;
        }
        return results;
      };
      Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
        if (documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      rbuggyMatches = [];
      rbuggyQSA = [];
      if ((support.qsa = rnative.test(doc.querySelectorAll))) {
        assert(function(div) {
          docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>";
          if (div.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          }
          if (!div.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          }
          if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          }
          if (!div.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          }
          if (!div.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
        });
        assert(function(div) {
          var input = doc.createElement("input");
          input.setAttribute("type", "hidden");
          div.appendChild(input).setAttribute("name", "D");
          if (div.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          }
          if (!div.querySelectorAll(":enabled").length) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          div.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }
      if ((support.matchesSelector = rnative.test((matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)))) {
        assert(function(div) {
          support.disconnectedMatch = matches.call(div, "div");
          matches.call(div, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }
      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      hasCompare = rnative.test(docElem.compareDocumentPosition);
      contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function(a, b) {
        if (b) {
          while ((b = b.parentNode)) {
            if (b === a) {
              return true;
            }
          }
        }
        return false;
      };
      sortOrder = hasCompare ? function(a, b) {
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }
        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
        if (compare) {
          return compare;
        }
        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
        if (compare & 1 || (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
          if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
            return -1;
          }
          if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
            return 1;
          }
          return sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
        }
        return compare & 4 ? -1 : 1;
      } : function(a, b) {
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }
        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b];
        if (!aup || !bup) {
          return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
        } else if (aup === bup) {
          return siblingCheck(a, b);
        }
        cur = a;
        while ((cur = cur.parentNode)) {
          ap.unshift(cur);
        }
        cur = b;
        while ((cur = cur.parentNode)) {
          bp.unshift(cur);
        }
        while (ap[i] === bp[i]) {
          i++;
        }
        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      };
      return doc;
    };
    Sizzle.matches = function(expr, elements) {
      return Sizzle(expr, null, null, elements);
    };
    Sizzle.matchesSelector = function(elem, expr) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      expr = expr.replace(rattributeQuotes, "='$1']");
      if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr);
          if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {}
      }
      return Sizzle(expr, document, null, [elem]).length > 0;
    };
    Sizzle.contains = function(context, elem) {
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }
      return contains(context, elem);
    };
    Sizzle.attr = function(elem, name) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      var fn = Expr.attrHandle[name.toLowerCase()],
          val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };
    Sizzle.error = function(msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    Sizzle.uniqueSort = function(results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0;
      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);
      if (hasDuplicate) {
        while ((elem = results[i++])) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }
        while (j--) {
          results.splice(duplicates[j], 1);
        }
      }
      sortInput = null;
      return results;
    };
    getText = Sizzle.getText = function(elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;
      if (!nodeType) {
        while ((node = elem[i++])) {
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      }
      return ret;
    };
    Expr = Sizzle.selectors = {
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {dir: "parentNode"},
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        "ATTR": function(match) {
          match[1] = match[1].replace(runescape, funescape);
          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }
          return match.slice(0, 4);
        },
        "CHILD": function(match) {
          match[1] = match[1].toLowerCase();
          if (match[1].slice(0, 3) === "nth") {
            if (!match[3]) {
              Sizzle.error(match[0]);
            }
            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +((match[7] + match[8]) || match[3] === "odd");
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }
          return match;
        },
        "PSEUDO": function(match) {
          var excess,
              unquoted = !match[6] && match[2];
          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          }
          if (match[3]) {
            match[2] = match[4] || match[5] || "";
          } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          }
          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function() {
            return true;
          } : function(elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function(name, operator, check) {
          return function(elem) {
            var result = Sizzle.attr(elem, name);
            if (result == null) {
              return operator === "!=";
            }
            if (!operator) {
              return true;
            }
            result += "";
            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          };
        },
        "CHILD": function(type, what, argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? function(elem) {
            return !!elem.parentNode;
          } : function(elem, context, xml) {
            var cache,
                outerCache,
                node,
                diff,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType;
            if (parent) {
              if (simple) {
                while (dir) {
                  node = elem;
                  while ((node = node[dir])) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  }
                  start = dir = type === "only" && !start && "nextSibling";
                }
                return true;
              }
              start = [forward ? parent.firstChild : parent.lastChild];
              if (forward && useCache) {
                outerCache = parent[expando] || (parent[expando] = {});
                cache = outerCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = cache[0] === dirruns && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    outerCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                diff = cache[1];
              } else {
                while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                  if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                    if (useCache) {
                      (node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
                    }
                    if (node === elem) {
                      break;
                    }
                  }
                }
              }
              diff -= last;
              return diff === first || (diff % first === 0 && diff / first >= 0);
            }
          };
        },
        "PSEUDO": function(pseudo, argument) {
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
          if (fn[expando]) {
            return fn(argument);
          }
          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;
              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function(elem) {
              return fn(elem, 0, args);
            };
          }
          return fn;
        }
      },
      pseudos: {
        "not": markFunction(function(selector) {
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length;
            while (i--) {
              if ((elem = unmatched[i])) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function(elem, context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results);
            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function(selector) {
          return function(elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function(text) {
          text = text.replace(runescape, funescape);
          return function(elem) {
            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
          };
        }),
        "lang": markFunction(function(lang) {
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }
          lang = lang.replace(runescape, funescape).toLowerCase();
          return function(elem) {
            var elemLang;
            do {
              if ((elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);
            return false;
          };
        }),
        "target": function(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function(elem) {
          return elem === docElem;
        },
        "focus": function(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        "enabled": function(elem) {
          return elem.disabled === false;
        },
        "disabled": function(elem) {
          return elem.disabled === true;
        },
        "checked": function(elem) {
          var nodeName = elem.nodeName.toLowerCase();
          return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
        },
        "selected": function(elem) {
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }
          return elem.selected === true;
        },
        "empty": function(elem) {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        "parent": function(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        "header": function(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        "first": createPositionalPseudo(function() {
          return [0];
        }),
        "last": createPositionalPseudo(function(matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function(matchIndexes, length) {
          var i = 0;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function(matchIndexes, length) {
          var i = 1;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; --i >= 0; ) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; ++i < length; ) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"];
    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }
    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    }
    function setFilters() {}
    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();
    tokenize = Sizzle.tokenize = function(selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;
      while (soFar) {
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push((tokens = []));
        }
        matched = false;
        if ((match = rcombinators.exec(soFar))) {
          matched = match.shift();
          tokens.push({
            value: matched,
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        }
        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }
      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
    };
    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";
      for (; i < len; i++) {
        selector += tokens[i].value;
      }
      return selector;
    }
    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          checkNonElements = base && dir === "parentNode",
          doneName = done++;
      return combinator.first ? function(elem, context, xml) {
        while ((elem = elem[dir])) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }
      } : function(elem, context, xml) {
        var oldCache,
            outerCache,
            newCache = [dirruns, doneName];
        if (xml) {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {});
              if ((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                return (newCache[2] = oldCache[2]);
              } else {
                outerCache[dir] = newCache;
                if ((newCache[2] = matcher(elem, context, xml))) {
                  return true;
                }
              }
            }
          }
        }
      };
    }
    function elementMatcher(matchers) {
      return matchers.length > 1 ? function(elem, context, xml) {
        var i = matchers.length;
        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;
      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }
      return results;
    }
    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;
      for (; i < len; i++) {
        if ((elem = unmatched[i])) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);
            if (mapped) {
              map.push(i);
            }
          }
        }
      }
      return newUnmatched;
    }
    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }
      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }
      return markFunction(function(seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        }
        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml);
          i = temp.length;
          while (i--) {
            if ((elem = temp[i])) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }
        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              temp = [];
              i = matcherOut.length;
              while (i--) {
                if ((elem = matcherOut[i])) {
                  temp.push((matcherIn[i] = elem));
                }
              }
              postFinder(null, (matcherOut = []), temp, xml);
            }
            i = matcherOut.length;
            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          }
        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }
    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true),
          matchAnyContext = addCombinator(function(elem) {
            return indexOf(checkContext, elem) > -1;
          }, implicitRelative, true),
          matchers = [function(elem, context, xml) {
            var ret = (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
      for (; i < len; i++) {
        if ((matcher = Expr.relative[tokens[i].type])) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
          if (matcher[expando]) {
            j = ++i;
            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }
            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({value: tokens[i - 2].type === " " ? "*" : ""})).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens((tokens = tokens.slice(j))), j < len && toSelector(tokens));
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function(seed, context, xml, results, outermost) {
            var elem,
                j,
                matcher,
                matchedCount = 0,
                i = "0",
                unmatched = seed && [],
                setMatched = [],
                contextBackup = outermostContext,
                elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                len = elems.length;
            if (outermost) {
              outermostContext = context !== document && context;
            }
            for (; i !== len && (elem = elems[i]) != null; i++) {
              if (byElement && elem) {
                j = 0;
                while ((matcher = elementMatchers[j++])) {
                  if (matcher(elem, context, xml)) {
                    results.push(elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if ((elem = !matcher && elem)) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i;
            if (bySet && i !== matchedCount) {
              j = 0;
              while ((matcher = setMatchers[j++])) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i--) {
                    if (!(unmatched[i] || setMatched[i])) {
                      setMatched[i] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && (matchedCount + setMatchers.length) > 1) {
                Sizzle.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    compile = Sizzle.compile = function(selector, match) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];
      if (!cached) {
        if (!match) {
          match = tokenize(selector);
        }
        i = match.length;
        while (i--) {
          cached = matcherFromTokens(match[i]);
          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }
        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
        cached.selector = selector;
      }
      return cached;
    };
    select = Sizzle.select = function(selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize((selector = compiled.selector || selector));
      results = results || [];
      if (match.length === 1) {
        tokens = match[0] = match[0].slice(0);
        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
          if (!context) {
            return results;
          } else if (compiled) {
            context = context.parentNode;
          }
          selector = selector.slice(tokens.shift().value.length);
        }
        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
        while (i--) {
          token = tokens[i];
          if (Expr.relative[(type = token.type)]) {
            break;
          }
          if ((find = Expr.find[type])) {
            if ((seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);
              if (!selector) {
                push.apply(results, seed);
                return results;
              }
              break;
            }
          }
        }
      }
      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    };
    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
    support.detectDuplicates = !!hasDuplicate;
    setDocument();
    support.sortDetached = assert(function(div1) {
      return div1.compareDocumentPosition(document.createElement("div")) & 1;
    });
    if (!assert(function(div) {
      div.innerHTML = "<a href='#'></a>";
      return div.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function(elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    }
    if (!support.attributes || !assert(function(div) {
      div.innerHTML = "<input/>";
      div.firstChild.setAttribute("value", "");
      return div.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function(elem, name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    }
    if (!assert(function(div) {
      return div.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function(elem, name, isXML) {
        var val;
        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }
    return Sizzle;
  })(window);
  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;
  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  var rneedsContext = jQuery.expr.match.needsContext;
  var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
  var risSimple = /^.[^:#\[\.,]*$/;
  function winnow(elements, qualifier, not) {
    if (jQuery.isFunction(qualifier)) {
      return jQuery.grep(elements, function(elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    }
    if (qualifier.nodeType) {
      return jQuery.grep(elements, function(elem) {
        return (elem === qualifier) !== not;
      });
    }
    if (typeof qualifier === "string") {
      if (risSimple.test(qualifier)) {
        return jQuery.filter(qualifier, elements, not);
      }
      qualifier = jQuery.filter(qualifier, elements);
    }
    return jQuery.grep(elements, function(elem) {
      return (indexOf.call(qualifier, elem) >= 0) !== not;
    });
  }
  jQuery.filter = function(expr, elems, not) {
    var elem = elems[0];
    if (not) {
      expr = ":not(" + expr + ")";
    }
    return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
      return elem.nodeType === 1;
    }));
  };
  jQuery.fn.extend({
    find: function(selector) {
      var i,
          len = this.length,
          ret = [],
          self = this;
      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function() {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }
      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }
      ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
      ret.selector = this.selector ? this.selector + " " + selector : selector;
      return ret;
    },
    filter: function(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function(selector) {
      return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  });
  var rootjQuery,
      rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      init = jQuery.fn.init = function(selector, context) {
        var match,
            elem;
        if (!selector) {
          return this;
        }
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery ? context[0] : context;
              jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
              if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                for (match in context) {
                  if (jQuery.isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document.getElementById(match[2]);
              if (elem && elem.parentNode) {
                this.length = 1;
                this[0] = elem;
              }
              this.context = document;
              this.selector = selector;
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || rootjQuery).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this.context = this[0] = selector;
          this.length = 1;
          return this;
        } else if (jQuery.isFunction(selector)) {
          return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready(selector) : selector(jQuery);
        }
        if (selector.selector !== undefined) {
          this.selector = selector.selector;
          this.context = selector.context;
        }
        return jQuery.makeArray(selector, this);
      };
  init.prototype = jQuery.fn;
  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
  jQuery.extend({
    dir: function(elem, dir, until) {
      var matched = [],
          truncate = until !== undefined;
      while ((elem = elem[dir]) && elem.nodeType !== 9) {
        if (elem.nodeType === 1) {
          if (truncate && jQuery(elem).is(until)) {
            break;
          }
          matched.push(elem);
        }
      }
      return matched;
    },
    sibling: function(n, elem) {
      var matched = [];
      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== elem) {
          matched.push(n);
        }
      }
      return matched;
    }
  });
  jQuery.fn.extend({
    has: function(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function() {
        var i = 0;
        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
      for (; i < l; i++) {
        for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
          if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
            matched.push(cur);
            break;
          }
        }
      }
      return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
    },
    index: function(elem) {
      if (!elem) {
        return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
      }
      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      }
      return indexOf.call(this, elem.jquery ? elem[0] : elem);
    },
    add: function(selector, context) {
      return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}
    return cur;
  }
  jQuery.each({
    parent: function(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function(elem) {
      return jQuery.dir(elem, "parentNode");
    },
    parentsUntil: function(elem, i, until) {
      return jQuery.dir(elem, "parentNode", until);
    },
    next: function(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function(elem) {
      return jQuery.dir(elem, "nextSibling");
    },
    prevAll: function(elem) {
      return jQuery.dir(elem, "previousSibling");
    },
    nextUntil: function(elem, i, until) {
      return jQuery.dir(elem, "nextSibling", until);
    },
    prevUntil: function(elem, i, until) {
      return jQuery.dir(elem, "previousSibling", until);
    },
    siblings: function(elem) {
      return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
    },
    children: function(elem) {
      return jQuery.sibling(elem.firstChild);
    },
    contents: function(elem) {
      return elem.contentDocument || jQuery.merge([], elem.childNodes);
    }
  }, function(name, fn) {
    jQuery.fn[name] = function(until, selector) {
      var matched = jQuery.map(this, fn, until);
      if (name.slice(-5) !== "Until") {
        selector = until;
      }
      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }
      if (this.length > 1) {
        if (!guaranteedUnique[name]) {
          jQuery.unique(matched);
        }
        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }
      return this.pushStack(matched);
    };
  });
  var rnotwhite = (/\S+/g);
  var optionsCache = {};
  function createOptions(options) {
    var object = optionsCache[options] = {};
    jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
      object[flag] = true;
    });
    return object;
  }
  jQuery.Callbacks = function(options) {
    options = typeof options === "string" ? (optionsCache[options] || createOptions(options)) : jQuery.extend({}, options);
    var memory,
        fired,
        firing,
        firingStart,
        firingLength,
        firingIndex,
        list = [],
        stack = !options.once && [],
        fire = function(data) {
          memory = options.memory && data;
          fired = true;
          firingIndex = firingStart || 0;
          firingStart = 0;
          firingLength = list.length;
          firing = true;
          for (; list && firingIndex < firingLength; firingIndex++) {
            if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
              memory = false;
              break;
            }
          }
          firing = false;
          if (list) {
            if (stack) {
              if (stack.length) {
                fire(stack.shift());
              }
            } else if (memory) {
              list = [];
            } else {
              self.disable();
            }
          }
        },
        self = {
          add: function() {
            if (list) {
              var start = list.length;
              (function add(args) {
                jQuery.each(args, function(_, arg) {
                  var type = jQuery.type(arg);
                  if (type === "function") {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && type !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (firing) {
                firingLength = list.length;
              } else if (memory) {
                firingStart = start;
                fire(memory);
              }
            }
            return this;
          },
          remove: function() {
            if (list) {
              jQuery.each(arguments, function(_, arg) {
                var index;
                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (firing) {
                    if (index <= firingLength) {
                      firingLength--;
                    }
                    if (index <= firingIndex) {
                      firingIndex--;
                    }
                  }
                }
              });
            }
            return this;
          },
          has: function(fn) {
            return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
          },
          empty: function() {
            list = [];
            firingLength = 0;
            return this;
          },
          disable: function() {
            list = stack = memory = undefined;
            return this;
          },
          disabled: function() {
            return !list;
          },
          lock: function() {
            stack = undefined;
            if (!memory) {
              self.disable();
            }
            return this;
          },
          locked: function() {
            return !stack;
          },
          fireWith: function(context, args) {
            if (list && (!fired || stack)) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              if (firing) {
                stack.push(args);
              } else {
                fire(args);
              }
            }
            return this;
          },
          fire: function() {
            self.fireWith(this, arguments);
            return this;
          },
          fired: function() {
            return !!fired;
          }
        };
    return self;
  };
  jQuery.extend({
    Deferred: function(func) {
      var tuples = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
          state = "pending",
          promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            then: function() {
              var fns = arguments;
              return jQuery.Deferred(function(newDefer) {
                jQuery.each(tuples, function(i, tuple) {
                  var fn = jQuery.isFunction(fns[i]) && fns[i];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && jQuery.isFunction(returned.promise)) {
                      returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                    } else {
                      newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            promise: function(obj) {
              return obj != null ? jQuery.extend(obj, promise) : promise;
            }
          },
          deferred = {};
      promise.pipe = promise.then;
      jQuery.each(tuples, function(i, tuple) {
        var list = tuple[2],
            stateString = tuple[3];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(function() {
            state = stateString;
          }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
        }
        deferred[tuple[0]] = function() {
          deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
          return this;
        };
        deferred[tuple[0] + "With"] = list.fireWith;
      });
      promise.promise(deferred);
      if (func) {
        func.call(deferred, deferred);
      }
      return deferred;
    },
    when: function(subordinate) {
      var i = 0,
          resolveValues = slice.call(arguments),
          length = resolveValues.length,
          remaining = length !== 1 || (subordinate && jQuery.isFunction(subordinate.promise)) ? length : 0,
          deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
          updateFunc = function(i, contexts, values) {
            return function(value) {
              contexts[i] = this;
              values[i] = arguments.length > 1 ? slice.call(arguments) : value;
              if (values === progressValues) {
                deferred.notifyWith(contexts, values);
              } else if (!(--remaining)) {
                deferred.resolveWith(contexts, values);
              }
            };
          },
          progressValues,
          progressContexts,
          resolveContexts;
      if (length > 1) {
        progressValues = new Array(length);
        progressContexts = new Array(length);
        resolveContexts = new Array(length);
        for (; i < length; i++) {
          if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
            resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
          } else {
            --remaining;
          }
        }
      }
      if (!remaining) {
        deferred.resolveWith(resolveContexts, resolveValues);
      }
      return deferred.promise();
    }
  });
  var readyList;
  jQuery.fn.ready = function(fn) {
    jQuery.ready.promise().done(fn);
    return this;
  };
  jQuery.extend({
    isReady: false,
    readyWait: 1,
    holdReady: function(hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    },
    ready: function(wait) {
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      }
      jQuery.isReady = true;
      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      }
      readyList.resolveWith(document, [jQuery]);
      if (jQuery.fn.triggerHandler) {
        jQuery(document).triggerHandler("ready");
        jQuery(document).off("ready");
      }
    }
  });
  function completed() {
    document.removeEventListener("DOMContentLoaded", completed, false);
    window.removeEventListener("load", completed, false);
    jQuery.ready();
  }
  jQuery.ready.promise = function(obj) {
    if (!readyList) {
      readyList = jQuery.Deferred();
      if (document.readyState === "complete") {
        setTimeout(jQuery.ready);
      } else {
        document.addEventListener("DOMContentLoaded", completed, false);
        window.addEventListener("load", completed, false);
      }
    }
    return readyList.promise(obj);
  };
  jQuery.ready.promise();
  var access = jQuery.access = function(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null;
    if (jQuery.type(key) === "object") {
      chainable = true;
      for (i in key) {
        jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
      }
    } else if (value !== undefined) {
      chainable = true;
      if (!jQuery.isFunction(value)) {
        raw = true;
      }
      if (bulk) {
        if (raw) {
          fn.call(elems, value);
          fn = null;
        } else {
          bulk = fn;
          fn = function(elem, key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }
      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }
    return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
  };
  jQuery.acceptData = function(owner) {
    return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
  };
  function Data() {
    Object.defineProperty(this.cache = {}, 0, {get: function() {
        return {};
      }});
    this.expando = jQuery.expando + Data.uid++;
  }
  Data.uid = 1;
  Data.accepts = jQuery.acceptData;
  Data.prototype = {
    key: function(owner) {
      if (!Data.accepts(owner)) {
        return 0;
      }
      var descriptor = {},
          unlock = owner[this.expando];
      if (!unlock) {
        unlock = Data.uid++;
        try {
          descriptor[this.expando] = {value: unlock};
          Object.defineProperties(owner, descriptor);
        } catch (e) {
          descriptor[this.expando] = unlock;
          jQuery.extend(owner, descriptor);
        }
      }
      if (!this.cache[unlock]) {
        this.cache[unlock] = {};
      }
      return unlock;
    },
    set: function(owner, data, value) {
      var prop,
          unlock = this.key(owner),
          cache = this.cache[unlock];
      if (typeof data === "string") {
        cache[data] = value;
      } else {
        if (jQuery.isEmptyObject(cache)) {
          jQuery.extend(this.cache[unlock], data);
        } else {
          for (prop in data) {
            cache[prop] = data[prop];
          }
        }
      }
      return cache;
    },
    get: function(owner, key) {
      var cache = this.cache[this.key(owner)];
      return key === undefined ? cache : cache[key];
    },
    access: function(owner, key, value) {
      var stored;
      if (key === undefined || ((key && typeof key === "string") && value === undefined)) {
        stored = this.get(owner, key);
        return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
      }
      this.set(owner, key, value);
      return value !== undefined ? value : key;
    },
    remove: function(owner, key) {
      var i,
          name,
          camel,
          unlock = this.key(owner),
          cache = this.cache[unlock];
      if (key === undefined) {
        this.cache[unlock] = {};
      } else {
        if (jQuery.isArray(key)) {
          name = key.concat(key.map(jQuery.camelCase));
        } else {
          camel = jQuery.camelCase(key);
          if (key in cache) {
            name = [key, camel];
          } else {
            name = camel;
            name = name in cache ? [name] : (name.match(rnotwhite) || []);
          }
        }
        i = name.length;
        while (i--) {
          delete cache[name[i]];
        }
      }
    },
    hasData: function(owner) {
      return !jQuery.isEmptyObject(this.cache[owner[this.expando]] || {});
    },
    discard: function(owner) {
      if (owner[this.expando]) {
        delete this.cache[owner[this.expando]];
      }
    }
  };
  var data_priv = new Data();
  var data_user = new Data();
  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /([A-Z])/g;
  function dataAttr(elem, key, data) {
    var name;
    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
      data = elem.getAttribute(name);
      if (typeof data === "string") {
        try {
          data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
        } catch (e) {}
        data_user.set(elem, key, data);
      } else {
        data = undefined;
      }
    }
    return data;
  }
  jQuery.extend({
    hasData: function(elem) {
      return data_user.hasData(elem) || data_priv.hasData(elem);
    },
    data: function(elem, name, data) {
      return data_user.access(elem, name, data);
    },
    removeData: function(elem, name) {
      data_user.remove(elem, name);
    },
    _data: function(elem, name, data) {
      return data_priv.access(elem, name, data);
    },
    _removeData: function(elem, name) {
      data_priv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes;
      if (key === undefined) {
        if (this.length) {
          data = data_user.get(elem);
          if (elem.nodeType === 1 && !data_priv.get(elem, "hasDataAttrs")) {
            i = attrs.length;
            while (i--) {
              if (attrs[i]) {
                name = attrs[i].name;
                if (name.indexOf("data-") === 0) {
                  name = jQuery.camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }
            data_priv.set(elem, "hasDataAttrs", true);
          }
        }
        return data;
      }
      if (typeof key === "object") {
        return this.each(function() {
          data_user.set(this, key);
        });
      }
      return access(this, function(value) {
        var data,
            camelKey = jQuery.camelCase(key);
        if (elem && value === undefined) {
          data = data_user.get(elem, key);
          if (data !== undefined) {
            return data;
          }
          data = data_user.get(elem, camelKey);
          if (data !== undefined) {
            return data;
          }
          data = dataAttr(elem, camelKey, undefined);
          if (data !== undefined) {
            return data;
          }
          return;
        }
        this.each(function() {
          var data = data_user.get(this, camelKey);
          data_user.set(this, camelKey, value);
          if (key.indexOf("-") !== -1 && data !== undefined) {
            data_user.set(this, key, value);
          }
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function(key) {
      return this.each(function() {
        data_user.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function(elem, type, data) {
      var queue;
      if (elem) {
        type = (type || "fx") + "queue";
        queue = data_priv.get(elem, type);
        if (data) {
          if (!queue || jQuery.isArray(data)) {
            queue = data_priv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },
    dequeue: function(elem, type) {
      type = type || "fx";
      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function() {
            jQuery.dequeue(elem, type);
          };
      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }
      if (fn) {
        if (type === "fx") {
          queue.unshift("inprogress");
        }
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }
      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    _queueHooks: function(elem, type) {
      var key = type + "queueHooks";
      return data_priv.get(elem, key) || data_priv.access(elem, key, {empty: jQuery.Callbacks("once memory").add(function() {
          data_priv.remove(elem, [type + "queue", key]);
        })});
    }
  });
  jQuery.fn.extend({
    queue: function(type, data) {
      var setter = 2;
      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }
      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }
      return data === undefined ? this : this.each(function() {
        var queue = jQuery.queue(this, type, data);
        jQuery._queueHooks(this, type);
        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function(type) {
      return this.each(function() {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function(type) {
      return this.queue(type || "fx", []);
    },
    promise: function(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function() {
            if (!(--count)) {
              defer.resolveWith(elements, [elements]);
            }
          };
      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }
      type = type || "fx";
      while (i--) {
        tmp = data_priv.get(elements[i], type + "queueHooks");
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var isHidden = function(elem, el) {
    elem = el || elem;
    return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
  };
  var rcheckableType = (/^(?:checkbox|radio)$/i);
  (function() {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input);
    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
  })();
  var strundefined = typeof undefined;
  support.focusinBubbles = "onfocusin" in window;
  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
      rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }
  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }
  jQuery.event = {
    global: {},
    add: function(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = data_priv.get(elem);
      if (!elemData) {
        return;
      }
      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      }
      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      }
      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function(e) {
          return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      }
      types = (types || "").match(rnotwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        special = jQuery.event.special[type] || {};
        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn);
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;
          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle, false);
            }
          }
        }
        if (special.add) {
          special.add.call(elem, handleObj);
          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        }
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }
        jQuery.event.global[type] = true;
      }
    },
    remove: function(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = data_priv.hasData(elem) && data_priv.get(elem);
      if (!elemData || !(events = elemData.events)) {
        return;
      }
      types = (types || "").match(rnotwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
        origCount = j = handlers.length;
        while (j--) {
          handleObj = handlers[j];
          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);
            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }
          delete events[type];
        }
      }
      if (jQuery.isEmptyObject(events)) {
        delete elemData.handle;
        data_priv.remove(elem, "events");
      }
    },
    trigger: function(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = tmp = elem = elem || document;
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }
      if (type.indexOf(".") >= 0) {
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }
      ontype = type.indexOf(":") < 0 && "on" + type;
      event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
      event.result = undefined;
      if (!event.target) {
        event.target = elem;
      }
      data = data == null ? [event] : jQuery.makeArray(data, [event]);
      special = jQuery.event.special[type] || {};
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      }
      if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      }
      i = 0;
      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        event.type = i > 1 ? bubbleType : special.bindType || type;
        handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle");
        if (handle) {
          handle.apply(cur, data);
        }
        handle = ontype && cur[ontype];
        if (handle && handle.apply && jQuery.acceptData(cur)) {
          event.result = handle.apply(cur, data);
          if (event.result === false) {
            event.preventDefault();
          }
        }
      }
      event.type = type;
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
          if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
            tmp = elem[ontype];
            if (tmp) {
              elem[ontype] = null;
            }
            jQuery.event.triggered = type;
            elem[type]();
            jQuery.event.triggered = undefined;
            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }
      return event.result;
    },
    dispatch: function(event) {
      event = jQuery.event.fix(event);
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue = [],
          args = slice.call(arguments),
          handlers = (data_priv.get(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {};
      args[0] = event;
      event.delegateTarget = this;
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }
      handlerQueue = jQuery.event.handlers.call(this, event, handlers);
      i = 0;
      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;
        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }
      return event.result;
    },
    handlers: function(event, handlers) {
      var i,
          matches,
          sel,
          handleObj,
          handlerQueue = [],
          delegateCount = handlers.delegateCount,
          cur = event.target;
      if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
        for (; cur !== this; cur = cur.parentNode || this) {
          if (cur.disabled !== true || event.type !== "click") {
            matches = [];
            for (i = 0; i < delegateCount; i++) {
              handleObj = handlers[i];
              sel = handleObj.selector + " ";
              if (matches[sel] === undefined) {
                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
              }
              if (matches[sel]) {
                matches.push(handleObj);
              }
            }
            if (matches.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matches
              });
            }
          }
        }
      }
      if (delegateCount < handlers.length) {
        handlerQueue.push({
          elem: this,
          handlers: handlers.slice(delegateCount)
        });
      }
      return handlerQueue;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(event, original) {
        if (event.which == null) {
          event.which = original.charCode != null ? original.charCode : original.keyCode;
        }
        return event;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(event, original) {
        var eventDoc,
            doc,
            body,
            button = original.button;
        if (event.pageX == null && original.clientX != null) {
          eventDoc = event.target.ownerDocument || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;
          event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
          event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        }
        if (!event.which && button !== undefined) {
          event.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
        }
        return event;
      }
    },
    fix: function(event) {
      if (event[jQuery.expando]) {
        return event;
      }
      var i,
          prop,
          copy,
          type = event.type,
          originalEvent = event,
          fixHook = this.fixHooks[type];
      if (!fixHook) {
        this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
      }
      copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
      event = new jQuery.Event(originalEvent);
      i = copy.length;
      while (i--) {
        prop = copy[i];
        event[prop] = originalEvent[prop];
      }
      if (!event.target) {
        event.target = document;
      }
      if (event.target.nodeType === 3) {
        event.target = event.target.parentNode;
      }
      return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
    },
    special: {
      load: {noBubble: true},
      focus: {
        trigger: function() {
          if (this !== safeActiveElement() && this.focus) {
            this.focus();
            return false;
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === safeActiveElement() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
            this.click();
            return false;
          }
        },
        _default: function(event) {
          return jQuery.nodeName(event.target, "a");
        }
      },
      beforeunload: {postDispatch: function(event) {
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }}
    },
    simulate: function(type, elem, event, bubble) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true,
        originalEvent: {}
      });
      if (bubble) {
        jQuery.event.trigger(e, null, elem);
      } else {
        jQuery.event.dispatch.call(elem, e);
      }
      if (e.isDefaultPrevented()) {
        event.preventDefault();
      }
    }
  };
  jQuery.removeEvent = function(elem, type, handle) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle, false);
    }
  };
  jQuery.Event = function(src, props) {
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    }
    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;
      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
    } else {
      this.type = src;
    }
    if (props) {
      jQuery.extend(this, props);
    }
    this.timeStamp = src && src.timeStamp || jQuery.now();
    this[jQuery.expando] = true;
  };
  jQuery.Event.prototype = {
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;
      if (e && e.preventDefault) {
        e.preventDefault();
      }
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;
      if (e && e.stopPropagation) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;
      if (e && e.stopImmediatePropagation) {
        e.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj;
        if (!related || (related !== target && !jQuery.contains(target, related))) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }
        return ret;
      }
    };
  });
  if (!support.focusinBubbles) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function(orig, fix) {
      var handler = function(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
      };
      jQuery.event.special[fix] = {
        setup: function() {
          var doc = this.ownerDocument || this,
              attaches = data_priv.access(doc, fix);
          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }
          data_priv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function() {
          var doc = this.ownerDocument || this,
              attaches = data_priv.access(doc, fix) - 1;
          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            data_priv.remove(doc, fix);
          } else {
            data_priv.access(doc, fix, attaches);
          }
        }
      };
    });
  }
  jQuery.fn.extend({
    on: function(types, selector, data, fn, one) {
      var origFn,
          type;
      if (typeof types === "object") {
        if (typeof selector !== "string") {
          data = data || selector;
          selector = undefined;
        }
        for (type in types) {
          this.on(type, selector, data, types[type], one);
        }
        return this;
      }
      if (data == null && fn == null) {
        fn = selector;
        data = selector = undefined;
      } else if (fn == null) {
        if (typeof selector === "string") {
          fn = data;
          data = undefined;
        } else {
          fn = data;
          data = selector;
          selector = undefined;
        }
      }
      if (fn === false) {
        fn = returnFalse;
      } else if (!fn) {
        return this;
      }
      if (one === 1) {
        origFn = fn;
        fn = function(event) {
          jQuery().off(event);
          return origFn.apply(this, arguments);
        };
        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
      }
      return this.each(function() {
        jQuery.event.add(this, types, fn, data, selector);
      });
    },
    one: function(types, selector, data, fn) {
      return this.on(types, selector, data, fn, 1);
    },
    off: function(types, selector, fn) {
      var handleObj,
          type;
      if (types && types.preventDefault && types.handleObj) {
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }
      if (typeof types === "object") {
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === "function") {
        fn = selector;
        selector = undefined;
      }
      if (fn === false) {
        fn = returnFalse;
      }
      return this.each(function() {
        jQuery.event.remove(this, types, fn, selector);
      });
    },
    trigger: function(type, data) {
      return this.each(function() {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function(type, data) {
      var elem = this[0];
      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });
  var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      rtagName = /<([\w:]+)/,
      rhtml = /<|&#?\w+;/,
      rnoInnerhtml = /<(?:script|style|link)/i,
      rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rscriptType = /^$|\/(?:java|ecma)script/i,
      rscriptTypeMasked = /^true\/(.*)/,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      wrapMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  function manipulationTarget(elem, content) {
    return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
  }
  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }
  function restoreScript(elem) {
    var match = rscriptTypeMasked.exec(elem.type);
    if (match) {
      elem.type = match[1];
    } else {
      elem.removeAttribute("type");
    }
    return elem;
  }
  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;
    for (; i < l; i++) {
      data_priv.set(elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"));
    }
  }
  function cloneCopyEvent(src, dest) {
    var i,
        l,
        type,
        pdataOld,
        pdataCur,
        udataOld,
        udataCur,
        events;
    if (dest.nodeType !== 1) {
      return;
    }
    if (data_priv.hasData(src)) {
      pdataOld = data_priv.access(src);
      pdataCur = data_priv.set(dest, pdataOld);
      events = pdataOld.events;
      if (events) {
        delete pdataCur.handle;
        pdataCur.events = {};
        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    }
    if (data_user.hasData(src)) {
      udataOld = data_user.access(src);
      udataCur = jQuery.extend({}, udataOld);
      data_user.set(dest, udataCur);
    }
  }
  function getAll(context, tag) {
    var ret = context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];
    return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
  }
  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase();
    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked;
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }
  jQuery.extend({
    clone: function(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = jQuery.contains(elem.ownerDocument, elem);
      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        destElements = getAll(clone);
        srcElements = getAll(elem);
        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      }
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);
          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }
      destElements = getAll(clone, "script");
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      }
      return clone;
    },
    buildFragment: function(elems, context, scripts, selection) {
      var elem,
          tmp,
          tag,
          wrap,
          contains,
          j,
          fragment = context.createDocumentFragment(),
          nodes = [],
          i = 0,
          l = elems.length;
      for (; i < l; i++) {
        elem = elems[i];
        if (elem || elem === 0) {
          if (jQuery.type(elem) === "object") {
            jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
          } else if (!rhtml.test(elem)) {
            nodes.push(context.createTextNode(elem));
          } else {
            tmp = tmp || fragment.appendChild(context.createElement("div"));
            tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
            wrap = wrapMap[tag] || wrapMap._default;
            tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
            j = wrap[0];
            while (j--) {
              tmp = tmp.lastChild;
            }
            jQuery.merge(nodes, tmp.childNodes);
            tmp = fragment.firstChild;
            tmp.textContent = "";
          }
        }
      }
      fragment.textContent = "";
      i = 0;
      while ((elem = nodes[i++])) {
        if (selection && jQuery.inArray(elem, selection) !== -1) {
          continue;
        }
        contains = jQuery.contains(elem.ownerDocument, elem);
        tmp = getAll(fragment.appendChild(elem), "script");
        if (contains) {
          setGlobalEval(tmp);
        }
        if (scripts) {
          j = 0;
          while ((elem = tmp[j++])) {
            if (rscriptType.test(elem.type || "")) {
              scripts.push(elem);
            }
          }
        }
      }
      return fragment;
    },
    cleanData: function(elems) {
      var data,
          elem,
          type,
          key,
          special = jQuery.event.special,
          i = 0;
      for (; (elem = elems[i]) !== undefined; i++) {
        if (jQuery.acceptData(elem)) {
          key = elem[data_priv.expando];
          if (key && (data = data_priv.cache[key])) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type);
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            }
            if (data_priv.cache[key]) {
              delete data_priv.cache[key];
            }
          }
        }
        delete data_user.cache[elem[data_user.expando]];
      }
    }
  });
  jQuery.fn.extend({
    text: function(value) {
      return access(this, function(value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function() {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function() {
      return this.domManip(arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function() {
      return this.domManip(arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function() {
      return this.domManip(arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function() {
      return this.domManip(arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    remove: function(selector, keepData) {
      var elem,
          elems = selector ? jQuery.filter(selector, this) : this,
          i = 0;
      for (; (elem = elems[i]) != null; i++) {
        if (!keepData && elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem));
        }
        if (elem.parentNode) {
          if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
            setGlobalEval(getAll(elem, "script"));
          }
          elem.parentNode.removeChild(elem);
        }
      }
      return this;
    },
    empty: function() {
      var elem,
          i = 0;
      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem, false));
          elem.textContent = "";
        }
      }
      return this;
    },
    clone: function(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function() {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function(value) {
      return access(this, function(value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;
        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        }
        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = value.replace(rxhtmlTag, "<$1></$2>");
          try {
            for (; i < l; i++) {
              elem = this[i] || {};
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }
            elem = 0;
          } catch (e) {}
        }
        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function() {
      var arg = arguments[0];
      this.domManip(arguments, function(elem) {
        arg = this.parentNode;
        jQuery.cleanData(getAll(this));
        if (arg) {
          arg.replaceChild(elem, this);
        }
      });
      return arg && (arg.length || arg.nodeType) ? this : this.remove();
    },
    detach: function(selector) {
      return this.remove(selector, true);
    },
    domManip: function(args, callback) {
      args = concat.apply([], args);
      var fragment,
          first,
          scripts,
          hasScripts,
          node,
          doc,
          i = 0,
          l = this.length,
          set = this,
          iNoClone = l - 1,
          value = args[0],
          isFunction = jQuery.isFunction(value);
      if (isFunction || (l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value))) {
        return this.each(function(index) {
          var self = set.eq(index);
          if (isFunction) {
            args[0] = value.call(this, index, self.html());
          }
          self.domManip(args, callback);
        });
      }
      if (l) {
        fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
        first = fragment.firstChild;
        if (fragment.childNodes.length === 1) {
          fragment = first;
        }
        if (first) {
          scripts = jQuery.map(getAll(fragment, "script"), disableScript);
          hasScripts = scripts.length;
          for (; i < l; i++) {
            node = fragment;
            if (i !== iNoClone) {
              node = jQuery.clone(node, true, true);
              if (hasScripts) {
                jQuery.merge(scripts, getAll(node, "script"));
              }
            }
            callback.call(this[i], node, i);
          }
          if (hasScripts) {
            doc = scripts[scripts.length - 1].ownerDocument;
            jQuery.map(scripts, restoreScript);
            for (i = 0; i < hasScripts; i++) {
              node = scripts[i];
              if (rscriptType.test(node.type || "") && !data_priv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                if (node.src) {
                  if (jQuery._evalUrl) {
                    jQuery._evalUrl(node.src);
                  }
                } else {
                  jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
                }
              }
            }
          }
        }
      }
      return this;
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(name, original) {
    jQuery.fn[name] = function(selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;
      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems);
        push.apply(ret, elems.get());
      }
      return this.pushStack(ret);
    };
  });
  var iframe,
      elemdisplay = {};
  function actualDisplay(name, doc) {
    var style,
        elem = jQuery(doc.createElement(name)).appendTo(doc.body),
        display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ? style.display : jQuery.css(elem[0], "display");
    elem.detach();
    return display;
  }
  function defaultDisplay(nodeName) {
    var doc = document,
        display = elemdisplay[nodeName];
    if (!display) {
      display = actualDisplay(nodeName, doc);
      if (display === "none" || !display) {
        iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
        doc = iframe[0].contentDocument;
        doc.write();
        doc.close();
        display = actualDisplay(nodeName, doc);
        iframe.detach();
      }
      elemdisplay[nodeName] = display;
    }
    return display;
  }
  var rmargin = (/^margin/);
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
  var getStyles = function(elem) {
    if (elem.ownerDocument.defaultView.opener) {
      return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
    }
    return window.getComputedStyle(elem, null);
  };
  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        style = elem.style;
    computed = computed || getStyles(elem);
    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];
    }
    if (computed) {
      if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
        ret = jQuery.style(elem, name);
      }
      if (rnumnonpx.test(ret) && rmargin.test(name)) {
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth;
        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width;
        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }
    return ret !== undefined ? ret + "" : ret;
  }
  function addGetHookIf(conditionFn, hookFn) {
    return {get: function() {
        if (conditionFn()) {
          delete this.get;
          return;
        }
        return (this.get = hookFn).apply(this, arguments);
      }};
  }
  (function() {
    var pixelPositionVal,
        boxSizingReliableVal,
        docElem = document.documentElement,
        container = document.createElement("div"),
        div = document.createElement("div");
    if (!div.style) {
      return;
    }
    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" + "position:absolute";
    container.appendChild(div);
    function computePixelPositionAndBoxSizingReliable() {
      div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
      div.innerHTML = "";
      docElem.appendChild(container);
      var divStyle = window.getComputedStyle(div, null);
      pixelPositionVal = divStyle.top !== "1%";
      boxSizingReliableVal = divStyle.width === "4px";
      docElem.removeChild(container);
    }
    if (window.getComputedStyle) {
      jQuery.extend(support, {
        pixelPosition: function() {
          computePixelPositionAndBoxSizingReliable();
          return pixelPositionVal;
        },
        boxSizingReliable: function() {
          if (boxSizingReliableVal == null) {
            computePixelPositionAndBoxSizingReliable();
          }
          return boxSizingReliableVal;
        },
        reliableMarginRight: function() {
          var ret,
              marginDiv = div.appendChild(document.createElement("div"));
          marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
          marginDiv.style.marginRight = marginDiv.style.width = "0";
          div.style.width = "1px";
          docElem.appendChild(container);
          ret = !parseFloat(window.getComputedStyle(marginDiv, null).marginRight);
          docElem.removeChild(container);
          div.removeChild(marginDiv);
          return ret;
        }
      });
    }
  })();
  jQuery.swap = function(elem, options, callback, args) {
    var ret,
        name,
        old = {};
    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }
    ret = callback.apply(elem, args || []);
    for (name in options) {
      elem.style[name] = old[name];
    }
    return ret;
  };
  var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
      rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
      cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  function vendorPropName(style, name) {
    if (name in style) {
      return name;
    }
    var capName = name[0].toUpperCase() + name.slice(1),
        origName = name,
        i = cssPrefixes.length;
    while (i--) {
      name = cssPrefixes[i] + capName;
      if (name in style) {
        return name;
      }
    }
    return origName;
  }
  function setPositiveNumber(elem, value, subtract) {
    var matches = rnumsplit.exec(value);
    return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
  }
  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0,
        val = 0;
    for (; i < 4; i += 2) {
      if (extra === "margin") {
        val += jQuery.css(elem, extra + cssExpand[i], true, styles);
      }
      if (isBorderBox) {
        if (extra === "content") {
          val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        }
        if (extra !== "margin") {
          val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      } else {
        val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        if (extra !== "padding") {
          val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    }
    return val;
  }
  function getWidthOrHeight(elem, name, extra) {
    var valueIsBorderBox = true,
        val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
        styles = getStyles(elem),
        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
    if (val <= 0 || val == null) {
      val = curCSS(elem, name, styles);
      if (val < 0 || val == null) {
        val = elem.style[name];
      }
      if (rnumnonpx.test(val)) {
        return val;
      }
      valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
      val = parseFloat(val) || 0;
    }
    return (val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles)) + "px";
  }
  function showHide(elements, show) {
    var display,
        elem,
        hidden,
        values = [],
        index = 0,
        length = elements.length;
    for (; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      values[index] = data_priv.get(elem, "olddisplay");
      display = elem.style.display;
      if (show) {
        if (!values[index] && display === "none") {
          elem.style.display = "";
        }
        if (elem.style.display === "" && isHidden(elem)) {
          values[index] = data_priv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
        }
      } else {
        hidden = isHidden(elem);
        if (display !== "none" || !hidden) {
          data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
        }
      }
    }
    for (index = 0; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      if (!show || elem.style.display === "none" || elem.style.display === "") {
        elem.style.display = show ? values[index] || "" : "none";
      }
    }
    return elements;
  }
  jQuery.extend({
    cssHooks: {opacity: {get: function(elem, computed) {
          if (computed) {
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }}},
    cssNumber: {
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    cssProps: {"float": "cssFloat"},
    style: function(elem, name, value, extra) {
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      }
      var ret,
          type,
          hooks,
          origName = jQuery.camelCase(name),
          style = elem.style;
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (value !== undefined) {
        type = typeof value;
        if (type === "string" && (ret = rrelNum.exec(value))) {
          value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
          type = "number";
        }
        if (value == null || value !== value) {
          return;
        }
        if (type === "number" && !jQuery.cssNumber[origName]) {
          value += "px";
        }
        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        }
        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          style[name] = value;
        }
      } else {
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        }
        return style[name];
      }
    },
    css: function(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = jQuery.camelCase(name);
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      }
      if (val === undefined) {
        val = curCSS(elem, name, styles);
      }
      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      }
      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
      }
      return val;
    }
  });
  jQuery.each(["height", "width"], function(i, name) {
    jQuery.cssHooks[name] = {
      get: function(elem, computed, extra) {
        if (computed) {
          return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? jQuery.swap(elem, cssShow, function() {
            return getWidthOrHeight(elem, name, extra);
          }) : getWidthOrHeight(elem, name, extra);
        }
      },
      set: function(elem, value, extra) {
        var styles = extra && getStyles(elem);
        return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
      }
    };
  });
  jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
    if (computed) {
      return jQuery.swap(elem, {"display": "inline-block"}, curCSS, [elem, "marginRight"]);
    }
  });
  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {expand: function(value) {
        var i = 0,
            expanded = {},
            parts = typeof value === "string" ? value.split(" ") : [value];
        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }
        return expanded;
      }};
    if (!rmargin.test(prefix)) {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function(name, value) {
      return access(this, function(elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;
        if (jQuery.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;
          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }
          return map;
        }
        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    },
    show: function() {
      return showHide(this, true);
    },
    hide: function() {
      return showHide(this);
    },
    toggle: function(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }
      return this.each(function() {
        if (isHidden(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }
  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || "swing";
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }
      this.now = (this.end - this.start) * eased + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }
      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {_default: {
      get: function(tween) {
        var result;
        if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
          return tween.elem[tween.prop];
        }
        result = jQuery.css(tween.elem, tween.prop, "");
        return !result || result === "auto" ? 0 : result;
      },
      set: function(tween) {
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }};
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {set: function(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }};
  jQuery.easing = {
    linear: function(p) {
      return p;
    },
    swing: function(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    }
  };
  jQuery.fx = Tween.prototype.init;
  jQuery.fx.step = {};
  var fxNow,
      timerId,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
      rrun = /queueHooks$/,
      animationPrefilters = [defaultPrefilter],
      tweeners = {"*": [function(prop, value) {
          var tween = this.createTween(prop, value),
              target = tween.cur(),
              parts = rfxnum.exec(value),
              unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
              start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
              scale = 1,
              maxIterations = 20;
          if (start && start[3] !== unit) {
            unit = unit || start[3];
            parts = parts || [];
            start = +target || 1;
            do {
              scale = scale || ".5";
              start = start / scale;
              jQuery.style(tween.elem, prop, start + unit);
            } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
          }
          if (parts) {
            start = tween.start = +start || +target || 0;
            tween.unit = unit;
            tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
          }
          return tween;
        }]};
  function createFxNow() {
    setTimeout(function() {
      fxNow = undefined;
    });
    return (fxNow = jQuery.now());
  }
  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {height: type};
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }
    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }
    return attrs;
  }
  function createTween(value, prop, animation) {
    var tween,
        collection = (tweeners[prop] || []).concat(tweeners["*"]),
        index = 0,
        length = collection.length;
    for (; index < length; index++) {
      if ((tween = collection[index].call(animation, prop, value))) {
        return tween;
      }
    }
  }
  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        tween,
        hooks,
        oldfire,
        display,
        checkDisplay,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHidden(elem),
        dataShow = data_priv.get(elem, "fxshow");
    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");
      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;
        hooks.empty.fire = function() {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;
      anim.always(function() {
        anim.always(function() {
          hooks.unqueued--;
          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    }
    if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
      opts.overflow = [style.overflow, style.overflowX, style.overflowY];
      display = jQuery.css(elem, "display");
      checkDisplay = display === "none" ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
      if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
        style.display = "inline-block";
      }
    }
    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function() {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    }
    for (prop in props) {
      value = props[prop];
      if (rfxtypes.exec(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";
        if (value === (hidden ? "hide" : "show")) {
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true;
          } else {
            continue;
          }
        }
        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      } else {
        display = undefined;
      }
    }
    if (!jQuery.isEmptyObject(orig)) {
      if (dataShow) {
        if ("hidden" in dataShow) {
          hidden = dataShow.hidden;
        }
      } else {
        dataShow = data_priv.access(elem, "fxshow", {});
      }
      if (toggle) {
        dataShow.hidden = !hidden;
      }
      if (hidden) {
        jQuery(elem).show();
      } else {
        anim.done(function() {
          jQuery(elem).hide();
        });
      }
      anim.done(function() {
        var prop;
        data_priv.remove(elem, "fxshow");
        for (prop in orig) {
          jQuery.style(elem, prop, orig[prop]);
        }
      });
      for (prop in orig) {
        tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
        if (!(prop in dataShow)) {
          dataShow[prop] = tween.start;
          if (hidden) {
            tween.end = tween.start;
            tween.start = prop === "width" || prop === "height" ? 1 : 0;
          }
        }
      }
    } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
      style.display = display;
    }
  }
  function propFilter(props, specialEasing) {
    var index,
        name,
        easing,
        value,
        hooks;
    for (index in props) {
      name = jQuery.camelCase(index);
      easing = specialEasing[name];
      value = props[index];
      if (jQuery.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }
      if (index !== name) {
        props[name] = value;
        delete props[index];
      }
      hooks = jQuery.cssHooks[name];
      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name];
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }
  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = animationPrefilters.length,
        deferred = jQuery.Deferred().always(function() {
          delete tick.elem;
        }),
        tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(),
              remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
              temp = remaining / animation.duration || 0,
              percent = 1 - temp,
              index = 0,
              length = animation.tweens.length;
          for (; index < length; index++) {
            animation.tweens[index].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length) {
            return remaining;
          } else {
            deferred.resolveWith(elem, [animation]);
            return false;
          }
        },
        animation = deferred.promise({
          elem: elem,
          props: jQuery.extend({}, properties),
          opts: jQuery.extend(true, {specialEasing: {}}, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index = 0,
                length = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index < length; index++) {
              animation.tweens[index].run(1);
            }
            if (gotoEnd) {
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }),
        props = animation.props;
    propFilter(props, animation.opts.specialEasing);
    for (; index < length; index++) {
      result = animationPrefilters[index].call(animation, elem, props, animation.opts);
      if (result) {
        return result;
      }
    }
    jQuery.map(props, createTween, animation);
    if (jQuery.isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    }
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
  }
  jQuery.Animation = jQuery.extend(Animation, {
    tweener: function(props, callback) {
      if (jQuery.isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.split(" ");
      }
      var prop,
          index = 0,
          length = props.length;
      for (; index < length; index++) {
        prop = props[index];
        tweeners[prop] = tweeners[prop] || [];
        tweeners[prop].unshift(callback);
      }
    },
    prefilter: function(callback, prepend) {
      if (prepend) {
        animationPrefilters.unshift(callback);
      } else {
        animationPrefilters.push(callback);
      }
    }
  });
  jQuery.speed = function(speed, easing, fn) {
    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
    };
    opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    }
    opt.old = opt.complete;
    opt.complete = function() {
      if (jQuery.isFunction(opt.old)) {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };
    return opt;
  };
  jQuery.fn.extend({
    fadeTo: function(speed, to, easing, callback) {
      return this.filter(isHidden).css("opacity", 0).show().end().animate({opacity: to}, speed, easing, callback);
    },
    animate: function(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function() {
            var anim = Animation(this, jQuery.extend({}, prop), optall);
            if (empty || data_priv.get(this, "finish")) {
              anim.stop(true);
            }
          };
      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function(type, clearQueue, gotoEnd) {
      var stopQueue = function(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };
      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }
      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }
      return this.each(function() {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = data_priv.get(this);
        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }
        for (index = timers.length; index--; ) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        }
        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function(type) {
      if (type !== false) {
        type = type || "fx";
      }
      return this.each(function() {
        var index,
            data = data_priv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0;
        data.finish = true;
        jQuery.queue(this, type, []);
        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }
        for (index = timers.length; index--; ) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }
        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }
        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function(i, name) {
    var cssFn = jQuery.fn[name];
    jQuery.fn[name] = function(speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  });
  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function(name, props) {
    jQuery.fn[name] = function(speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];
  jQuery.fx.tick = function() {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = jQuery.now();
    for (; i < timers.length; i++) {
      timer = timers[i];
      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }
    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = undefined;
  };
  jQuery.fx.timer = function(timer) {
    jQuery.timers.push(timer);
    if (timer()) {
      jQuery.fx.start();
    } else {
      jQuery.timers.pop();
    }
  };
  jQuery.fx.interval = 13;
  jQuery.fx.start = function() {
    if (!timerId) {
      timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
    }
  };
  jQuery.fx.stop = function() {
    clearInterval(timerId);
    timerId = null;
  };
  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  jQuery.fn.delay = function(time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function(next, hooks) {
      var timeout = setTimeout(next, time);
      hooks.stop = function() {
        clearTimeout(timeout);
      };
    });
  };
  (function() {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox";
    support.checkOn = input.value !== "";
    support.optSelected = opt.selected;
    select.disabled = true;
    support.optDisabled = !opt.disabled;
    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();
  var nodeHook,
      boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function(name) {
      return this.each(function() {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function(elem, name, value) {
      var hooks,
          ret,
          nType = elem.nodeType;
      if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (typeof elem.getAttribute === strundefined) {
        return jQuery.prop(elem, name, value);
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        name = name.toLowerCase();
        hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
      }
      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
        } else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        } else {
          elem.setAttribute(name, value + "");
          return value;
        }
      } else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      } else {
        ret = jQuery.find.attr(elem, name);
        return ret == null ? undefined : ret;
      }
    },
    removeAttr: function(elem, value) {
      var name,
          propName,
          i = 0,
          attrNames = value && value.match(rnotwhite);
      if (attrNames && elem.nodeType === 1) {
        while ((name = attrNames[i++])) {
          propName = jQuery.propFix[name] || name;
          if (jQuery.expr.match.bool.test(name)) {
            elem[propName] = false;
          }
          elem.removeAttribute(name);
        }
      }
    },
    attrHooks: {type: {set: function(elem, value) {
          if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);
            if (val) {
              elem.value = val;
            }
            return value;
          }
        }}}
  });
  boolHook = {set: function(elem, value, name) {
      if (value === false) {
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }
      return name;
    }};
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;
    attrHandle[name] = function(elem, name, isXML) {
      var ret,
          handle;
      if (!isXML) {
        handle = attrHandle[name];
        attrHandle[name] = ret;
        ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
        attrHandle[name] = handle;
      }
      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i;
  jQuery.fn.extend({
    prop: function(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function(name) {
      return this.each(function() {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(elem, name, value) {
      var ret,
          hooks,
          notxml,
          nType = elem.nodeType;
      if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
      if (notxml) {
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }
      if (value !== undefined) {
        return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : (elem[name] = value);
      } else {
        return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
      }
    },
    propHooks: {tabIndex: {get: function(elem) {
          return elem.hasAttribute("tabindex") || rfocusable.test(elem.nodeName) || elem.href ? elem.tabIndex : -1;
        }}}
  });
  if (!support.optSelected) {
    jQuery.propHooks.selected = {get: function(elem) {
        var parent = elem.parentNode;
        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }
        return null;
      }};
  }
  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    jQuery.propFix[this.toLowerCase()] = this;
  });
  var rclass = /[\t\r\n\f]/g;
  jQuery.fn.extend({
    addClass: function(value) {
      var classes,
          elem,
          cur,
          clazz,
          j,
          finalValue,
          proceed = typeof value === "string" && value,
          i = 0,
          len = this.length;
      if (jQuery.isFunction(value)) {
        return this.each(function(j) {
          jQuery(this).addClass(value.call(this, j, this.className));
        });
      }
      if (proceed) {
        classes = (value || "").match(rnotwhite) || [];
        for (; i < len; i++) {
          elem = this[i];
          cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            }
            finalValue = jQuery.trim(cur);
            if (elem.className !== finalValue) {
              elem.className = finalValue;
            }
          }
        }
      }
      return this;
    },
    removeClass: function(value) {
      var classes,
          elem,
          cur,
          clazz,
          j,
          finalValue,
          proceed = arguments.length === 0 || typeof value === "string" && value,
          i = 0,
          len = this.length;
      if (jQuery.isFunction(value)) {
        return this.each(function(j) {
          jQuery(this).removeClass(value.call(this, j, this.className));
        });
      }
      if (proceed) {
        classes = (value || "").match(rnotwhite) || [];
        for (; i < len; i++) {
          elem = this[i];
          cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              while (cur.indexOf(" " + clazz + " ") >= 0) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            }
            finalValue = value ? jQuery.trim(cur) : "";
            if (elem.className !== finalValue) {
              elem.className = finalValue;
            }
          }
        }
      }
      return this;
    },
    toggleClass: function(value, stateVal) {
      var type = typeof value;
      if (typeof stateVal === "boolean" && type === "string") {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }
      if (jQuery.isFunction(value)) {
        return this.each(function(i) {
          jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
        });
      }
      return this.each(function() {
        if (type === "string") {
          var className,
              i = 0,
              self = jQuery(this),
              classNames = value.match(rnotwhite) || [];
          while ((className = classNames[i++])) {
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          }
        } else if (type === strundefined || type === "boolean") {
          if (this.className) {
            data_priv.set(this, "__className__", this.className);
          }
          this.className = this.className || value === false ? "" : data_priv.get(this, "__className__") || "";
        }
      });
    },
    hasClass: function(selector) {
      var className = " " + selector + " ",
          i = 0,
          l = this.length;
      for (; i < l; i++) {
        if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
          return true;
        }
      }
      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({val: function(value) {
      var hooks,
          ret,
          isFunction,
          elem = this[0];
      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }
          ret = elem.value;
          return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
        }
        return;
      }
      isFunction = jQuery.isFunction(value);
      return this.each(function(i) {
        var val;
        if (this.nodeType !== 1) {
          return;
        }
        if (isFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        }
        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (jQuery.isArray(val)) {
          val = jQuery.map(val, function(value) {
            return value == null ? "" : value + "";
          });
        }
        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }});
  jQuery.extend({valHooks: {
      option: {get: function(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : jQuery.trim(jQuery.text(elem));
        }},
      select: {
        get: function(elem) {
          var value,
              option,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one" || index < 0,
              values = one ? null : [],
              max = one ? index + 1 : options.length,
              i = index < 0 ? max : one ? index : 0;
          for (; i < max; i++) {
            option = options[i];
            if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
              value = jQuery(option).val();
              if (one) {
                return value;
              }
              values.push(value);
            }
          }
          return values;
        },
        set: function(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;
          while (i--) {
            option = options[i];
            if ((option.selected = jQuery.inArray(option.value, values) >= 0)) {
              optionSet = true;
            }
          }
          if (!optionSet) {
            elem.selectedIndex = -1;
          }
          return values;
        }
      }
    }});
  jQuery.each(["radio", "checkbox"], function() {
    jQuery.valHooks[this] = {set: function(elem, value) {
        if (jQuery.isArray(value)) {
          return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0);
        }
      }};
    if (!support.checkOn) {
      jQuery.valHooks[this].get = function(elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  });
  jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
    jQuery.fn[name] = function(data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.fn.extend({
    hover: function(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    },
    bind: function(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function(selector, types, fn) {
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    }
  });
  var nonce = jQuery.now();
  var rquery = (/\?/);
  jQuery.parseJSON = function(data) {
    return JSON.parse(data + "");
  };
  jQuery.parseXML = function(data) {
    var xml,
        tmp;
    if (!data || typeof data !== "string") {
      return null;
    }
    try {
      tmp = new DOMParser();
      xml = tmp.parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }
    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }
    return xml;
  };
  var rhash = /#.*$/,
      rts = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,
      rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      prefilters = {},
      transports = {},
      allTypes = "*/".concat("*"),
      ajaxLocation = window.location.href,
      ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
  function addToPrefiltersOrTransports(structure) {
    return function(dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }
      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
      if (jQuery.isFunction(func)) {
        while ((dataType = dataTypes[i++])) {
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func);
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  }
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = (structure === transports);
    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }
    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  }
  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};
    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
      }
    }
    if (deep) {
      jQuery.extend(true, target, deep);
    }
    return target;
  }
  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes;
    while (dataTypes[0] === "*") {
      dataTypes.shift();
      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    }
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          firstDataType = type;
        }
      }
      finalDataType = finalDataType || firstDataType;
    }
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }
      return responses[finalDataType];
    }
  }
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        dataTypes = s.dataTypes.slice();
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }
    current = dataTypes.shift();
    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      }
      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }
      prev = current;
      current = dataTypes.shift();
      if (current) {
        if (current === "*") {
          current = prev;
        } else if (prev !== "*" && prev !== current) {
          conv = converters[prev + " " + current] || converters["* " + current];
          if (!conv) {
            for (conv2 in converters) {
              tmp = conv2.split(" ");
              if (tmp[1] === current) {
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                if (conv) {
                  if (conv === true) {
                    conv = converters[conv2];
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }
                  break;
                }
              }
            }
          }
          if (conv !== true) {
            if (conv && s["throws"]) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }
    return {
      state: "success",
      data: response
    };
  }
  jQuery.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ajaxLocation,
      type: "GET",
      isLocal: rlocalProtocol.test(ajaxLocParts[1]),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": true,
        "text json": jQuery.parseJSON,
        "text xml": jQuery.parseXML
      },
      flatOptions: {
        url: true,
        context: true
      }
    },
    ajaxSetup: function(target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    ajax: function(url, options) {
      if (typeof url === "object") {
        options = url;
        url = undefined;
      }
      options = options || {};
      var transport,
          cacheURL,
          responseHeadersString,
          responseHeaders,
          timeoutTimer,
          parts,
          fireGlobals,
          i,
          s = jQuery.ajaxSetup({}, options),
          callbackContext = s.context || s,
          globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          statusCode = s.statusCode || {},
          requestHeaders = {},
          requestHeadersNames = {},
          state = 0,
          strAbort = "canceled",
          jqXHR = {
            readyState: 0,
            getResponseHeader: function(key) {
              var match;
              if (state === 2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while ((match = rheaders.exec(responseHeadersString))) {
                    responseHeaders[match[1].toLowerCase()] = match[2];
                  }
                }
                match = responseHeaders[key.toLowerCase()];
              }
              return match == null ? null : match;
            },
            getAllResponseHeaders: function() {
              return state === 2 ? responseHeadersString : null;
            },
            setRequestHeader: function(name, value) {
              var lname = name.toLowerCase();
              if (!state) {
                name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            overrideMimeType: function(type) {
              if (!state) {
                s.mimeType = type;
              }
              return this;
            },
            statusCode: function(map) {
              var code;
              if (map) {
                if (state < 2) {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                } else {
                  jqXHR.always(map[jqXHR.status]);
                }
              }
              return this;
            },
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
      deferred.promise(jqXHR).complete = completeDeferred.add;
      jqXHR.success = jqXHR.done;
      jqXHR.error = jqXHR.fail;
      s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
      s.type = options.method || options.type || s.method || s.type;
      s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
      if (s.crossDomain == null) {
        parts = rurl.exec(s.url.toLowerCase());
        s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
      }
      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      }
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
      if (state === 2) {
        return jqXHR;
      }
      fireGlobals = jQuery.event && s.global;
      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      }
      s.type = s.type.toUpperCase();
      s.hasContent = !rnoContent.test(s.type);
      cacheURL = s.url;
      if (!s.hasContent) {
        if (s.data) {
          cacheURL = (s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data);
          delete s.data;
        }
        if (s.cache === false) {
          s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
        }
      }
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      }
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      }
      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }
      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
        return jqXHR.abort();
      }
      strAbort = "abort";
      for (i in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        jqXHR[i](s[i]);
      }
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1;
        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        }
        if (s.async && s.timeout > 0) {
          timeoutTimer = setTimeout(function() {
            jqXHR.abort("timeout");
          }, s.timeout);
        }
        try {
          state = 1;
          transport.send(requestHeaders, done);
        } catch (e) {
          if (state < 2) {
            done(-1, e);
          } else {
            throw e;
          }
        }
      }
      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText;
        if (state === 2) {
          return;
        }
        state = 2;
        if (timeoutTimer) {
          clearTimeout(timeoutTimer);
        }
        transport = undefined;
        responseHeadersString = headers || "";
        jqXHR.readyState = status > 0 ? 4 : 0;
        isSuccess = status >= 200 && status < 300 || status === 304;
        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        }
        response = ajaxConvert(s, response, jqXHR, isSuccess);
        if (isSuccess) {
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");
            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }
            modified = jqXHR.getResponseHeader("etag");
            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          }
          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent";
          } else if (status === 304) {
            statusText = "notmodified";
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          error = statusText;
          if (status || !statusText) {
            statusText = "error";
            if (status < 0) {
              status = 0;
            }
          }
        }
        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + "";
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        }
        jqXHR.statusCode(statusCode);
        statusCode = undefined;
        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        }
        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
          if (!(--jQuery.active)) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }
      return jqXHR;
    },
    getJSON: function(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function(i, method) {
    jQuery[method] = function(url, data, callback, type) {
      if (jQuery.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      }
      return jQuery.ajax({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      });
    };
  });
  jQuery._evalUrl = function(url) {
    return jQuery.ajax({
      url: url,
      type: "GET",
      dataType: "script",
      async: false,
      global: false,
      "throws": true
    });
  };
  jQuery.fn.extend({
    wrapAll: function(html) {
      var wrap;
      if (jQuery.isFunction(html)) {
        return this.each(function(i) {
          jQuery(this).wrapAll(html.call(this, i));
        });
      }
      if (this[0]) {
        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }
        wrap.map(function() {
          var elem = this;
          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }
          return elem;
        }).append(this);
      }
      return this;
    },
    wrapInner: function(html) {
      if (jQuery.isFunction(html)) {
        return this.each(function(i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }
      return this.each(function() {
        var self = jQuery(this),
            contents = self.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function(html) {
      var isFunction = jQuery.isFunction(html);
      return this.each(function(i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function() {
      return this.parent().each(function() {
        if (!jQuery.nodeName(this, "body")) {
          jQuery(this).replaceWith(this.childNodes);
        }
      }).end();
    }
  });
  jQuery.expr.filters.hidden = function(elem) {
    return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
  };
  jQuery.expr.filters.visible = function(elem) {
    return !jQuery.expr.filters.hidden(elem);
  };
  var r20 = /%20/g,
      rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;
  function buildParams(prefix, obj, traditional, add) {
    var name;
    if (jQuery.isArray(obj)) {
      jQuery.each(obj, function(i, v) {
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && jQuery.type(obj) === "object") {
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
  jQuery.param = function(a, traditional) {
    var prefix,
        s = [],
        add = function(key, value) {
          value = jQuery.isFunction(value) ? value() : (value == null ? "" : value);
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
    if (traditional === undefined) {
      traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
    }
    if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
      jQuery.each(a, function() {
        add(this.name, this.value);
      });
    } else {
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    }
    return s.join("&").replace(r20, "+");
  };
  jQuery.fn.extend({
    serialize: function() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function() {
        var type = this.type;
        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function(i, elem) {
        var val = jQuery(this).val();
        return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
          return {
            name: elem.name,
            value: val.replace(rCRLF, "\r\n")
          };
        }) : {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  jQuery.ajaxSettings.xhr = function() {
    try {
      return new XMLHttpRequest();
    } catch (e) {}
  };
  var xhrId = 0,
      xhrCallbacks = {},
      xhrSuccessStatus = {
        0: 200,
        1223: 204
      },
      xhrSupported = jQuery.ajaxSettings.xhr();
  if (window.attachEvent) {
    window.attachEvent("onunload", function() {
      for (var key in xhrCallbacks) {
        xhrCallbacks[key]();
      }
    });
  }
  support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function(options) {
    var callback;
    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function(headers, complete) {
          var i,
              xhr = options.xhr(),
              id = ++xhrId;
          xhr.open(options.type, options.url, options.async, options.username, options.password);
          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          }
          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          }
          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          }
          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          }
          callback = function(type) {
            return function() {
              if (callback) {
                delete xhrCallbacks[id];
                callback = xhr.onload = xhr.onerror = null;
                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  complete(xhr.status, xhr.statusText);
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, typeof xhr.responseText === "string" ? {text: xhr.responseText} : undefined, xhr.getAllResponseHeaders());
                }
              }
            };
          };
          xhr.onload = callback();
          xhr.onerror = callback("error");
          callback = xhrCallbacks[id] = callback("abort");
          try {
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            if (callback) {
              throw e;
            }
          }
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  jQuery.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /(?:java|ecma)script/},
    converters: {"text script": function(text) {
        jQuery.globalEval(text);
        return text;
      }}
  });
  jQuery.ajaxPrefilter("script", function(s) {
    if (s.cache === undefined) {
      s.cache = false;
    }
    if (s.crossDomain) {
      s.type = "GET";
    }
  });
  jQuery.ajaxTransport("script", function(s) {
    if (s.crossDomain) {
      var script,
          callback;
      return {
        send: function(_, complete) {
          script = jQuery("<script>").prop({
            async: true,
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", callback = function(evt) {
            script.remove();
            callback = null;
            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          });
          document.head.appendChild(script[0]);
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/;
  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
      this[callback] = true;
      return callback;
    }
  });
  jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
    if (jsonProp || s.dataTypes[0] === "jsonp") {
      callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      }
      s.converters["script json"] = function() {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }
        return responseContainer[0];
      };
      s.dataTypes[0] = "json";
      overwritten = window[callbackName];
      window[callbackName] = function() {
        responseContainer = arguments;
      };
      jqXHR.always(function() {
        window[callbackName] = overwritten;
        if (s[callbackName]) {
          s.jsonpCallback = originalSettings.jsonpCallback;
          oldCallbacks.push(callbackName);
        }
        if (responseContainer && jQuery.isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }
        responseContainer = overwritten = undefined;
      });
      return "script";
    }
  });
  jQuery.parseHTML = function(data, context, keepScripts) {
    if (!data || typeof data !== "string") {
      return null;
    }
    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }
    context = context || document;
    var parsed = rsingleTag.exec(data),
        scripts = !keepScripts && [];
    if (parsed) {
      return [context.createElement(parsed[1])];
    }
    parsed = jQuery.buildFragment([data], context, scripts);
    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }
    return jQuery.merge([], parsed.childNodes);
  };
  var _load = jQuery.fn.load;
  jQuery.fn.load = function(url, params, callback) {
    if (typeof url !== "string" && _load) {
      return _load.apply(this, arguments);
    }
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");
    if (off >= 0) {
      selector = jQuery.trim(url.slice(off));
      url = url.slice(0, off);
    }
    if (jQuery.isFunction(params)) {
      callback = params;
      params = undefined;
    } else if (params && typeof params === "object") {
      type = "POST";
    }
    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        type: type,
        dataType: "html",
        data: params
      }).done(function(responseText) {
        response = arguments;
        self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
      }).complete(callback && function(jqXHR, status) {
        self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
      });
    }
    return this;
  };
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
    jQuery.fn[type] = function(fn) {
      return this.on(type, fn);
    };
  });
  jQuery.expr.filters.animated = function(elem) {
    return jQuery.grep(jQuery.timers, function(fn) {
      return elem === fn.elem;
    }).length;
  };
  var docElem = window.document.documentElement;
  function getWindow(elem) {
    return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
  }
  jQuery.offset = {setOffset: function(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {};
      if (position === "static") {
        elem.style.position = "relative";
      }
      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }
      if (jQuery.isFunction(options)) {
        options = options.call(elem, i, curOffset);
      }
      if (options.top != null) {
        props.top = (options.top - curOffset.top) + curTop;
      }
      if (options.left != null) {
        props.left = (options.left - curOffset.left) + curLeft;
      }
      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }};
  jQuery.fn.extend({
    offset: function(options) {
      if (arguments.length) {
        return options === undefined ? this : this.each(function(i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }
      var docElem,
          win,
          elem = this[0],
          box = {
            top: 0,
            left: 0
          },
          doc = elem && elem.ownerDocument;
      if (!doc) {
        return;
      }
      docElem = doc.documentElement;
      if (!jQuery.contains(docElem, elem)) {
        return box;
      }
      if (typeof elem.getBoundingClientRect !== strundefined) {
        box = elem.getBoundingClientRect();
      }
      win = getWindow(doc);
      return {
        top: box.top + win.pageYOffset - docElem.clientTop,
        left: box.left + win.pageXOffset - docElem.clientLeft
      };
    },
    position: function() {
      if (!this[0]) {
        return;
      }
      var offsetParent,
          offset,
          elem = this[0],
          parentOffset = {
            top: 0,
            left: 0
          };
      if (jQuery.css(elem, "position") === "fixed") {
        offset = elem.getBoundingClientRect();
      } else {
        offsetParent = this.offsetParent();
        offset = this.offset();
        if (!jQuery.nodeName(offsetParent[0], "html")) {
          parentOffset = offsetParent.offset();
        }
        parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
        parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
      }
      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    offsetParent: function() {
      return this.map(function() {
        var offsetParent = this.offsetParent || docElem;
        while (offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || docElem;
      });
    }
  });
  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(method, prop) {
    var top = "pageYOffset" === prop;
    jQuery.fn[method] = function(val) {
      return access(this, function(elem, method, val) {
        var win = getWindow(elem);
        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }
        if (win) {
          win.scrollTo(!top ? val : window.pageXOffset, top ? val : window.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length, null);
    };
  });
  jQuery.each(["top", "left"], function(i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop);
        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  });
  jQuery.each({
    Height: "height",
    Width: "width"
  }, function(name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function(defaultExtra, funcName) {
      jQuery.fn[funcName] = function(margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function(elem, type, value) {
          var doc;
          if (jQuery.isWindow(elem)) {
            return elem.document.documentElement["client" + name];
          }
          if (elem.nodeType === 9) {
            doc = elem.documentElement;
            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }
          return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable, null);
      };
    });
  });
  jQuery.fn.size = function() {
    return this.length;
  };
  jQuery.fn.andSelf = jQuery.fn.addBack;
  if (typeof define === "function" && define.amd) {
    define("libs/jquery/2.1.4/jquery.js", [], function() {
      return jQuery;
    });
  }
  var _jQuery = window.jQuery,
      _$ = window.$;
  jQuery.noConflict = function(deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }
    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }
    return jQuery;
  };
  if (typeof noGlobal === strundefined) {
    window.jQuery = window.$ = jQuery;
  }
  return jQuery;
}));

_removeDefine();
})();
System.registerDynamic("libs/Director/1.2.8/director.js", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(exports) {
    var dloc = document.location;
    function dlocHashEmpty() {
      return dloc.hash === '' || dloc.hash === '#';
    }
    var listener = {
      mode: 'modern',
      hash: dloc.hash,
      history: false,
      check: function() {
        var h = dloc.hash;
        if (h != this.hash) {
          this.hash = h;
          this.onHashChanged();
        }
      },
      fire: function() {
        if (this.mode === 'modern') {
          this.history === true ? window.onpopstate() : window.onhashchange();
        } else {
          this.onHashChanged();
        }
      },
      init: function(fn, history) {
        var self = this;
        this.history = history;
        if (!Router.listeners) {
          Router.listeners = [];
        }
        function onchange(onChangeEvent) {
          for (var i = 0,
              l = Router.listeners.length; i < l; i++) {
            Router.listeners[i](onChangeEvent);
          }
        }
        if ('onhashchange' in window && (document.documentMode === undefined || document.documentMode > 7)) {
          if (this.history === true) {
            setTimeout(function() {
              window.onpopstate = onchange;
            }, 500);
          } else {
            window.onhashchange = onchange;
          }
          this.mode = 'modern';
        } else {
          var frame = document.createElement('iframe');
          frame.id = 'state-frame';
          frame.style.display = 'none';
          document.body.appendChild(frame);
          this.writeFrame('');
          if ('onpropertychange' in document && 'attachEvent' in document) {
            document.attachEvent('onpropertychange', function() {
              if (event.propertyName === 'location') {
                self.check();
              }
            });
          }
          window.setInterval(function() {
            self.check();
          }, 50);
          this.onHashChanged = onchange;
          this.mode = 'legacy';
        }
        Router.listeners.push(fn);
        return this.mode;
      },
      destroy: function(fn) {
        if (!Router || !Router.listeners) {
          return;
        }
        var listeners = Router.listeners;
        for (var i = listeners.length - 1; i >= 0; i--) {
          if (listeners[i] === fn) {
            listeners.splice(i, 1);
          }
        }
      },
      setHash: function(s) {
        if (this.mode === 'legacy') {
          this.writeFrame(s);
        }
        if (this.history === true) {
          window.history.pushState({}, document.title, s);
          this.fire();
        } else {
          dloc.hash = (s[0] === '/') ? s : '/' + s;
        }
        return this;
      },
      writeFrame: function(s) {
        var f = document.getElementById('state-frame');
        var d = f.contentDocument || f.contentWindow.document;
        d.open();
        d.write("<script>_hash = '" + s + "'; onload = parent.listener.syncHash;<script>");
        d.close();
      },
      syncHash: function() {
        var s = this._hash;
        if (s != dloc.hash) {
          dloc.hash = s;
        }
        return this;
      },
      onHashChanged: function() {}
    };
    var Router = exports.Router = function(routes) {
      if (!(this instanceof Router))
        return new Router(routes);
      this.params = {};
      this.routes = {};
      this.methods = ['on', 'once', 'after', 'before'];
      this.scope = [];
      this._methods = {};
      this._insert = this.insert;
      this.insert = this.insertEx;
      this.historySupport = (window.history != null ? window.history.pushState : null) != null;
      this.configure();
      this.mount(routes || {});
    };
    Router.prototype.init = function(r) {
      var self = this,
          routeTo;
      this.handler = function(onChangeEvent) {
        var newURL = onChangeEvent && onChangeEvent.newURL || window.location.hash;
        var url = self.history === true ? self.getPath() : newURL.replace(/.*#/, '');
        self.dispatch('on', url.charAt(0) === '/' ? url : '/' + url);
      };
      listener.init(this.handler, this.history);
      if (this.history === false) {
        if (dlocHashEmpty() && r) {
          dloc.hash = r;
        } else if (!dlocHashEmpty()) {
          self.dispatch('on', '/' + dloc.hash.replace(/^(#\/|#|\/)/, ''));
        }
      } else {
        if (this.convert_hash_in_init) {
          routeTo = dlocHashEmpty() && r ? r : !dlocHashEmpty() ? dloc.hash.replace(/^#/, '') : null;
          if (routeTo) {
            window.history.replaceState({}, document.title, routeTo);
          }
        } else {
          routeTo = this.getPath();
        }
        if (routeTo || this.run_in_init === true) {
          this.handler();
        }
      }
      return this;
    };
    Router.prototype.explode = function() {
      var v = this.history === true ? this.getPath() : dloc.hash;
      if (v.charAt(1) === '/') {
        v = v.slice(1);
      }
      return v.slice(1, v.length).split("/");
    };
    Router.prototype.setRoute = function(i, v, val) {
      var url = this.explode();
      if (typeof i === 'number' && typeof v === 'string') {
        url[i] = v;
      } else if (typeof val === 'string') {
        url.splice(i, v, s);
      } else {
        url = [i];
      }
      listener.setHash(url.join('/'));
      return url;
    };
    Router.prototype.insertEx = function(method, path, route, parent) {
      if (method === "once") {
        method = "on";
        route = function(route) {
          var once = false;
          return function() {
            if (once)
              return;
            once = true;
            return route.apply(this, arguments);
          };
        }(route);
      }
      return this._insert(method, path, route, parent);
    };
    Router.prototype.getRoute = function(v) {
      var ret = v;
      if (typeof v === "number") {
        ret = this.explode()[v];
      } else if (typeof v === "string") {
        var h = this.explode();
        ret = h.indexOf(v);
      } else {
        ret = this.explode();
      }
      return ret;
    };
    Router.prototype.destroy = function() {
      listener.destroy(this.handler);
      return this;
    };
    Router.prototype.getPath = function() {
      var path = window.location.pathname;
      if (path.substr(0, 1) !== '/') {
        path = '/' + path;
      }
      return path;
    };
    function _every(arr, iterator) {
      for (var i = 0; i < arr.length; i += 1) {
        if (iterator(arr[i], i, arr) === false) {
          return;
        }
      }
    }
    function _flatten(arr) {
      var flat = [];
      for (var i = 0,
          n = arr.length; i < n; i++) {
        flat = flat.concat(arr[i]);
      }
      return flat;
    }
    function _asyncEverySeries(arr, iterator, callback) {
      if (!arr.length) {
        return callback();
      }
      var completed = 0;
      (function iterate() {
        iterator(arr[completed], function(err) {
          if (err || err === false) {
            callback(err);
            callback = function() {};
          } else {
            completed += 1;
            if (completed === arr.length) {
              callback();
            } else {
              iterate();
            }
          }
        });
      })();
    }
    function paramifyString(str, params, mod) {
      mod = str;
      for (var param in params) {
        if (params.hasOwnProperty(param)) {
          mod = params[param](str);
          if (mod !== str) {
            break;
          }
        }
      }
      return mod === str ? "([._a-zA-Z0-9-%()]+)" : mod;
    }
    function regifyString(str, params) {
      var matches,
          last = 0,
          out = "";
      while (matches = str.substr(last).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/)) {
        last = matches.index + matches[0].length;
        matches[0] = matches[0].replace(/^\*/, "([_.()!\\ %@&a-zA-Z0-9-]+)");
        out += str.substr(0, matches.index) + matches[0];
      }
      str = out += str.substr(last);
      var captures = str.match(/:([^\/]+)/ig),
          capture,
          length;
      if (captures) {
        length = captures.length;
        for (var i = 0; i < length; i++) {
          capture = captures[i];
          if (capture.slice(0, 2) === "::") {
            str = capture.slice(1);
          } else {
            str = str.replace(capture, paramifyString(capture, params));
          }
        }
      }
      return str;
    }
    function terminator(routes, delimiter, start, stop) {
      var last = 0,
          left = 0,
          right = 0,
          start = (start || "(").toString(),
          stop = (stop || ")").toString(),
          i;
      for (i = 0; i < routes.length; i++) {
        var chunk = routes[i];
        if (chunk.indexOf(start, last) > chunk.indexOf(stop, last) || ~chunk.indexOf(start, last) && !~chunk.indexOf(stop, last) || !~chunk.indexOf(start, last) && ~chunk.indexOf(stop, last)) {
          left = chunk.indexOf(start, last);
          right = chunk.indexOf(stop, last);
          if (~left && !~right || !~left && ~right) {
            var tmp = routes.slice(0, (i || 1) + 1).join(delimiter);
            routes = [tmp].concat(routes.slice((i || 1) + 1));
          }
          last = (right > left ? right : left) + 1;
          i = 0;
        } else {
          last = 0;
        }
      }
      return routes;
    }
    var QUERY_SEPARATOR = /\?.*/;
    Router.prototype.configure = function(options) {
      options = options || {};
      for (var i = 0; i < this.methods.length; i++) {
        this._methods[this.methods[i]] = true;
      }
      this.recurse = options.recurse || this.recurse || false;
      this.async = options.async || false;
      this.delimiter = options.delimiter || "/";
      this.strict = typeof options.strict === "undefined" ? true : options.strict;
      this.notfound = options.notfound;
      this.resource = options.resource;
      this.history = options.html5history && this.historySupport || false;
      this.run_in_init = this.history === true && options.run_handler_in_init !== false;
      this.convert_hash_in_init = this.history === true && options.convert_hash_in_init !== false;
      this.every = {
        after: options.after || null,
        before: options.before || null,
        on: options.on || null
      };
      return this;
    };
    Router.prototype.param = function(token, matcher) {
      if (token[0] !== ":") {
        token = ":" + token;
      }
      var compiled = new RegExp(token, "g");
      this.params[token] = function(str) {
        return str.replace(compiled, matcher.source || matcher);
      };
      return this;
    };
    Router.prototype.on = Router.prototype.route = function(method, path, route) {
      var self = this;
      if (!route && typeof path == "function") {
        route = path;
        path = method;
        method = "on";
      }
      if (Array.isArray(path)) {
        return path.forEach(function(p) {
          self.on(method, p, route);
        });
      }
      if (path.source) {
        path = path.source.replace(/\\\//ig, "/");
      }
      if (Array.isArray(method)) {
        return method.forEach(function(m) {
          self.on(m.toLowerCase(), path, route);
        });
      }
      path = path.split(new RegExp(this.delimiter));
      path = terminator(path, this.delimiter);
      this.insert(method, this.scope.concat(path), route);
    };
    Router.prototype.path = function(path, routesFn) {
      var self = this,
          length = this.scope.length;
      if (path.source) {
        path = path.source.replace(/\\\//ig, "/");
      }
      path = path.split(new RegExp(this.delimiter));
      path = terminator(path, this.delimiter);
      this.scope = this.scope.concat(path);
      routesFn.call(this, this);
      this.scope.splice(length, path.length);
    };
    Router.prototype.dispatch = function(method, path, callback) {
      var self = this,
          fns = this.traverse(method, path.replace(QUERY_SEPARATOR, ""), this.routes, ""),
          invoked = this._invoked,
          after;
      this._invoked = true;
      if (!fns || fns.length === 0) {
        this.last = [];
        if (typeof this.notfound === "function") {
          this.invoke([this.notfound], {
            method: method,
            path: path
          }, callback);
        }
        return false;
      }
      if (this.recurse === "forward") {
        fns = fns.reverse();
      }
      function updateAndInvoke() {
        self.last = fns.after;
        self.invoke(self.runlist(fns), self, callback);
      }
      after = this.every && this.every.after ? [this.every.after].concat(this.last) : [this.last];
      if (after && after.length > 0 && invoked) {
        if (this.async) {
          this.invoke(after, this, updateAndInvoke);
        } else {
          this.invoke(after, this);
          updateAndInvoke();
        }
        return true;
      }
      updateAndInvoke();
      return true;
    };
    Router.prototype.invoke = function(fns, thisArg, callback) {
      var self = this;
      var apply;
      if (this.async) {
        apply = function(fn, next) {
          if (Array.isArray(fn)) {
            return _asyncEverySeries(fn, apply, next);
          } else if (typeof fn == "function") {
            fn.apply(thisArg, (fns.captures || []).concat(next));
          }
        };
        _asyncEverySeries(fns, apply, function() {
          if (callback) {
            callback.apply(thisArg, arguments);
          }
        });
      } else {
        apply = function(fn) {
          if (Array.isArray(fn)) {
            return _every(fn, apply);
          } else if (typeof fn === "function") {
            return fn.apply(thisArg, fns.captures || []);
          } else if (typeof fn === "string" && self.resource) {
            self.resource[fn].apply(thisArg, fns.captures || []);
          }
        };
        _every(fns, apply);
      }
    };
    Router.prototype.traverse = function(method, path, routes, regexp, filter) {
      var fns = [],
          current,
          exact,
          match,
          next,
          that;
      function filterRoutes(routes) {
        if (!filter) {
          return routes;
        }
        function deepCopy(source) {
          var result = [];
          for (var i = 0; i < source.length; i++) {
            result[i] = Array.isArray(source[i]) ? deepCopy(source[i]) : source[i];
          }
          return result;
        }
        function applyFilter(fns) {
          for (var i = fns.length - 1; i >= 0; i--) {
            if (Array.isArray(fns[i])) {
              applyFilter(fns[i]);
              if (fns[i].length === 0) {
                fns.splice(i, 1);
              }
            } else {
              if (!filter(fns[i])) {
                fns.splice(i, 1);
              }
            }
          }
        }
        var newRoutes = deepCopy(routes);
        newRoutes.matched = routes.matched;
        newRoutes.captures = routes.captures;
        newRoutes.after = routes.after.filter(filter);
        applyFilter(newRoutes);
        return newRoutes;
      }
      if (path === this.delimiter && routes[method]) {
        next = [[routes.before, routes[method]].filter(Boolean)];
        next.after = [routes.after].filter(Boolean);
        next.matched = true;
        next.captures = [];
        return filterRoutes(next);
      }
      for (var r in routes) {
        if (routes.hasOwnProperty(r) && (!this._methods[r] || this._methods[r] && typeof routes[r] === "object" && !Array.isArray(routes[r]))) {
          current = exact = regexp + this.delimiter + r;
          if (!this.strict) {
            exact += "[" + this.delimiter + "]?";
          }
          match = path.match(new RegExp("^" + exact));
          if (!match) {
            continue;
          }
          if (match[0] && match[0] == path && routes[r][method]) {
            next = [[routes[r].before, routes[r][method]].filter(Boolean)];
            next.after = [routes[r].after].filter(Boolean);
            next.matched = true;
            next.captures = match.slice(1);
            if (this.recurse && routes === this.routes) {
              next.push([routes.before, routes.on].filter(Boolean));
              next.after = next.after.concat([routes.after].filter(Boolean));
            }
            return filterRoutes(next);
          }
          next = this.traverse(method, path, routes[r], current);
          if (next.matched) {
            if (next.length > 0) {
              fns = fns.concat(next);
            }
            if (this.recurse) {
              fns.push([routes[r].before, routes[r].on].filter(Boolean));
              next.after = next.after.concat([routes[r].after].filter(Boolean));
              if (routes === this.routes) {
                fns.push([routes["before"], routes["on"]].filter(Boolean));
                next.after = next.after.concat([routes["after"]].filter(Boolean));
              }
            }
            fns.matched = true;
            fns.captures = next.captures;
            fns.after = next.after;
            return filterRoutes(fns);
          }
        }
      }
      return false;
    };
    Router.prototype.insert = function(method, path, route, parent) {
      var methodType,
          parentType,
          isArray,
          nested,
          part;
      path = path.filter(function(p) {
        return p && p.length > 0;
      });
      parent = parent || this.routes;
      part = path.shift();
      if (/\:|\*/.test(part) && !/\\d|\\w/.test(part)) {
        part = regifyString(part, this.params);
      }
      if (path.length > 0) {
        parent[part] = parent[part] || {};
        return this.insert(method, path, route, parent[part]);
      }
      if (!part && !path.length && parent === this.routes) {
        methodType = typeof parent[method];
        switch (methodType) {
          case "function":
            parent[method] = [parent[method], route];
            return;
          case "object":
            parent[method].push(route);
            return;
          case "undefined":
            parent[method] = route;
            return;
        }
        return;
      }
      parentType = typeof parent[part];
      isArray = Array.isArray(parent[part]);
      if (parent[part] && !isArray && parentType == "object") {
        methodType = typeof parent[part][method];
        switch (methodType) {
          case "function":
            parent[part][method] = [parent[part][method], route];
            return;
          case "object":
            parent[part][method].push(route);
            return;
          case "undefined":
            parent[part][method] = route;
            return;
        }
      } else if (parentType == "undefined") {
        nested = {};
        nested[method] = route;
        parent[part] = nested;
        return;
      }
      throw new Error("Invalid route context: " + parentType);
    };
    Router.prototype.extend = function(methods) {
      var self = this,
          len = methods.length,
          i;
      function extend(method) {
        self._methods[method] = true;
        self[method] = function() {
          var extra = arguments.length === 1 ? [method, ""] : [method];
          self.on.apply(self, extra.concat(Array.prototype.slice.call(arguments)));
        };
      }
      for (i = 0; i < len; i++) {
        extend(methods[i]);
      }
    };
    Router.prototype.runlist = function(fns) {
      var runlist = this.every && this.every.before ? [this.every.before].concat(_flatten(fns)) : _flatten(fns);
      if (this.every && this.every.on) {
        runlist.push(this.every.on);
      }
      runlist.captures = fns.captures;
      runlist.source = fns.source;
      return runlist;
    };
    Router.prototype.mount = function(routes, path) {
      if (!routes || typeof routes !== "object" || Array.isArray(routes)) {
        return;
      }
      var self = this;
      path = path || [];
      if (!Array.isArray(path)) {
        path = path.split(self.delimiter);
      }
      function insertOrMount(route, local) {
        var rename = route,
            parts = route.split(self.delimiter),
            routeType = typeof routes[route],
            isRoute = parts[0] === "" || !self._methods[parts[0]],
            event = isRoute ? "on" : rename;
        if (isRoute) {
          rename = rename.slice((rename.match(new RegExp("^" + self.delimiter)) || [""])[0].length);
          parts.shift();
        }
        if (isRoute && routeType === "object" && !Array.isArray(routes[route])) {
          local = local.concat(parts);
          self.mount(routes[route], local);
          return;
        }
        if (isRoute) {
          local = local.concat(rename.split(self.delimiter));
          local = terminator(local, self.delimiter);
        }
        self.insert(event, local, routes[route]);
      }
      for (var route in routes) {
        if (routes.hasOwnProperty(route)) {
          insertOrMount(route, path.slice(0));
        }
      }
    };
  }(typeof exports === "object" ? exports : window));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("libs/iScroll/5.1.3/iscroll-lite.js", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(window, document, Math) {
    var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
    var utils = (function() {
      var me = {};
      var _elementStyle = document.createElement('div').style;
      var _vendor = (function() {
        var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
            transform,
            i = 0,
            l = vendors.length;
        for (; i < l; i++) {
          transform = vendors[i] + 'ransform';
          if (transform in _elementStyle)
            return vendors[i].substr(0, vendors[i].length - 1);
        }
        return false;
      })();
      function _prefixStyle(style) {
        if (_vendor === false)
          return false;
        if (_vendor === '')
          return style;
        return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
      }
      me.getTime = Date.now || function getTime() {
        return new Date().getTime();
      };
      me.extend = function(target, obj) {
        for (var i in obj) {
          target[i] = obj[i];
        }
      };
      me.addEvent = function(el, type, fn, capture) {
        el.addEventListener(type, fn, !!capture);
      };
      me.removeEvent = function(el, type, fn, capture) {
        el.removeEventListener(type, fn, !!capture);
      };
      me.prefixPointerEvent = function(pointerEvent) {
        return window.MSPointerEvent ? 'MSPointer' + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10) : pointerEvent;
      };
      me.momentum = function(current, start, time, lowerMargin, wrapperSize, deceleration) {
        var distance = current - start,
            speed = Math.abs(distance) / time,
            destination,
            duration;
        deceleration = deceleration === undefined ? 0.0006 : deceleration;
        destination = current + (speed * speed) / (2 * deceleration) * (distance < 0 ? -1 : 1);
        duration = speed / deceleration;
        if (destination < lowerMargin) {
          destination = wrapperSize ? lowerMargin - (wrapperSize / 2.5 * (speed / 8)) : lowerMargin;
          distance = Math.abs(destination - current);
          duration = distance / speed;
        } else if (destination > 0) {
          destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
          distance = Math.abs(current) + destination;
          duration = distance / speed;
        }
        return {
          destination: Math.round(destination),
          duration: duration
        };
      };
      var _transform = _prefixStyle('transform');
      me.extend(me, {
        hasTransform: _transform !== false,
        hasPerspective: _prefixStyle('perspective') in _elementStyle,
        hasTouch: 'ontouchstart' in window,
        hasPointer: window.PointerEvent || window.MSPointerEvent,
        hasTransition: _prefixStyle('transition') in _elementStyle
      });
      me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !(/Chrome\/\d/.test(window.navigator.appVersion));
      me.extend(me.style = {}, {
        transform: _transform,
        transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
        transitionDuration: _prefixStyle('transitionDuration'),
        transitionDelay: _prefixStyle('transitionDelay'),
        transformOrigin: _prefixStyle('transformOrigin')
      });
      me.hasClass = function(e, c) {
        var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
        return re.test(e.className);
      };
      me.addClass = function(e, c) {
        if (me.hasClass(e, c)) {
          return;
        }
        var newclass = e.className.split(' ');
        newclass.push(c);
        e.className = newclass.join(' ');
      };
      me.removeClass = function(e, c) {
        if (!me.hasClass(e, c)) {
          return;
        }
        var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
        e.className = e.className.replace(re, ' ');
      };
      me.offset = function(el) {
        var left = -el.offsetLeft,
            top = -el.offsetTop;
        while (el = el.offsetParent) {
          left -= el.offsetLeft;
          top -= el.offsetTop;
        }
        return {
          left: left,
          top: top
        };
      };
      me.preventDefaultException = function(el, exceptions) {
        for (var i in exceptions) {
          if (exceptions[i].test(el[i])) {
            return true;
          }
        }
        return false;
      };
      me.extend(me.eventType = {}, {
        touchstart: 1,
        touchmove: 1,
        touchend: 1,
        mousedown: 2,
        mousemove: 2,
        mouseup: 2,
        pointerdown: 3,
        pointermove: 3,
        pointerup: 3,
        MSPointerDown: 3,
        MSPointerMove: 3,
        MSPointerUp: 3
      });
      me.extend(me.ease = {}, {
        quadratic: {
          style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          fn: function(k) {
            return k * (2 - k);
          }
        },
        circular: {
          style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
          fn: function(k) {
            return Math.sqrt(1 - (--k * k));
          }
        },
        back: {
          style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          fn: function(k) {
            var b = 4;
            return (k = k - 1) * k * ((b + 1) * k + b) + 1;
          }
        },
        bounce: {
          style: '',
          fn: function(k) {
            if ((k /= 1) < (1 / 2.75)) {
              return 7.5625 * k * k;
            } else if (k < (2 / 2.75)) {
              return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
            } else if (k < (2.5 / 2.75)) {
              return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
            } else {
              return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
            }
          }
        },
        elastic: {
          style: '',
          fn: function(k) {
            var f = 0.22,
                e = 0.4;
            if (k === 0) {
              return 0;
            }
            if (k == 1) {
              return 1;
            }
            return (e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1);
          }
        }
      });
      me.tap = function(e, eventName) {
        var ev = document.createEvent('Event');
        ev.initEvent(eventName, true, true);
        ev.pageX = e.pageX;
        ev.pageY = e.pageY;
        e.target.dispatchEvent(ev);
      };
      me.click = function(e) {
        var target = e.target,
            ev;
        if (!(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName)) {
          ev = document.createEvent('MouseEvents');
          ev.initMouseEvent('click', true, true, e.view, 1, target.screenX, target.screenY, target.clientX, target.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
          ev._constructed = true;
          target.dispatchEvent(ev);
        }
      };
      return me;
    })();
    function IScroll(el, options) {
      this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
      this.scroller = this.wrapper.children[0];
      this.scrollerStyle = this.scroller.style;
      this.options = {
        startX: 0,
        startY: 0,
        scrollY: true,
        directionLockThreshold: 5,
        momentum: true,
        bounce: true,
        bounceTime: 600,
        bounceEasing: '',
        preventDefault: true,
        preventDefaultException: {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/},
        HWCompositing: true,
        useTransition: true,
        useTransform: true
      };
      for (var i in options) {
        this.options[i] = options[i];
      }
      this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';
      this.options.useTransition = utils.hasTransition && this.options.useTransition;
      this.options.useTransform = utils.hasTransform && this.options.useTransform;
      this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
      this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
      this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
      this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;
      this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
      this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
      this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;
      this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
      if (this.options.tap === true) {
        this.options.tap = 'tap';
      }
      this.x = 0;
      this.y = 0;
      this.directionX = 0;
      this.directionY = 0;
      this._events = {};
      this._init();
      this.refresh();
      this.scrollTo(this.options.startX, this.options.startY);
      this.enable();
    }
    IScroll.prototype = {
      version: '5.1.3',
      _init: function() {
        this._initEvents();
      },
      destroy: function() {
        this._initEvents(true);
        this._execEvent('destroy');
      },
      _transitionEnd: function(e) {
        if (e.target != this.scroller || !this.isInTransition) {
          return;
        }
        this._transitionTime();
        if (!this.resetPosition(this.options.bounceTime)) {
          this.isInTransition = false;
          this._execEvent('scrollEnd');
        }
      },
      _start: function(e) {
        if (utils.eventType[e.type] != 1) {
          if (e.button !== 0) {
            return;
          }
        }
        if (!this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated)) {
          return;
        }
        if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
          e.preventDefault();
        }
        var point = e.touches ? e.touches[0] : e,
            pos;
        this.initiated = utils.eventType[e.type];
        this.moved = false;
        this.distX = 0;
        this.distY = 0;
        this.directionX = 0;
        this.directionY = 0;
        this.directionLocked = 0;
        this._transitionTime();
        this.startTime = utils.getTime();
        if (this.options.useTransition && this.isInTransition) {
          this.isInTransition = false;
          pos = this.getComputedPosition();
          this._translate(Math.round(pos.x), Math.round(pos.y));
          this._execEvent('scrollEnd');
        } else if (!this.options.useTransition && this.isAnimating) {
          this.isAnimating = false;
          this._execEvent('scrollEnd');
        }
        this.startX = this.x;
        this.startY = this.y;
        this.absStartX = this.x;
        this.absStartY = this.y;
        this.pointX = point.pageX;
        this.pointY = point.pageY;
        this._execEvent('beforeScrollStart');
      },
      _move: function(e) {
        if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
          return;
        }
        if (this.options.preventDefault) {
          e.preventDefault();
        }
        var point = e.touches ? e.touches[0] : e,
            deltaX = point.pageX - this.pointX,
            deltaY = point.pageY - this.pointY,
            timestamp = utils.getTime(),
            newX,
            newY,
            absDistX,
            absDistY;
        this.pointX = point.pageX;
        this.pointY = point.pageY;
        this.distX += deltaX;
        this.distY += deltaY;
        absDistX = Math.abs(this.distX);
        absDistY = Math.abs(this.distY);
        if (timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10)) {
          return;
        }
        if (!this.directionLocked && !this.options.freeScroll) {
          if (absDistX > absDistY + this.options.directionLockThreshold) {
            this.directionLocked = 'h';
          } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
            this.directionLocked = 'v';
          } else {
            this.directionLocked = 'n';
          }
        }
        if (this.directionLocked == 'h') {
          if (this.options.eventPassthrough == 'vertical') {
            e.preventDefault();
          } else if (this.options.eventPassthrough == 'horizontal') {
            this.initiated = false;
            return;
          }
          deltaY = 0;
        } else if (this.directionLocked == 'v') {
          if (this.options.eventPassthrough == 'horizontal') {
            e.preventDefault();
          } else if (this.options.eventPassthrough == 'vertical') {
            this.initiated = false;
            return;
          }
          deltaX = 0;
        }
        deltaX = this.hasHorizontalScroll ? deltaX : 0;
        deltaY = this.hasVerticalScroll ? deltaY : 0;
        newX = this.x + deltaX;
        newY = this.y + deltaY;
        if (newX > 0 || newX < this.maxScrollX) {
          newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
        }
        if (newY > 0 || newY < this.maxScrollY) {
          newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
        }
        this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
        this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
        if (!this.moved) {
          this._execEvent('scrollStart');
        }
        this.moved = true;
        this._translate(newX, newY);
        if (timestamp - this.startTime > 300) {
          this.startTime = timestamp;
          this.startX = this.x;
          this.startY = this.y;
        }
      },
      _end: function(e) {
        if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
          return;
        }
        if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
          e.preventDefault();
        }
        var point = e.changedTouches ? e.changedTouches[0] : e,
            momentumX,
            momentumY,
            duration = utils.getTime() - this.startTime,
            newX = Math.round(this.x),
            newY = Math.round(this.y),
            distanceX = Math.abs(newX - this.startX),
            distanceY = Math.abs(newY - this.startY),
            time = 0,
            easing = '';
        this.isInTransition = 0;
        this.initiated = 0;
        this.endTime = utils.getTime();
        if (this.resetPosition(this.options.bounceTime)) {
          return;
        }
        this.scrollTo(newX, newY);
        if (!this.moved) {
          if (this.options.tap) {
            utils.tap(e, this.options.tap);
          }
          if (this.options.click) {
            utils.click(e);
          }
          this._execEvent('scrollCancel');
          return;
        }
        if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
          this._execEvent('flick');
          return;
        }
        if (this.options.momentum && duration < 300) {
          momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
            destination: newX,
            duration: 0
          };
          momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
            destination: newY,
            duration: 0
          };
          newX = momentumX.destination;
          newY = momentumY.destination;
          time = Math.max(momentumX.duration, momentumY.duration);
          this.isInTransition = 1;
        }
        if (newX != this.x || newY != this.y) {
          if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
            easing = utils.ease.quadratic;
          }
          this.scrollTo(newX, newY, time, easing);
          return;
        }
        this._execEvent('scrollEnd');
      },
      _resize: function() {
        var that = this;
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(function() {
          that.refresh();
        }, this.options.resizePolling);
      },
      resetPosition: function(time) {
        var x = this.x,
            y = this.y;
        time = time || 0;
        if (!this.hasHorizontalScroll || this.x > 0) {
          x = 0;
        } else if (this.x < this.maxScrollX) {
          x = this.maxScrollX;
        }
        if (!this.hasVerticalScroll || this.y > 0) {
          y = 0;
        } else if (this.y < this.maxScrollY) {
          y = this.maxScrollY;
        }
        if (x == this.x && y == this.y) {
          return false;
        }
        this.scrollTo(x, y, time, this.options.bounceEasing);
        return true;
      },
      disable: function() {
        this.enabled = false;
      },
      enable: function() {
        this.enabled = true;
      },
      refresh: function() {
        var rf = this.wrapper.offsetHeight;
        this.wrapperWidth = this.wrapper.clientWidth;
        this.wrapperHeight = this.wrapper.clientHeight;
        this.scrollerWidth = this.scroller.offsetWidth;
        this.scrollerHeight = this.scroller.offsetHeight;
        this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
        this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
        this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
        this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
        if (!this.hasHorizontalScroll) {
          this.maxScrollX = 0;
          this.scrollerWidth = this.wrapperWidth;
        }
        if (!this.hasVerticalScroll) {
          this.maxScrollY = 0;
          this.scrollerHeight = this.wrapperHeight;
        }
        this.endTime = 0;
        this.directionX = 0;
        this.directionY = 0;
        this.wrapperOffset = utils.offset(this.wrapper);
        this._execEvent('refresh');
        this.resetPosition();
      },
      on: function(type, fn) {
        if (!this._events[type]) {
          this._events[type] = [];
        }
        this._events[type].push(fn);
      },
      off: function(type, fn) {
        if (!this._events[type]) {
          return;
        }
        var index = this._events[type].indexOf(fn);
        if (index > -1) {
          this._events[type].splice(index, 1);
        }
      },
      _execEvent: function(type) {
        if (!this._events[type]) {
          return;
        }
        var i = 0,
            l = this._events[type].length;
        if (!l) {
          return;
        }
        for (; i < l; i++) {
          this._events[type][i].apply(this, [].slice.call(arguments, 1));
        }
      },
      scrollBy: function(x, y, time, easing) {
        x = this.x + x;
        y = this.y + y;
        time = time || 0;
        this.scrollTo(x, y, time, easing);
      },
      scrollTo: function(x, y, time, easing) {
        easing = easing || utils.ease.circular;
        this.isInTransition = this.options.useTransition && time > 0;
        if (!time || (this.options.useTransition && easing.style)) {
          this._transitionTimingFunction(easing.style);
          this._transitionTime(time);
          this._translate(x, y);
        } else {
          this._animate(x, y, time, easing.fn);
        }
      },
      scrollToElement: function(el, time, offsetX, offsetY, easing) {
        el = el.nodeType ? el : this.scroller.querySelector(el);
        if (!el) {
          return;
        }
        var pos = utils.offset(el);
        pos.left -= this.wrapperOffset.left;
        pos.top -= this.wrapperOffset.top;
        if (offsetX === true) {
          offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
        }
        if (offsetY === true) {
          offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
        }
        pos.left -= offsetX || 0;
        pos.top -= offsetY || 0;
        pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
        pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;
        time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;
        this.scrollTo(pos.left, pos.top, time, easing);
      },
      _transitionTime: function(time) {
        time = time || 0;
        this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';
        if (!time && utils.isBadAndroid) {
          this.scrollerStyle[utils.style.transitionDuration] = '0.001s';
        }
      },
      _transitionTimingFunction: function(easing) {
        this.scrollerStyle[utils.style.transitionTimingFunction] = easing;
      },
      _translate: function(x, y) {
        if (this.options.useTransform) {
          this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
        } else {
          x = Math.round(x);
          y = Math.round(y);
          this.scrollerStyle.left = x + 'px';
          this.scrollerStyle.top = y + 'px';
        }
        this.x = x;
        this.y = y;
      },
      _initEvents: function(remove) {
        var eventType = remove ? utils.removeEvent : utils.addEvent,
            target = this.options.bindToWrapper ? this.wrapper : window;
        eventType(window, 'orientationchange', this);
        eventType(window, 'resize', this);
        if (this.options.click) {
          eventType(this.wrapper, 'click', this, true);
        }
        if (!this.options.disableMouse) {
          eventType(this.wrapper, 'mousedown', this);
          eventType(target, 'mousemove', this);
          eventType(target, 'mousecancel', this);
          eventType(target, 'mouseup', this);
        }
        if (utils.hasPointer && !this.options.disablePointer) {
          eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
          eventType(target, utils.prefixPointerEvent('pointermove'), this);
          eventType(target, utils.prefixPointerEvent('pointercancel'), this);
          eventType(target, utils.prefixPointerEvent('pointerup'), this);
        }
        if (utils.hasTouch && !this.options.disableTouch) {
          eventType(this.wrapper, 'touchstart', this);
          eventType(target, 'touchmove', this);
          eventType(target, 'touchcancel', this);
          eventType(target, 'touchend', this);
        }
        eventType(this.scroller, 'transitionend', this);
        eventType(this.scroller, 'webkitTransitionEnd', this);
        eventType(this.scroller, 'oTransitionEnd', this);
        eventType(this.scroller, 'MSTransitionEnd', this);
      },
      getComputedPosition: function() {
        var matrix = window.getComputedStyle(this.scroller, null),
            x,
            y;
        if (this.options.useTransform) {
          matrix = matrix[utils.style.transform].split(')')[0].split(', ');
          x = +(matrix[12] || matrix[4]);
          y = +(matrix[13] || matrix[5]);
        } else {
          x = +matrix.left.replace(/[^-\d.]/g, '');
          y = +matrix.top.replace(/[^-\d.]/g, '');
        }
        return {
          x: x,
          y: y
        };
      },
      _animate: function(destX, destY, duration, easingFn) {
        var that = this,
            startX = this.x,
            startY = this.y,
            startTime = utils.getTime(),
            destTime = startTime + duration;
        function step() {
          var now = utils.getTime(),
              newX,
              newY,
              easing;
          if (now >= destTime) {
            that.isAnimating = false;
            that._translate(destX, destY);
            if (!that.resetPosition(that.options.bounceTime)) {
              that._execEvent('scrollEnd');
            }
            return;
          }
          now = (now - startTime) / duration;
          easing = easingFn(now);
          newX = (destX - startX) * easing + startX;
          newY = (destY - startY) * easing + startY;
          that._translate(newX, newY);
          if (that.isAnimating) {
            rAF(step);
          }
        }
        this.isAnimating = true;
        step();
      },
      handleEvent: function(e) {
        switch (e.type) {
          case 'touchstart':
          case 'pointerdown':
          case 'MSPointerDown':
          case 'mousedown':
            this._start(e);
            break;
          case 'touchmove':
          case 'pointermove':
          case 'MSPointerMove':
          case 'mousemove':
            this._move(e);
            break;
          case 'touchend':
          case 'pointerup':
          case 'MSPointerUp':
          case 'mouseup':
          case 'touchcancel':
          case 'pointercancel':
          case 'MSPointerCancel':
          case 'mousecancel':
            this._end(e);
            break;
          case 'orientationchange':
          case 'resize':
            this._resize();
            break;
          case 'transitionend':
          case 'webkitTransitionEnd':
          case 'oTransitionEnd':
          case 'MSTransitionEnd':
            this._transitionEnd(e);
            break;
          case 'wheel':
          case 'DOMMouseScroll':
          case 'mousewheel':
            this._wheel(e);
            break;
          case 'keydown':
            this._key(e);
            break;
          case 'click':
            if (!e._constructed) {
              e.preventDefault();
              e.stopPropagation();
            }
            break;
        }
      }
    };
    IScroll.utils = utils;
    if (typeof module != 'undefined' && module.exports) {
      module.exports = IScroll;
    } else {
      window.IScroll = IScroll;
    }
  })(window, document, Math);
  global.define = __define;
  return module.exports;
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
(function() {
  'use strict';
  var $;
  var Swiper = function(container, params) {
    if (!(this instanceof Swiper))
      return new Swiper(container, params);
    var defaults = {
      direction: 'horizontal',
      touchEventsTarget: 'container',
      initialSlide: 0,
      speed: 300,
      autoplay: false,
      autoplayDisableOnInteraction: true,
      iOSEdgeSwipeDetection: false,
      iOSEdgeSwipeThreshold: 20,
      freeMode: false,
      freeModeMomentum: true,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: true,
      freeModeMomentumBounceRatio: 1,
      freeModeSticky: false,
      setWrapperSize: false,
      virtualTranslate: false,
      effect: 'slide',
      coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      cube: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
      },
      fade: {crossFade: false},
      parallax: false,
      scrollbar: null,
      scrollbarHide: true,
      keyboardControl: false,
      mousewheelControl: false,
      mousewheelReleaseOnEdges: false,
      mousewheelInvert: false,
      mousewheelForceToAxis: false,
      mousewheelSensitivity: 1,
      hashnav: false,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'column',
      slidesPerGroup: 1,
      centeredSlides: false,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      roundLengths: false,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: true,
      onlyExternal: false,
      threshold: 0,
      touchMoveStopPropagation: true,
      pagination: null,
      paginationElement: 'span',
      paginationClickable: false,
      paginationHide: false,
      paginationBulletRender: null,
      resistance: true,
      resistanceRatio: 0.85,
      nextButton: null,
      prevButton: null,
      watchSlidesProgress: false,
      watchSlidesVisibility: false,
      grabCursor: false,
      preventClicks: true,
      preventClicksPropagation: true,
      slideToClickedSlide: false,
      lazyLoading: false,
      lazyLoadingInPrevNext: false,
      lazyLoadingOnTransitionStart: false,
      preloadImages: true,
      updateOnImagesReady: true,
      loop: false,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      control: undefined,
      controlInverse: false,
      controlBy: 'slide',
      allowSwipeToPrev: true,
      allowSwipeToNext: true,
      swipeHandler: null,
      noSwiping: true,
      noSwipingClass: 'swiper-no-swiping',
      slideClass: 'swiper-slide',
      slideActiveClass: 'swiper-slide-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      slideNextClass: 'swiper-slide-next',
      slidePrevClass: 'swiper-slide-prev',
      wrapperClass: 'swiper-wrapper',
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      buttonDisabledClass: 'swiper-button-disabled',
      paginationHiddenClass: 'swiper-pagination-hidden',
      observer: false,
      observeParents: false,
      a11y: false,
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      runCallbacksOnInit: true
    };
    var initialVirtualTranslate = params && params.virtualTranslate;
    params = params || {};
    for (var def in defaults) {
      if (typeof params[def] === 'undefined') {
        params[def] = defaults[def];
      } else if (typeof params[def] === 'object') {
        for (var deepDef in defaults[def]) {
          if (typeof params[def][deepDef] === 'undefined') {
            params[def][deepDef] = defaults[def][deepDef];
          }
        }
      }
    }
    var s = this;
    s.version = '3.1.0';
    s.params = params;
    s.classNames = [];
    if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined') {
      $ = Dom7;
    }
    if (typeof $ === 'undefined') {
      if (typeof Dom7 === 'undefined') {
        $ = window.Dom7 || window.Zepto || window.jQuery;
      } else {
        $ = Dom7;
      }
      if (!$)
        return;
    }
    s.$ = $;
    s.container = $(container);
    if (s.container.length === 0)
      return;
    if (s.container.length > 1) {
      s.container.each(function() {
        new Swiper(this, params);
      });
      return;
    }
    s.container[0].swiper = s;
    s.container.data('swiper', s);
    s.classNames.push('swiper-container-' + s.params.direction);
    if (s.params.freeMode) {
      s.classNames.push('swiper-container-free-mode');
    }
    if (!s.support.flexbox) {
      s.classNames.push('swiper-container-no-flexbox');
      s.params.slidesPerColumn = 1;
    }
    if (s.params.parallax || s.params.watchSlidesVisibility) {
      s.params.watchSlidesProgress = true;
    }
    if (['cube', 'coverflow'].indexOf(s.params.effect) >= 0) {
      if (s.support.transforms3d) {
        s.params.watchSlidesProgress = true;
        s.classNames.push('swiper-container-3d');
      } else {
        s.params.effect = 'slide';
      }
    }
    if (s.params.effect !== 'slide') {
      s.classNames.push('swiper-container-' + s.params.effect);
    }
    if (s.params.effect === 'cube') {
      s.params.resistanceRatio = 0;
      s.params.slidesPerView = 1;
      s.params.slidesPerColumn = 1;
      s.params.slidesPerGroup = 1;
      s.params.centeredSlides = false;
      s.params.spaceBetween = 0;
      s.params.virtualTranslate = true;
      s.params.setWrapperSize = false;
    }
    if (s.params.effect === 'fade') {
      s.params.slidesPerView = 1;
      s.params.slidesPerColumn = 1;
      s.params.slidesPerGroup = 1;
      s.params.watchSlidesProgress = true;
      s.params.spaceBetween = 0;
      if (typeof initialVirtualTranslate === 'undefined') {
        s.params.virtualTranslate = true;
      }
    }
    if (s.params.grabCursor && s.support.touch) {
      s.params.grabCursor = false;
    }
    s.wrapper = s.container.children('.' + s.params.wrapperClass);
    if (s.params.pagination) {
      s.paginationContainer = $(s.params.pagination);
      if (s.params.paginationClickable) {
        s.paginationContainer.addClass('swiper-pagination-clickable');
      }
    }
    function isH() {
      return s.params.direction === 'horizontal';
    }
    s.rtl = isH() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
    if (s.rtl) {
      s.classNames.push('swiper-container-rtl');
    }
    if (s.rtl) {
      s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
    }
    if (s.params.slidesPerColumn > 1) {
      s.classNames.push('swiper-container-multirow');
    }
    if (s.device.android) {
      s.classNames.push('swiper-container-android');
    }
    s.container.addClass(s.classNames.join(' '));
    s.translate = 0;
    s.progress = 0;
    s.velocity = 0;
    s.lockSwipeToNext = function() {
      s.params.allowSwipeToNext = false;
    };
    s.lockSwipeToPrev = function() {
      s.params.allowSwipeToPrev = false;
    };
    s.lockSwipes = function() {
      s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
    };
    s.unlockSwipeToNext = function() {
      s.params.allowSwipeToNext = true;
    };
    s.unlockSwipeToPrev = function() {
      s.params.allowSwipeToPrev = true;
    };
    s.unlockSwipes = function() {
      s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
    };
    function round(a) {
      return Math.floor(a);
    }
    if (s.params.grabCursor) {
      s.container[0].style.cursor = 'move';
      s.container[0].style.cursor = '-webkit-grab';
      s.container[0].style.cursor = '-moz-grab';
      s.container[0].style.cursor = 'grab';
    }
    s.imagesToLoad = [];
    s.imagesLoaded = 0;
    s.loadImage = function(imgElement, src, checkForComplete, callback) {
      var image;
      function onReady() {
        if (callback)
          callback();
      }
      if (!imgElement.complete || !checkForComplete) {
        if (src) {
          image = new window.Image();
          image.onload = onReady;
          image.onerror = onReady;
          image.src = src;
        } else {
          onReady();
        }
      } else {
        onReady();
      }
    };
    s.preloadImages = function() {
      s.imagesToLoad = s.container.find('img');
      function _onReady() {
        if (typeof s === 'undefined' || s === null)
          return;
        if (s.imagesLoaded !== undefined)
          s.imagesLoaded++;
        if (s.imagesLoaded === s.imagesToLoad.length) {
          if (s.params.updateOnImagesReady)
            s.update();
          s.emit('onImagesReady', s);
        }
      }
      for (var i = 0; i < s.imagesToLoad.length; i++) {
        s.loadImage(s.imagesToLoad[i], (s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src')), true, _onReady);
      }
    };
    s.autoplayTimeoutId = undefined;
    s.autoplaying = false;
    s.autoplayPaused = false;
    function autoplay() {
      s.autoplayTimeoutId = setTimeout(function() {
        if (s.params.loop) {
          s.fixLoop();
          s._slideNext();
        } else {
          if (!s.isEnd) {
            s._slideNext();
          } else {
            if (!params.autoplayStopOnLast) {
              s._slideTo(0);
            } else {
              s.stopAutoplay();
            }
          }
        }
      }, s.params.autoplay);
    }
    s.startAutoplay = function() {
      if (typeof s.autoplayTimeoutId !== 'undefined')
        return false;
      if (!s.params.autoplay)
        return false;
      if (s.autoplaying)
        return false;
      s.autoplaying = true;
      s.emit('onAutoplayStart', s);
      autoplay();
    };
    s.stopAutoplay = function(internal) {
      if (!s.autoplayTimeoutId)
        return;
      if (s.autoplayTimeoutId)
        clearTimeout(s.autoplayTimeoutId);
      s.autoplaying = false;
      s.autoplayTimeoutId = undefined;
      s.emit('onAutoplayStop', s);
    };
    s.pauseAutoplay = function(speed) {
      if (s.autoplayPaused)
        return;
      if (s.autoplayTimeoutId)
        clearTimeout(s.autoplayTimeoutId);
      s.autoplayPaused = true;
      if (speed === 0) {
        s.autoplayPaused = false;
        autoplay();
      } else {
        s.wrapper.transitionEnd(function() {
          if (!s)
            return;
          s.autoplayPaused = false;
          if (!s.autoplaying) {
            s.stopAutoplay();
          } else {
            autoplay();
          }
        });
      }
    };
    s.minTranslate = function() {
      return (-s.snapGrid[0]);
    };
    s.maxTranslate = function() {
      return (-s.snapGrid[s.snapGrid.length - 1]);
    };
    s.updateContainerSize = function() {
      var width,
          height;
      if (typeof s.params.width !== 'undefined') {
        width = s.params.width;
      } else {
        width = s.container[0].clientWidth;
      }
      if (typeof s.params.height !== 'undefined') {
        height = s.params.height;
      } else {
        height = s.container[0].clientHeight;
      }
      if (width === 0 && isH() || height === 0 && !isH()) {
        return;
      }
      width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
      height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);
      s.width = width;
      s.height = height;
      s.size = isH() ? s.width : s.height;
    };
    s.updateSlidesSize = function() {
      s.slides = s.wrapper.children('.' + s.params.slideClass);
      s.snapGrid = [];
      s.slidesGrid = [];
      s.slidesSizesGrid = [];
      var spaceBetween = s.params.spaceBetween,
          slidePosition = -s.params.slidesOffsetBefore,
          i,
          prevSlideSize = 0,
          index = 0;
      if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
      }
      s.virtualSize = -spaceBetween;
      if (s.rtl)
        s.slides.css({
          marginLeft: '',
          marginTop: ''
        });
      else
        s.slides.css({
          marginRight: '',
          marginBottom: ''
        });
      var slidesNumberEvenToRows;
      if (s.params.slidesPerColumn > 1) {
        if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
          slidesNumberEvenToRows = s.slides.length;
        } else {
          slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
        }
      }
      var slideSize;
      var slidesPerColumn = s.params.slidesPerColumn;
      var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
      var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
      for (i = 0; i < s.slides.length; i++) {
        slideSize = 0;
        var slide = s.slides.eq(i);
        if (s.params.slidesPerColumn > 1) {
          var newSlideOrderIndex;
          var column,
              row;
          if (s.params.slidesPerColumnFill === 'column') {
            column = Math.floor(i / slidesPerColumn);
            row = i - column * slidesPerColumn;
            if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
              if (++row >= slidesPerColumn) {
                row = 0;
                column++;
              }
            }
            newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
            slide.css({
              '-webkit-box-ordinal-group': newSlideOrderIndex,
              '-moz-box-ordinal-group': newSlideOrderIndex,
              '-ms-flex-order': newSlideOrderIndex,
              '-webkit-order': newSlideOrderIndex,
              'order': newSlideOrderIndex
            });
          } else {
            row = Math.floor(i / slidesPerRow);
            column = i - row * slidesPerRow;
          }
          slide.css({'margin-top': (row !== 0 && s.params.spaceBetween) && (s.params.spaceBetween + 'px')}).attr('data-swiper-column', column).attr('data-swiper-row', row);
        }
        if (slide.css('display') === 'none')
          continue;
        if (s.params.slidesPerView === 'auto') {
          slideSize = isH() ? slide.outerWidth(true) : slide.outerHeight(true);
          if (s.params.roundLengths)
            slideSize = round(slideSize);
        } else {
          slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
          if (s.params.roundLengths)
            slideSize = round(slideSize);
          if (isH()) {
            s.slides[i].style.width = slideSize + 'px';
          } else {
            s.slides[i].style.height = slideSize + 'px';
          }
        }
        s.slides[i].swiperSlideSize = slideSize;
        s.slidesSizesGrid.push(slideSize);
        if (s.params.centeredSlides) {
          slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
          if (i === 0)
            slidePosition = slidePosition - s.size / 2 - spaceBetween;
          if (Math.abs(slidePosition) < 1 / 1000)
            slidePosition = 0;
          if ((index) % s.params.slidesPerGroup === 0)
            s.snapGrid.push(slidePosition);
          s.slidesGrid.push(slidePosition);
        } else {
          if ((index) % s.params.slidesPerGroup === 0)
            s.snapGrid.push(slidePosition);
          s.slidesGrid.push(slidePosition);
          slidePosition = slidePosition + slideSize + spaceBetween;
        }
        s.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index++;
      }
      s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
      var newSlidesGrid;
      if (s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
        s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
      }
      if (!s.support.flexbox || s.params.setWrapperSize) {
        if (isH())
          s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
        else
          s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
      }
      if (s.params.slidesPerColumn > 1) {
        s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
        s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
        s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
        if (s.params.centeredSlides) {
          newSlidesGrid = [];
          for (i = 0; i < s.snapGrid.length; i++) {
            if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0])
              newSlidesGrid.push(s.snapGrid[i]);
          }
          s.snapGrid = newSlidesGrid;
        }
      }
      if (!s.params.centeredSlides) {
        newSlidesGrid = [];
        for (i = 0; i < s.snapGrid.length; i++) {
          if (s.snapGrid[i] <= s.virtualSize - s.size) {
            newSlidesGrid.push(s.snapGrid[i]);
          }
        }
        s.snapGrid = newSlidesGrid;
        if (Math.floor(s.virtualSize - s.size) > Math.floor(s.snapGrid[s.snapGrid.length - 1])) {
          s.snapGrid.push(s.virtualSize - s.size);
        }
      }
      if (s.snapGrid.length === 0)
        s.snapGrid = [0];
      if (s.params.spaceBetween !== 0) {
        if (isH()) {
          if (s.rtl)
            s.slides.css({marginLeft: spaceBetween + 'px'});
          else
            s.slides.css({marginRight: spaceBetween + 'px'});
        } else
          s.slides.css({marginBottom: spaceBetween + 'px'});
      }
      if (s.params.watchSlidesProgress) {
        s.updateSlidesOffset();
      }
    };
    s.updateSlidesOffset = function() {
      for (var i = 0; i < s.slides.length; i++) {
        s.slides[i].swiperSlideOffset = isH() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
      }
    };
    s.updateSlidesProgress = function(translate) {
      if (typeof translate === 'undefined') {
        translate = s.translate || 0;
      }
      if (s.slides.length === 0)
        return;
      if (typeof s.slides[0].swiperSlideOffset === 'undefined')
        s.updateSlidesOffset();
      var offsetCenter = -translate;
      if (s.rtl)
        offsetCenter = translate;
      var containerBox = s.container[0].getBoundingClientRect();
      var sideBefore = isH() ? 'left' : 'top';
      var sideAfter = isH() ? 'right' : 'bottom';
      s.slides.removeClass(s.params.slideVisibleClass);
      for (var i = 0; i < s.slides.length; i++) {
        var slide = s.slides[i];
        var slideProgress = (offsetCenter - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
        if (s.params.watchSlidesVisibility) {
          var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
          var slideAfter = slideBefore + s.slidesSizesGrid[i];
          var isVisible = (slideBefore >= 0 && slideBefore < s.size) || (slideAfter > 0 && slideAfter <= s.size) || (slideBefore <= 0 && slideAfter >= s.size);
          if (isVisible) {
            s.slides.eq(i).addClass(s.params.slideVisibleClass);
          }
        }
        slide.progress = s.rtl ? -slideProgress : slideProgress;
      }
    };
    s.updateProgress = function(translate) {
      if (typeof translate === 'undefined') {
        translate = s.translate || 0;
      }
      var translatesDiff = s.maxTranslate() - s.minTranslate();
      if (translatesDiff === 0) {
        s.progress = 0;
        s.isBeginning = s.isEnd = true;
      } else {
        s.progress = (translate - s.minTranslate()) / (translatesDiff);
        s.isBeginning = s.progress <= 0;
        s.isEnd = s.progress >= 1;
      }
      if (s.isBeginning)
        s.emit('onReachBeginning', s);
      if (s.isEnd)
        s.emit('onReachEnd', s);
      if (s.params.watchSlidesProgress)
        s.updateSlidesProgress(translate);
      s.emit('onProgress', s, s.progress);
    };
    s.updateActiveIndex = function() {
      var translate = s.rtl ? s.translate : -s.translate;
      var newActiveIndex,
          i,
          snapIndex;
      for (i = 0; i < s.slidesGrid.length; i++) {
        if (typeof s.slidesGrid[i + 1] !== 'undefined') {
          if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
            newActiveIndex = i;
          } else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
            newActiveIndex = i + 1;
          }
        } else {
          if (translate >= s.slidesGrid[i]) {
            newActiveIndex = i;
          }
        }
      }
      if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined')
        newActiveIndex = 0;
      snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
      if (snapIndex >= s.snapGrid.length)
        snapIndex = s.snapGrid.length - 1;
      if (newActiveIndex === s.activeIndex) {
        return;
      }
      s.snapIndex = snapIndex;
      s.previousIndex = s.activeIndex;
      s.activeIndex = newActiveIndex;
      s.updateClasses();
    };
    s.updateClasses = function() {
      s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass);
      var activeSlide = s.slides.eq(s.activeIndex);
      activeSlide.addClass(s.params.slideActiveClass);
      activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
      activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
      if (s.bullets && s.bullets.length > 0) {
        s.bullets.removeClass(s.params.bulletActiveClass);
        var bulletIndex;
        if (s.params.loop) {
          bulletIndex = Math.ceil(s.activeIndex - s.loopedSlides) / s.params.slidesPerGroup;
          if (bulletIndex > s.slides.length - 1 - s.loopedSlides * 2) {
            bulletIndex = bulletIndex - (s.slides.length - s.loopedSlides * 2);
          }
          if (bulletIndex > s.bullets.length - 1)
            bulletIndex = bulletIndex - s.bullets.length;
        } else {
          if (typeof s.snapIndex !== 'undefined') {
            bulletIndex = s.snapIndex;
          } else {
            bulletIndex = s.activeIndex || 0;
          }
        }
        if (s.paginationContainer.length > 1) {
          s.bullets.each(function() {
            if ($(this).index() === bulletIndex)
              $(this).addClass(s.params.bulletActiveClass);
          });
        } else {
          s.bullets.eq(bulletIndex).addClass(s.params.bulletActiveClass);
        }
      }
      if (!s.params.loop) {
        if (s.params.prevButton) {
          if (s.isBeginning) {
            $(s.params.prevButton).addClass(s.params.buttonDisabledClass);
            if (s.params.a11y && s.a11y)
              s.a11y.disable($(s.params.prevButton));
          } else {
            $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
            if (s.params.a11y && s.a11y)
              s.a11y.enable($(s.params.prevButton));
          }
        }
        if (s.params.nextButton) {
          if (s.isEnd) {
            $(s.params.nextButton).addClass(s.params.buttonDisabledClass);
            if (s.params.a11y && s.a11y)
              s.a11y.disable($(s.params.nextButton));
          } else {
            $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
            if (s.params.a11y && s.a11y)
              s.a11y.enable($(s.params.nextButton));
          }
        }
      }
    };
    s.updatePagination = function() {
      if (!s.params.pagination)
        return;
      if (s.paginationContainer && s.paginationContainer.length > 0) {
        var bulletsHTML = '';
        var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
        for (var i = 0; i < numberOfBullets; i++) {
          if (s.params.paginationBulletRender) {
            bulletsHTML += s.params.paginationBulletRender(i, s.params.bulletClass);
          } else {
            bulletsHTML += '<' + s.params.paginationElement + ' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
          }
        }
        s.paginationContainer.html(bulletsHTML);
        s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
        if (s.params.paginationClickable && s.params.a11y && s.a11y) {
          s.a11y.initPagination();
        }
      }
    };
    s.update = function(updateTranslate) {
      s.updateContainerSize();
      s.updateSlidesSize();
      s.updateProgress();
      s.updatePagination();
      s.updateClasses();
      if (s.params.scrollbar && s.scrollbar) {
        s.scrollbar.set();
      }
      function forceSetTranslate() {
        newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
        s.setWrapperTranslate(newTranslate);
        s.updateActiveIndex();
        s.updateClasses();
      }
      if (updateTranslate) {
        var translated,
            newTranslate;
        if (s.controller && s.controller.spline) {
          s.controller.spline = undefined;
        }
        if (s.params.freeMode) {
          forceSetTranslate();
        } else {
          if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
            translated = s.slideTo(s.slides.length - 1, 0, false, true);
          } else {
            translated = s.slideTo(s.activeIndex, 0, false, true);
          }
          if (!translated) {
            forceSetTranslate();
          }
        }
      }
    };
    s.onResize = function(forceUpdatePagination) {
      var allowSwipeToPrev = s.params.allowSwipeToPrev;
      var allowSwipeToNext = s.params.allowSwipeToNext;
      s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;
      s.updateContainerSize();
      s.updateSlidesSize();
      if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination)
        s.updatePagination();
      if (s.params.scrollbar && s.scrollbar) {
        s.scrollbar.set();
      }
      if (s.controller && s.controller.spline) {
        s.controller.spline = undefined;
      }
      if (s.params.freeMode) {
        var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
        s.setWrapperTranslate(newTranslate);
        s.updateActiveIndex();
        s.updateClasses();
      } else {
        s.updateClasses();
        if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
          s.slideTo(s.slides.length - 1, 0, false, true);
        } else {
          s.slideTo(s.activeIndex, 0, false, true);
        }
      }
      s.params.allowSwipeToPrev = allowSwipeToPrev;
      s.params.allowSwipeToNext = allowSwipeToNext;
    };
    var desktopEvents = ['mousedown', 'mousemove', 'mouseup'];
    if (window.navigator.pointerEnabled)
      desktopEvents = ['pointerdown', 'pointermove', 'pointerup'];
    else if (window.navigator.msPointerEnabled)
      desktopEvents = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
    s.touchEvents = {
      start: s.support.touch || !s.params.simulateTouch ? 'touchstart' : desktopEvents[0],
      move: s.support.touch || !s.params.simulateTouch ? 'touchmove' : desktopEvents[1],
      end: s.support.touch || !s.params.simulateTouch ? 'touchend' : desktopEvents[2]
    };
    if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
      (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
    }
    s.initEvents = function(detach) {
      var actionDom = detach ? 'off' : 'on';
      var action = detach ? 'removeEventListener' : 'addEventListener';
      var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
      var target = s.support.touch ? touchEventsTarget : document;
      var moveCapture = s.params.nested ? true : false;
      if (s.browser.ie) {
        touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
        target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
        target[action](s.touchEvents.end, s.onTouchEnd, false);
      } else {
        if (s.support.touch) {
          touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
          touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
          touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, false);
        }
        if (params.simulateTouch && !s.device.ios && !s.device.android) {
          touchEventsTarget[action]('mousedown', s.onTouchStart, false);
          document[action]('mousemove', s.onTouchMove, moveCapture);
          document[action]('mouseup', s.onTouchEnd, false);
        }
      }
      window[action]('resize', s.onResize);
      if (s.params.nextButton) {
        $(s.params.nextButton)[actionDom]('click', s.onClickNext);
        if (s.params.a11y && s.a11y)
          $(s.params.nextButton)[actionDom]('keydown', s.a11y.onEnterKey);
      }
      if (s.params.prevButton) {
        $(s.params.prevButton)[actionDom]('click', s.onClickPrev);
        if (s.params.a11y && s.a11y)
          $(s.params.prevButton)[actionDom]('keydown', s.a11y.onEnterKey);
      }
      if (s.params.pagination && s.params.paginationClickable) {
        $(s.paginationContainer)[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
        if (s.params.a11y && s.a11y)
          $(s.paginationContainer)[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
      }
      if (s.params.preventClicks || s.params.preventClicksPropagation)
        touchEventsTarget[action]('click', s.preventClicks, true);
    };
    s.attachEvents = function(detach) {
      s.initEvents();
    };
    s.detachEvents = function() {
      s.initEvents(true);
    };
    s.allowClick = true;
    s.preventClicks = function(e) {
      if (!s.allowClick) {
        if (s.params.preventClicks)
          e.preventDefault();
        if (s.params.preventClicksPropagation && s.animating) {
          e.stopPropagation();
          e.stopImmediatePropagation();
        }
      }
    };
    s.onClickNext = function(e) {
      e.preventDefault();
      if (s.isEnd && !s.params.loop)
        return;
      s.slideNext();
    };
    s.onClickPrev = function(e) {
      e.preventDefault();
      if (s.isBeginning && !s.params.loop)
        return;
      s.slidePrev();
    };
    s.onClickIndex = function(e) {
      e.preventDefault();
      var index = $(this).index() * s.params.slidesPerGroup;
      if (s.params.loop)
        index = index + s.loopedSlides;
      s.slideTo(index);
    };
    function findElementInEvent(e, selector) {
      var el = $(e.target);
      if (!el.is(selector)) {
        if (typeof selector === 'string') {
          el = el.parents(selector);
        } else if (selector.nodeType) {
          var found;
          el.parents().each(function(index, _el) {
            if (_el === selector)
              found = selector;
          });
          if (!found)
            return undefined;
          else
            return selector;
        }
      }
      if (el.length === 0) {
        return undefined;
      }
      return el[0];
    }
    s.updateClickedSlide = function(e) {
      var slide = findElementInEvent(e, '.' + s.params.slideClass);
      var slideFound = false;
      if (slide) {
        for (var i = 0; i < s.slides.length; i++) {
          if (s.slides[i] === slide)
            slideFound = true;
        }
      }
      if (slide && slideFound) {
        s.clickedSlide = slide;
        s.clickedIndex = $(slide).index();
      } else {
        s.clickedSlide = undefined;
        s.clickedIndex = undefined;
        return;
      }
      if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
        var slideToIndex = s.clickedIndex,
            realIndex;
        if (s.params.loop) {
          realIndex = $(s.clickedSlide).attr('data-swiper-slide-index');
          if (slideToIndex > s.slides.length - s.params.slidesPerView) {
            s.fixLoop();
            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]').eq(0).index();
            setTimeout(function() {
              s.slideTo(slideToIndex);
            }, 0);
          } else if (slideToIndex < s.params.slidesPerView - 1) {
            s.fixLoop();
            var duplicatedSlides = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]');
            slideToIndex = duplicatedSlides.eq(duplicatedSlides.length - 1).index();
            setTimeout(function() {
              s.slideTo(slideToIndex);
            }, 0);
          } else {
            s.slideTo(slideToIndex);
          }
        } else {
          s.slideTo(slideToIndex);
        }
      }
    };
    var isTouched,
        isMoved,
        touchStartTime,
        isScrolling,
        currentTranslate,
        startTranslate,
        allowThresholdMove,
        formElements = 'input, select, textarea, button',
        lastClickTime = Date.now(),
        clickTimeout,
        velocities = [],
        allowMomentumBounce;
    s.animating = false;
    s.touches = {
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
      diff: 0
    };
    var isTouchEvent,
        startMoving;
    s.onTouchStart = function(e) {
      if (e.originalEvent)
        e = e.originalEvent;
      isTouchEvent = e.type === 'touchstart';
      if (!isTouchEvent && 'which' in e && e.which === 3)
        return;
      if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
        s.allowClick = true;
        return;
      }
      if (s.params.swipeHandler) {
        if (!findElementInEvent(e, s.params.swipeHandler))
          return;
      }
      var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      if (s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
        return;
      }
      isTouched = true;
      isMoved = false;
      isScrolling = undefined;
      startMoving = undefined;
      s.touches.startX = startX;
      s.touches.startY = startY;
      touchStartTime = Date.now();
      s.allowClick = true;
      s.updateContainerSize();
      s.swipeDirection = undefined;
      if (s.params.threshold > 0)
        allowThresholdMove = false;
      if (e.type !== 'touchstart') {
        var preventDefault = true;
        if ($(e.target).is(formElements))
          preventDefault = false;
        if (document.activeElement && $(document.activeElement).is(formElements)) {
          document.activeElement.blur();
        }
        if (preventDefault) {
          e.preventDefault();
        }
      }
      s.emit('onTouchStart', s, e);
    };
    s.onTouchMove = function(e) {
      if (e.originalEvent)
        e = e.originalEvent;
      if (isTouchEvent && e.type === 'mousemove')
        return;
      if (e.preventedByNestedSwiper)
        return;
      if (s.params.onlyExternal) {
        s.allowClick = false;
        if (isTouched) {
          s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
          s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
          touchStartTime = Date.now();
        }
        return;
      }
      if (isTouchEvent && document.activeElement) {
        if (e.target === document.activeElement && $(e.target).is(formElements)) {
          isMoved = true;
          s.allowClick = false;
          return;
        }
      }
      s.emit('onTouchMove', s, e);
      if (e.targetTouches && e.targetTouches.length > 1)
        return;
      s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
      s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
      if (typeof isScrolling === 'undefined') {
        var touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
        isScrolling = isH() ? touchAngle > s.params.touchAngle : (90 - touchAngle > s.params.touchAngle);
      }
      if (isScrolling) {
        s.emit('onTouchMoveOpposite', s, e);
      }
      if (typeof startMoving === 'undefined' && s.browser.ieTouch) {
        if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
          startMoving = true;
        }
      }
      if (!isTouched)
        return;
      if (isScrolling) {
        isTouched = false;
        return;
      }
      if (!startMoving && s.browser.ieTouch) {
        return;
      }
      s.allowClick = false;
      s.emit('onSliderMove', s, e);
      e.preventDefault();
      if (s.params.touchMoveStopPropagation && !s.params.nested) {
        e.stopPropagation();
      }
      if (!isMoved) {
        if (params.loop) {
          s.fixLoop();
        }
        startTranslate = s.getWrapperTranslate();
        s.setWrapperTransition(0);
        if (s.animating) {
          s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
        }
        if (s.params.autoplay && s.autoplaying) {
          if (s.params.autoplayDisableOnInteraction) {
            s.stopAutoplay();
          } else {
            s.pauseAutoplay();
          }
        }
        allowMomentumBounce = false;
        if (s.params.grabCursor) {
          s.container[0].style.cursor = 'move';
          s.container[0].style.cursor = '-webkit-grabbing';
          s.container[0].style.cursor = '-moz-grabbin';
          s.container[0].style.cursor = 'grabbing';
        }
      }
      isMoved = true;
      var diff = s.touches.diff = isH() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
      diff = diff * s.params.touchRatio;
      if (s.rtl)
        diff = -diff;
      s.swipeDirection = diff > 0 ? 'prev' : 'next';
      currentTranslate = diff + startTranslate;
      var disableParentSwiper = true;
      if ((diff > 0 && currentTranslate > s.minTranslate())) {
        disableParentSwiper = false;
        if (s.params.resistance)
          currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
      } else if (diff < 0 && currentTranslate < s.maxTranslate()) {
        disableParentSwiper = false;
        if (s.params.resistance)
          currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
      }
      if (disableParentSwiper) {
        e.preventedByNestedSwiper = true;
      }
      if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
        currentTranslate = startTranslate;
      }
      if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
        currentTranslate = startTranslate;
      }
      if (!s.params.followFinger)
        return;
      if (s.params.threshold > 0) {
        if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
          if (!allowThresholdMove) {
            allowThresholdMove = true;
            s.touches.startX = s.touches.currentX;
            s.touches.startY = s.touches.currentY;
            currentTranslate = startTranslate;
            s.touches.diff = isH() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
            return;
          }
        } else {
          currentTranslate = startTranslate;
          return;
        }
      }
      if (s.params.freeMode || s.params.watchSlidesProgress) {
        s.updateActiveIndex();
      }
      if (s.params.freeMode) {
        if (velocities.length === 0) {
          velocities.push({
            position: s.touches[isH() ? 'startX' : 'startY'],
            time: touchStartTime
          });
        }
        velocities.push({
          position: s.touches[isH() ? 'currentX' : 'currentY'],
          time: (new window.Date()).getTime()
        });
      }
      s.updateProgress(currentTranslate);
      s.setWrapperTranslate(currentTranslate);
    };
    s.onTouchEnd = function(e) {
      if (e.originalEvent)
        e = e.originalEvent;
      s.emit('onTouchEnd', s, e);
      if (!isTouched)
        return;
      if (s.params.grabCursor && isMoved && isTouched) {
        s.container[0].style.cursor = 'move';
        s.container[0].style.cursor = '-webkit-grab';
        s.container[0].style.cursor = '-moz-grab';
        s.container[0].style.cursor = 'grab';
      }
      var touchEndTime = Date.now();
      var timeDiff = touchEndTime - touchStartTime;
      if (s.allowClick) {
        s.updateClickedSlide(e);
        s.emit('onTap', s, e);
        if (timeDiff < 300 && (touchEndTime - lastClickTime) > 300) {
          if (clickTimeout)
            clearTimeout(clickTimeout);
          clickTimeout = setTimeout(function() {
            if (!s)
              return;
            if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
              s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
            }
            s.emit('onClick', s, e);
          }, 300);
        }
        if (timeDiff < 300 && (touchEndTime - lastClickTime) < 300) {
          if (clickTimeout)
            clearTimeout(clickTimeout);
          s.emit('onDoubleTap', s, e);
        }
      }
      lastClickTime = Date.now();
      setTimeout(function() {
        if (s)
          s.allowClick = true;
      }, 0);
      if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
        isTouched = isMoved = false;
        return;
      }
      isTouched = isMoved = false;
      var currentPos;
      if (s.params.followFinger) {
        currentPos = s.rtl ? s.translate : -s.translate;
      } else {
        currentPos = -currentTranslate;
      }
      if (s.params.freeMode) {
        if (currentPos < -s.minTranslate()) {
          s.slideTo(s.activeIndex);
          return;
        } else if (currentPos > -s.maxTranslate()) {
          if (s.slides.length < s.snapGrid.length) {
            s.slideTo(s.snapGrid.length - 1);
          } else {
            s.slideTo(s.slides.length - 1);
          }
          return;
        }
        if (s.params.freeModeMomentum) {
          if (velocities.length > 1) {
            var lastMoveEvent = velocities.pop(),
                velocityEvent = velocities.pop();
            var distance = lastMoveEvent.position - velocityEvent.position;
            var time = lastMoveEvent.time - velocityEvent.time;
            s.velocity = distance / time;
            s.velocity = s.velocity / 2;
            if (Math.abs(s.velocity) < 0.02) {
              s.velocity = 0;
            }
            if (time > 150 || (new window.Date().getTime() - lastMoveEvent.time) > 300) {
              s.velocity = 0;
            }
          } else {
            s.velocity = 0;
          }
          velocities.length = 0;
          var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
          var momentumDistance = s.velocity * momentumDuration;
          var newPosition = s.translate + momentumDistance;
          if (s.rtl)
            newPosition = -newPosition;
          var doBounce = false;
          var afterBouncePosition;
          var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
          if (newPosition < s.maxTranslate()) {
            if (s.params.freeModeMomentumBounce) {
              if (newPosition + s.maxTranslate() < -bounceAmount) {
                newPosition = s.maxTranslate() - bounceAmount;
              }
              afterBouncePosition = s.maxTranslate();
              doBounce = true;
              allowMomentumBounce = true;
            } else {
              newPosition = s.maxTranslate();
            }
          } else if (newPosition > s.minTranslate()) {
            if (s.params.freeModeMomentumBounce) {
              if (newPosition - s.minTranslate() > bounceAmount) {
                newPosition = s.minTranslate() + bounceAmount;
              }
              afterBouncePosition = s.minTranslate();
              doBounce = true;
              allowMomentumBounce = true;
            } else {
              newPosition = s.minTranslate();
            }
          } else if (s.params.freeModeSticky) {
            var j = 0,
                nextSlide;
            for (j = 0; j < s.snapGrid.length; j += 1) {
              if (s.snapGrid[j] > -newPosition) {
                nextSlide = j;
                break;
              }
            }
            if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
              newPosition = s.snapGrid[nextSlide];
            } else {
              newPosition = s.snapGrid[nextSlide - 1];
            }
            if (!s.rtl)
              newPosition = -newPosition;
          }
          if (s.velocity !== 0) {
            if (s.rtl) {
              momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
            } else {
              momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
            }
          } else if (s.params.freeModeSticky) {
            s.slideReset();
            return;
          }
          if (s.params.freeModeMomentumBounce && doBounce) {
            s.updateProgress(afterBouncePosition);
            s.setWrapperTransition(momentumDuration);
            s.setWrapperTranslate(newPosition);
            s.onTransitionStart();
            s.animating = true;
            s.wrapper.transitionEnd(function() {
              if (!s || !allowMomentumBounce)
                return;
              s.emit('onMomentumBounce', s);
              s.setWrapperTransition(s.params.speed);
              s.setWrapperTranslate(afterBouncePosition);
              s.wrapper.transitionEnd(function() {
                if (!s)
                  return;
                s.onTransitionEnd();
              });
            });
          } else if (s.velocity) {
            s.updateProgress(newPosition);
            s.setWrapperTransition(momentumDuration);
            s.setWrapperTranslate(newPosition);
            s.onTransitionStart();
            if (!s.animating) {
              s.animating = true;
              s.wrapper.transitionEnd(function() {
                if (!s)
                  return;
                s.onTransitionEnd();
              });
            }
          } else {
            s.updateProgress(newPosition);
          }
          s.updateActiveIndex();
        }
        if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
          s.updateProgress();
          s.updateActiveIndex();
        }
        return;
      }
      var i,
          stopIndex = 0,
          groupSize = s.slidesSizesGrid[0];
      for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
        if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
          if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
            stopIndex = i;
            groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
          }
        } else {
          if (currentPos >= s.slidesGrid[i]) {
            stopIndex = i;
            groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
          }
        }
      }
      var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;
      if (timeDiff > s.params.longSwipesMs) {
        if (!s.params.longSwipes) {
          s.slideTo(s.activeIndex);
          return;
        }
        if (s.swipeDirection === 'next') {
          if (ratio >= s.params.longSwipesRatio)
            s.slideTo(stopIndex + s.params.slidesPerGroup);
          else
            s.slideTo(stopIndex);
        }
        if (s.swipeDirection === 'prev') {
          if (ratio > (1 - s.params.longSwipesRatio))
            s.slideTo(stopIndex + s.params.slidesPerGroup);
          else
            s.slideTo(stopIndex);
        }
      } else {
        if (!s.params.shortSwipes) {
          s.slideTo(s.activeIndex);
          return;
        }
        if (s.swipeDirection === 'next') {
          s.slideTo(stopIndex + s.params.slidesPerGroup);
        }
        if (s.swipeDirection === 'prev') {
          s.slideTo(stopIndex);
        }
      }
    };
    s._slideTo = function(slideIndex, speed) {
      return s.slideTo(slideIndex, speed, true, true);
    };
    s.slideTo = function(slideIndex, speed, runCallbacks, internal) {
      if (typeof runCallbacks === 'undefined')
        runCallbacks = true;
      if (typeof slideIndex === 'undefined')
        slideIndex = 0;
      if (slideIndex < 0)
        slideIndex = 0;
      s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
      if (s.snapIndex >= s.snapGrid.length)
        s.snapIndex = s.snapGrid.length - 1;
      var translate = -s.snapGrid[s.snapIndex];
      if (s.params.autoplay && s.autoplaying) {
        if (internal || !s.params.autoplayDisableOnInteraction) {
          s.pauseAutoplay(speed);
        } else {
          s.stopAutoplay();
        }
      }
      s.updateProgress(translate);
      for (var i = 0; i < s.slidesGrid.length; i++) {
        if (-Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
          slideIndex = i;
        }
      }
      if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
        return false;
      }
      if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
        if ((s.activeIndex || 0) !== slideIndex)
          return false;
      }
      if (typeof speed === 'undefined')
        speed = s.params.speed;
      s.previousIndex = s.activeIndex || 0;
      s.activeIndex = slideIndex;
      if (translate === s.translate) {
        s.updateClasses();
        return false;
      }
      s.updateClasses();
      s.onTransitionStart(runCallbacks);
      var translateX = isH() ? translate : 0,
          translateY = isH() ? 0 : translate;
      if (speed === 0) {
        s.setWrapperTransition(0);
        s.setWrapperTranslate(translate);
        s.onTransitionEnd(runCallbacks);
      } else {
        s.setWrapperTransition(speed);
        s.setWrapperTranslate(translate);
        if (!s.animating) {
          s.animating = true;
          s.wrapper.transitionEnd(function() {
            if (!s)
              return;
            s.onTransitionEnd(runCallbacks);
          });
        }
      }
      return true;
    };
    s.onTransitionStart = function(runCallbacks) {
      if (typeof runCallbacks === 'undefined')
        runCallbacks = true;
      if (s.lazy)
        s.lazy.onTransitionStart();
      if (runCallbacks) {
        s.emit('onTransitionStart', s);
        if (s.activeIndex !== s.previousIndex) {
          s.emit('onSlideChangeStart', s);
        }
      }
    };
    s.onTransitionEnd = function(runCallbacks) {
      s.animating = false;
      s.setWrapperTransition(0);
      if (typeof runCallbacks === 'undefined')
        runCallbacks = true;
      if (s.lazy)
        s.lazy.onTransitionEnd();
      if (runCallbacks) {
        s.emit('onTransitionEnd', s);
        if (s.activeIndex !== s.previousIndex) {
          s.emit('onSlideChangeEnd', s);
        }
      }
      if (s.params.hashnav && s.hashnav) {
        s.hashnav.setHash();
      }
    };
    s.slideNext = function(runCallbacks, speed, internal) {
      if (s.params.loop) {
        if (s.animating)
          return false;
        s.fixLoop();
        var clientLeft = s.container[0].clientLeft;
        return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
      } else
        return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
    };
    s._slideNext = function(speed) {
      return s.slideNext(true, speed, true);
    };
    s.slidePrev = function(runCallbacks, speed, internal) {
      if (s.params.loop) {
        if (s.animating)
          return false;
        s.fixLoop();
        var clientLeft = s.container[0].clientLeft;
        return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
      } else
        return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
    };
    s._slidePrev = function(speed) {
      return s.slidePrev(true, speed, true);
    };
    s.slideReset = function(runCallbacks, speed, internal) {
      return s.slideTo(s.activeIndex, speed, runCallbacks);
    };
    s.setWrapperTransition = function(duration, byController) {
      s.wrapper.transition(duration);
      if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
        s.effects[s.params.effect].setTransition(duration);
      }
      if (s.params.parallax && s.parallax) {
        s.parallax.setTransition(duration);
      }
      if (s.params.scrollbar && s.scrollbar) {
        s.scrollbar.setTransition(duration);
      }
      if (s.params.control && s.controller) {
        s.controller.setTransition(duration, byController);
      }
      s.emit('onSetTransition', s, duration);
    };
    s.setWrapperTranslate = function(translate, updateActiveIndex, byController) {
      var x = 0,
          y = 0,
          z = 0;
      if (isH()) {
        x = s.rtl ? -translate : translate;
      } else {
        y = translate;
      }
      if (!s.params.virtualTranslate) {
        if (s.support.transforms3d)
          s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
        else
          s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
      }
      s.translate = isH() ? x : y;
      if (updateActiveIndex)
        s.updateActiveIndex();
      if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
        s.effects[s.params.effect].setTranslate(s.translate);
      }
      if (s.params.parallax && s.parallax) {
        s.parallax.setTranslate(s.translate);
      }
      if (s.params.scrollbar && s.scrollbar) {
        s.scrollbar.setTranslate(s.translate);
      }
      if (s.params.control && s.controller) {
        s.controller.setTranslate(s.translate, byController);
      }
      s.emit('onSetTranslate', s, s.translate);
    };
    s.getTranslate = function(el, axis) {
      var matrix,
          curTransform,
          curStyle,
          transformMatrix;
      if (typeof axis === 'undefined') {
        axis = 'x';
      }
      if (s.params.virtualTranslate) {
        return s.rtl ? -s.translate : s.translate;
      }
      curStyle = window.getComputedStyle(el, null);
      if (window.WebKitCSSMatrix) {
        transformMatrix = new window.WebKitCSSMatrix(curStyle.webkitTransform === 'none' ? '' : curStyle.webkitTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }
      if (axis === 'x') {
        if (window.WebKitCSSMatrix)
          curTransform = transformMatrix.m41;
        else if (matrix.length === 16)
          curTransform = parseFloat(matrix[12]);
        else
          curTransform = parseFloat(matrix[4]);
      }
      if (axis === 'y') {
        if (window.WebKitCSSMatrix)
          curTransform = transformMatrix.m42;
        else if (matrix.length === 16)
          curTransform = parseFloat(matrix[13]);
        else
          curTransform = parseFloat(matrix[5]);
      }
      if (s.rtl && curTransform)
        curTransform = -curTransform;
      return curTransform || 0;
    };
    s.getWrapperTranslate = function(axis) {
      if (typeof axis === 'undefined') {
        axis = isH() ? 'x' : 'y';
      }
      return s.getTranslate(s.wrapper[0], axis);
    };
    s.observers = [];
    function initObserver(target, options) {
      options = options || {};
      var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
      var observer = new ObserverFunc(function(mutations) {
        mutations.forEach(function(mutation) {
          s.onResize(true);
          s.emit('onObserverUpdate', s, mutation);
        });
      });
      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData
      });
      s.observers.push(observer);
    }
    s.initObservers = function() {
      if (s.params.observeParents) {
        var containerParents = s.container.parents();
        for (var i = 0; i < containerParents.length; i++) {
          initObserver(containerParents[i]);
        }
      }
      initObserver(s.container[0], {childList: false});
      initObserver(s.wrapper[0], {attributes: false});
    };
    s.disconnectObservers = function() {
      for (var i = 0; i < s.observers.length; i++) {
        s.observers[i].disconnect();
      }
      s.observers = [];
    };
    s.createLoop = function() {
      s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
      var slides = s.wrapper.children('.' + s.params.slideClass);
      if (s.params.slidesPerView === 'auto' && !s.params.loopedSlides)
        s.params.loopedSlides = slides.length;
      s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
      s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
      if (s.loopedSlides > slides.length) {
        s.loopedSlides = slides.length;
      }
      var prependSlides = [],
          appendSlides = [],
          i;
      slides.each(function(index, el) {
        var slide = $(this);
        if (index < s.loopedSlides)
          appendSlides.push(el);
        if (index < slides.length && index >= slides.length - s.loopedSlides)
          prependSlides.push(el);
        slide.attr('data-swiper-slide-index', index);
      });
      for (i = 0; i < appendSlides.length; i++) {
        s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
      }
      for (i = prependSlides.length - 1; i >= 0; i--) {
        s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
      }
    };
    s.destroyLoop = function() {
      s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
      s.slides.removeAttr('data-swiper-slide-index');
    };
    s.fixLoop = function() {
      var newIndex;
      if (s.activeIndex < s.loopedSlides) {
        newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
        newIndex = newIndex + s.loopedSlides;
        s.slideTo(newIndex, 0, false, true);
      } else if ((s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2) || (s.activeIndex > s.slides.length - s.params.slidesPerView * 2)) {
        newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
        newIndex = newIndex + s.loopedSlides;
        s.slideTo(newIndex, 0, false, true);
      }
    };
    s.appendSlide = function(slides) {
      if (s.params.loop) {
        s.destroyLoop();
      }
      if (typeof slides === 'object' && slides.length) {
        for (var i = 0; i < slides.length; i++) {
          if (slides[i])
            s.wrapper.append(slides[i]);
        }
      } else {
        s.wrapper.append(slides);
      }
      if (s.params.loop) {
        s.createLoop();
      }
      if (!(s.params.observer && s.support.observer)) {
        s.update(true);
      }
    };
    s.prependSlide = function(slides) {
      if (s.params.loop) {
        s.destroyLoop();
      }
      var newActiveIndex = s.activeIndex + 1;
      if (typeof slides === 'object' && slides.length) {
        for (var i = 0; i < slides.length; i++) {
          if (slides[i])
            s.wrapper.prepend(slides[i]);
        }
        newActiveIndex = s.activeIndex + slides.length;
      } else {
        s.wrapper.prepend(slides);
      }
      if (s.params.loop) {
        s.createLoop();
      }
      if (!(s.params.observer && s.support.observer)) {
        s.update(true);
      }
      s.slideTo(newActiveIndex, 0, false);
    };
    s.removeSlide = function(slidesIndexes) {
      if (s.params.loop) {
        s.destroyLoop();
        s.slides = s.wrapper.children('.' + s.params.slideClass);
      }
      var newActiveIndex = s.activeIndex,
          indexToRemove;
      if (typeof slidesIndexes === 'object' && slidesIndexes.length) {
        for (var i = 0; i < slidesIndexes.length; i++) {
          indexToRemove = slidesIndexes[i];
          if (s.slides[indexToRemove])
            s.slides.eq(indexToRemove).remove();
          if (indexToRemove < newActiveIndex)
            newActiveIndex--;
        }
        newActiveIndex = Math.max(newActiveIndex, 0);
      } else {
        indexToRemove = slidesIndexes;
        if (s.slides[indexToRemove])
          s.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex)
          newActiveIndex--;
        newActiveIndex = Math.max(newActiveIndex, 0);
      }
      if (s.params.loop) {
        s.createLoop();
      }
      if (!(s.params.observer && s.support.observer)) {
        s.update(true);
      }
      if (s.params.loop) {
        s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
      } else {
        s.slideTo(newActiveIndex, 0, false);
      }
    };
    s.removeAllSlides = function() {
      var slidesIndexes = [];
      for (var i = 0; i < s.slides.length; i++) {
        slidesIndexes.push(i);
      }
      s.removeSlide(slidesIndexes);
    };
    s.effects = {
      fade: {
        setTranslate: function() {
          for (var i = 0; i < s.slides.length; i++) {
            var slide = s.slides.eq(i);
            var offset = slide[0].swiperSlideOffset;
            var tx = -offset;
            if (!s.params.virtualTranslate)
              tx = tx - s.translate;
            var ty = 0;
            if (!isH()) {
              ty = tx;
              tx = 0;
            }
            var slideOpacity = s.params.fade.crossFade ? Math.max(1 - Math.abs(slide[0].progress), 0) : 1 + Math.min(Math.max(slide[0].progress, -1), 0);
            slide.css({opacity: slideOpacity}).transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
          }
        },
        setTransition: function(duration) {
          s.slides.transition(duration);
          if (s.params.virtualTranslate && duration !== 0) {
            var eventTriggered = false;
            s.slides.transitionEnd(function() {
              if (eventTriggered)
                return;
              if (!s)
                return;
              eventTriggered = true;
              s.animating = false;
              var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
              for (var i = 0; i < triggerEvents.length; i++) {
                s.wrapper.trigger(triggerEvents[i]);
              }
            });
          }
        }
      },
      cube: {
        setTranslate: function() {
          var wrapperRotate = 0,
              cubeShadow;
          if (s.params.cube.shadow) {
            if (isH()) {
              cubeShadow = s.wrapper.find('.swiper-cube-shadow');
              if (cubeShadow.length === 0) {
                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                s.wrapper.append(cubeShadow);
              }
              cubeShadow.css({height: s.width + 'px'});
            } else {
              cubeShadow = s.container.find('.swiper-cube-shadow');
              if (cubeShadow.length === 0) {
                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                s.container.append(cubeShadow);
              }
            }
          }
          for (var i = 0; i < s.slides.length; i++) {
            var slide = s.slides.eq(i);
            var slideAngle = i * 90;
            var round = Math.floor(slideAngle / 360);
            if (s.rtl) {
              slideAngle = -slideAngle;
              round = Math.floor(-slideAngle / 360);
            }
            var progress = Math.max(Math.min(slide[0].progress, 1), -1);
            var tx = 0,
                ty = 0,
                tz = 0;
            if (i % 4 === 0) {
              tx = -round * 4 * s.size;
              tz = 0;
            } else if ((i - 1) % 4 === 0) {
              tx = 0;
              tz = -round * 4 * s.size;
            } else if ((i - 2) % 4 === 0) {
              tx = s.size + round * 4 * s.size;
              tz = s.size;
            } else if ((i - 3) % 4 === 0) {
              tx = -s.size;
              tz = 3 * s.size + s.size * 4 * round;
            }
            if (s.rtl) {
              tx = -tx;
            }
            if (!isH()) {
              ty = tx;
              tx = 0;
            }
            var transform = 'rotateX(' + (isH() ? 0 : -slideAngle) + 'deg) rotateY(' + (isH() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
            if (progress <= 1 && progress > -1) {
              wrapperRotate = i * 90 + progress * 90;
              if (s.rtl)
                wrapperRotate = -i * 90 - progress * 90;
            }
            slide.transform(transform);
            if (s.params.cube.slideShadows) {
              var shadowBefore = isH() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
              var shadowAfter = isH() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
              if (shadowBefore.length === 0) {
                shadowBefore = $('<div class="swiper-slide-shadow-' + (isH() ? 'left' : 'top') + '"></div>');
                slide.append(shadowBefore);
              }
              if (shadowAfter.length === 0) {
                shadowAfter = $('<div class="swiper-slide-shadow-' + (isH() ? 'right' : 'bottom') + '"></div>');
                slide.append(shadowAfter);
              }
              var shadowOpacity = slide[0].progress;
              if (shadowBefore.length)
                shadowBefore[0].style.opacity = -slide[0].progress;
              if (shadowAfter.length)
                shadowAfter[0].style.opacity = slide[0].progress;
            }
          }
          s.wrapper.css({
            '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
            '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
            '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
            'transform-origin': '50% 50% -' + (s.size / 2) + 'px'
          });
          if (s.params.cube.shadow) {
            if (isH()) {
              cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
            } else {
              var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
              var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
              var scale1 = s.params.cube.shadowScale,
                  scale2 = s.params.cube.shadowScale / multiplier,
                  offset = s.params.cube.shadowOffset;
              cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
            }
          }
          var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;
          s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (isH() ? 0 : wrapperRotate) + 'deg) rotateY(' + (isH() ? -wrapperRotate : 0) + 'deg)');
        },
        setTransition: function(duration) {
          s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
          if (s.params.cube.shadow && !isH()) {
            s.container.find('.swiper-cube-shadow').transition(duration);
          }
        }
      },
      coverflow: {
        setTranslate: function() {
          var transform = s.translate;
          var center = isH() ? -transform + s.width / 2 : -transform + s.height / 2;
          var rotate = isH() ? s.params.coverflow.rotate : -s.params.coverflow.rotate;
          var translate = s.params.coverflow.depth;
          for (var i = 0,
              length = s.slides.length; i < length; i++) {
            var slide = s.slides.eq(i);
            var slideSize = s.slidesSizesGrid[i];
            var slideOffset = slide[0].swiperSlideOffset;
            var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
            var rotateY = isH() ? rotate * offsetMultiplier : 0;
            var rotateX = isH() ? 0 : rotate * offsetMultiplier;
            var translateZ = -translate * Math.abs(offsetMultiplier);
            var translateY = isH() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);
            var translateX = isH() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;
            if (Math.abs(translateX) < 0.001)
              translateX = 0;
            if (Math.abs(translateY) < 0.001)
              translateY = 0;
            if (Math.abs(translateZ) < 0.001)
              translateZ = 0;
            if (Math.abs(rotateY) < 0.001)
              rotateY = 0;
            if (Math.abs(rotateX) < 0.001)
              rotateX = 0;
            var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
            slide.transform(slideTransform);
            slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
            if (s.params.coverflow.slideShadows) {
              var shadowBefore = isH() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
              var shadowAfter = isH() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
              if (shadowBefore.length === 0) {
                shadowBefore = $('<div class="swiper-slide-shadow-' + (isH() ? 'left' : 'top') + '"></div>');
                slide.append(shadowBefore);
              }
              if (shadowAfter.length === 0) {
                shadowAfter = $('<div class="swiper-slide-shadow-' + (isH() ? 'right' : 'bottom') + '"></div>');
                slide.append(shadowAfter);
              }
              if (shadowBefore.length)
                shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
              if (shadowAfter.length)
                shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
            }
          }
          if (s.browser.ie) {
            var ws = s.wrapper[0].style;
            ws.perspectiveOrigin = center + 'px 50%';
          }
        },
        setTransition: function(duration) {
          s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        }
      }
    };
    s.lazy = {
      initialImageLoaded: false,
      loadImageInSlide: function(index, loadInDuplicate) {
        if (typeof index === 'undefined')
          return;
        if (typeof loadInDuplicate === 'undefined')
          loadInDuplicate = true;
        if (s.slides.length === 0)
          return;
        var slide = s.slides.eq(index);
        var img = slide.find('.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)');
        if (slide.hasClass('swiper-lazy') && !slide.hasClass('swiper-lazy-loaded') && !slide.hasClass('swiper-lazy-loading')) {
          img.add(slide[0]);
        }
        if (img.length === 0)
          return;
        img.each(function() {
          var _img = $(this);
          _img.addClass('swiper-lazy-loading');
          var background = _img.attr('data-background');
          var src = _img.attr('data-src');
          s.loadImage(_img[0], (src || background), false, function() {
            if (background) {
              _img.css('background-image', 'url(' + background + ')');
              _img.removeAttr('data-background');
            } else {
              _img.attr('src', src);
              _img.removeAttr('data-src');
            }
            _img.addClass('swiper-lazy-loaded').removeClass('swiper-lazy-loading');
            slide.find('.swiper-lazy-preloader, .preloader').remove();
            if (s.params.loop && loadInDuplicate) {
              var slideOriginalIndex = slide.attr('data-swiper-slide-index');
              if (slide.hasClass(s.params.slideDuplicateClass)) {
                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
                s.lazy.loadImageInSlide(originalSlide.index(), false);
              } else {
                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
              }
            }
            s.emit('onLazyImageReady', s, slide[0], _img[0]);
          });
          s.emit('onLazyImageLoad', s, slide[0], _img[0]);
        });
      },
      load: function() {
        var i;
        if (s.params.watchSlidesVisibility) {
          s.wrapper.children('.' + s.params.slideVisibleClass).each(function() {
            s.lazy.loadImageInSlide($(this).index());
          });
        } else {
          if (s.params.slidesPerView > 1) {
            for (i = s.activeIndex; i < s.activeIndex + s.params.slidesPerView; i++) {
              if (s.slides[i])
                s.lazy.loadImageInSlide(i);
            }
          } else {
            s.lazy.loadImageInSlide(s.activeIndex);
          }
        }
        if (s.params.lazyLoadingInPrevNext) {
          if (s.params.slidesPerView > 1) {
            for (i = s.activeIndex + s.params.slidesPerView; i < s.activeIndex + s.params.slidesPerView + s.params.slidesPerView; i++) {
              if (s.slides[i])
                s.lazy.loadImageInSlide(i);
            }
            for (i = s.activeIndex - s.params.slidesPerView; i < s.activeIndex; i++) {
              if (s.slides[i])
                s.lazy.loadImageInSlide(i);
            }
          } else {
            var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
            if (nextSlide.length > 0)
              s.lazy.loadImageInSlide(nextSlide.index());
            var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
            if (prevSlide.length > 0)
              s.lazy.loadImageInSlide(prevSlide.index());
          }
        }
      },
      onTransitionStart: function() {
        if (s.params.lazyLoading) {
          if (s.params.lazyLoadingOnTransitionStart || (!s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded)) {
            s.lazy.load();
          }
        }
      },
      onTransitionEnd: function() {
        if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
          s.lazy.load();
        }
      }
    };
    s.scrollbar = {
      set: function() {
        if (!s.params.scrollbar)
          return;
        var sb = s.scrollbar;
        sb.track = $(s.params.scrollbar);
        sb.drag = sb.track.find('.swiper-scrollbar-drag');
        if (sb.drag.length === 0) {
          sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
          sb.track.append(sb.drag);
        }
        sb.drag[0].style.width = '';
        sb.drag[0].style.height = '';
        sb.trackSize = isH() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
        sb.divider = s.size / s.virtualSize;
        sb.moveDivider = sb.divider * (sb.trackSize / s.size);
        sb.dragSize = sb.trackSize * sb.divider;
        if (isH()) {
          sb.drag[0].style.width = sb.dragSize + 'px';
        } else {
          sb.drag[0].style.height = sb.dragSize + 'px';
        }
        if (sb.divider >= 1) {
          sb.track[0].style.display = 'none';
        } else {
          sb.track[0].style.display = '';
        }
        if (s.params.scrollbarHide) {
          sb.track[0].style.opacity = 0;
        }
      },
      setTranslate: function() {
        if (!s.params.scrollbar)
          return;
        var diff;
        var sb = s.scrollbar;
        var translate = s.translate || 0;
        var newPos;
        var newSize = sb.dragSize;
        newPos = (sb.trackSize - sb.dragSize) * s.progress;
        if (s.rtl && isH()) {
          newPos = -newPos;
          if (newPos > 0) {
            newSize = sb.dragSize - newPos;
            newPos = 0;
          } else if (-newPos + sb.dragSize > sb.trackSize) {
            newSize = sb.trackSize + newPos;
          }
        } else {
          if (newPos < 0) {
            newSize = sb.dragSize + newPos;
            newPos = 0;
          } else if (newPos + sb.dragSize > sb.trackSize) {
            newSize = sb.trackSize - newPos;
          }
        }
        if (isH()) {
          if (s.support.transforms3d) {
            sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');
          } else {
            sb.drag.transform('translateX(' + (newPos) + 'px)');
          }
          sb.drag[0].style.width = newSize + 'px';
        } else {
          if (s.support.transforms3d) {
            sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');
          } else {
            sb.drag.transform('translateY(' + (newPos) + 'px)');
          }
          sb.drag[0].style.height = newSize + 'px';
        }
        if (s.params.scrollbarHide) {
          clearTimeout(sb.timeout);
          sb.track[0].style.opacity = 1;
          sb.timeout = setTimeout(function() {
            sb.track[0].style.opacity = 0;
            sb.track.transition(400);
          }, 1000);
        }
      },
      setTransition: function(duration) {
        if (!s.params.scrollbar)
          return;
        s.scrollbar.drag.transition(duration);
      }
    };
    s.controller = {
      LinearSpline: function(x, y) {
        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1;
        var i1,
            i3;
        var l = this.x.length;
        this.interpolate = function(x2) {
          if (!x2)
            return 0;
          i3 = binarySearch(this.x, x2);
          i1 = i3 - 1;
          return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };
        var binarySearch = (function() {
          var maxIndex,
              minIndex,
              guess;
          return function(array, val) {
            minIndex = -1;
            maxIndex = array.length;
            while (maxIndex - minIndex > 1)
              if (array[guess = maxIndex + minIndex >> 1] <= val) {
                minIndex = guess;
              } else {
                maxIndex = guess;
              }
            return maxIndex;
          };
        })();
      },
      getInterpolateFunction: function(c) {
        if (!s.controller.spline)
          s.controller.spline = s.params.loop ? new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) : new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
      },
      setTranslate: function(translate, byController) {
        var controlled = s.params.control;
        var multiplier,
            controlledTranslate;
        function setControlledTranslate(c) {
          translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
          if (s.params.controlBy === 'slide') {
            s.controller.getInterpolateFunction(c);
            controlledTranslate = -s.controller.spline.interpolate(-translate);
          }
          if (!controlledTranslate || s.params.controlBy === 'container') {
            multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
            controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
          }
          if (s.params.controlInverse) {
            controlledTranslate = c.maxTranslate() - controlledTranslate;
          }
          c.updateProgress(controlledTranslate);
          c.setWrapperTranslate(controlledTranslate, false, s);
          c.updateActiveIndex();
        }
        if (s.isArray(controlled)) {
          for (var i = 0; i < controlled.length; i++) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTranslate(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTranslate(controlled);
        }
      },
      setTransition: function(duration, byController) {
        var controlled = s.params.control;
        var i;
        function setControlledTransition(c) {
          c.setWrapperTransition(duration, s);
          if (duration !== 0) {
            c.onTransitionStart();
            c.wrapper.transitionEnd(function() {
              if (!controlled)
                return;
              if (c.params.loop && s.params.controlBy === 'slide') {
                c.fixLoop();
              }
              c.onTransitionEnd();
            });
          }
        }
        if (s.isArray(controlled)) {
          for (i = 0; i < controlled.length; i++) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTransition(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTransition(controlled);
        }
      }
    };
    s.hashnav = {
      init: function() {
        if (!s.params.hashnav)
          return;
        s.hashnav.initialized = true;
        var hash = document.location.hash.replace('#', '');
        if (!hash)
          return;
        var speed = 0;
        for (var i = 0,
            length = s.slides.length; i < length; i++) {
          var slide = s.slides.eq(i);
          var slideHash = slide.attr('data-hash');
          if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
            var index = slide.index();
            s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
          }
        }
      },
      setHash: function() {
        if (!s.hashnav.initialized || !s.params.hashnav)
          return;
        document.location.hash = s.slides.eq(s.activeIndex).attr('data-hash') || '';
      }
    };
    function handleKeyboard(e) {
      if (e.originalEvent)
        e = e.originalEvent;
      var kc = e.keyCode || e.charCode;
      if (!s.params.allowSwipeToNext && (isH() && kc === 39 || !isH() && kc === 40)) {
        return false;
      }
      if (!s.params.allowSwipeToPrev && (isH() && kc === 37 || !isH() && kc === 38)) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return;
      }
      if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
        return;
      }
      if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
        var inView = false;
        if (s.container.parents('.swiper-slide').length > 0 && s.container.parents('.swiper-slide-active').length === 0) {
          return;
        }
        var windowScroll = {
          left: window.pageXOffset,
          top: window.pageYOffset
        };
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var swiperOffset = s.container.offset();
        if (s.rtl)
          swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
        var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + s.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + s.height], [swiperOffset.left + s.width, swiperOffset.top + s.height]];
        for (var i = 0; i < swiperCoord.length; i++) {
          var point = swiperCoord[i];
          if (point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth && point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight) {
            inView = true;
          }
        }
        if (!inView)
          return;
      }
      if (isH()) {
        if (kc === 37 || kc === 39) {
          if (e.preventDefault)
            e.preventDefault();
          else
            e.returnValue = false;
        }
        if ((kc === 39 && !s.rtl) || (kc === 37 && s.rtl))
          s.slideNext();
        if ((kc === 37 && !s.rtl) || (kc === 39 && s.rtl))
          s.slidePrev();
      } else {
        if (kc === 38 || kc === 40) {
          if (e.preventDefault)
            e.preventDefault();
          else
            e.returnValue = false;
        }
        if (kc === 40)
          s.slideNext();
        if (kc === 38)
          s.slidePrev();
      }
    }
    s.disableKeyboardControl = function() {
      $(document).off('keydown', handleKeyboard);
    };
    s.enableKeyboardControl = function() {
      $(document).on('keydown', handleKeyboard);
    };
    s.mousewheel = {
      event: false,
      lastScrollTime: (new window.Date()).getTime()
    };
    if (s.params.mousewheelControl) {
      try {
        new window.WheelEvent('wheel');
        s.mousewheel.event = 'wheel';
      } catch (e) {}
      if (!s.mousewheel.event && document.onmousewheel !== undefined) {
        s.mousewheel.event = 'mousewheel';
      }
      if (!s.mousewheel.event) {
        s.mousewheel.event = 'DOMMouseScroll';
      }
    }
    function handleMousewheel(e) {
      if (e.originalEvent)
        e = e.originalEvent;
      var we = s.mousewheel.event;
      var delta = 0;
      if (e.detail)
        delta = -e.detail;
      else if (we === 'mousewheel') {
        if (s.params.mousewheelForceToAxis) {
          if (isH()) {
            if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))
              delta = e.wheelDeltaX;
            else
              return;
          } else {
            if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))
              delta = e.wheelDeltaY;
            else
              return;
          }
        } else {
          delta = e.wheelDelta;
        }
      } else if (we === 'DOMMouseScroll')
        delta = -e.detail;
      else if (we === 'wheel') {
        if (s.params.mousewheelForceToAxis) {
          if (isH()) {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY))
              delta = -e.deltaX;
            else
              return;
          } else {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX))
              delta = -e.deltaY;
            else
              return;
          }
        } else {
          delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
        }
      }
      if (s.params.mousewheelInvert)
        delta = -delta;
      if (!s.params.freeMode) {
        if ((new window.Date()).getTime() - s.mousewheel.lastScrollTime > 60) {
          if (delta < 0) {
            if ((!s.isEnd || s.params.loop) && !s.animating)
              s.slideNext();
            else if (s.params.mousewheelReleaseOnEdges)
              return true;
          } else {
            if ((!s.isBeginning || s.params.loop) && !s.animating)
              s.slidePrev();
            else if (s.params.mousewheelReleaseOnEdges)
              return true;
          }
        }
        s.mousewheel.lastScrollTime = (new window.Date()).getTime();
      } else {
        var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
        if (position > 0)
          position = 0;
        if (position < s.maxTranslate())
          position = s.maxTranslate();
        s.setWrapperTransition(0);
        s.setWrapperTranslate(position);
        s.updateProgress();
        s.updateActiveIndex();
        if (s.params.freeModeSticky) {
          clearTimeout(s.mousewheel.timeout);
          s.mousewheel.timeout = setTimeout(function() {
            s.slideReset();
          }, 300);
        }
        if (position === 0 || position === s.maxTranslate())
          return;
      }
      if (s.params.autoplay)
        s.stopAutoplay();
      if (e.preventDefault)
        e.preventDefault();
      else
        e.returnValue = false;
      return false;
    }
    s.disableMousewheelControl = function() {
      if (!s.mousewheel.event)
        return false;
      s.container.off(s.mousewheel.event, handleMousewheel);
      return true;
    };
    s.enableMousewheelControl = function() {
      if (!s.mousewheel.event)
        return false;
      s.container.on(s.mousewheel.event, handleMousewheel);
      return true;
    };
    function setParallaxTransform(el, progress) {
      el = $(el);
      var p,
          pX,
          pY;
      p = el.attr('data-swiper-parallax') || '0';
      pX = el.attr('data-swiper-parallax-x');
      pY = el.attr('data-swiper-parallax-y');
      if (pX || pY) {
        pX = pX || '0';
        pY = pY || '0';
      } else {
        if (isH()) {
          pX = p;
          pY = '0';
        } else {
          pY = p;
          pX = '0';
        }
      }
      if ((pX).indexOf('%') >= 0) {
        pX = parseInt(pX, 10) * progress + '%';
      } else {
        pX = pX * progress + 'px';
      }
      if ((pY).indexOf('%') >= 0) {
        pY = parseInt(pY, 10) * progress + '%';
      } else {
        pY = pY * progress + 'px';
      }
      el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
    }
    s.parallax = {
      setTranslate: function() {
        s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function() {
          setParallaxTransform(this, s.progress);
        });
        s.slides.each(function() {
          var slide = $(this);
          slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function() {
            var progress = Math.min(Math.max(slide[0].progress, -1), 1);
            setParallaxTransform(this, progress);
          });
        });
      },
      setTransition: function(duration) {
        if (typeof duration === 'undefined')
          duration = s.params.speed;
        s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function() {
          var el = $(this);
          var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0)
            parallaxDuration = 0;
          el.transition(parallaxDuration);
        });
      }
    };
    s._plugins = [];
    for (var plugin in s.plugins) {
      var p = s.plugins[plugin](s, s.params[plugin]);
      if (p)
        s._plugins.push(p);
    }
    s.callPlugins = function(eventName) {
      for (var i = 0; i < s._plugins.length; i++) {
        if (eventName in s._plugins[i]) {
          s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }
      }
    };
    function normalizeEventName(eventName) {
      if (eventName.indexOf('on') !== 0) {
        if (eventName[0] !== eventName[0].toUpperCase()) {
          eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
        } else {
          eventName = 'on' + eventName;
        }
      }
      return eventName;
    }
    s.emitterEventListeners = {};
    s.emit = function(eventName) {
      if (s.params[eventName]) {
        s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
      }
      var i;
      if (s.emitterEventListeners[eventName]) {
        for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
          s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }
      }
      if (s.callPlugins)
        s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    };
    s.on = function(eventName, handler) {
      eventName = normalizeEventName(eventName);
      if (!s.emitterEventListeners[eventName])
        s.emitterEventListeners[eventName] = [];
      s.emitterEventListeners[eventName].push(handler);
      return s;
    };
    s.off = function(eventName, handler) {
      var i;
      eventName = normalizeEventName(eventName);
      if (typeof handler === 'undefined') {
        s.emitterEventListeners[eventName] = [];
        return s;
      }
      if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0)
        return;
      for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
        if (s.emitterEventListeners[eventName][i] === handler)
          s.emitterEventListeners[eventName].splice(i, 1);
      }
      return s;
    };
    s.once = function(eventName, handler) {
      eventName = normalizeEventName(eventName);
      var _handler = function() {
        handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
        s.off(eventName, _handler);
      };
      s.on(eventName, _handler);
      return s;
    };
    s.a11y = {
      makeFocusable: function($el) {
        $el.attr('tabIndex', '0');
        return $el;
      },
      addRole: function($el, role) {
        $el.attr('role', role);
        return $el;
      },
      addLabel: function($el, label) {
        $el.attr('aria-label', label);
        return $el;
      },
      disable: function($el) {
        $el.attr('aria-disabled', true);
        return $el;
      },
      enable: function($el) {
        $el.attr('aria-disabled', false);
        return $el;
      },
      onEnterKey: function(event) {
        if (event.keyCode !== 13)
          return;
        if ($(event.target).is(s.params.nextButton)) {
          s.onClickNext(event);
          if (s.isEnd) {
            s.a11y.notify(s.params.lastSlideMessage);
          } else {
            s.a11y.notify(s.params.nextSlideMessage);
          }
        } else if ($(event.target).is(s.params.prevButton)) {
          s.onClickPrev(event);
          if (s.isBeginning) {
            s.a11y.notify(s.params.firstSlideMessage);
          } else {
            s.a11y.notify(s.params.prevSlideMessage);
          }
        }
        if ($(event.target).is('.' + s.params.bulletClass)) {
          $(event.target)[0].click();
        }
      },
      liveRegion: $('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
      notify: function(message) {
        var notification = s.a11y.liveRegion;
        if (notification.length === 0)
          return;
        notification.html('');
        notification.html(message);
      },
      init: function() {
        if (s.params.nextButton) {
          var nextButton = $(s.params.nextButton);
          s.a11y.makeFocusable(nextButton);
          s.a11y.addRole(nextButton, 'button');
          s.a11y.addLabel(nextButton, s.params.nextSlideMessage);
        }
        if (s.params.prevButton) {
          var prevButton = $(s.params.prevButton);
          s.a11y.makeFocusable(prevButton);
          s.a11y.addRole(prevButton, 'button');
          s.a11y.addLabel(prevButton, s.params.prevSlideMessage);
        }
        $(s.container).append(s.a11y.liveRegion);
      },
      initPagination: function() {
        if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
          s.bullets.each(function() {
            var bullet = $(this);
            s.a11y.makeFocusable(bullet);
            s.a11y.addRole(bullet, 'button');
            s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
          });
        }
      },
      destroy: function() {
        if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0)
          s.a11y.liveRegion.remove();
      }
    };
    s.init = function() {
      if (s.params.loop)
        s.createLoop();
      s.updateContainerSize();
      s.updateSlidesSize();
      s.updatePagination();
      if (s.params.scrollbar && s.scrollbar) {
        s.scrollbar.set();
      }
      if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
        if (!s.params.loop)
          s.updateProgress();
        s.effects[s.params.effect].setTranslate();
      }
      if (s.params.loop) {
        s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
      } else {
        s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
        if (s.params.initialSlide === 0) {
          if (s.parallax && s.params.parallax)
            s.parallax.setTranslate();
          if (s.lazy && s.params.lazyLoading) {
            s.lazy.load();
            s.lazy.initialImageLoaded = true;
          }
        }
      }
      s.attachEvents();
      if (s.params.observer && s.support.observer) {
        s.initObservers();
      }
      if (s.params.preloadImages && !s.params.lazyLoading) {
        s.preloadImages();
      }
      if (s.params.autoplay) {
        s.startAutoplay();
      }
      if (s.params.keyboardControl) {
        if (s.enableKeyboardControl)
          s.enableKeyboardControl();
      }
      if (s.params.mousewheelControl) {
        if (s.enableMousewheelControl)
          s.enableMousewheelControl();
      }
      if (s.params.hashnav) {
        if (s.hashnav)
          s.hashnav.init();
      }
      if (s.params.a11y && s.a11y)
        s.a11y.init();
      s.emit('onInit', s);
    };
    s.cleanupStyles = function() {
      s.container.removeClass(s.classNames.join(' ')).removeAttr('style');
      s.wrapper.removeAttr('style');
      if (s.slides && s.slides.length) {
        s.slides.removeClass([s.params.slideVisibleClass, s.params.slideActiveClass, s.params.slideNextClass, s.params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-column').removeAttr('data-swiper-row');
      }
      if (s.paginationContainer && s.paginationContainer.length) {
        s.paginationContainer.removeClass(s.params.paginationHiddenClass);
      }
      if (s.bullets && s.bullets.length) {
        s.bullets.removeClass(s.params.bulletActiveClass);
      }
      if (s.params.prevButton)
        $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
      if (s.params.nextButton)
        $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
      if (s.params.scrollbar && s.scrollbar) {
        if (s.scrollbar.track && s.scrollbar.track.length)
          s.scrollbar.track.removeAttr('style');
        if (s.scrollbar.drag && s.scrollbar.drag.length)
          s.scrollbar.drag.removeAttr('style');
      }
    };
    s.destroy = function(deleteInstance, cleanupStyles) {
      s.detachEvents();
      s.stopAutoplay();
      if (s.params.loop) {
        s.destroyLoop();
      }
      if (cleanupStyles) {
        s.cleanupStyles();
      }
      s.disconnectObservers();
      if (s.params.keyboardControl) {
        if (s.disableKeyboardControl)
          s.disableKeyboardControl();
      }
      if (s.params.mousewheelControl) {
        if (s.disableMousewheelControl)
          s.disableMousewheelControl();
      }
      if (s.params.a11y && s.a11y)
        s.a11y.destroy();
      s.emit('onDestroy');
      if (deleteInstance !== false)
        s = null;
    };
    s.init();
    return s;
  };
  Swiper.prototype = {
    isSafari: (function() {
      var ua = navigator.userAgent.toLowerCase();
      return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
    })(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
    isArray: function(arr) {
      return Object.prototype.toString.apply(arr) === '[object Array]';
    },
    browser: {
      ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
      ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1)
    },
    device: (function() {
      var ua = navigator.userAgent;
      var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
      var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
      var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
      var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
      return {
        ios: ipad || iphone || ipod,
        android: android
      };
    })(),
    support: {
      touch: (window.Modernizr && Modernizr.touch === true) || (function() {
        return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
      })(),
      transforms3d: (window.Modernizr && Modernizr.csstransforms3d === true) || (function() {
        var div = document.createElement('div').style;
        return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
      })(),
      flexbox: (function() {
        var div = document.createElement('div').style;
        var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
        for (var i = 0; i < styles.length; i++) {
          if (styles[i] in div)
            return true;
        }
      })(),
      observer: (function() {
        return ('MutationObserver' in window || 'WebkitMutationObserver' in window);
      })()
    },
    plugins: {}
  };
  var Dom7 = (function() {
    var Dom7 = function(arr) {
      var _this = this,
          i = 0;
      for (i = 0; i < arr.length; i++) {
        _this[i] = arr[i];
      }
      _this.length = arr.length;
      return this;
    };
    var $ = function(selector, context) {
      var arr = [],
          i = 0;
      if (selector && !context) {
        if (selector instanceof Dom7) {
          return selector;
        }
      }
      if (selector) {
        if (typeof selector === 'string') {
          var els,
              tempParent,
              html = selector.trim();
          if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
            var toCreate = 'div';
            if (html.indexOf('<li') === 0)
              toCreate = 'ul';
            if (html.indexOf('<tr') === 0)
              toCreate = 'tbody';
            if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0)
              toCreate = 'tr';
            if (html.indexOf('<tbody') === 0)
              toCreate = 'table';
            if (html.indexOf('<option') === 0)
              toCreate = 'select';
            tempParent = document.createElement(toCreate);
            tempParent.innerHTML = selector;
            for (i = 0; i < tempParent.childNodes.length; i++) {
              arr.push(tempParent.childNodes[i]);
            }
          } else {
            if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
              els = [document.getElementById(selector.split('#')[1])];
            } else {
              els = (context || document).querySelectorAll(selector);
            }
            for (i = 0; i < els.length; i++) {
              if (els[i])
                arr.push(els[i]);
            }
          }
        } else if (selector.nodeType || selector === window || selector === document) {
          arr.push(selector);
        } else if (selector.length > 0 && selector[0].nodeType) {
          for (i = 0; i < selector.length; i++) {
            arr.push(selector[i]);
          }
        }
      }
      return new Dom7(arr);
    };
    Dom7.prototype = {
      addClass: function(className) {
        if (typeof className === 'undefined') {
          return this;
        }
        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i++) {
          for (var j = 0; j < this.length; j++) {
            this[j].classList.add(classes[i]);
          }
        }
        return this;
      },
      removeClass: function(className) {
        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i++) {
          for (var j = 0; j < this.length; j++) {
            this[j].classList.remove(classes[i]);
          }
        }
        return this;
      },
      hasClass: function(className) {
        if (!this[0])
          return false;
        else
          return this[0].classList.contains(className);
      },
      toggleClass: function(className) {
        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i++) {
          for (var j = 0; j < this.length; j++) {
            this[j].classList.toggle(classes[i]);
          }
        }
        return this;
      },
      attr: function(attrs, value) {
        if (arguments.length === 1 && typeof attrs === 'string') {
          if (this[0])
            return this[0].getAttribute(attrs);
          else
            return undefined;
        } else {
          for (var i = 0; i < this.length; i++) {
            if (arguments.length === 2) {
              this[i].setAttribute(attrs, value);
            } else {
              for (var attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
              }
            }
          }
          return this;
        }
      },
      removeAttr: function(attr) {
        for (var i = 0; i < this.length; i++) {
          this[i].removeAttribute(attr);
        }
        return this;
      },
      data: function(key, value) {
        if (typeof value === 'undefined') {
          if (this[0]) {
            var dataKey = this[0].getAttribute('data-' + key);
            if (dataKey)
              return dataKey;
            else if (this[0].dom7ElementDataStorage && (key in this[0].dom7ElementDataStorage))
              return this[0].dom7ElementDataStorage[key];
            else
              return undefined;
          } else
            return undefined;
        } else {
          for (var i = 0; i < this.length; i++) {
            var el = this[i];
            if (!el.dom7ElementDataStorage)
              el.dom7ElementDataStorage = {};
            el.dom7ElementDataStorage[key] = value;
          }
          return this;
        }
      },
      transform: function(transform) {
        for (var i = 0; i < this.length; i++) {
          var elStyle = this[i].style;
          elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
        }
        return this;
      },
      transition: function(duration) {
        if (typeof duration !== 'string') {
          duration = duration + 'ms';
        }
        for (var i = 0; i < this.length; i++) {
          var elStyle = this[i].style;
          elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
        }
        return this;
      },
      on: function(eventName, targetSelector, listener, capture) {
        function handleLiveEvent(e) {
          var target = e.target;
          if ($(target).is(targetSelector))
            listener.call(target, e);
          else {
            var parents = $(target).parents();
            for (var k = 0; k < parents.length; k++) {
              if ($(parents[k]).is(targetSelector))
                listener.call(parents[k], e);
            }
          }
        }
        var events = eventName.split(' ');
        var i,
            j;
        for (i = 0; i < this.length; i++) {
          if (typeof targetSelector === 'function' || targetSelector === false) {
            if (typeof targetSelector === 'function') {
              listener = arguments[1];
              capture = arguments[2] || false;
            }
            for (j = 0; j < events.length; j++) {
              this[i].addEventListener(events[j], listener, capture);
            }
          } else {
            for (j = 0; j < events.length; j++) {
              if (!this[i].dom7LiveListeners)
                this[i].dom7LiveListeners = [];
              this[i].dom7LiveListeners.push({
                listener: listener,
                liveListener: handleLiveEvent
              });
              this[i].addEventListener(events[j], handleLiveEvent, capture);
            }
          }
        }
        return this;
      },
      off: function(eventName, targetSelector, listener, capture) {
        var events = eventName.split(' ');
        for (var i = 0; i < events.length; i++) {
          for (var j = 0; j < this.length; j++) {
            if (typeof targetSelector === 'function' || targetSelector === false) {
              if (typeof targetSelector === 'function') {
                listener = arguments[1];
                capture = arguments[2] || false;
              }
              this[j].removeEventListener(events[i], listener, capture);
            } else {
              if (this[j].dom7LiveListeners) {
                for (var k = 0; k < this[j].dom7LiveListeners.length; k++) {
                  if (this[j].dom7LiveListeners[k].listener === listener) {
                    this[j].removeEventListener(events[i], this[j].dom7LiveListeners[k].liveListener, capture);
                  }
                }
              }
            }
          }
        }
        return this;
      },
      once: function(eventName, targetSelector, listener, capture) {
        var dom = this;
        if (typeof targetSelector === 'function') {
          targetSelector = false;
          listener = arguments[1];
          capture = arguments[2];
        }
        function proxy(e) {
          listener(e);
          dom.off(eventName, targetSelector, proxy, capture);
        }
        dom.on(eventName, targetSelector, proxy, capture);
      },
      trigger: function(eventName, eventData) {
        for (var i = 0; i < this.length; i++) {
          var evt;
          try {
            evt = new window.CustomEvent(eventName, {
              detail: eventData,
              bubbles: true,
              cancelable: true
            });
          } catch (e) {
            evt = document.createEvent('Event');
            evt.initEvent(eventName, true, true);
            evt.detail = eventData;
          }
          this[i].dispatchEvent(evt);
        }
        return this;
      },
      transitionEnd: function(callback) {
        var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
            i,
            j,
            dom = this;
        function fireCallBack(e) {
          if (e.target !== this)
            return;
          callback.call(this, e);
          for (i = 0; i < events.length; i++) {
            dom.off(events[i], fireCallBack);
          }
        }
        if (callback) {
          for (i = 0; i < events.length; i++) {
            dom.on(events[i], fireCallBack);
          }
        }
        return this;
      },
      width: function() {
        if (this[0] === window) {
          return window.innerWidth;
        } else {
          if (this.length > 0) {
            return parseFloat(this.css('width'));
          } else {
            return null;
          }
        }
      },
      outerWidth: function(includeMargins) {
        if (this.length > 0) {
          if (includeMargins)
            return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
          else
            return this[0].offsetWidth;
        } else
          return null;
      },
      height: function() {
        if (this[0] === window) {
          return window.innerHeight;
        } else {
          if (this.length > 0) {
            return parseFloat(this.css('height'));
          } else {
            return null;
          }
        }
      },
      outerHeight: function(includeMargins) {
        if (this.length > 0) {
          if (includeMargins)
            return this[0].offsetHeight + parseFloat(this.css('margin-top')) + parseFloat(this.css('margin-bottom'));
          else
            return this[0].offsetHeight;
        } else
          return null;
      },
      offset: function() {
        if (this.length > 0) {
          var el = this[0];
          var box = el.getBoundingClientRect();
          var body = document.body;
          var clientTop = el.clientTop || body.clientTop || 0;
          var clientLeft = el.clientLeft || body.clientLeft || 0;
          var scrollTop = window.pageYOffset || el.scrollTop;
          var scrollLeft = window.pageXOffset || el.scrollLeft;
          return {
            top: box.top + scrollTop - clientTop,
            left: box.left + scrollLeft - clientLeft
          };
        } else {
          return null;
        }
      },
      css: function(props, value) {
        var i;
        if (arguments.length === 1) {
          if (typeof props === 'string') {
            if (this[0])
              return window.getComputedStyle(this[0], null).getPropertyValue(props);
          } else {
            for (i = 0; i < this.length; i++) {
              for (var prop in props) {
                this[i].style[prop] = props[prop];
              }
            }
            return this;
          }
        }
        if (arguments.length === 2 && typeof props === 'string') {
          for (i = 0; i < this.length; i++) {
            this[i].style[props] = value;
          }
          return this;
        }
        return this;
      },
      each: function(callback) {
        for (var i = 0; i < this.length; i++) {
          callback.call(this[i], i, this[i]);
        }
        return this;
      },
      html: function(html) {
        if (typeof html === 'undefined') {
          return this[0] ? this[0].innerHTML : undefined;
        } else {
          for (var i = 0; i < this.length; i++) {
            this[i].innerHTML = html;
          }
          return this;
        }
      },
      is: function(selector) {
        if (!this[0])
          return false;
        var compareWith,
            i;
        if (typeof selector === 'string') {
          var el = this[0];
          if (el === document)
            return selector === document;
          if (el === window)
            return selector === window;
          if (el.matches)
            return el.matches(selector);
          else if (el.webkitMatchesSelector)
            return el.webkitMatchesSelector(selector);
          else if (el.mozMatchesSelector)
            return el.mozMatchesSelector(selector);
          else if (el.msMatchesSelector)
            return el.msMatchesSelector(selector);
          else {
            compareWith = $(selector);
            for (i = 0; i < compareWith.length; i++) {
              if (compareWith[i] === this[0])
                return true;
            }
            return false;
          }
        } else if (selector === document)
          return this[0] === document;
        else if (selector === window)
          return this[0] === window;
        else {
          if (selector.nodeType || selector instanceof Dom7) {
            compareWith = selector.nodeType ? [selector] : selector;
            for (i = 0; i < compareWith.length; i++) {
              if (compareWith[i] === this[0])
                return true;
            }
            return false;
          }
          return false;
        }
      },
      index: function() {
        if (this[0]) {
          var child = this[0];
          var i = 0;
          while ((child = child.previousSibling) !== null) {
            if (child.nodeType === 1)
              i++;
          }
          return i;
        } else
          return undefined;
      },
      eq: function(index) {
        if (typeof index === 'undefined')
          return this;
        var length = this.length;
        var returnIndex;
        if (index > length - 1) {
          return new Dom7([]);
        }
        if (index < 0) {
          returnIndex = length + index;
          if (returnIndex < 0)
            return new Dom7([]);
          else
            return new Dom7([this[returnIndex]]);
        }
        return new Dom7([this[index]]);
      },
      append: function(newChild) {
        var i,
            j;
        for (i = 0; i < this.length; i++) {
          if (typeof newChild === 'string') {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = newChild;
            while (tempDiv.firstChild) {
              this[i].appendChild(tempDiv.firstChild);
            }
          } else if (newChild instanceof Dom7) {
            for (j = 0; j < newChild.length; j++) {
              this[i].appendChild(newChild[j]);
            }
          } else {
            this[i].appendChild(newChild);
          }
        }
        return this;
      },
      prepend: function(newChild) {
        var i,
            j;
        for (i = 0; i < this.length; i++) {
          if (typeof newChild === 'string') {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = newChild;
            for (j = tempDiv.childNodes.length - 1; j >= 0; j--) {
              this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            }
          } else if (newChild instanceof Dom7) {
            for (j = 0; j < newChild.length; j++) {
              this[i].insertBefore(newChild[j], this[i].childNodes[0]);
            }
          } else {
            this[i].insertBefore(newChild, this[i].childNodes[0]);
          }
        }
        return this;
      },
      insertBefore: function(selector) {
        var before = $(selector);
        for (var i = 0; i < this.length; i++) {
          if (before.length === 1) {
            before[0].parentNode.insertBefore(this[i], before[0]);
          } else if (before.length > 1) {
            for (var j = 0; j < before.length; j++) {
              before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
            }
          }
        }
      },
      insertAfter: function(selector) {
        var after = $(selector);
        for (var i = 0; i < this.length; i++) {
          if (after.length === 1) {
            after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
          } else if (after.length > 1) {
            for (var j = 0; j < after.length; j++) {
              after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
            }
          }
        }
      },
      next: function(selector) {
        if (this.length > 0) {
          if (selector) {
            if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector))
              return new Dom7([this[0].nextElementSibling]);
            else
              return new Dom7([]);
          } else {
            if (this[0].nextElementSibling)
              return new Dom7([this[0].nextElementSibling]);
            else
              return new Dom7([]);
          }
        } else
          return new Dom7([]);
      },
      nextAll: function(selector) {
        var nextEls = [];
        var el = this[0];
        if (!el)
          return new Dom7([]);
        while (el.nextElementSibling) {
          var next = el.nextElementSibling;
          if (selector) {
            if ($(next).is(selector))
              nextEls.push(next);
          } else
            nextEls.push(next);
          el = next;
        }
        return new Dom7(nextEls);
      },
      prev: function(selector) {
        if (this.length > 0) {
          if (selector) {
            if (this[0].previousElementSibling && $(this[0].previousElementSibling).is(selector))
              return new Dom7([this[0].previousElementSibling]);
            else
              return new Dom7([]);
          } else {
            if (this[0].previousElementSibling)
              return new Dom7([this[0].previousElementSibling]);
            else
              return new Dom7([]);
          }
        } else
          return new Dom7([]);
      },
      prevAll: function(selector) {
        var prevEls = [];
        var el = this[0];
        if (!el)
          return new Dom7([]);
        while (el.previousElementSibling) {
          var prev = el.previousElementSibling;
          if (selector) {
            if ($(prev).is(selector))
              prevEls.push(prev);
          } else
            prevEls.push(prev);
          el = prev;
        }
        return new Dom7(prevEls);
      },
      parent: function(selector) {
        var parents = [];
        for (var i = 0; i < this.length; i++) {
          if (selector) {
            if ($(this[i].parentNode).is(selector))
              parents.push(this[i].parentNode);
          } else {
            parents.push(this[i].parentNode);
          }
        }
        return $($.unique(parents));
      },
      parents: function(selector) {
        var parents = [];
        for (var i = 0; i < this.length; i++) {
          var parent = this[i].parentNode;
          while (parent) {
            if (selector) {
              if ($(parent).is(selector))
                parents.push(parent);
            } else {
              parents.push(parent);
            }
            parent = parent.parentNode;
          }
        }
        return $($.unique(parents));
      },
      find: function(selector) {
        var foundElements = [];
        for (var i = 0; i < this.length; i++) {
          var found = this[i].querySelectorAll(selector);
          for (var j = 0; j < found.length; j++) {
            foundElements.push(found[j]);
          }
        }
        return new Dom7(foundElements);
      },
      children: function(selector) {
        var children = [];
        for (var i = 0; i < this.length; i++) {
          var childNodes = this[i].childNodes;
          for (var j = 0; j < childNodes.length; j++) {
            if (!selector) {
              if (childNodes[j].nodeType === 1)
                children.push(childNodes[j]);
            } else {
              if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector))
                children.push(childNodes[j]);
            }
          }
        }
        return new Dom7($.unique(children));
      },
      remove: function() {
        for (var i = 0; i < this.length; i++) {
          if (this[i].parentNode)
            this[i].parentNode.removeChild(this[i]);
        }
        return this;
      },
      add: function() {
        var dom = this;
        var i,
            j;
        for (i = 0; i < arguments.length; i++) {
          var toAdd = $(arguments[i]);
          for (j = 0; j < toAdd.length; j++) {
            dom[dom.length] = toAdd[j];
            dom.length++;
          }
        }
        return dom;
      }
    };
    $.fn = Dom7.prototype;
    $.unique = function(arr) {
      var unique = [];
      for (var i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1)
          unique.push(arr[i]);
      }
      return unique;
    };
    return $;
  })();
  var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];
  for (var i = 0; i < swiperDomPlugins.length; i++) {
    if (window[swiperDomPlugins[i]]) {
      addLibraryPlugin(window[swiperDomPlugins[i]]);
    }
  }
  var domLib;
  if (typeof Dom7 === 'undefined') {
    domLib = window.Dom7 || window.Zepto || window.jQuery;
  } else {
    domLib = Dom7;
  }
  function addLibraryPlugin(lib) {
    lib.fn.swiper = function(params) {
      var firstInstance;
      lib(this).each(function() {
        var s = new Swiper(this, params);
        if (!firstInstance)
          firstInstance = s;
      });
      return firstInstance;
    };
  }
  if (domLib) {
    if (!('transitionEnd' in domLib.fn)) {
      domLib.fn.transitionEnd = function(callback) {
        var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
            i,
            j,
            dom = this;
        function fireCallBack(e) {
          if (e.target !== this)
            return;
          callback.call(this, e);
          for (i = 0; i < events.length; i++) {
            dom.off(events[i], fireCallBack);
          }
        }
        if (callback) {
          for (i = 0; i < events.length; i++) {
            dom.on(events[i], fireCallBack);
          }
        }
        return this;
      };
    }
    if (!('transform' in domLib.fn)) {
      domLib.fn.transform = function(transform) {
        for (var i = 0; i < this.length; i++) {
          var elStyle = this[i].style;
          elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
        }
        return this;
      };
    }
    if (!('transition' in domLib.fn)) {
      domLib.fn.transition = function(duration) {
        if (typeof duration !== 'string') {
          duration = duration + 'ms';
        }
        for (var i = 0; i < this.length; i++) {
          var elStyle = this[i].style;
          elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
        }
        return this;
      };
    }
  }
  window.Swiper = Swiper;
})();
if (typeof(module) !== 'undefined') {
  module.exports = window.Swiper;
} else if (typeof define === 'function' && define.amd) {
  define("libs/Swiper/3.1.2/js/swiper.js", [], function() {
    'use strict';
    return window.Swiper;
  });
}

_removeDefine();
})();
System.registerDynamic("js/utils/jquery.touch.js", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {
    (function($) {
      "use strict";
      var touch = {},
          touchTimeout,
          tapTimeout,
          swipeTimeout,
          longTapTimeout,
          longTapDelay = 750,
          gesture;
      function swipeDirection(x1, x2, y1, y2) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down');
      }
      function longTap() {
        longTapTimeout = null;
        if (touch.last) {
          touch.el.trigger('longTap');
          touch = {};
        }
      }
      function cancelLongTap() {
        if (longTapTimeout) {
          clearTimeout(longTapTimeout);
        }
        longTapTimeout = null;
      }
      function cancelAll() {
        if (touchTimeout) {
          clearTimeout(touchTimeout);
        }
        if (tapTimeout) {
          clearTimeout(tapTimeout);
        }
        if (swipeTimeout) {
          clearTimeout(swipeTimeout);
        }
        if (longTapTimeout) {
          clearTimeout(longTapTimeout);
        }
        touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
        touch = {};
      }
      function isPrimaryTouch(event) {
        return (event.pointerType === 'touch' || event.pointerType === event.MSPOINTER_TYPE_TOUCH) && event.isPrimary;
      }
      function isPointerEventType(e, type) {
        return (e.type === 'pointer' + type || e.type.toLowerCase() === 'mspointer' + type);
      }
      $(document).ready(function() {
        var now,
            delta,
            deltaX = 0,
            deltaY = 0,
            firstTouch,
            _isPointerType;
        if ('MSGesture' in window) {
          gesture = new MSGesture();
          gesture.target = document.body;
        }
        $(document).on('MSGestureEnd', function(e) {
          e = e.originalEvent;
          var swipeDirectionFromVelocity = e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null;
          if (swipeDirectionFromVelocity) {
            touch.el.trigger('swipe');
            touch.el.trigger('swipe' + swipeDirectionFromVelocity);
          }
        }).on('touchstart MSPointerDown pointerdown', function(e) {
          e = e.originalEvent;
          if ((_isPointerType = isPointerEventType(e, 'down')) && !isPrimaryTouch(e)) {
            return;
          }
          firstTouch = _isPointerType ? e : e.touches[0];
          if (e.touches && e.touches.length === 1 && touch.x2) {
            touch.x2 = undefined;
            touch.y2 = undefined;
          }
          now = Date.now();
          delta = now - (touch.last || now);
          touch.el = $('tagName' in firstTouch.target ? firstTouch.target : firstTouch.target.parentNode);
          if (touchTimeout) {
            clearTimeout(touchTimeout);
          }
          touch.x1 = firstTouch.pageX;
          touch.y1 = firstTouch.pageY;
          if (delta > 0 && delta <= 250) {
            touch.isDoubleTap = true;
          }
          touch.last = now;
          longTapTimeout = setTimeout(longTap, longTapDelay);
          if (gesture && _isPointerType) {
            gesture.addPointer(e.pointerId);
          }
        }).on('touchmove MSPointerMove pointermove', function(e) {
          e = e.originalEvent;
          if ((_isPointerType = isPointerEventType(e, 'move')) && !isPrimaryTouch(e)) {
            return;
          }
          firstTouch = _isPointerType ? e : e.touches[0];
          cancelLongTap();
          touch.x2 = firstTouch.pageX;
          touch.y2 = firstTouch.pageY;
          deltaX += Math.abs(touch.x1 - touch.x2);
          deltaY += Math.abs(touch.y1 - touch.y2);
        }).on('touchend MSPointerUp pointerup', function(e) {
          e = e.originalEvent;
          if ((_isPointerType = isPointerEventType(e, 'up')) && !isPrimaryTouch(e)) {
            return;
          }
          cancelLongTap();
          if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) || (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30)) {
            swipeTimeout = setTimeout(function() {
              touch.el.trigger('swipe');
              touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)));
              touch = {};
            }, 0);
          } else if ('last' in touch) {
            if (deltaX < 30 && deltaY < 30) {
              tapTimeout = setTimeout(function() {
                var event = $.Event('tap');
                event.cancelTouch = cancelAll;
                touch.el.trigger(event);
                if (touch.isDoubleTap) {
                  if (touch.el) {
                    touch.el.trigger('doubleTap');
                  }
                  touch = {};
                } else {
                  touchTimeout = setTimeout(function() {
                    touchTimeout = null;
                    if (touch.el) {
                      touch.el.trigger('singleTap');
                    }
                    touch = {};
                  }, 250);
                }
              }, 0);
            } else {
              touch = {};
            }
          }
          deltaX = deltaY = 0;
        }).on('touchcancel MSPointerCancel pointercancel', cancelAll);
        $(window).on('scroll', cancelAll);
      });
      $.each(['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'doubleTap', 'tap', 'singleTap', 'longTap'], function(index, item) {
        $.fn[item] = function(callback) {
          return this.on(item, callback);
        };
      });
    })(jQuery);
  })();
  return _retrieveGlobal();
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
;
(function() {
  var undefined;
  var VERSION = '3.9.3';
  var BIND_FLAG = 1,
      BIND_KEY_FLAG = 2,
      CURRY_BOUND_FLAG = 4,
      CURRY_FLAG = 8,
      CURRY_RIGHT_FLAG = 16,
      PARTIAL_FLAG = 32,
      PARTIAL_RIGHT_FLAG = 64,
      ARY_FLAG = 128,
      REARG_FLAG = 256;
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';
  var HOT_COUNT = 150,
      HOT_SPAN = 16;
  var LAZY_DROP_WHILE_FLAG = 0,
      LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2;
  var FUNC_ERROR_TEXT = 'Expected a function';
  var PLACEHOLDER = '__lodash_placeholder__';
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]';
  var arrayBufferTag = '[object ArrayBuffer]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
      reUnescapedHtml = /[&<>"'`]/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
  var reRegExpChars = /[.*+?^${}()|[\]\/\\]/g,
      reHasRegExpChars = RegExp(reRegExpChars.source);
  var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;
  var reEscapeChar = /\\(\\)?/g;
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
  var reFlags = /\w*$/;
  var reHasHexPrefix = /^0[xX]/;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^\d+$/;
  var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;
  var reNoMatch = /($^)/;
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
  var reWords = (function() {
    var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
        lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';
    return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
  }());
  var whitespace = (' \t\x0b\f\xa0\ufeff' + '\n\r\u2028\u2029' + '\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000');
  var contextProps = ['Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array', 'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number', 'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'document', 'isFinite', 'parseFloat', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap', 'window'];
  var templateCounter = -1;
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[stringTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[mapTag] = cloneableTags[setTag] = cloneableTags[weakMapTag] = false;
  var debounceOptions = {
    'leading': false,
    'maxWait': 0,
    'trailing': false
  };
  var deburredLetters = {
    '\xc0': 'A',
    '\xc1': 'A',
    '\xc2': 'A',
    '\xc3': 'A',
    '\xc4': 'A',
    '\xc5': 'A',
    '\xe0': 'a',
    '\xe1': 'a',
    '\xe2': 'a',
    '\xe3': 'a',
    '\xe4': 'a',
    '\xe5': 'a',
    '\xc7': 'C',
    '\xe7': 'c',
    '\xd0': 'D',
    '\xf0': 'd',
    '\xc8': 'E',
    '\xc9': 'E',
    '\xca': 'E',
    '\xcb': 'E',
    '\xe8': 'e',
    '\xe9': 'e',
    '\xea': 'e',
    '\xeb': 'e',
    '\xcC': 'I',
    '\xcd': 'I',
    '\xce': 'I',
    '\xcf': 'I',
    '\xeC': 'i',
    '\xed': 'i',
    '\xee': 'i',
    '\xef': 'i',
    '\xd1': 'N',
    '\xf1': 'n',
    '\xd2': 'O',
    '\xd3': 'O',
    '\xd4': 'O',
    '\xd5': 'O',
    '\xd6': 'O',
    '\xd8': 'O',
    '\xf2': 'o',
    '\xf3': 'o',
    '\xf4': 'o',
    '\xf5': 'o',
    '\xf6': 'o',
    '\xf8': 'o',
    '\xd9': 'U',
    '\xda': 'U',
    '\xdb': 'U',
    '\xdc': 'U',
    '\xf9': 'u',
    '\xfa': 'u',
    '\xfb': 'u',
    '\xfc': 'u',
    '\xdd': 'Y',
    '\xfd': 'y',
    '\xff': 'y',
    '\xc6': 'Ae',
    '\xe6': 'ae',
    '\xde': 'Th',
    '\xfe': 'th',
    '\xdf': 'ss'
  };
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '`': '&#96;'
  };
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&#96;': '`'
  };
  var objectTypes = {
    'function': true,
    'object': true
  };
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;
  var freeSelf = objectTypes[typeof self] && self && self.Object && self;
  var freeWindow = objectTypes[typeof window] && window && window.Object && window;
  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;
  var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;
  function baseCompareAscending(value, other) {
    if (value !== other) {
      var valIsNull = value === null,
          valIsUndef = value === undefined,
          valIsReflexive = value === value;
      var othIsNull = other === null,
          othIsUndef = other === undefined,
          othIsReflexive = other === other;
      if ((value > other && !othIsNull) || !valIsReflexive || (valIsNull && !othIsUndef && othIsReflexive) || (valIsUndef && othIsReflexive)) {
        return 1;
      }
      if ((value < other && !valIsNull) || !othIsReflexive || (othIsNull && !valIsUndef && valIsReflexive) || (othIsUndef && valIsReflexive)) {
        return -1;
      }
    }
    return 0;
  }
  function baseFindIndex(array, predicate, fromRight) {
    var length = array.length,
        index = fromRight ? length : -1;
    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }
  function baseIndexOf(array, value, fromIndex) {
    if (value !== value) {
      return indexOfNaN(array, fromIndex);
    }
    var index = fromIndex - 1,
        length = array.length;
    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }
  function baseIsFunction(value) {
    return typeof value == 'function' || false;
  }
  function baseToString(value) {
    if (typeof value == 'string') {
      return value;
    }
    return value == null ? '' : (value + '');
  }
  function charsLeftIndex(string, chars) {
    var index = -1,
        length = string.length;
    while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
    return index;
  }
  function charsRightIndex(string, chars) {
    var index = string.length;
    while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
    return index;
  }
  function compareAscending(object, other) {
    return baseCompareAscending(object.criteria, other.criteria) || (object.index - other.index);
  }
  function compareMultiple(object, other, orders) {
    var index = -1,
        objCriteria = object.criteria,
        othCriteria = other.criteria,
        length = objCriteria.length,
        ordersLength = orders.length;
    while (++index < length) {
      var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
      if (result) {
        if (index >= ordersLength) {
          return result;
        }
        return result * (orders[index] ? 1 : -1);
      }
    }
    return object.index - other.index;
  }
  function deburrLetter(letter) {
    return deburredLetters[letter];
  }
  function escapeHtmlChar(chr) {
    return htmlEscapes[chr];
  }
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }
  function indexOfNaN(array, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 0 : -1);
    while ((fromRight ? index-- : ++index < length)) {
      var other = array[index];
      if (other !== other) {
        return index;
      }
    }
    return -1;
  }
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  function isSpace(charCode) {
    return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 || (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
  }
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = -1,
        result = [];
    while (++index < length) {
      if (array[index] === placeholder) {
        array[index] = PLACEHOLDER;
        result[++resIndex] = index;
      }
    }
    return result;
  }
  function sortedUniq(array, iteratee) {
    var seen,
        index = -1,
        length = array.length,
        resIndex = -1,
        result = [];
    while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value, index, array) : value;
      if (!index || seen !== computed) {
        seen = computed;
        result[++resIndex] = value;
      }
    }
    return result;
  }
  function trimmedLeftIndex(string) {
    var index = -1,
        length = string.length;
    while (++index < length && isSpace(string.charCodeAt(index))) {}
    return index;
  }
  function trimmedRightIndex(string) {
    var index = string.length;
    while (index-- && isSpace(string.charCodeAt(index))) {}
    return index;
  }
  function unescapeHtmlChar(chr) {
    return htmlUnescapes[chr];
  }
  function runInContext(context) {
    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Number = context.Number,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;
    var arrayProto = Array.prototype,
        objectProto = Object.prototype,
        stringProto = String.prototype;
    var document = (document = context.window) ? document.document : null;
    var fnToString = Function.prototype.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var idCounter = 0;
    var objToString = objectProto.toString;
    var oldDash = context._;
    var reIsNative = RegExp('^' + escapeRegExp(fnToString.call(hasOwnProperty)).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    var ArrayBuffer = getNative(context, 'ArrayBuffer'),
        bufferSlice = getNative(ArrayBuffer && new ArrayBuffer(0), 'slice'),
        ceil = Math.ceil,
        clearTimeout = context.clearTimeout,
        floor = Math.floor,
        getPrototypeOf = getNative(Object, 'getPrototypeOf'),
        parseFloat = context.parseFloat,
        push = arrayProto.push,
        Set = getNative(context, 'Set'),
        setTimeout = context.setTimeout,
        splice = arrayProto.splice,
        Uint8Array = getNative(context, 'Uint8Array'),
        WeakMap = getNative(context, 'WeakMap');
    var Float64Array = (function() {
      try {
        var func = getNative(context, 'Float64Array'),
            result = new func(new ArrayBuffer(10), 0, 1) && func;
      } catch (e) {}
      return result || null;
    }());
    var nativeCreate = getNative(Object, 'create'),
        nativeIsArray = getNative(Array, 'isArray'),
        nativeIsFinite = context.isFinite,
        nativeKeys = getNative(Object, 'keys'),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = getNative(Date, 'now'),
        nativeNumIsFinite = getNative(Number, 'isFinite'),
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random;
    var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
        POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    var MAX_ARRAY_LENGTH = 4294967295,
        MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
        HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    var FLOAT64_BYTES_PER_ELEMENT = Float64Array ? Float64Array.BYTES_PER_ELEMENT : 0;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var metaMap = WeakMap && new WeakMap;
    var realNames = {};
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }
    function baseLodash() {}
    function LodashWrapper(value, chainAll, actions) {
      this.__wrapped__ = value;
      this.__actions__ = actions || [];
      this.__chain__ = !!chainAll;
    }
    var support = lodash.support = {};
    (function(x) {
      var Ctor = function() {
        this.x = x;
      },
          object = {
            '0': x,
            'length': x
          },
          props = [];
      Ctor.prototype = {
        'valueOf': x,
        'y': x
      };
      for (var key in new Ctor) {
        props.push(key);
      }
      try {
        support.dom = document.createDocumentFragment().nodeType === 11;
      } catch (e) {
        support.dom = false;
      }
    }(1, 0));
    lodash.templateSettings = {
      'escape': reEscape,
      'evaluate': reEvaluate,
      'interpolate': reInterpolate,
      'variable': '',
      'imports': {'_': lodash}
    };
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = null;
      this.__dir__ = 1;
      this.__dropCount__ = 0;
      this.__filtered__ = false;
      this.__iteratees__ = null;
      this.__takeCount__ = POSITIVE_INFINITY;
      this.__views__ = null;
    }
    function lazyClone() {
      var actions = this.__actions__,
          iteratees = this.__iteratees__,
          views = this.__views__,
          result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = actions ? arrayCopy(actions) : null;
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = iteratees ? arrayCopy(iteratees) : null;
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = views ? arrayCopy(views) : null;
      return result;
    }
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }
    function lazyValue() {
      var array = this.__wrapped__.value();
      if (!isArray(array)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var dir = this.__dir__,
          isRight = dir < 0,
          view = getView(0, array.length, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          takeCount = nativeMin(length, this.__takeCount__),
          iteratees = this.__iteratees__,
          iterLength = iteratees ? iteratees.length : 0,
          resIndex = 0,
          result = [];
      outer: while (length-- && resIndex < takeCount) {
        index += dir;
        var iterIndex = -1,
            value = array[index];
        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type;
          if (type == LAZY_DROP_WHILE_FLAG) {
            if (data.done && (isRight ? (index > data.index) : (index < data.index))) {
              data.count = 0;
              data.done = false;
            }
            data.index = index;
            if (!data.done) {
              var limit = data.limit;
              if (!(data.done = limit > -1 ? (data.count++ >= limit) : !iteratee(value))) {
                continue outer;
              }
            }
          } else {
            var computed = iteratee(value);
            if (type == LAZY_MAP_FLAG) {
              value = computed;
            } else if (!computed) {
              if (type == LAZY_FILTER_FLAG) {
                continue outer;
              } else {
                break outer;
              }
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }
    function MapCache() {
      this.__data__ = {};
    }
    function mapDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function mapGet(key) {
      return key == '__proto__' ? undefined : this.__data__[key];
    }
    function mapHas(key) {
      return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
    }
    function mapSet(key, value) {
      if (key != '__proto__') {
        this.__data__[key] = value;
      }
      return this;
    }
    function SetCache(values) {
      var length = values ? values.length : 0;
      this.data = {
        'hash': nativeCreate(null),
        'set': new Set
      };
      while (length--) {
        this.push(values[length]);
      }
    }
    function cacheIndexOf(cache, value) {
      var data = cache.data,
          result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
      return result ? 0 : -1;
    }
    function cachePush(value) {
      var data = this.data;
      if (typeof value == 'string' || isObject(value)) {
        data.set.add(value);
      } else {
        data.hash[value] = true;
      }
    }
    function arrayCopy(source, array) {
      var index = -1,
          length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    function arrayEach(array, iteratee) {
      var index = -1,
          length = array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEachRight(array, iteratee) {
      var length = array.length;
      while (length--) {
        if (iteratee(array[length], length, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEvery(array, predicate) {
      var index = -1,
          length = array.length;
      while (++index < length) {
        if (!predicate(array[index], index, array)) {
          return false;
        }
      }
      return true;
    }
    function arrayExtremum(array, iteratee, comparator, exValue) {
      var index = -1,
          length = array.length,
          computed = exValue,
          result = computed;
      while (++index < length) {
        var value = array[index],
            current = +iteratee(value);
        if (comparator(current, computed)) {
          computed = current;
          result = value;
        }
      }
      return result;
    }
    function arrayFilter(array, predicate) {
      var index = -1,
          length = array.length,
          resIndex = -1,
          result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[++resIndex] = value;
        }
      }
      return result;
    }
    function arrayMap(array, iteratee) {
      var index = -1,
          length = array.length,
          result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    function arrayReduce(array, iteratee, accumulator, initFromArray) {
      var index = -1,
          length = array.length;
      if (initFromArray && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
      var length = array.length;
      if (initFromArray && length) {
        accumulator = array[--length];
      }
      while (length--) {
        accumulator = iteratee(accumulator, array[length], length, array);
      }
      return accumulator;
    }
    function arraySome(array, predicate) {
      var index = -1,
          length = array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    function arraySum(array) {
      var length = array.length,
          result = 0;
      while (length--) {
        result += +array[length] || 0;
      }
      return result;
    }
    function assignDefaults(objectValue, sourceValue) {
      return objectValue === undefined ? sourceValue : objectValue;
    }
    function assignOwnDefaults(objectValue, sourceValue, key, object) {
      return (objectValue === undefined || !hasOwnProperty.call(object, key)) ? sourceValue : objectValue;
    }
    function assignWith(object, source, customizer) {
      var index = -1,
          props = keys(source),
          length = props.length;
      while (++index < length) {
        var key = props[index],
            value = object[key],
            result = customizer(value, source[key], key, object, source);
        if ((result === result ? (result !== value) : (value === value)) || (value === undefined && !(key in object))) {
          object[key] = result;
        }
      }
      return object;
    }
    function baseAssign(object, source) {
      return source == null ? object : baseCopy(source, keys(source), object);
    }
    function baseAt(collection, props) {
      var index = -1,
          isNil = collection == null,
          isArr = !isNil && isArrayLike(collection),
          length = isArr ? collection.length : 0,
          propsLength = props.length,
          result = Array(propsLength);
      while (++index < propsLength) {
        var key = props[index];
        if (isArr) {
          result[index] = isIndex(key, length) ? collection[key] : undefined;
        } else {
          result[index] = isNil ? undefined : collection[key];
        }
      }
      return result;
    }
    function baseCopy(source, props, object) {
      object || (object = {});
      var index = -1,
          length = props.length;
      while (++index < length) {
        var key = props[index];
        object[key] = source[key];
      }
      return object;
    }
    function baseCallback(func, thisArg, argCount) {
      var type = typeof func;
      if (type == 'function') {
        return thisArg === undefined ? func : bindCallback(func, thisArg, argCount);
      }
      if (func == null) {
        return identity;
      }
      if (type == 'object') {
        return baseMatches(func);
      }
      return thisArg === undefined ? property(func) : baseMatchesProperty(func, thisArg);
    }
    function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
      var result;
      if (customizer) {
        result = object ? customizer(value, key, object) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return arrayCopy(value, result);
        }
      } else {
        var tag = objToString.call(value),
            isFunc = tag == funcTag;
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = initCloneObject(isFunc ? {} : value);
          if (!isDeep) {
            return baseAssign(result, value);
          }
        } else {
          return cloneableTags[tag] ? initCloneByTag(value, tag, isDeep) : (object ? value : {});
        }
      }
      stackA || (stackA = []);
      stackB || (stackB = []);
      var length = stackA.length;
      while (length--) {
        if (stackA[length] == value) {
          return stackB[length];
        }
      }
      stackA.push(value);
      stackB.push(result);
      (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
        result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
      });
      return result;
    }
    var baseCreate = (function() {
      function object() {}
      return function(prototype) {
        if (isObject(prototype)) {
          object.prototype = prototype;
          var result = new object;
          object.prototype = null;
        }
        return result || {};
      };
    }());
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() {
        func.apply(undefined, args);
      }, wait);
    }
    function baseDifference(array, values) {
      var length = array ? array.length : 0,
          result = [];
      if (!length) {
        return result;
      }
      var index = -1,
          indexOf = getIndexOf(),
          isCommon = indexOf == baseIndexOf,
          cache = (isCommon && values.length >= 200) ? createCache(values) : null,
          valuesLength = values.length;
      if (cache) {
        indexOf = cacheIndexOf;
        isCommon = false;
        values = cache;
      }
      outer: while (++index < length) {
        var value = array[index];
        if (isCommon && value === value) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === value) {
              continue outer;
            }
          }
          result.push(value);
        } else if (indexOf(values, value, 0) < 0) {
          result.push(value);
        }
      }
      return result;
    }
    var baseEach = createBaseEach(baseForOwn);
    var baseEachRight = createBaseEach(baseForOwnRight, true);
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }
    function baseExtremum(collection, iteratee, comparator, exValue) {
      var computed = exValue,
          result = computed;
      baseEach(collection, function(value, index, collection) {
        var current = +iteratee(value, index, collection);
        if (comparator(current, computed) || (current === exValue && current === result)) {
          computed = current;
          result = value;
        }
      });
      return result;
    }
    function baseFill(array, value, start, end) {
      var length = array.length;
      start = start == null ? 0 : (+start || 0);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : (+end || 0);
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : (end >>> 0);
      start >>>= 0;
      while (start < length) {
        array[start++] = value;
      }
      return array;
    }
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }
    function baseFind(collection, predicate, eachFunc, retKey) {
      var result;
      eachFunc(collection, function(value, key, collection) {
        if (predicate(value, key, collection)) {
          result = retKey ? key : value;
          return false;
        }
      });
      return result;
    }
    function baseFlatten(array, isDeep, isStrict) {
      var index = -1,
          length = array.length,
          resIndex = -1,
          result = [];
      while (++index < length) {
        var value = array[index];
        if (isObjectLike(value) && isArrayLike(value) && (isStrict || isArray(value) || isArguments(value))) {
          if (isDeep) {
            value = baseFlatten(value, isDeep, isStrict);
          }
          var valIndex = -1,
              valLength = value.length;
          while (++valIndex < valLength) {
            result[++resIndex] = value[valIndex];
          }
        } else if (!isStrict) {
          result[++resIndex] = value;
        }
      }
      return result;
    }
    var baseFor = createBaseFor();
    var baseForRight = createBaseFor(true);
    function baseForIn(object, iteratee) {
      return baseFor(object, iteratee, keysIn);
    }
    function baseForOwn(object, iteratee) {
      return baseFor(object, iteratee, keys);
    }
    function baseForOwnRight(object, iteratee) {
      return baseForRight(object, iteratee, keys);
    }
    function baseFunctions(object, props) {
      var index = -1,
          length = props.length,
          resIndex = -1,
          result = [];
      while (++index < length) {
        var key = props[index];
        if (isFunction(object[key])) {
          result[++resIndex] = key;
        }
      }
      return result;
    }
    function baseGet(object, path, pathKey) {
      if (object == null) {
        return;
      }
      if (pathKey !== undefined && pathKey in toObject(object)) {
        path = [pathKey];
      }
      var index = 0,
          length = path.length;
      while (object != null && index < length) {
        object = object[path[index++]];
      }
      return (index && index == length) ? object : undefined;
    }
    function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
    }
    function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = arrayTag,
          othTag = arrayTag;
      if (!objIsArr) {
        objTag = objToString.call(object);
        if (objTag == argsTag) {
          objTag = objectTag;
        } else if (objTag != objectTag) {
          objIsArr = isTypedArray(object);
        }
      }
      if (!othIsArr) {
        othTag = objToString.call(other);
        if (othTag == argsTag) {
          othTag = objectTag;
        } else if (othTag != objectTag) {
          othIsArr = isTypedArray(other);
        }
      }
      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;
      if (isSameTag && !(objIsArr || objIsObj)) {
        return equalByTag(object, other, objTag);
      }
      if (!isLoose) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
        if (objIsWrapped || othIsWrapped) {
          return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stackA || (stackA = []);
      stackB || (stackB = []);
      var length = stackA.length;
      while (length--) {
        if (stackA[length] == object) {
          return stackB[length] == other;
        }
      }
      stackA.push(object);
      stackB.push(other);
      var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
      stackA.pop();
      stackB.pop();
      return result;
    }
    function baseIsMatch(object, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = toObject(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2]) ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var result = customizer ? customizer(objValue, srcValue, key) : undefined;
          if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];
      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        var key = matchData[0][0],
            value = matchData[0][1];
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === value && (value !== undefined || (key in toObject(object)));
        };
      }
      return function(object) {
        return baseIsMatch(object, matchData);
      };
    }
    function baseMatchesProperty(path, srcValue) {
      var isArr = isArray(path),
          isCommon = isKey(path) && isStrictComparable(srcValue),
          pathKey = (path + '');
      path = toPath(path);
      return function(object) {
        if (object == null) {
          return false;
        }
        var key = pathKey;
        object = toObject(object);
        if ((isArr || !isCommon) && !(key in object)) {
          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
          if (object == null) {
            return false;
          }
          key = last(path);
          object = toObject(object);
        }
        return object[key] === srcValue ? (srcValue !== undefined || (key in object)) : baseIsEqual(srcValue, object[key], undefined, true);
      };
    }
    function baseMerge(object, source, customizer, stackA, stackB) {
      if (!isObject(object)) {
        return object;
      }
      var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
          props = isSrcArr ? null : keys(source);
      arrayEach(props || source, function(srcValue, key) {
        if (props) {
          key = srcValue;
          srcValue = source[key];
        }
        if (isObjectLike(srcValue)) {
          stackA || (stackA = []);
          stackB || (stackB = []);
          baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
        } else {
          var value = object[key],
              result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
              isCommon = result === undefined;
          if (isCommon) {
            result = srcValue;
          }
          if ((result !== undefined || (isSrcArr && !(key in object))) && (isCommon || (result === result ? (result !== value) : (value === value)))) {
            object[key] = result;
          }
        }
      });
      return object;
    }
    function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
      var length = stackA.length,
          srcValue = source[key];
      while (length--) {
        if (stackA[length] == srcValue) {
          object[key] = stackB[length];
          return;
        }
      }
      var value = object[key],
          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
          isCommon = result === undefined;
      if (isCommon) {
        result = srcValue;
        if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
          result = isArray(value) ? value : (isArrayLike(value) ? arrayCopy(value) : []);
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          result = isArguments(value) ? toPlainObject(value) : (isPlainObject(value) ? value : {});
        } else {
          isCommon = false;
        }
      }
      stackA.push(srcValue);
      stackB.push(result);
      if (isCommon) {
        object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
      } else if (result === result ? (result !== value) : (value === value)) {
        object[key] = result;
      }
    }
    function baseProperty(key) {
      return function(object) {
        return object == null ? undefined : object[key];
      };
    }
    function basePropertyDeep(path) {
      var pathKey = (path + '');
      path = toPath(path);
      return function(object) {
        return baseGet(object, path, pathKey);
      };
    }
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0;
      while (length--) {
        var index = indexes[length];
        if (index != previous && isIndex(index)) {
          var previous = index;
          splice.call(array, index, 1);
        }
      }
      return array;
    }
    function baseRandom(min, max) {
      return min + floor(nativeRandom() * (max - min + 1));
    }
    function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
      eachFunc(collection, function(value, index, collection) {
        accumulator = initFromCollection ? (initFromCollection = false, value) : iteratee(accumulator, value, index, collection);
      });
      return accumulator;
    }
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;
      start = start == null ? 0 : (+start || 0);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : (+end || 0);
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;
      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }
    function baseSome(collection, predicate) {
      var result;
      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    function baseSortByOrder(collection, iteratees, orders) {
      var callback = getCallback(),
          index = -1;
      iteratees = arrayMap(iteratees, function(iteratee) {
        return callback(iteratee);
      });
      var result = baseMap(collection, function(value) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return {
          'criteria': criteria,
          'index': ++index,
          'value': value
        };
      });
      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }
    function baseSum(collection, iteratee) {
      var result = 0;
      baseEach(collection, function(value, index, collection) {
        result += +iteratee(value, index, collection) || 0;
      });
      return result;
    }
    function baseUniq(array, iteratee) {
      var index = -1,
          indexOf = getIndexOf(),
          length = array.length,
          isCommon = indexOf == baseIndexOf,
          isLarge = isCommon && length >= 200,
          seen = isLarge ? createCache() : null,
          result = [];
      if (seen) {
        indexOf = cacheIndexOf;
        isCommon = false;
      } else {
        isLarge = false;
        seen = iteratee ? [] : result;
      }
      outer: while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value, index, array) : value;
        if (isCommon && value === value) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        } else if (indexOf(seen, computed, 0) < 0) {
          if (iteratee || isLarge) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }
    function baseValues(object, props) {
      var index = -1,
          length = props.length,
          result = Array(length);
      while (++index < length) {
        result[index] = object[props[index]];
      }
      return result;
    }
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;
      while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
      return isDrop ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length)) : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      var index = -1,
          length = actions.length;
      while (++index < length) {
        var args = [result],
            action = actions[index];
        push.apply(args, action.args);
        result = action.func.apply(action.thisArg, args);
      }
      return result;
    }
    function binaryIndex(array, value, retHighest) {
      var low = 0,
          high = array ? array.length : low;
      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];
          if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return binaryIndexBy(array, value, identity, retHighest);
    }
    function binaryIndexBy(array, value, iteratee, retHighest) {
      value = iteratee(value);
      var low = 0,
          high = array ? array.length : 0,
          valIsNaN = value !== value,
          valIsNull = value === null,
          valIsUndef = value === undefined;
      while (low < high) {
        var mid = floor((low + high) / 2),
            computed = iteratee(array[mid]),
            isDef = computed !== undefined,
            isReflexive = computed === computed;
        if (valIsNaN) {
          var setLow = isReflexive || retHighest;
        } else if (valIsNull) {
          setLow = isReflexive && isDef && (retHighest || computed != null);
        } else if (valIsUndef) {
          setLow = isReflexive && (retHighest || isDef);
        } else if (computed == null) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }
    function bindCallback(func, thisArg, argCount) {
      if (typeof func != 'function') {
        return identity;
      }
      if (thisArg === undefined) {
        return func;
      }
      switch (argCount) {
        case 1:
          return function(value) {
            return func.call(thisArg, value);
          };
        case 3:
          return function(value, index, collection) {
            return func.call(thisArg, value, index, collection);
          };
        case 4:
          return function(accumulator, value, index, collection) {
            return func.call(thisArg, accumulator, value, index, collection);
          };
        case 5:
          return function(value, other, key, object, source) {
            return func.call(thisArg, value, other, key, object, source);
          };
      }
      return function() {
        return func.apply(thisArg, arguments);
      };
    }
    function bufferClone(buffer) {
      return bufferSlice.call(buffer, 0);
    }
    if (!bufferSlice) {
      bufferClone = !(ArrayBuffer && Uint8Array) ? constant(null) : function(buffer) {
        var byteLength = buffer.byteLength,
            floatLength = Float64Array ? floor(byteLength / FLOAT64_BYTES_PER_ELEMENT) : 0,
            offset = floatLength * FLOAT64_BYTES_PER_ELEMENT,
            result = new ArrayBuffer(byteLength);
        if (floatLength) {
          var view = new Float64Array(result, 0, floatLength);
          view.set(new Float64Array(buffer, 0, floatLength));
        }
        if (byteLength != offset) {
          view = new Uint8Array(result, offset);
          view.set(new Uint8Array(buffer, offset));
        }
        return result;
      };
    }
    function composeArgs(args, partials, holders) {
      var holdersLength = holders.length,
          argsIndex = -1,
          argsLength = nativeMax(args.length - holdersLength, 0),
          leftIndex = -1,
          leftLength = partials.length,
          result = Array(argsLength + leftLength);
      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        result[holders[argsIndex]] = args[argsIndex];
      }
      while (argsLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }
    function composeArgsRight(args, partials, holders) {
      var holdersIndex = -1,
          holdersLength = holders.length,
          argsIndex = -1,
          argsLength = nativeMax(args.length - holdersLength, 0),
          rightIndex = -1,
          rightLength = partials.length,
          result = Array(argsLength + rightLength);
      while (++argsIndex < argsLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        result[offset + holders[holdersIndex]] = args[argsIndex++];
      }
      return result;
    }
    function createAggregator(setter, initializer) {
      return function(collection, iteratee, thisArg) {
        var result = initializer ? initializer() : {};
        iteratee = getCallback(iteratee, thisArg, 3);
        if (isArray(collection)) {
          var index = -1,
              length = collection.length;
          while (++index < length) {
            var value = collection[index];
            setter(result, value, iteratee(value, index, collection), collection);
          }
        } else {
          baseEach(collection, function(value, key, collection) {
            setter(result, value, iteratee(value, key, collection), collection);
          });
        }
        return result;
      };
    }
    function createAssigner(assigner) {
      return restParam(function(object, sources) {
        var index = -1,
            length = object == null ? 0 : sources.length,
            customizer = length > 2 ? sources[length - 2] : undefined,
            guard = length > 2 ? sources[2] : undefined,
            thisArg = length > 1 ? sources[length - 1] : undefined;
        if (typeof customizer == 'function') {
          customizer = bindCallback(customizer, thisArg, 5);
          length -= 2;
        } else {
          customizer = typeof thisArg == 'function' ? thisArg : undefined;
          length -= (customizer ? 1 : 0);
        }
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, customizer);
          }
        }
        return object;
      });
    }
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        var length = collection ? getLength(collection) : 0;
        if (!isLength(length)) {
          return eachFunc(collection, iteratee);
        }
        var index = fromRight ? length : -1,
            iterable = toObject(collection);
        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var iterable = toObject(object),
            props = keysFunc(object),
            length = props.length,
            index = fromRight ? length : -1;
        while ((fromRight ? index-- : ++index < length)) {
          var key = props[index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    function createBindWrapper(func, thisArg) {
      var Ctor = createCtorWrapper(func);
      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(thisArg, arguments);
      }
      return wrapper;
    }
    var createCache = !(nativeCreate && Set) ? constant(null) : function(values) {
      return new SetCache(values);
    };
    function createCompounder(callback) {
      return function(string) {
        var index = -1,
            array = words(deburr(string)),
            length = array.length,
            result = '';
        while (++index < length) {
          result = callback(result, array[index], index);
        }
        return result;
      };
    }
    function createCtorWrapper(Ctor) {
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0:
            return new Ctor;
          case 1:
            return new Ctor(args[0]);
          case 2:
            return new Ctor(args[0], args[1]);
          case 3:
            return new Ctor(args[0], args[1], args[2]);
          case 4:
            return new Ctor(args[0], args[1], args[2], args[3]);
          case 5:
            return new Ctor(args[0], args[1], args[2], args[3], args[4]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);
        return isObject(result) ? result : thisBinding;
      };
    }
    function createCurry(flag) {
      function curryFunc(func, arity, guard) {
        if (guard && isIterateeCall(func, arity, guard)) {
          arity = null;
        }
        var result = createWrapper(func, flag, null, null, null, null, null, arity);
        result.placeholder = curryFunc.placeholder;
        return result;
      }
      return curryFunc;
    }
    function createExtremum(comparator, exValue) {
      return function(collection, iteratee, thisArg) {
        if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
          iteratee = null;
        }
        iteratee = getCallback(iteratee, thisArg, 3);
        if (iteratee.length == 1) {
          collection = toIterable(collection);
          var result = arrayExtremum(collection, iteratee, comparator, exValue);
          if (!(collection.length && result === exValue)) {
            return result;
          }
        }
        return baseExtremum(collection, iteratee, comparator, exValue);
      };
    }
    function createFind(eachFunc, fromRight) {
      return function(collection, predicate, thisArg) {
        predicate = getCallback(predicate, thisArg, 3);
        if (isArray(collection)) {
          var index = baseFindIndex(collection, predicate, fromRight);
          return index > -1 ? collection[index] : undefined;
        }
        return baseFind(collection, predicate, eachFunc);
      };
    }
    function createFindIndex(fromRight) {
      return function(array, predicate, thisArg) {
        if (!(array && array.length)) {
          return -1;
        }
        predicate = getCallback(predicate, thisArg, 3);
        return baseFindIndex(array, predicate, fromRight);
      };
    }
    function createFindKey(objectFunc) {
      return function(object, predicate, thisArg) {
        predicate = getCallback(predicate, thisArg, 3);
        return baseFind(object, predicate, objectFunc, true);
      };
    }
    function createFlow(fromRight) {
      return function() {
        var wrapper,
            length = arguments.length,
            index = fromRight ? length : -1,
            leftIndex = 0,
            funcs = Array(length);
        while ((fromRight ? index-- : ++index < length)) {
          var func = funcs[leftIndex++] = arguments[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (!wrapper && LodashWrapper.prototype.thru && getFuncName(func) == 'wrapper') {
            wrapper = new LodashWrapper([]);
          }
        }
        index = wrapper ? -1 : length;
        while (++index < length) {
          func = funcs[index];
          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : null;
          if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments;
          if (wrapper && args.length == 1 && isArray(args[0])) {
            return wrapper.plant(args[0]).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : args[0];
          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      };
    }
    function createForEach(arrayFunc, eachFunc) {
      return function(collection, iteratee, thisArg) {
        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection)) ? arrayFunc(collection, iteratee) : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
      };
    }
    function createForIn(objectFunc) {
      return function(object, iteratee, thisArg) {
        if (typeof iteratee != 'function' || thisArg !== undefined) {
          iteratee = bindCallback(iteratee, thisArg, 3);
        }
        return objectFunc(object, iteratee, keysIn);
      };
    }
    function createForOwn(objectFunc) {
      return function(object, iteratee, thisArg) {
        if (typeof iteratee != 'function' || thisArg !== undefined) {
          iteratee = bindCallback(iteratee, thisArg, 3);
        }
        return objectFunc(object, iteratee);
      };
    }
    function createObjectMapper(isMapKeys) {
      return function(object, iteratee, thisArg) {
        var result = {};
        iteratee = getCallback(iteratee, thisArg, 3);
        baseForOwn(object, function(value, key, object) {
          var mapped = iteratee(value, key, object);
          key = isMapKeys ? mapped : key;
          value = isMapKeys ? value : mapped;
          result[key] = value;
        });
        return result;
      };
    }
    function createPadDir(fromRight) {
      return function(string, length, chars) {
        string = baseToString(string);
        return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
      };
    }
    function createPartial(flag) {
      var partialFunc = restParam(function(func, partials) {
        var holders = replaceHolders(partials, partialFunc.placeholder);
        return createWrapper(func, flag, null, partials, holders);
      });
      return partialFunc;
    }
    function createReduce(arrayFunc, eachFunc) {
      return function(collection, iteratee, accumulator, thisArg) {
        var initFromArray = arguments.length < 3;
        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection)) ? arrayFunc(collection, iteratee, accumulator, initFromArray) : baseReduce(collection, getCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
      };
    }
    function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & ARY_FLAG,
          isBind = bitmask & BIND_FLAG,
          isBindKey = bitmask & BIND_KEY_FLAG,
          isCurry = bitmask & CURRY_FLAG,
          isCurryBound = bitmask & CURRY_BOUND_FLAG,
          isCurryRight = bitmask & CURRY_RIGHT_FLAG,
          Ctor = isBindKey ? null : createCtorWrapper(func);
      function wrapper() {
        var length = arguments.length,
            index = length,
            args = Array(length);
        while (index--) {
          args[index] = arguments[index];
        }
        if (partials) {
          args = composeArgs(args, partials, holders);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight);
        }
        if (isCurry || isCurryRight) {
          var placeholder = wrapper.placeholder,
              argsHolders = replaceHolders(args, placeholder);
          length -= argsHolders.length;
          if (length < arity) {
            var newArgPos = argPos ? arrayCopy(argPos) : null,
                newArity = nativeMax(arity - length, 0),
                newsHolders = isCurry ? argsHolders : null,
                newHoldersRight = isCurry ? null : argsHolders,
                newPartials = isCurry ? args : null,
                newPartialsRight = isCurry ? null : args;
            bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
            bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
            if (!isCurryBound) {
              bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
            }
            var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
                result = createHybridWrapper.apply(undefined, newData);
            if (isLaziable(func)) {
              setData(result, newData);
            }
            result.placeholder = placeholder;
            return result;
          }
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;
        if (argPos) {
          args = reorder(args, argPos);
        }
        if (isAry && ary < args.length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtorWrapper(func);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }
    function createPadding(string, length, chars) {
      var strLength = string.length;
      length = +length;
      if (strLength >= length || !nativeIsFinite(length)) {
        return '';
      }
      var padLength = length - strLength;
      chars = chars == null ? ' ' : (chars + '');
      return repeat(chars, ceil(padLength / chars.length)).slice(0, padLength);
    }
    function createPartialWrapper(func, bitmask, thisArg, partials) {
      var isBind = bitmask & BIND_FLAG,
          Ctor = createCtorWrapper(func);
      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(argsLength + leftLength);
        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, args);
      }
      return wrapper;
    }
    function createSortedIndex(retHighest) {
      return function(array, value, iteratee, thisArg) {
        var callback = getCallback(iteratee);
        return (iteratee == null && callback === baseCallback) ? binaryIndex(array, value, retHighest) : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
      };
    }
    function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
        partials = holders = null;
      }
      length -= (holders ? holders.length : 0);
      if (bitmask & PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;
        partials = holders = null;
      }
      var data = isBindKey ? null : getData(func),
          newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];
      if (data) {
        mergeData(newData, data);
        bitmask = newData[1];
        arity = newData[9];
      }
      newData[9] = arity == null ? (isBindKey ? 0 : func.length) : (nativeMax(arity - length, 0) || 0);
      if (bitmask == BIND_FLAG) {
        var result = createBindWrapper(newData[0], newData[2]);
      } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
        result = createPartialWrapper.apply(undefined, newData);
      } else {
        result = createHybridWrapper.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setter(result, newData);
    }
    function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
      var index = -1,
          arrLength = array.length,
          othLength = other.length;
      if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
        return false;
      }
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index],
            result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
        if (result !== undefined) {
          if (result) {
            continue;
          }
          return false;
        }
        if (isLoose) {
          if (!arraySome(other, function(othValue) {
            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
          })) {
            return false;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
          return false;
        }
      }
      return true;
    }
    function equalByTag(object, other, tag) {
      switch (tag) {
        case boolTag:
        case dateTag:
          return +object == +other;
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case numberTag:
          return (object != +object) ? other != +other : object == +other;
        case regexpTag:
        case stringTag:
          return object == (other + '');
      }
      return false;
    }
    function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
      var objProps = keys(object),
          objLength = objProps.length,
          othProps = keys(other),
          othLength = othProps.length;
      if (objLength != othLength && !isLoose) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var skipCtor = isLoose;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key],
            result = customizer ? customizer(isLoose ? othValue : objValue, isLoose ? objValue : othValue, key) : undefined;
        if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
          return false;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (!skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;
        if (objCtor != othCtor && ('constructor' in object && 'constructor' in other) && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          return false;
        }
      }
      return true;
    }
    function getCallback(func, thisArg, argCount) {
      var result = lodash.callback || callback;
      result = result === callback ? baseCallback : result;
      return argCount ? result(func, thisArg, argCount) : result;
    }
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };
    function getFuncName(func) {
      var result = func.name,
          array = realNames[result],
          length = array ? array.length : 0;
      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }
    function getIndexOf(collection, target, fromIndex) {
      var result = lodash.indexOf || indexOf;
      result = result === indexOf ? baseIndexOf : result;
      return collection ? result(collection, target, fromIndex) : result;
    }
    var getLength = baseProperty('length');
    function getMatchData(object) {
      var result = pairs(object),
          length = result.length;
      while (length--) {
        result[length][2] = isStrictComparable(result[length][1]);
      }
      return result;
    }
    function getNative(object, key) {
      var value = object == null ? undefined : object[key];
      return isNative(value) ? value : undefined;
    }
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms ? transforms.length : 0;
      while (++index < length) {
        var data = transforms[index],
            size = data.size;
        switch (data.type) {
          case 'drop':
            start += size;
            break;
          case 'dropRight':
            end -= size;
            break;
          case 'take':
            end = nativeMin(end, start + size);
            break;
          case 'takeRight':
            start = nativeMax(start, end - size);
            break;
        }
      }
      return {
        'start': start,
        'end': end
      };
    }
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    function initCloneObject(object) {
      var Ctor = object.constructor;
      if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
        Ctor = Object;
      }
      return new Ctor;
    }
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return bufferClone(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          var buffer = object.buffer;
          return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          var result = new Ctor(object.source, reFlags.exec(object));
          result.lastIndex = object.lastIndex;
      }
      return result;
    }
    function invokePath(object, path, args) {
      if (object != null && !isKey(path, object)) {
        path = toPath(path);
        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
        path = last(path);
      }
      var func = object == null ? object : object[path];
      return func == null ? undefined : func.apply(object, args);
    }
    function isArrayLike(value) {
      return value != null && isLength(getLength(value));
    }
    function isIndex(value, length) {
      value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return value > -1 && value % 1 == 0 && value < length;
    }
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number' ? (isArrayLike(object) && isIndex(index, object.length)) : (type == 'string' && index in object)) {
        var other = object[index];
        return value === value ? (value === other) : (other !== other);
      }
      return false;
    }
    function isKey(value, object) {
      var type = typeof value;
      if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
        return true;
      }
      if (isArray(value)) {
        return false;
      }
      var result = !reIsDeepProp.test(value);
      return result || (object != null && value in toObject(object));
    }
    function isLaziable(func) {
      var funcName = getFuncName(func);
      if (!(funcName in LazyWrapper.prototype)) {
        return false;
      }
      var other = lodash[funcName];
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }
    function isLength(value) {
      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < ARY_FLAG;
      var isCombo = (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) || (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) || (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);
      if (!(isCommon || isCombo)) {
        return data;
      }
      if (srcBitmask & BIND_FLAG) {
        data[2] = source[2];
        newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
      }
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
      }
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
      }
      value = source[7];
      if (value) {
        data[7] = arrayCopy(value);
      }
      if (srcBitmask & ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      if (data[9] == null) {
        data[9] = source[9];
      }
      data[0] = source[0];
      data[1] = newBitmask;
      return data;
    }
    function pickByArray(object, props) {
      object = toObject(object);
      var index = -1,
          length = props.length,
          result = {};
      while (++index < length) {
        var key = props[index];
        if (key in object) {
          result[key] = object[key];
        }
      }
      return result;
    }
    function pickByCallback(object, predicate) {
      var result = {};
      baseForIn(object, function(value, key, object) {
        if (predicate(value, key, object)) {
          result[key] = value;
        }
      });
      return result;
    }
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = arrayCopy(array);
      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }
    var setData = (function() {
      var count = 0,
          lastCalled = 0;
      return function(key, value) {
        var stamp = now(),
            remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return key;
          }
        } else {
          count = 0;
        }
        return baseSetData(key, value);
      };
    }());
    function shimIsPlainObject(value) {
      var Ctor,
          support = lodash.support;
      if (!(isObjectLike(value) && objToString.call(value) == objectTag) || (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
        return false;
      }
      var result;
      baseForIn(value, function(subValue, key) {
        result = key;
      });
      return result === undefined || hasOwnProperty.call(value, result);
    }
    function shimKeys(object) {
      var props = keysIn(object),
          propsLength = props.length,
          length = propsLength && object.length;
      var allowIndexes = !!length && isLength(length) && (isArray(object) || isArguments(object));
      var index = -1,
          result = [];
      while (++index < propsLength) {
        var key = props[index];
        if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
          result.push(key);
        }
      }
      return result;
    }
    function toIterable(value) {
      if (value == null) {
        return [];
      }
      if (!isArrayLike(value)) {
        return values(value);
      }
      return isObject(value) ? value : Object(value);
    }
    function toObject(value) {
      return isObject(value) ? value : Object(value);
    }
    function toPath(value) {
      if (isArray(value)) {
        return value;
      }
      var result = [];
      baseToString(value).replace(rePropName, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    }
    function wrapperClone(wrapper) {
      return wrapper instanceof LazyWrapper ? wrapper.clone() : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
    }
    function chunk(array, size, guard) {
      if (guard ? isIterateeCall(array, size, guard) : size == null) {
        size = 1;
      } else {
        size = nativeMax(+size || 1, 1);
      }
      var index = 0,
          length = array ? array.length : 0,
          resIndex = -1,
          result = Array(ceil(length / size));
      while (index < length) {
        result[++resIndex] = baseSlice(array, index, (index += size));
      }
      return result;
    }
    function compact(array) {
      var index = -1,
          length = array ? array.length : 0,
          resIndex = -1,
          result = [];
      while (++index < length) {
        var value = array[index];
        if (value) {
          result[++resIndex] = value;
        }
      }
      return result;
    }
    var difference = restParam(function(array, values) {
      return isArrayLike(array) ? baseDifference(array, baseFlatten(values, false, true)) : [];
    });
    function drop(array, n, guard) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (guard ? isIterateeCall(array, n, guard) : n == null) {
        n = 1;
      }
      return baseSlice(array, n < 0 ? 0 : n);
    }
    function dropRight(array, n, guard) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (guard ? isIterateeCall(array, n, guard) : n == null) {
        n = 1;
      }
      n = length - (+n || 0);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }
    function dropRightWhile(array, predicate, thisArg) {
      return (array && array.length) ? baseWhile(array, getCallback(predicate, thisArg, 3), true, true) : [];
    }
    function dropWhile(array, predicate, thisArg) {
      return (array && array.length) ? baseWhile(array, getCallback(predicate, thisArg, 3), true) : [];
    }
    function fill(array, value, start, end) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }
    var findIndex = createFindIndex();
    var findLastIndex = createFindIndex(true);
    function first(array) {
      return array ? array[0] : undefined;
    }
    function flatten(array, isDeep, guard) {
      var length = array ? array.length : 0;
      if (guard && isIterateeCall(array, isDeep, guard)) {
        isDeep = false;
      }
      return length ? baseFlatten(array, isDeep) : [];
    }
    function flattenDeep(array) {
      var length = array ? array.length : 0;
      return length ? baseFlatten(array, true) : [];
    }
    function indexOf(array, value, fromIndex) {
      var length = array ? array.length : 0;
      if (!length) {
        return -1;
      }
      if (typeof fromIndex == 'number') {
        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
      } else if (fromIndex) {
        var index = binaryIndex(array, value),
            other = array[index];
        if (value === value ? (value === other) : (other !== other)) {
          return index;
        }
        return -1;
      }
      return baseIndexOf(array, value, fromIndex || 0);
    }
    function initial(array) {
      return dropRight(array, 1);
    }
    var intersection = restParam(function(arrays) {
      var othLength = arrays.length,
          othIndex = othLength,
          caches = Array(length),
          indexOf = getIndexOf(),
          isCommon = indexOf == baseIndexOf,
          result = [];
      while (othIndex--) {
        var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
        caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
      }
      var array = arrays[0],
          index = -1,
          length = array ? array.length : 0,
          seen = caches[0];
      outer: while (++index < length) {
        value = array[index];
        if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
          var othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(value);
          }
          result.push(value);
        }
      }
      return result;
    });
    function last(array) {
      var length = array ? array.length : 0;
      return length ? array[length - 1] : undefined;
    }
    function lastIndexOf(array, value, fromIndex) {
      var length = array ? array.length : 0;
      if (!length) {
        return -1;
      }
      var index = length;
      if (typeof fromIndex == 'number') {
        index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
      } else if (fromIndex) {
        index = binaryIndex(array, value, true) - 1;
        var other = array[index];
        if (value === value ? (value === other) : (other !== other)) {
          return index;
        }
        return -1;
      }
      if (value !== value) {
        return indexOfNaN(array, index, true);
      }
      while (index--) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function pull() {
      var args = arguments,
          array = args[0];
      if (!(array && array.length)) {
        return array;
      }
      var index = 0,
          indexOf = getIndexOf(),
          length = args.length;
      while (++index < length) {
        var fromIndex = 0,
            value = args[index];
        while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }
    var pullAt = restParam(function(array, indexes) {
      indexes = baseFlatten(indexes);
      var result = baseAt(array, indexes);
      basePullAt(array, indexes.sort(baseCompareAscending));
      return result;
    });
    function remove(array, predicate, thisArg) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;
      predicate = getCallback(predicate, thisArg, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }
    function rest(array) {
      return drop(array, 1);
    }
    function slice(array, start, end) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      return baseSlice(array, start, end);
    }
    var sortedIndex = createSortedIndex();
    var sortedLastIndex = createSortedIndex(true);
    function take(array, n, guard) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (guard ? isIterateeCall(array, n, guard) : n == null) {
        n = 1;
      }
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }
    function takeRight(array, n, guard) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (guard ? isIterateeCall(array, n, guard) : n == null) {
        n = 1;
      }
      n = length - (+n || 0);
      return baseSlice(array, n < 0 ? 0 : n);
    }
    function takeRightWhile(array, predicate, thisArg) {
      return (array && array.length) ? baseWhile(array, getCallback(predicate, thisArg, 3), false, true) : [];
    }
    function takeWhile(array, predicate, thisArg) {
      return (array && array.length) ? baseWhile(array, getCallback(predicate, thisArg, 3)) : [];
    }
    var union = restParam(function(arrays) {
      return baseUniq(baseFlatten(arrays, false, true));
    });
    function uniq(array, isSorted, iteratee, thisArg) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (isSorted != null && typeof isSorted != 'boolean') {
        thisArg = iteratee;
        iteratee = isIterateeCall(array, isSorted, thisArg) ? null : isSorted;
        isSorted = false;
      }
      var callback = getCallback();
      if (!(iteratee == null && callback === baseCallback)) {
        iteratee = callback(iteratee, thisArg, 3);
      }
      return (isSorted && getIndexOf() == baseIndexOf) ? sortedUniq(array, iteratee) : baseUniq(array, iteratee);
    }
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var index = -1,
          length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLike(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      var result = Array(length);
      while (++index < length) {
        result[index] = arrayMap(array, baseProperty(index));
      }
      return result;
    }
    function unzipWith(array, iteratee, thisArg) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      iteratee = bindCallback(iteratee, thisArg, 4);
      return arrayMap(result, function(group) {
        return arrayReduce(group, iteratee, undefined, true);
      });
    }
    var without = restParam(function(array, values) {
      return isArrayLike(array) ? baseDifference(array, values) : [];
    });
    function xor() {
      var index = -1,
          length = arguments.length;
      while (++index < length) {
        var array = arguments[index];
        if (isArrayLike(array)) {
          var result = result ? baseDifference(result, array).concat(baseDifference(array, result)) : array;
        }
      }
      return result ? baseUniq(result) : [];
    }
    var zip = restParam(unzip);
    function zipObject(props, values) {
      var index = -1,
          length = props ? props.length : 0,
          result = {};
      if (length && !values && !isArray(props[0])) {
        values = [];
      }
      while (++index < length) {
        var key = props[index];
        if (values) {
          result[key] = values[index];
        } else if (key) {
          result[key[0]] = key[1];
        }
      }
      return result;
    }
    var zipWith = restParam(function(arrays) {
      var length = arrays.length,
          iteratee = length > 2 ? arrays[length - 2] : undefined,
          thisArg = length > 1 ? arrays[length - 1] : undefined;
      if (length > 2 && typeof iteratee == 'function') {
        length -= 2;
      } else {
        iteratee = (length > 1 && typeof thisArg == 'function') ? (--length, thisArg) : undefined;
        thisArg = undefined;
      }
      arrays.length = length;
      return unzipWith(arrays, iteratee, thisArg);
    });
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }
    function tap(value, interceptor, thisArg) {
      interceptor.call(thisArg, value);
      return value;
    }
    function thru(value, interceptor, thisArg) {
      return interceptor.call(thisArg, value);
    }
    function wrapperChain() {
      return chain(this);
    }
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }
    function wrapperPlant(value) {
      var result,
          parent = this;
      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        if (this.__actions__.length) {
          value = new LazyWrapper(this);
        }
        return new LodashWrapper(value.reverse(), this.__chain__);
      }
      return this.thru(function(value) {
        return value.reverse();
      });
    }
    function wrapperToString() {
      return (this.value() + '');
    }
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }
    var at = restParam(function(collection, props) {
      return baseAt(collection, baseFlatten(props));
    });
    var countBy = createAggregator(function(result, value, key) {
      hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
    });
    function every(collection, predicate, thisArg) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
        predicate = null;
      }
      if (typeof predicate != 'function' || thisArg !== undefined) {
        predicate = getCallback(predicate, thisArg, 3);
      }
      return func(collection, predicate);
    }
    function filter(collection, predicate, thisArg) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      predicate = getCallback(predicate, thisArg, 3);
      return func(collection, predicate);
    }
    var find = createFind(baseEach);
    var findLast = createFind(baseEachRight, true);
    function findWhere(collection, source) {
      return find(collection, baseMatches(source));
    }
    var forEach = createForEach(arrayEach, baseEach);
    var forEachRight = createForEach(arrayEachRight, baseEachRight);
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        result[key] = [value];
      }
    });
    function includes(collection, target, fromIndex, guard) {
      var length = collection ? getLength(collection) : 0;
      if (!isLength(length)) {
        collection = values(collection);
        length = collection.length;
      }
      if (!length) {
        return false;
      }
      if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
        fromIndex = 0;
      } else {
        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
      }
      return (typeof collection == 'string' || !isArray(collection) && isString(collection)) ? (fromIndex < length && collection.indexOf(target, fromIndex) > -1) : (getIndexOf(collection, target, fromIndex) > -1);
    }
    var indexBy = createAggregator(function(result, value, key) {
      result[key] = value;
    });
    var invoke = restParam(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          isProp = isKey(path),
          result = isArrayLike(collection) ? Array(collection.length) : [];
      baseEach(collection, function(value) {
        var func = isFunc ? path : ((isProp && value != null) ? value[path] : null);
        result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
      });
      return result;
    });
    function map(collection, iteratee, thisArg) {
      var func = isArray(collection) ? arrayMap : baseMap;
      iteratee = getCallback(iteratee, thisArg, 3);
      return func(collection, iteratee);
    }
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() {
      return [[], []];
    });
    function pluck(collection, path) {
      return map(collection, property(path));
    }
    var reduce = createReduce(arrayReduce, baseEach);
    var reduceRight = createReduce(arrayReduceRight, baseEachRight);
    function reject(collection, predicate, thisArg) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      predicate = getCallback(predicate, thisArg, 3);
      return func(collection, function(value, index, collection) {
        return !predicate(value, index, collection);
      });
    }
    function sample(collection, n, guard) {
      if (guard ? isIterateeCall(collection, n, guard) : n == null) {
        collection = toIterable(collection);
        var length = collection.length;
        return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
      }
      var index = -1,
          result = toArray(collection),
          length = result.length,
          lastIndex = length - 1;
      n = nativeMin(n < 0 ? 0 : (+n || 0), length);
      while (++index < n) {
        var rand = baseRandom(index, lastIndex),
            value = result[rand];
        result[rand] = result[index];
        result[index] = value;
      }
      result.length = n;
      return result;
    }
    function shuffle(collection) {
      return sample(collection, POSITIVE_INFINITY);
    }
    function size(collection) {
      var length = collection ? getLength(collection) : 0;
      return isLength(length) ? length : keys(collection).length;
    }
    function some(collection, predicate, thisArg) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
        predicate = null;
      }
      if (typeof predicate != 'function' || thisArg !== undefined) {
        predicate = getCallback(predicate, thisArg, 3);
      }
      return func(collection, predicate);
    }
    function sortBy(collection, iteratee, thisArg) {
      if (collection == null) {
        return [];
      }
      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
        iteratee = null;
      }
      var index = -1;
      iteratee = getCallback(iteratee, thisArg, 3);
      var result = baseMap(collection, function(value, key, collection) {
        return {
          'criteria': iteratee(value, key, collection),
          'index': ++index,
          'value': value
        };
      });
      return baseSortBy(result, compareAscending);
    }
    var sortByAll = restParam(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var guard = iteratees[2];
      if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
        iteratees.length = 1;
      }
      return baseSortByOrder(collection, baseFlatten(iteratees), []);
    });
    function sortByOrder(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (guard && isIterateeCall(iteratees, orders, guard)) {
        orders = null;
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseSortByOrder(collection, iteratees, orders);
    }
    function where(collection, source) {
      return filter(collection, baseMatches(source));
    }
    var now = nativeNow || function() {
      return new Date().getTime();
    };
    function after(n, func) {
      if (typeof func != 'function') {
        if (typeof n == 'function') {
          var temp = n;
          n = func;
          func = temp;
        } else {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
      }
      n = nativeIsFinite(n = +n) ? n : 0;
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }
    function ary(func, n, guard) {
      if (guard && isIterateeCall(func, n, guard)) {
        n = null;
      }
      n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
      return createWrapper(func, ARY_FLAG, null, null, null, null, n);
    }
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        if (typeof n == 'function') {
          var temp = n;
          n = func;
          func = temp;
        } else {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
      }
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = null;
        }
        return result;
      };
    }
    var bind = restParam(function(func, thisArg, partials) {
      var bitmask = BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, bind.placeholder);
        bitmask |= PARTIAL_FLAG;
      }
      return createWrapper(func, bitmask, thisArg, partials, holders);
    });
    var bindAll = restParam(function(object, methodNames) {
      methodNames = methodNames.length ? baseFlatten(methodNames) : functions(object);
      var index = -1,
          length = methodNames.length;
      while (++index < length) {
        var key = methodNames[index];
        object[key] = createWrapper(object[key], BIND_FLAG, object);
      }
      return object;
    });
    var bindKey = restParam(function(object, key, partials) {
      var bitmask = BIND_FLAG | BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, bindKey.placeholder);
        bitmask |= PARTIAL_FLAG;
      }
      return createWrapper(key, bitmask, object, partials, holders);
    });
    var curry = createCurry(CURRY_FLAG);
    var curryRight = createCurry(CURRY_RIGHT_FLAG);
    function debounce(func, wait, options) {
      var args,
          maxTimeoutId,
          result,
          stamp,
          thisArg,
          timeoutId,
          trailingCall,
          lastCalled = 0,
          maxWait = false,
          trailing = true;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = wait < 0 ? 0 : (+wait || 0);
      if (options === true) {
        var leading = true;
        trailing = false;
      } else if (isObject(options)) {
        leading = options.leading;
        maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
        trailing = 'trailing' in options ? options.trailing : trailing;
      }
      function cancel() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        if (maxTimeoutId) {
          clearTimeout(maxTimeoutId);
        }
        maxTimeoutId = timeoutId = trailingCall = undefined;
      }
      function delayed() {
        var remaining = wait - (now() - stamp);
        if (remaining <= 0 || remaining > wait) {
          if (maxTimeoutId) {
            clearTimeout(maxTimeoutId);
          }
          var isCalled = trailingCall;
          maxTimeoutId = timeoutId = trailingCall = undefined;
          if (isCalled) {
            lastCalled = now();
            result = func.apply(thisArg, args);
            if (!timeoutId && !maxTimeoutId) {
              args = thisArg = null;
            }
          }
        } else {
          timeoutId = setTimeout(delayed, remaining);
        }
      }
      function maxDelayed() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        maxTimeoutId = timeoutId = trailingCall = undefined;
        if (trailing || (maxWait !== wait)) {
          lastCalled = now();
          result = func.apply(thisArg, args);
          if (!timeoutId && !maxTimeoutId) {
            args = thisArg = null;
          }
        }
      }
      function debounced() {
        args = arguments;
        stamp = now();
        thisArg = this;
        trailingCall = trailing && (timeoutId || !leading);
        if (maxWait === false) {
          var leadingCall = leading && !timeoutId;
        } else {
          if (!maxTimeoutId && !leading) {
            lastCalled = stamp;
          }
          var remaining = maxWait - (stamp - lastCalled),
              isCalled = remaining <= 0 || remaining > maxWait;
          if (isCalled) {
            if (maxTimeoutId) {
              maxTimeoutId = clearTimeout(maxTimeoutId);
            }
            lastCalled = stamp;
            result = func.apply(thisArg, args);
          } else if (!maxTimeoutId) {
            maxTimeoutId = setTimeout(maxDelayed, remaining);
          }
        }
        if (isCalled && timeoutId) {
          timeoutId = clearTimeout(timeoutId);
        } else if (!timeoutId && wait !== maxWait) {
          timeoutId = setTimeout(delayed, wait);
        }
        if (leadingCall) {
          isCalled = true;
          result = func.apply(thisArg, args);
        }
        if (isCalled && !timeoutId && !maxTimeoutId) {
          args = thisArg = null;
        }
        return result;
      }
      debounced.cancel = cancel;
      return debounced;
    }
    var defer = restParam(function(func, args) {
      return baseDelay(func, 1, args);
    });
    var delay = restParam(function(func, wait, args) {
      return baseDelay(func, wait, args);
    });
    var flow = createFlow();
    var flowRight = createFlow(true);
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result);
        return result;
      };
      memoized.cache = new memoize.Cache;
      return memoized;
    }
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        return !predicate.apply(this, arguments);
      };
    }
    function once(func) {
      return before(2, func);
    }
    var partial = createPartial(PARTIAL_FLAG);
    var partialRight = createPartial(PARTIAL_RIGHT_FLAG);
    var rearg = restParam(function(func, indexes) {
      return createWrapper(func, REARG_FLAG, null, null, null, baseFlatten(indexes));
    });
    function restParam(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            rest = Array(length);
        while (++index < length) {
          rest[index] = args[start + index];
        }
        switch (start) {
          case 0:
            return func.call(this, rest);
          case 1:
            return func.call(this, args[0], rest);
          case 2:
            return func.call(this, args[0], args[1], rest);
        }
        var otherArgs = Array(start + 1);
        index = -1;
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = rest;
        return func.apply(this, otherArgs);
      };
    }
    function spread(func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function(array) {
        return func.apply(this, array);
      };
    }
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (options === false) {
        leading = false;
      } else if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      debounceOptions.leading = leading;
      debounceOptions.maxWait = +wait;
      debounceOptions.trailing = trailing;
      return debounce(func, wait, debounceOptions);
    }
    function wrap(value, wrapper) {
      wrapper = wrapper == null ? identity : wrapper;
      return createWrapper(wrapper, PARTIAL_FLAG, null, [value], []);
    }
    function clone(value, isDeep, customizer, thisArg) {
      if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
        isDeep = false;
      } else if (typeof isDeep == 'function') {
        thisArg = customizer;
        customizer = isDeep;
        isDeep = false;
      }
      return typeof customizer == 'function' ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 1)) : baseClone(value, isDeep);
    }
    function cloneDeep(value, customizer, thisArg) {
      return typeof customizer == 'function' ? baseClone(value, true, bindCallback(customizer, thisArg, 1)) : baseClone(value, true);
    }
    function gt(value, other) {
      return value > other;
    }
    function gte(value, other) {
      return value >= other;
    }
    function isArguments(value) {
      return isObjectLike(value) && isArrayLike(value) && objToString.call(value) == argsTag;
    }
    var isArray = nativeIsArray || function(value) {
      return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
    };
    function isBoolean(value) {
      return value === true || value === false || (isObjectLike(value) && objToString.call(value) == boolTag);
    }
    function isDate(value) {
      return isObjectLike(value) && objToString.call(value) == dateTag;
    }
    function isElement(value) {
      return !!value && value.nodeType === 1 && isObjectLike(value) && (objToString.call(value).indexOf('Element') > -1);
    }
    if (!support.dom) {
      isElement = function(value) {
        return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
      };
    }
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) || (isObjectLike(value) && isFunction(value.splice)))) {
        return !value.length;
      }
      return !keys(value).length;
    }
    function isEqual(value, other, customizer, thisArg) {
      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, customizer) : !!result;
    }
    function isError(value) {
      return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
    }
    var isFinite = nativeNumIsFinite || function(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    };
    var isFunction = !(baseIsFunction(/x/) || (Uint8Array && !baseIsFunction(Uint8Array))) ? baseIsFunction : function(value) {
      return objToString.call(value) == funcTag;
    };
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }
    function isMatch(object, source, customizer, thisArg) {
      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
      return baseIsMatch(object, getMatchData(source), customizer);
    }
    function isNaN(value) {
      return isNumber(value) && value != +value;
    }
    function isNative(value) {
      if (value == null) {
        return false;
      }
      if (objToString.call(value) == funcTag) {
        return reIsNative.test(fnToString.call(value));
      }
      return isObjectLike(value) && reIsHostCtor.test(value);
    }
    function isNull(value) {
      return value === null;
    }
    function isNumber(value) {
      return typeof value == 'number' || (isObjectLike(value) && objToString.call(value) == numberTag);
    }
    var isPlainObject = !getPrototypeOf ? shimIsPlainObject : function(value) {
      if (!(value && objToString.call(value) == objectTag)) {
        return false;
      }
      var valueOf = getNative(value, 'valueOf'),
          objProto = valueOf && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto);
      return objProto ? (value == objProto || getPrototypeOf(value) == objProto) : shimIsPlainObject(value);
    };
    function isRegExp(value) {
      return isObjectLike(value) && objToString.call(value) == regexpTag;
    }
    function isString(value) {
      return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
    }
    function isTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
    }
    function isUndefined(value) {
      return value === undefined;
    }
    function lt(value, other) {
      return value < other;
    }
    function lte(value, other) {
      return value <= other;
    }
    function toArray(value) {
      var length = value ? getLength(value) : 0;
      if (!isLength(length)) {
        return values(value);
      }
      if (!length) {
        return [];
      }
      return arrayCopy(value);
    }
    function toPlainObject(value) {
      return baseCopy(value, keysIn(value));
    }
    var assign = createAssigner(function(object, source, customizer) {
      return customizer ? assignWith(object, source, customizer) : baseAssign(object, source);
    });
    function create(prototype, properties, guard) {
      var result = baseCreate(prototype);
      if (guard && isIterateeCall(prototype, properties, guard)) {
        properties = null;
      }
      return properties ? baseAssign(result, properties) : result;
    }
    var defaults = restParam(function(args) {
      var object = args[0];
      if (object == null) {
        return object;
      }
      args.push(assignDefaults);
      return assign.apply(undefined, args);
    });
    var findKey = createFindKey(baseForOwn);
    var findLastKey = createFindKey(baseForOwnRight);
    var forIn = createForIn(baseFor);
    var forInRight = createForIn(baseForRight);
    var forOwn = createForOwn(baseForOwn);
    var forOwnRight = createForOwn(baseForOwnRight);
    function functions(object) {
      return baseFunctions(object, keysIn(object));
    }
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
      return result === undefined ? defaultValue : result;
    }
    function has(object, path) {
      if (object == null) {
        return false;
      }
      var result = hasOwnProperty.call(object, path);
      if (!result && !isKey(path)) {
        path = toPath(path);
        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
        if (object == null) {
          return false;
        }
        path = last(path);
        result = hasOwnProperty.call(object, path);
      }
      return result || (isLength(object.length) && isIndex(path, object.length) && (isArray(object) || isArguments(object)));
    }
    function invert(object, multiValue, guard) {
      if (guard && isIterateeCall(object, multiValue, guard)) {
        multiValue = null;
      }
      var index = -1,
          props = keys(object),
          length = props.length,
          result = {};
      while (++index < length) {
        var key = props[index],
            value = object[key];
        if (multiValue) {
          if (hasOwnProperty.call(result, value)) {
            result[value].push(key);
          } else {
            result[value] = [key];
          }
        } else {
          result[value] = key;
        }
      }
      return result;
    }
    var keys = !nativeKeys ? shimKeys : function(object) {
      var Ctor = object == null ? null : object.constructor;
      if ((typeof Ctor == 'function' && Ctor.prototype === object) || (typeof object != 'function' && isArrayLike(object))) {
        return shimKeys(object);
      }
      return isObject(object) ? nativeKeys(object) : [];
    };
    function keysIn(object) {
      if (object == null) {
        return [];
      }
      if (!isObject(object)) {
        object = Object(object);
      }
      var length = object.length;
      length = (length && isLength(length) && (isArray(object) || isArguments(object)) && length) || 0;
      var Ctor = object.constructor,
          index = -1,
          isProto = typeof Ctor == 'function' && Ctor.prototype === object,
          result = Array(length),
          skipIndexes = length > 0;
      while (++index < length) {
        result[index] = (index + '');
      }
      for (var key in object) {
        if (!(skipIndexes && isIndex(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    var mapKeys = createObjectMapper(true);
    var mapValues = createObjectMapper();
    var merge = createAssigner(baseMerge);
    var omit = restParam(function(object, props) {
      if (object == null) {
        return {};
      }
      if (typeof props[0] != 'function') {
        var props = arrayMap(baseFlatten(props), String);
        return pickByArray(object, baseDifference(keysIn(object), props));
      }
      var predicate = bindCallback(props[0], props[1], 3);
      return pickByCallback(object, function(value, key, object) {
        return !predicate(value, key, object);
      });
    });
    function pairs(object) {
      object = toObject(object);
      var index = -1,
          props = keys(object),
          length = props.length,
          result = Array(length);
      while (++index < length) {
        var key = props[index];
        result[index] = [key, object[key]];
      }
      return result;
    }
    var pick = restParam(function(object, props) {
      if (object == null) {
        return {};
      }
      return typeof props[0] == 'function' ? pickByCallback(object, bindCallback(props[0], props[1], 3)) : pickByArray(object, baseFlatten(props));
    });
    function result(object, path, defaultValue) {
      var result = object == null ? undefined : object[path];
      if (result === undefined) {
        if (object != null && !isKey(path, object)) {
          path = toPath(path);
          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
          result = object == null ? undefined : object[last(path)];
        }
        result = result === undefined ? defaultValue : result;
      }
      return isFunction(result) ? result.call(object) : result;
    }
    function set(object, path, value) {
      if (object == null) {
        return object;
      }
      var pathKey = (path + '');
      path = (object[pathKey] != null || isKey(path, object)) ? [pathKey] : toPath(path);
      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;
      while (nested != null && ++index < length) {
        var key = path[index];
        if (isObject(nested)) {
          if (index == lastIndex) {
            nested[key] = value;
          } else if (nested[key] == null) {
            nested[key] = isIndex(path[index + 1]) ? [] : {};
          }
        }
        nested = nested[key];
      }
      return object;
    }
    function transform(object, iteratee, accumulator, thisArg) {
      var isArr = isArray(object) || isTypedArray(object);
      iteratee = getCallback(iteratee, thisArg, 4);
      if (accumulator == null) {
        if (isArr || isObject(object)) {
          var Ctor = object.constructor;
          if (isArr) {
            accumulator = isArray(object) ? new Ctor : [];
          } else {
            accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : null);
          }
        } else {
          accumulator = {};
        }
      }
      (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }
    function values(object) {
      return baseValues(object, keys(object));
    }
    function valuesIn(object) {
      return baseValues(object, keysIn(object));
    }
    function inRange(value, start, end) {
      start = +start || 0;
      if (typeof end === 'undefined') {
        end = start;
        start = 0;
      } else {
        end = +end || 0;
      }
      return value >= nativeMin(start, end) && value < nativeMax(start, end);
    }
    function random(min, max, floating) {
      if (floating && isIterateeCall(min, max, floating)) {
        max = floating = null;
      }
      var noMin = min == null,
          noMax = max == null;
      if (floating == null) {
        if (noMax && typeof min == 'boolean') {
          floating = min;
          min = 1;
        } else if (typeof max == 'boolean') {
          floating = max;
          noMax = true;
        }
      }
      if (noMin && noMax) {
        max = 1;
        noMax = false;
      }
      min = +min || 0;
      if (noMax) {
        max = min;
        min = 0;
      } else {
        max = +max || 0;
      }
      if (floating || min % 1 || max % 1) {
        var rand = nativeRandom();
        return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1)))), max);
      }
      return baseRandom(min, max);
    }
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
    });
    function capitalize(string) {
      string = baseToString(string);
      return string && (string.charAt(0).toUpperCase() + string.slice(1));
    }
    function deburr(string) {
      string = baseToString(string);
      return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
    }
    function endsWith(string, target, position) {
      string = baseToString(string);
      target = (target + '');
      var length = string.length;
      position = position === undefined ? length : nativeMin(position < 0 ? 0 : (+position || 0), length);
      position -= target.length;
      return position >= 0 && string.indexOf(target, position) == position;
    }
    function escape(string) {
      string = baseToString(string);
      return (string && reHasUnescapedHtml.test(string)) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
    }
    function escapeRegExp(string) {
      string = baseToString(string);
      return (string && reHasRegExpChars.test(string)) ? string.replace(reRegExpChars, '\\$&') : string;
    }
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });
    function pad(string, length, chars) {
      string = baseToString(string);
      length = +length;
      var strLength = string.length;
      if (strLength >= length || !nativeIsFinite(length)) {
        return string;
      }
      var mid = (length - strLength) / 2,
          leftLength = floor(mid),
          rightLength = ceil(mid);
      chars = createPadding('', rightLength, chars);
      return chars.slice(0, leftLength) + string + chars;
    }
    var padLeft = createPadDir();
    var padRight = createPadDir(true);
    function parseInt(string, radix, guard) {
      if (guard && isIterateeCall(string, radix, guard)) {
        radix = 0;
      }
      return nativeParseInt(string, radix);
    }
    if (nativeParseInt(whitespace + '08') != 8) {
      parseInt = function(string, radix, guard) {
        if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
          radix = 0;
        } else if (radix) {
          radix = +radix;
        }
        string = trim(string);
        return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
      };
    }
    function repeat(string, n) {
      var result = '';
      string = baseToString(string);
      n = +n;
      if (n < 1 || !string || !nativeIsFinite(n)) {
        return result;
      }
      do {
        if (n % 2) {
          result += string;
        }
        n = floor(n / 2);
        string += string;
      } while (n);
      return result;
    }
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
    });
    function startsWith(string, target, position) {
      string = baseToString(string);
      position = position == null ? 0 : nativeMin(position < 0 ? 0 : (+position || 0), string.length);
      return string.lastIndexOf(target, position) == position;
    }
    function template(string, options, otherOptions) {
      var settings = lodash.templateSettings;
      if (otherOptions && isIterateeCall(string, options, otherOptions)) {
        options = otherOptions = null;
      }
      string = baseToString(string);
      options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);
      var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);
      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";
      var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g');
      var sourceURL = '//# sourceURL=' + ('sourceURL' in options ? options.sourceURL : ('lodash.templateSources[' + (++templateCounter) + ']')) + '\n';
      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;
        return match;
      });
      source += "';\n";
      var variable = options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;');
      source = 'function(' + (variable || 'obj') + ') {\n' + (variable ? '' : 'obj || (obj = {});\n') + "var __t, __p = ''" + (isEscaping ? ', __e = _.escape' : '') + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
      });
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }
    function trim(string, chars, guard) {
      var value = string;
      string = baseToString(string);
      if (!string) {
        return string;
      }
      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
        return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
      }
      chars = (chars + '');
      return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
    }
    function trimLeft(string, chars, guard) {
      var value = string;
      string = baseToString(string);
      if (!string) {
        return string;
      }
      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
        return string.slice(trimmedLeftIndex(string));
      }
      return string.slice(charsLeftIndex(string, (chars + '')));
    }
    function trimRight(string, chars, guard) {
      var value = string;
      string = baseToString(string);
      if (!string) {
        return string;
      }
      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
        return string.slice(0, trimmedRightIndex(string) + 1);
      }
      return string.slice(0, charsRightIndex(string, (chars + '')) + 1);
    }
    function trunc(string, options, guard) {
      if (guard && isIterateeCall(string, options, guard)) {
        options = null;
      }
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;
      if (options != null) {
        if (isObject(options)) {
          var separator = 'separator' in options ? options.separator : separator;
          length = 'length' in options ? (+options.length || 0) : length;
          omission = 'omission' in options ? baseToString(options.omission) : omission;
        } else {
          length = +options || 0;
        }
      }
      string = baseToString(string);
      if (length >= string.length) {
        return string;
      }
      var end = length - omission.length;
      if (end < 1) {
        return omission;
      }
      var result = string.slice(0, end);
      if (separator == null) {
        return result + omission;
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              newEnd,
              substring = string.slice(0, end);
          if (!separator.global) {
            separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            newEnd = match.index;
          }
          result = result.slice(0, newEnd == null ? end : newEnd);
        }
      } else if (string.indexOf(separator, end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }
    function unescape(string) {
      string = baseToString(string);
      return (string && reHasEscapedHtml.test(string)) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
    }
    function words(string, pattern, guard) {
      if (guard && isIterateeCall(string, pattern, guard)) {
        pattern = null;
      }
      string = baseToString(string);
      return string.match(pattern || reWords) || [];
    }
    var attempt = restParam(function(func, args) {
      try {
        return func.apply(undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });
    function callback(func, thisArg, guard) {
      if (guard && isIterateeCall(func, thisArg, guard)) {
        thisArg = null;
      }
      return isObjectLike(func) ? matches(func) : baseCallback(func, thisArg);
    }
    function constant(value) {
      return function() {
        return value;
      };
    }
    function identity(value) {
      return value;
    }
    function matches(source) {
      return baseMatches(baseClone(source, true));
    }
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, true));
    }
    var method = restParam(function(path, args) {
      return function(object) {
        return invokePath(object, path, args);
      };
    });
    var methodOf = restParam(function(object, args) {
      return function(path) {
        return invokePath(object, path, args);
      };
    });
    function mixin(object, source, options) {
      if (options == null) {
        var isObj = isObject(source),
            props = isObj ? keys(source) : null,
            methodNames = (props && props.length) ? baseFunctions(source, props) : null;
        if (!(methodNames ? methodNames.length : isObj)) {
          methodNames = false;
          options = source;
          source = object;
          object = this;
        }
      }
      if (!methodNames) {
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = true,
          index = -1,
          isFunc = isFunction(object),
          length = methodNames.length;
      if (options === false) {
        chain = false;
      } else if (isObject(options) && 'chain' in options) {
        chain = options.chain;
      }
      while (++index < length) {
        var methodName = methodNames[index],
            func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = (function(func) {
            return function() {
              var chainAll = this.__chain__;
              if (chain || chainAll) {
                var result = object(this.__wrapped__),
                    actions = result.__actions__ = arrayCopy(this.__actions__);
                actions.push({
                  'func': func,
                  'args': arguments,
                  'thisArg': object
                });
                result.__chain__ = chainAll;
                return result;
              }
              var args = [this.value()];
              push.apply(args, arguments);
              return func.apply(object, args);
            };
          }(func));
        }
      }
      return object;
    }
    function noConflict() {
      context._ = oldDash;
      return this;
    }
    function noop() {}
    function property(path) {
      return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
    }
    function propertyOf(object) {
      return function(path) {
        return baseGet(object, toPath(path), path + '');
      };
    }
    function range(start, end, step) {
      if (step && isIterateeCall(start, end, step)) {
        end = step = null;
      }
      start = +start || 0;
      step = step == null ? 1 : (+step || 0);
      if (end == null) {
        end = start;
        start = 0;
      } else {
        end = +end || 0;
      }
      var index = -1,
          length = nativeMax(ceil((end - start) / (step || 1)), 0),
          result = Array(length);
      while (++index < length) {
        result[index] = start;
        start += step;
      }
      return result;
    }
    function times(n, iteratee, thisArg) {
      n = floor(n);
      if (n < 1 || !nativeIsFinite(n)) {
        return [];
      }
      var index = -1,
          result = Array(nativeMin(n, MAX_ARRAY_LENGTH));
      iteratee = bindCallback(iteratee, thisArg, 1);
      while (++index < n) {
        if (index < MAX_ARRAY_LENGTH) {
          result[index] = iteratee(index);
        } else {
          iteratee(index);
        }
      }
      return result;
    }
    function uniqueId(prefix) {
      var id = ++idCounter;
      return baseToString(prefix) + id;
    }
    function add(augend, addend) {
      return (+augend || 0) + (+addend || 0);
    }
    var max = createExtremum(gt, NEGATIVE_INFINITY);
    var min = createExtremum(lt, POSITIVE_INFINITY);
    function sum(collection, iteratee, thisArg) {
      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
        iteratee = null;
      }
      var callback = getCallback(),
          noIteratee = iteratee == null;
      if (!(noIteratee && callback === baseCallback)) {
        noIteratee = false;
        iteratee = callback(iteratee, thisArg, 3);
      }
      return noIteratee ? arraySum(isArray(collection) ? collection : toIterable(collection)) : baseSum(collection, iteratee);
    }
    lodash.prototype = baseLodash.prototype;
    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;
    MapCache.prototype['delete'] = mapDelete;
    MapCache.prototype.get = mapGet;
    MapCache.prototype.has = mapHas;
    MapCache.prototype.set = mapSet;
    SetCache.prototype.push = cachePush;
    memoize.Cache = MapCache;
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.callback = callback;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.functions = functions;
    lodash.groupBy = groupBy;
    lodash.indexBy = indexBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.invert = invert;
    lodash.invoke = invoke;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.omit = omit;
    lodash.once = once;
    lodash.pairs = pairs;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pluck = pluck;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.restParam = restParam;
    lodash.set = set;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortByAll = sortByAll;
    lodash.sortByOrder = sortByOrder;
    lodash.spread = spread;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.times = times;
    lodash.toArray = toArray;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.union = union;
    lodash.uniq = uniq;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.where = where;
    lodash.without = without;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipWith = zipWith;
    lodash.backflow = flowRight;
    lodash.collect = map;
    lodash.compose = flowRight;
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.extend = assign;
    lodash.iteratee = callback;
    lodash.methods = functions;
    lodash.object = zipObject;
    lodash.select = filter;
    lodash.tail = rest;
    lodash.unique = uniq;
    mixin(lodash, lodash);
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.deburr = deburr;
    lodash.endsWith = endsWith;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.findWhere = findWhere;
    lodash.first = first;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isBoolean = isBoolean;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isMatch = isMatch;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isString = isString;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.min = min;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padLeft = padLeft;
    lodash.padRight = padRight;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.result = result;
    lodash.runInContext = runInContext;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.sum = sum;
    lodash.template = template;
    lodash.trim = trim;
    lodash.trimLeft = trimLeft;
    lodash.trimRight = trimRight;
    lodash.trunc = trunc;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.words = words;
    lodash.all = every;
    lodash.any = some;
    lodash.contains = includes;
    lodash.eq = isEqual;
    lodash.detect = find;
    lodash.foldl = reduce;
    lodash.foldr = reduceRight;
    lodash.head = first;
    lodash.include = includes;
    lodash.inject = reduce;
    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!lodash.prototype[methodName]) {
          source[methodName] = func;
        }
      });
      return source;
    }()), false);
    lodash.sample = sample;
    lodash.prototype.sample = function(n) {
      if (!this.__chain__ && n == null) {
        return sample(this.value());
      }
      return this.thru(function(value) {
        return sample(value, n);
      });
    };
    lodash.VERSION = VERSION;
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });
    arrayEach(['dropWhile', 'filter', 'map', 'takeWhile'], function(methodName, type) {
      var isFilter = type != LAZY_MAP_FLAG,
          isDropWhile = type == LAZY_DROP_WHILE_FLAG;
      LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
        var filtered = this.__filtered__,
            result = (filtered && isDropWhile) ? new LazyWrapper(this) : this.clone(),
            iteratees = result.__iteratees__ || (result.__iteratees__ = []);
        iteratees.push({
          'done': false,
          'count': 0,
          'index': 0,
          'iteratee': getCallback(iteratee, thisArg, 1),
          'limit': -1,
          'type': type
        });
        result.__filtered__ = filtered || isFilter;
        return result;
      };
    });
    arrayEach(['drop', 'take'], function(methodName, index) {
      var whileName = methodName + 'While';
      LazyWrapper.prototype[methodName] = function(n) {
        var filtered = this.__filtered__,
            result = (filtered && !index) ? this.dropWhile() : this.clone();
        n = n == null ? 1 : nativeMax(floor(n) || 0, 0);
        if (filtered) {
          if (index) {
            result.__takeCount__ = nativeMin(result.__takeCount__, n);
          } else {
            last(result.__iteratees__).limit = n;
          }
        } else {
          var views = result.__views__ || (result.__views__ = []);
          views.push({
            'size': n,
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };
      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
      LazyWrapper.prototype[methodName + 'RightWhile'] = function(predicate, thisArg) {
        return this.reverse()[whileName](predicate, thisArg).reverse();
      };
    });
    arrayEach(['first', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');
      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });
    arrayEach(['initial', 'rest'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');
      LazyWrapper.prototype[methodName] = function() {
        return this[dropName](1);
      };
    });
    arrayEach(['pluck', 'where'], function(methodName, index) {
      var operationName = index ? 'filter' : 'map',
          createCallback = index ? baseMatches : property;
      LazyWrapper.prototype[methodName] = function(value) {
        return this[operationName](createCallback(value));
      };
    });
    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };
    LazyWrapper.prototype.reject = function(predicate, thisArg) {
      predicate = getCallback(predicate, thisArg, 1);
      return this.filter(function(value) {
        return !predicate(value);
      });
    };
    LazyWrapper.prototype.slice = function(start, end) {
      start = start == null ? 0 : (+start || 0);
      var result = this;
      if (start < 0) {
        result = this.takeRight(-start);
      } else if (start) {
        result = this.drop(start);
      }
      if (end !== undefined) {
        end = (+end || 0);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };
    LazyWrapper.prototype.toArray = function() {
      return this.drop(0);
    };
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (!lodashFunc) {
        return;
      }
      var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
          retUnwrapped = /^(?:first|last)$/.test(methodName);
      lodash.prototype[methodName] = function() {
        var args = arguments,
            chainAll = this.__chain__,
            value = this.__wrapped__,
            isHybrid = !!this.__actions__.length,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);
        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          isLazy = useLazy = false;
        }
        var onlyLazy = isLazy && !isHybrid;
        if (retUnwrapped && !chainAll) {
          return onlyLazy ? func.call(value) : lodashFunc.call(lodash, this.value());
        }
        var interceptor = function(value) {
          var otherArgs = [value];
          push.apply(otherArgs, args);
          return lodashFunc.apply(lodash, otherArgs);
        };
        if (useLazy) {
          var wrapper = onlyLazy ? value : new LazyWrapper(this),
              result = func.apply(wrapper, args);
          if (!retUnwrapped && (isHybrid || result.__actions__)) {
            var actions = result.__actions__ || (result.__actions__ = []);
            actions.push({
              'func': thru,
              'args': [interceptor],
              'thisArg': lodash
            });
          }
          return new LodashWrapper(result, chainAll);
        }
        return this.thru(interceptor);
      };
    });
    arrayEach(['concat', 'join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function(methodName) {
      var func = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);
      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          return func.apply(this.value(), args);
        }
        return this[chainName](function(value) {
          return func.apply(value, args);
        });
      };
    });
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name,
            names = realNames[key] || (realNames[key] = []);
        names.push({
          'name': methodName,
          'func': lodashFunc
        });
      }
    });
    realNames[createHybridWrapper(null, BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': null
    }];
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toString = wrapperToString;
    lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
    lodash.prototype.collect = lodash.prototype.map;
    lodash.prototype.head = lodash.prototype.first;
    lodash.prototype.select = lodash.prototype.filter;
    lodash.prototype.tail = lodash.prototype.rest;
    return lodash;
  }
  var _ = runInContext();
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    root._ = _;
    define("libs/lodash.js/3.9.3/lodash.js", [], function() {
      return _;
    });
  } else if (freeExports && freeModule) {
    if (moduleExports) {
      (freeModule.exports = _)._ = _;
    } else {
      freeExports._ = _;
    }
  } else {
    root._ = _;
  }
}.call(this));

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
(function(window, document, exportName, undefined) {
  'use strict';
  var VENDOR_PREFIXES = ['', 'webkit', 'moz', 'MS', 'ms', 'o'];
  var TEST_ELEMENT = document.createElement('div');
  var TYPE_FUNCTION = 'function';
  var round = Math.round;
  var abs = Math.abs;
  var now = Date.now;
  function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
  }
  function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
      each(arg, context[fn], context);
      return true;
    }
    return false;
  }
  function each(obj, iterator, context) {
    var i;
    if (!obj) {
      return;
    }
    if (obj.forEach) {
      obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
      i = 0;
      while (i < obj.length) {
        iterator.call(context, obj[i], i, obj);
        i++;
      }
    } else {
      for (i in obj) {
        obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
      }
    }
  }
  function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
      if (!merge || (merge && dest[keys[i]] === undefined)) {
        dest[keys[i]] = src[keys[i]];
      }
      i++;
    }
    return dest;
  }
  function merge(dest, src) {
    return extend(dest, src, true);
  }
  function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;
    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;
    if (properties) {
      extend(childP, properties);
    }
  }
  function bindFn(fn, context) {
    return function boundFn() {
      return fn.apply(context, arguments);
    };
  }
  function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
      return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
  }
  function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
  }
  function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
      target.addEventListener(type, handler, false);
    });
  }
  function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
      target.removeEventListener(type, handler, false);
    });
  }
  function hasParent(node, parent) {
    while (node) {
      if (node == parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }
  function inStr(str, find) {
    return str.indexOf(find) > -1;
  }
  function splitStr(str) {
    return str.trim().split(/\s+/g);
  }
  function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
      return src.indexOf(find);
    } else {
      var i = 0;
      while (i < src.length) {
        if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
          return i;
        }
        i++;
      }
      return -1;
    }
  }
  function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
  }
  function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;
    while (i < src.length) {
      var val = key ? src[i][key] : src[i];
      if (inArray(values, val) < 0) {
        results.push(src[i]);
      }
      values[i] = val;
      i++;
    }
    if (sort) {
      if (!key) {
        results = results.sort();
      } else {
        results = results.sort(function sortUniqueArray(a, b) {
          return a[key] > b[key];
        });
      }
    }
    return results;
  }
  function prefixed(obj, property) {
    var prefix,
        prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);
    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
      prefix = VENDOR_PREFIXES[i];
      prop = (prefix) ? prefix + camelProp : property;
      if (prop in obj) {
        return prop;
      }
      i++;
    }
    return undefined;
  }
  var _uniqueId = 1;
  function uniqueId() {
    return _uniqueId++;
  }
  function getWindowForElement(element) {
    var doc = element.ownerDocument;
    return (doc.defaultView || doc.parentWindow);
  }
  var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
  var SUPPORT_TOUCH = ('ontouchstart' in window);
  var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
  var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
  var INPUT_TYPE_TOUCH = 'touch';
  var INPUT_TYPE_PEN = 'pen';
  var INPUT_TYPE_MOUSE = 'mouse';
  var INPUT_TYPE_KINECT = 'kinect';
  var COMPUTE_INTERVAL = 25;
  var INPUT_START = 1;
  var INPUT_MOVE = 2;
  var INPUT_END = 4;
  var INPUT_CANCEL = 8;
  var DIRECTION_NONE = 1;
  var DIRECTION_LEFT = 2;
  var DIRECTION_RIGHT = 4;
  var DIRECTION_UP = 8;
  var DIRECTION_DOWN = 16;
  var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
  var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
  var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
  var PROPS_XY = ['x', 'y'];
  var PROPS_CLIENT_XY = ['clientX', 'clientY'];
  function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;
    this.domHandler = function(ev) {
      if (boolOrFn(manager.options.enable, [manager])) {
        self.handler(ev);
      }
    };
    this.init();
  }
  Input.prototype = {
    handler: function() {},
    init: function() {
      this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
      this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
      this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },
    destroy: function() {
      this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
      this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
      this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
  };
  function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;
    if (inputClass) {
      Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
      Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
      Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
      Type = MouseInput;
    } else {
      Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
  }
  function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));
    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;
    if (isFirst) {
      manager.session = {};
    }
    input.eventType = eventType;
    computeInputData(manager, input);
    manager.emit('hammer.input', input);
    manager.recognize(input);
    manager.session.prevInput = input;
  }
  function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;
    if (!session.firstInput) {
      session.firstInput = simpleCloneInputData(input);
    }
    if (pointersLength > 1 && !session.firstMultiple) {
      session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
      session.firstMultiple = false;
    }
    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;
    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);
    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);
    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
    computeIntervalInputData(session, input);
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
      target = input.srcEvent.target;
    }
    input.target = target;
  }
  function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};
    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
      prevDelta = session.prevDelta = {
        x: prevInput.deltaX || 0,
        y: prevInput.deltaY || 0
      };
      offset = session.offsetDelta = {
        x: center.x,
        y: center.y
      };
    }
    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
  }
  function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity,
        velocityX,
        velocityY,
        direction;
    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
      var deltaX = last.deltaX - input.deltaX;
      var deltaY = last.deltaY - input.deltaY;
      var v = getVelocity(deltaTime, deltaX, deltaY);
      velocityX = v.x;
      velocityY = v.y;
      velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
      direction = getDirection(deltaX, deltaY);
      session.lastInterval = input;
    } else {
      velocity = last.velocity;
      velocityX = last.velocityX;
      velocityY = last.velocityY;
      direction = last.direction;
    }
    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
  }
  function simpleCloneInputData(input) {
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
      pointers[i] = {
        clientX: round(input.pointers[i].clientX),
        clientY: round(input.pointers[i].clientY)
      };
      i++;
    }
    return {
      timeStamp: now(),
      pointers: pointers,
      center: getCenter(pointers),
      deltaX: input.deltaX,
      deltaY: input.deltaY
    };
  }
  function getCenter(pointers) {
    var pointersLength = pointers.length;
    if (pointersLength === 1) {
      return {
        x: round(pointers[0].clientX),
        y: round(pointers[0].clientY)
      };
    }
    var x = 0,
        y = 0,
        i = 0;
    while (i < pointersLength) {
      x += pointers[i].clientX;
      y += pointers[i].clientY;
      i++;
    }
    return {
      x: round(x / pointersLength),
      y: round(y / pointersLength)
    };
  }
  function getVelocity(deltaTime, x, y) {
    return {
      x: x / deltaTime || 0,
      y: y / deltaTime || 0
    };
  }
  function getDirection(x, y) {
    if (x === y) {
      return DIRECTION_NONE;
    }
    if (abs(x) >= abs(y)) {
      return x > 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y > 0 ? DIRECTION_UP : DIRECTION_DOWN;
  }
  function getDistance(p1, p2, props) {
    if (!props) {
      props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.sqrt((x * x) + (y * y));
  }
  function getAngle(p1, p2, props) {
    if (!props) {
      props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
  }
  function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) - getAngle(start[1], start[0], PROPS_CLIENT_XY);
  }
  function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
  }
  var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
  };
  var MOUSE_ELEMENT_EVENTS = 'mousedown';
  var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
  function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;
    this.allow = true;
    this.pressed = false;
    Input.apply(this, arguments);
  }
  inherit(MouseInput, Input, {handler: function MEhandler(ev) {
      var eventType = MOUSE_INPUT_MAP[ev.type];
      if (eventType & INPUT_START && ev.button === 0) {
        this.pressed = true;
      }
      if (eventType & INPUT_MOVE && ev.which !== 1) {
        eventType = INPUT_END;
      }
      if (!this.pressed || !this.allow) {
        return;
      }
      if (eventType & INPUT_END) {
        this.pressed = false;
      }
      this.callback(this.manager, eventType, {
        pointers: [ev],
        changedPointers: [ev],
        pointerType: INPUT_TYPE_MOUSE,
        srcEvent: ev
      });
    }});
  var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
  };
  var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT
  };
  var POINTER_ELEMENT_EVENTS = 'pointerdown';
  var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';
  if (window.MSPointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
  }
  function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;
    Input.apply(this, arguments);
    this.store = (this.manager.session.pointerEvents = []);
  }
  inherit(PointerEventInput, Input, {handler: function PEhandler(ev) {
      var store = this.store;
      var removePointer = false;
      var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
      var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
      var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
      var isTouch = (pointerType == INPUT_TYPE_TOUCH);
      var storeIndex = inArray(store, ev.pointerId, 'pointerId');
      if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
        if (storeIndex < 0) {
          store.push(ev);
          storeIndex = store.length - 1;
        }
      } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        removePointer = true;
      }
      if (storeIndex < 0) {
        return;
      }
      store[storeIndex] = ev;
      this.callback(this.manager, eventType, {
        pointers: store,
        changedPointers: [ev],
        pointerType: pointerType,
        srcEvent: ev
      });
      if (removePointer) {
        store.splice(storeIndex, 1);
      }
    }});
  var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
  };
  var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
  var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
  function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;
    Input.apply(this, arguments);
  }
  inherit(SingleTouchInput, Input, {handler: function TEhandler(ev) {
      var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
      if (type === INPUT_START) {
        this.started = true;
      }
      if (!this.started) {
        return;
      }
      var touches = normalizeSingleTouches.call(this, ev, type);
      if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
        this.started = false;
      }
      this.callback(this.manager, type, {
        pointers: touches[0],
        changedPointers: touches[1],
        pointerType: INPUT_TYPE_TOUCH,
        srcEvent: ev
      });
    }});
  function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);
    if (type & (INPUT_END | INPUT_CANCEL)) {
      all = uniqueArray(all.concat(changed), 'identifier', true);
    }
    return [all, changed];
  }
  var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
  };
  var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
  function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};
    Input.apply(this, arguments);
  }
  inherit(TouchInput, Input, {handler: function MTEhandler(ev) {
      var type = TOUCH_INPUT_MAP[ev.type];
      var touches = getTouches.call(this, ev, type);
      if (!touches) {
        return;
      }
      this.callback(this.manager, type, {
        pointers: touches[0],
        changedPointers: touches[1],
        pointerType: INPUT_TYPE_TOUCH,
        srcEvent: ev
      });
    }});
  function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
      targetIds[allTouches[0].identifier] = true;
      return [allTouches, allTouches];
    }
    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;
    targetTouches = allTouches.filter(function(touch) {
      return hasParent(touch.target, target);
    });
    if (type === INPUT_START) {
      i = 0;
      while (i < targetTouches.length) {
        targetIds[targetTouches[i].identifier] = true;
        i++;
      }
    }
    i = 0;
    while (i < changedTouches.length) {
      if (targetIds[changedTouches[i].identifier]) {
        changedTargetTouches.push(changedTouches[i]);
      }
      if (type & (INPUT_END | INPUT_CANCEL)) {
        delete targetIds[changedTouches[i].identifier];
      }
      i++;
    }
    if (!changedTargetTouches.length) {
      return;
    }
    return [uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
  }
  function TouchMouseInput() {
    Input.apply(this, arguments);
    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);
  }
  inherit(TouchMouseInput, Input, {
    handler: function TMEhandler(manager, inputEvent, inputData) {
      var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
          isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);
      if (isTouch) {
        this.mouse.allow = false;
      } else if (isMouse && !this.mouse.allow) {
        return;
      }
      if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
        this.mouse.allow = true;
      }
      this.callback(manager, inputEvent, inputData);
    },
    destroy: function destroy() {
      this.touch.destroy();
      this.mouse.destroy();
    }
  });
  var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
  var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
  var TOUCH_ACTION_COMPUTE = 'compute';
  var TOUCH_ACTION_AUTO = 'auto';
  var TOUCH_ACTION_MANIPULATION = 'manipulation';
  var TOUCH_ACTION_NONE = 'none';
  var TOUCH_ACTION_PAN_X = 'pan-x';
  var TOUCH_ACTION_PAN_Y = 'pan-y';
  function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
  }
  TouchAction.prototype = {
    set: function(value) {
      if (value == TOUCH_ACTION_COMPUTE) {
        value = this.compute();
      }
      if (NATIVE_TOUCH_ACTION) {
        this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
      }
      this.actions = value.toLowerCase().trim();
    },
    update: function() {
      this.set(this.manager.options.touchAction);
    },
    compute: function() {
      var actions = [];
      each(this.manager.recognizers, function(recognizer) {
        if (boolOrFn(recognizer.options.enable, [recognizer])) {
          actions = actions.concat(recognizer.getTouchAction());
        }
      });
      return cleanTouchActions(actions.join(' '));
    },
    preventDefaults: function(input) {
      if (NATIVE_TOUCH_ACTION) {
        return;
      }
      var srcEvent = input.srcEvent;
      var direction = input.offsetDirection;
      if (this.manager.session.prevented) {
        srcEvent.preventDefault();
        return;
      }
      var actions = this.actions;
      var hasNone = inStr(actions, TOUCH_ACTION_NONE);
      var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
      var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
      if (hasNone || (hasPanY && direction & DIRECTION_HORIZONTAL) || (hasPanX && direction & DIRECTION_VERTICAL)) {
        return this.preventSrc(srcEvent);
      }
    },
    preventSrc: function(srcEvent) {
      this.manager.session.prevented = true;
      srcEvent.preventDefault();
    }
  };
  function cleanTouchActions(actions) {
    if (inStr(actions, TOUCH_ACTION_NONE)) {
      return TOUCH_ACTION_NONE;
    }
    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
    if (hasPanX && hasPanY) {
      return TOUCH_ACTION_PAN_X + ' ' + TOUCH_ACTION_PAN_Y;
    }
    if (hasPanX || hasPanY) {
      return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
      return TOUCH_ACTION_MANIPULATION;
    }
    return TOUCH_ACTION_AUTO;
  }
  var STATE_POSSIBLE = 1;
  var STATE_BEGAN = 2;
  var STATE_CHANGED = 4;
  var STATE_ENDED = 8;
  var STATE_RECOGNIZED = STATE_ENDED;
  var STATE_CANCELLED = 16;
  var STATE_FAILED = 32;
  function Recognizer(options) {
    this.id = uniqueId();
    this.manager = null;
    this.options = merge(options || {}, this.defaults);
    this.options.enable = ifUndefined(this.options.enable, true);
    this.state = STATE_POSSIBLE;
    this.simultaneous = {};
    this.requireFail = [];
  }
  Recognizer.prototype = {
    defaults: {},
    set: function(options) {
      extend(this.options, options);
      this.manager && this.manager.touchAction.update();
      return this;
    },
    recognizeWith: function(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
        return this;
      }
      var simultaneous = this.simultaneous;
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      if (!simultaneous[otherRecognizer.id]) {
        simultaneous[otherRecognizer.id] = otherRecognizer;
        otherRecognizer.recognizeWith(this);
      }
      return this;
    },
    dropRecognizeWith: function(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
        return this;
      }
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      delete this.simultaneous[otherRecognizer.id];
      return this;
    },
    requireFailure: function(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
        return this;
      }
      var requireFail = this.requireFail;
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      if (inArray(requireFail, otherRecognizer) === -1) {
        requireFail.push(otherRecognizer);
        otherRecognizer.requireFailure(this);
      }
      return this;
    },
    dropRequireFailure: function(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
        return this;
      }
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      var index = inArray(this.requireFail, otherRecognizer);
      if (index > -1) {
        this.requireFail.splice(index, 1);
      }
      return this;
    },
    hasRequireFailures: function() {
      return this.requireFail.length > 0;
    },
    canRecognizeWith: function(otherRecognizer) {
      return !!this.simultaneous[otherRecognizer.id];
    },
    emit: function(input) {
      var self = this;
      var state = this.state;
      function emit(withState) {
        self.manager.emit(self.options.event + (withState ? stateStr(state) : ''), input);
      }
      if (state < STATE_ENDED) {
        emit(true);
      }
      emit();
      if (state >= STATE_ENDED) {
        emit(true);
      }
    },
    tryEmit: function(input) {
      if (this.canEmit()) {
        return this.emit(input);
      }
      this.state = STATE_FAILED;
    },
    canEmit: function() {
      var i = 0;
      while (i < this.requireFail.length) {
        if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
          return false;
        }
        i++;
      }
      return true;
    },
    recognize: function(inputData) {
      var inputDataClone = extend({}, inputData);
      if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
        this.reset();
        this.state = STATE_FAILED;
        return;
      }
      if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
        this.state = STATE_POSSIBLE;
      }
      this.state = this.process(inputDataClone);
      if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
        this.tryEmit(inputDataClone);
      }
    },
    process: function(inputData) {},
    getTouchAction: function() {},
    reset: function() {}
  };
  function stateStr(state) {
    if (state & STATE_CANCELLED) {
      return 'cancel';
    } else if (state & STATE_ENDED) {
      return 'end';
    } else if (state & STATE_CHANGED) {
      return 'move';
    } else if (state & STATE_BEGAN) {
      return 'start';
    }
    return '';
  }
  function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
      return 'down';
    } else if (direction == DIRECTION_UP) {
      return 'up';
    } else if (direction == DIRECTION_LEFT) {
      return 'left';
    } else if (direction == DIRECTION_RIGHT) {
      return 'right';
    }
    return '';
  }
  function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
      return manager.get(otherRecognizer);
    }
    return otherRecognizer;
  }
  function AttrRecognizer() {
    Recognizer.apply(this, arguments);
  }
  inherit(AttrRecognizer, Recognizer, {
    defaults: {pointers: 1},
    attrTest: function(input) {
      var optionPointers = this.options.pointers;
      return optionPointers === 0 || input.pointers.length === optionPointers;
    },
    process: function(input) {
      var state = this.state;
      var eventType = input.eventType;
      var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
      var isValid = this.attrTest(input);
      if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
        return state | STATE_CANCELLED;
      } else if (isRecognized || isValid) {
        if (eventType & INPUT_END) {
          return state | STATE_ENDED;
        } else if (!(state & STATE_BEGAN)) {
          return STATE_BEGAN;
        }
        return state | STATE_CHANGED;
      }
      return STATE_FAILED;
    }
  });
  function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);
    this.pX = null;
    this.pY = null;
  }
  inherit(PanRecognizer, AttrRecognizer, {
    defaults: {
      event: 'pan',
      threshold: 10,
      pointers: 1,
      direction: DIRECTION_ALL
    },
    getTouchAction: function() {
      var direction = this.options.direction;
      var actions = [];
      if (direction & DIRECTION_HORIZONTAL) {
        actions.push(TOUCH_ACTION_PAN_Y);
      }
      if (direction & DIRECTION_VERTICAL) {
        actions.push(TOUCH_ACTION_PAN_X);
      }
      return actions;
    },
    directionTest: function(input) {
      var options = this.options;
      var hasMoved = true;
      var distance = input.distance;
      var direction = input.direction;
      var x = input.deltaX;
      var y = input.deltaY;
      if (!(direction & options.direction)) {
        if (options.direction & DIRECTION_HORIZONTAL) {
          direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
          hasMoved = x != this.pX;
          distance = Math.abs(input.deltaX);
        } else {
          direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
          hasMoved = y != this.pY;
          distance = Math.abs(input.deltaY);
        }
      }
      input.direction = direction;
      return hasMoved && distance > options.threshold && direction & options.direction;
    },
    attrTest: function(input) {
      return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },
    emit: function(input) {
      this.pX = input.deltaX;
      this.pY = input.deltaY;
      var direction = directionStr(input.direction);
      if (direction) {
        this.manager.emit(this.options.event + direction, input);
      }
      this._super.emit.call(this, input);
    }
  });
  function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }
  inherit(PinchRecognizer, AttrRecognizer, {
    defaults: {
      event: 'pinch',
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function() {
      return [TOUCH_ACTION_NONE];
    },
    attrTest: function(input) {
      return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },
    emit: function(input) {
      this._super.emit.call(this, input);
      if (input.scale !== 1) {
        var inOut = input.scale < 1 ? 'in' : 'out';
        this.manager.emit(this.options.event + inOut, input);
      }
    }
  });
  function PressRecognizer() {
    Recognizer.apply(this, arguments);
    this._timer = null;
    this._input = null;
  }
  inherit(PressRecognizer, Recognizer, {
    defaults: {
      event: 'press',
      pointers: 1,
      time: 500,
      threshold: 5
    },
    getTouchAction: function() {
      return [TOUCH_ACTION_AUTO];
    },
    process: function(input) {
      var options = this.options;
      var validPointers = input.pointers.length === options.pointers;
      var validMovement = input.distance < options.threshold;
      var validTime = input.deltaTime > options.time;
      this._input = input;
      if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
        this.reset();
      } else if (input.eventType & INPUT_START) {
        this.reset();
        this._timer = setTimeoutContext(function() {
          this.state = STATE_RECOGNIZED;
          this.tryEmit();
        }, options.time, this);
      } else if (input.eventType & INPUT_END) {
        return STATE_RECOGNIZED;
      }
      return STATE_FAILED;
    },
    reset: function() {
      clearTimeout(this._timer);
    },
    emit: function(input) {
      if (this.state !== STATE_RECOGNIZED) {
        return;
      }
      if (input && (input.eventType & INPUT_END)) {
        this.manager.emit(this.options.event + 'up', input);
      } else {
        this._input.timeStamp = now();
        this.manager.emit(this.options.event, this._input);
      }
    }
  });
  function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }
  inherit(RotateRecognizer, AttrRecognizer, {
    defaults: {
      event: 'rotate',
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function() {
      return [TOUCH_ACTION_NONE];
    },
    attrTest: function(input) {
      return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
  });
  function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }
  inherit(SwipeRecognizer, AttrRecognizer, {
    defaults: {
      event: 'swipe',
      threshold: 10,
      velocity: 0.65,
      direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
      pointers: 1
    },
    getTouchAction: function() {
      return PanRecognizer.prototype.getTouchAction.call(this);
    },
    attrTest: function(input) {
      var direction = this.options.direction;
      var velocity;
      if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
        velocity = input.velocity;
      } else if (direction & DIRECTION_HORIZONTAL) {
        velocity = input.velocityX;
      } else if (direction & DIRECTION_VERTICAL) {
        velocity = input.velocityY;
      }
      return this._super.attrTest.call(this, input) && direction & input.direction && input.distance > this.options.threshold && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },
    emit: function(input) {
      var direction = directionStr(input.direction);
      if (direction) {
        this.manager.emit(this.options.event + direction, input);
      }
      this.manager.emit(this.options.event, input);
    }
  });
  function TapRecognizer() {
    Recognizer.apply(this, arguments);
    this.pTime = false;
    this.pCenter = false;
    this._timer = null;
    this._input = null;
    this.count = 0;
  }
  inherit(TapRecognizer, Recognizer, {
    defaults: {
      event: 'tap',
      pointers: 1,
      taps: 1,
      interval: 300,
      time: 250,
      threshold: 2,
      posThreshold: 10
    },
    getTouchAction: function() {
      return [TOUCH_ACTION_MANIPULATION];
    },
    process: function(input) {
      var options = this.options;
      var validPointers = input.pointers.length === options.pointers;
      var validMovement = input.distance < options.threshold;
      var validTouchTime = input.deltaTime < options.time;
      this.reset();
      if ((input.eventType & INPUT_START) && (this.count === 0)) {
        return this.failTimeout();
      }
      if (validMovement && validTouchTime && validPointers) {
        if (input.eventType != INPUT_END) {
          return this.failTimeout();
        }
        var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
        var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
        this.pTime = input.timeStamp;
        this.pCenter = input.center;
        if (!validMultiTap || !validInterval) {
          this.count = 1;
        } else {
          this.count += 1;
        }
        this._input = input;
        var tapCount = this.count % options.taps;
        if (tapCount === 0) {
          if (!this.hasRequireFailures()) {
            return STATE_RECOGNIZED;
          } else {
            this._timer = setTimeoutContext(function() {
              this.state = STATE_RECOGNIZED;
              this.tryEmit();
            }, options.interval, this);
            return STATE_BEGAN;
          }
        }
      }
      return STATE_FAILED;
    },
    failTimeout: function() {
      this._timer = setTimeoutContext(function() {
        this.state = STATE_FAILED;
      }, this.options.interval, this);
      return STATE_FAILED;
    },
    reset: function() {
      clearTimeout(this._timer);
    },
    emit: function() {
      if (this.state == STATE_RECOGNIZED) {
        this._input.tapCount = this.count;
        this.manager.emit(this.options.event, this._input);
      }
    }
  });
  function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
  }
  Hammer.VERSION = '2.0.4';
  Hammer.defaults = {
    domEvents: false,
    touchAction: TOUCH_ACTION_COMPUTE,
    enable: true,
    inputTarget: null,
    inputClass: null,
    preset: [[RotateRecognizer, {enable: false}], [PinchRecognizer, {enable: false}, ['rotate']], [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}], [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']], [TapRecognizer], [TapRecognizer, {
      event: 'doubletap',
      taps: 2
    }, ['tap']], [PressRecognizer]],
    cssProps: {
      userSelect: 'none',
      touchSelect: 'none',
      touchCallout: 'none',
      contentZooming: 'none',
      userDrag: 'none',
      tapHighlightColor: 'rgba(0,0,0,0)'
    }
  };
  var STOP = 1;
  var FORCED_STOP = 2;
  function Manager(element, options) {
    options = options || {};
    this.options = merge(options, Hammer.defaults);
    this.options.inputTarget = this.options.inputTarget || element;
    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);
    toggleCssProps(this, true);
    each(options.recognizers, function(item) {
      var recognizer = this.add(new (item[0])(item[1]));
      item[2] && recognizer.recognizeWith(item[2]);
      item[3] && recognizer.requireFailure(item[3]);
    }, this);
  }
  Manager.prototype = {
    set: function(options) {
      extend(this.options, options);
      if (options.touchAction) {
        this.touchAction.update();
      }
      if (options.inputTarget) {
        this.input.destroy();
        this.input.target = options.inputTarget;
        this.input.init();
      }
      return this;
    },
    stop: function(force) {
      this.session.stopped = force ? FORCED_STOP : STOP;
    },
    recognize: function(inputData) {
      var session = this.session;
      if (session.stopped) {
        return;
      }
      this.touchAction.preventDefaults(inputData);
      var recognizer;
      var recognizers = this.recognizers;
      var curRecognizer = session.curRecognizer;
      if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
        curRecognizer = session.curRecognizer = null;
      }
      var i = 0;
      while (i < recognizers.length) {
        recognizer = recognizers[i];
        if (session.stopped !== FORCED_STOP && (!curRecognizer || recognizer == curRecognizer || recognizer.canRecognizeWith(curRecognizer))) {
          recognizer.recognize(inputData);
        } else {
          recognizer.reset();
        }
        if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
          curRecognizer = session.curRecognizer = recognizer;
        }
        i++;
      }
    },
    get: function(recognizer) {
      if (recognizer instanceof Recognizer) {
        return recognizer;
      }
      var recognizers = this.recognizers;
      for (var i = 0; i < recognizers.length; i++) {
        if (recognizers[i].options.event == recognizer) {
          return recognizers[i];
        }
      }
      return null;
    },
    add: function(recognizer) {
      if (invokeArrayArg(recognizer, 'add', this)) {
        return this;
      }
      var existing = this.get(recognizer.options.event);
      if (existing) {
        this.remove(existing);
      }
      this.recognizers.push(recognizer);
      recognizer.manager = this;
      this.touchAction.update();
      return recognizer;
    },
    remove: function(recognizer) {
      if (invokeArrayArg(recognizer, 'remove', this)) {
        return this;
      }
      var recognizers = this.recognizers;
      recognizer = this.get(recognizer);
      recognizers.splice(inArray(recognizers, recognizer), 1);
      this.touchAction.update();
      return this;
    },
    on: function(events, handler) {
      var handlers = this.handlers;
      each(splitStr(events), function(event) {
        handlers[event] = handlers[event] || [];
        handlers[event].push(handler);
      });
      return this;
    },
    off: function(events, handler) {
      var handlers = this.handlers;
      each(splitStr(events), function(event) {
        if (!handler) {
          delete handlers[event];
        } else {
          handlers[event].splice(inArray(handlers[event], handler), 1);
        }
      });
      return this;
    },
    emit: function(event, data) {
      if (this.options.domEvents) {
        triggerDomEvent(event, data);
      }
      var handlers = this.handlers[event] && this.handlers[event].slice();
      if (!handlers || !handlers.length) {
        return;
      }
      data.type = event;
      data.preventDefault = function() {
        data.srcEvent.preventDefault();
      };
      var i = 0;
      while (i < handlers.length) {
        handlers[i](data);
        i++;
      }
    },
    destroy: function() {
      this.element && toggleCssProps(this, false);
      this.handlers = {};
      this.session = {};
      this.input.destroy();
      this.element = null;
    }
  };
  function toggleCssProps(manager, add) {
    var element = manager.element;
    each(manager.options.cssProps, function(value, name) {
      element.style[prefixed(element.style, name)] = add ? value : '';
    });
  }
  function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
  }
  extend(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,
    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,
    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,
    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,
    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,
    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,
    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
  });
  if (typeof define == TYPE_FUNCTION && define.amd) {
    define("libs/hammer.js/2.0.4/hammer.js", [], function() {
      return Hammer;
    });
  } else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
  } else {
    window[exportName] = Hammer;
  }
})(window, document, 'Hammer');

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
(function() {
  'use strict';
  function EventEmitter() {}
  var proto = EventEmitter.prototype;
  var exports = this;
  var originalGlobalValue = exports.EventEmitter;
  function indexOfListener(listeners, listener) {
    var i = listeners.length;
    while (i--) {
      if (listeners[i].listener === listener) {
        return i;
      }
    }
    return -1;
  }
  function alias(name) {
    return function aliasClosure() {
      return this[name].apply(this, arguments);
    };
  }
  proto.getListeners = function getListeners(evt) {
    var events = this._getEvents();
    var response;
    var key;
    if (evt instanceof RegExp) {
      response = {};
      for (key in events) {
        if (events.hasOwnProperty(key) && evt.test(key)) {
          response[key] = events[key];
        }
      }
    } else {
      response = events[evt] || (events[evt] = []);
    }
    return response;
  };
  proto.flattenListeners = function flattenListeners(listeners) {
    var flatListeners = [];
    var i;
    for (i = 0; i < listeners.length; i += 1) {
      flatListeners.push(listeners[i].listener);
    }
    return flatListeners;
  };
  proto.getListenersAsObject = function getListenersAsObject(evt) {
    var listeners = this.getListeners(evt);
    var response;
    if (listeners instanceof Array) {
      response = {};
      response[evt] = listeners;
    }
    return response || listeners;
  };
  proto.addListener = function addListener(evt, listener) {
    var listeners = this.getListenersAsObject(evt);
    var listenerIsWrapped = typeof listener === 'object';
    var key;
    for (key in listeners) {
      if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
        listeners[key].push(listenerIsWrapped ? listener : {
          listener: listener,
          once: false
        });
      }
    }
    return this;
  };
  proto.on = alias('addListener');
  proto.addOnceListener = function addOnceListener(evt, listener) {
    return this.addListener(evt, {
      listener: listener,
      once: true
    });
  };
  proto.once = alias('addOnceListener');
  proto.defineEvent = function defineEvent(evt) {
    this.getListeners(evt);
    return this;
  };
  proto.defineEvents = function defineEvents(evts) {
    for (var i = 0; i < evts.length; i += 1) {
      this.defineEvent(evts[i]);
    }
    return this;
  };
  proto.removeListener = function removeListener(evt, listener) {
    var listeners = this.getListenersAsObject(evt);
    var index;
    var key;
    for (key in listeners) {
      if (listeners.hasOwnProperty(key)) {
        index = indexOfListener(listeners[key], listener);
        if (index !== -1) {
          listeners[key].splice(index, 1);
        }
      }
    }
    return this;
  };
  proto.off = alias('removeListener');
  proto.addListeners = function addListeners(evt, listeners) {
    return this.manipulateListeners(false, evt, listeners);
  };
  proto.removeListeners = function removeListeners(evt, listeners) {
    return this.manipulateListeners(true, evt, listeners);
  };
  proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
    var i;
    var value;
    var single = remove ? this.removeListener : this.addListener;
    var multiple = remove ? this.removeListeners : this.addListeners;
    if (typeof evt === 'object' && !(evt instanceof RegExp)) {
      for (i in evt) {
        if (evt.hasOwnProperty(i) && (value = evt[i])) {
          if (typeof value === 'function') {
            single.call(this, i, value);
          } else {
            multiple.call(this, i, value);
          }
        }
      }
    } else {
      i = listeners.length;
      while (i--) {
        single.call(this, evt, listeners[i]);
      }
    }
    return this;
  };
  proto.removeEvent = function removeEvent(evt) {
    var type = typeof evt;
    var events = this._getEvents();
    var key;
    if (type === 'string') {
      delete events[evt];
    } else if (evt instanceof RegExp) {
      for (key in events) {
        if (events.hasOwnProperty(key) && evt.test(key)) {
          delete events[key];
        }
      }
    } else {
      delete this._events;
    }
    return this;
  };
  proto.removeAllListeners = alias('removeEvent');
  proto.emitEvent = function emitEvent(evt, args) {
    var listeners = this.getListenersAsObject(evt);
    var listener;
    var i;
    var key;
    var response;
    for (key in listeners) {
      if (listeners.hasOwnProperty(key)) {
        i = listeners[key].length;
        while (i--) {
          listener = listeners[key][i];
          if (listener.once === true) {
            this.removeListener(evt, listener.listener);
          }
          response = listener.listener.apply(this, args || []);
          if (response === this._getOnceReturnValue()) {
            this.removeListener(evt, listener.listener);
          }
        }
      }
    }
    return this;
  };
  proto.trigger = alias('emitEvent');
  proto.emit = function emit(evt) {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(evt, args);
  };
  proto.setOnceReturnValue = function setOnceReturnValue(value) {
    this._onceReturnValue = value;
    return this;
  };
  proto._getOnceReturnValue = function _getOnceReturnValue() {
    if (this.hasOwnProperty('_onceReturnValue')) {
      return this._onceReturnValue;
    } else {
      return true;
    }
  };
  proto._getEvents = function _getEvents() {
    return this._events || (this._events = {});
  };
  EventEmitter.noConflict = function noConflict() {
    exports.EventEmitter = originalGlobalValue;
    return EventEmitter;
  };
  if (typeof define === 'function' && define.amd) {
    define("libs/EventEmitter/4.2.9/EventEmitter.js", [], function() {
      return EventEmitter;
    });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = EventEmitter;
  } else {
    exports.EventEmitter = EventEmitter;
  }
}.call(this));

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
;
(function(window) {
  if (window.jQuery) {
    return;
  }
  var $ = function(selector, context) {
    return new $.fn.init(selector, context);
  };
  $.isWindow = function(obj) {
    return obj != null && obj == obj.window;
  };
  $.type = function(obj) {
    if (obj == null) {
      return obj + "";
    }
    return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
  };
  $.isArray = Array.isArray || function(obj) {
    return $.type(obj) === "array";
  };
  function isArraylike(obj) {
    var length = obj.length,
        type = $.type(obj);
    if (type === "function" || $.isWindow(obj)) {
      return false;
    }
    if (obj.nodeType === 1 && length) {
      return true;
    }
    return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
  }
  $.isPlainObject = function(obj) {
    var key;
    if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
      return false;
    }
    try {
      if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
        return false;
      }
    } catch (e) {
      return false;
    }
    for (key in obj) {}
    return key === undefined || hasOwn.call(obj, key);
  };
  $.each = function(obj, callback, args) {
    var value,
        i = 0,
        length = obj.length,
        isArray = isArraylike(obj);
    if (args) {
      if (isArray) {
        for (; i < length; i++) {
          value = callback.apply(obj[i], args);
          if (value === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          value = callback.apply(obj[i], args);
          if (value === false) {
            break;
          }
        }
      }
    } else {
      if (isArray) {
        for (; i < length; i++) {
          value = callback.call(obj[i], i, obj[i]);
          if (value === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          value = callback.call(obj[i], i, obj[i]);
          if (value === false) {
            break;
          }
        }
      }
    }
    return obj;
  };
  $.data = function(node, key, value) {
    if (value === undefined) {
      var id = node[$.expando],
          store = id && cache[id];
      if (key === undefined) {
        return store;
      } else if (store) {
        if (key in store) {
          return store[key];
        }
      }
    } else if (key !== undefined) {
      var id = node[$.expando] || (node[$.expando] = ++$.uuid);
      cache[id] = cache[id] || {};
      cache[id][key] = value;
      return value;
    }
  };
  $.removeData = function(node, keys) {
    var id = node[$.expando],
        store = id && cache[id];
    if (store) {
      $.each(keys, function(_, key) {
        delete store[key];
      });
    }
  };
  $.extend = function() {
    var src,
        copyIsArray,
        copy,
        name,
        options,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;
    if (typeof target === "boolean") {
      deep = target;
      target = arguments[i] || {};
      i++;
    }
    if (typeof target !== "object" && $.type(target) !== "function") {
      target = {};
    }
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      if ((options = arguments[i]) != null) {
        for (name in options) {
          src = target[name];
          copy = options[name];
          if (target === copy) {
            continue;
          }
          if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && $.isArray(src) ? src : [];
            } else {
              clone = src && $.isPlainObject(src) ? src : {};
            }
            target[name] = $.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  };
  $.queue = function(elem, type, data) {
    function $makeArray(arr, results) {
      var ret = results || [];
      if (arr != null) {
        if (isArraylike(Object(arr))) {
          (function(first, second) {
            var len = +second.length,
                j = 0,
                i = first.length;
            while (j < len) {
              first[i++] = second[j++];
            }
            if (len !== len) {
              while (second[j] !== undefined) {
                first[i++] = second[j++];
              }
            }
            first.length = i;
            return first;
          })(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          [].push.call(ret, arr);
        }
      }
      return ret;
    }
    if (!elem) {
      return;
    }
    type = (type || "fx") + "queue";
    var q = $.data(elem, type);
    if (!data) {
      return q || [];
    }
    if (!q || $.isArray(data)) {
      q = $.data(elem, type, $makeArray(data));
    } else {
      q.push(data);
    }
    return q;
  };
  $.dequeue = function(elems, type) {
    $.each(elems.nodeType ? [elems] : elems, function(i, elem) {
      type = type || "fx";
      var queue = $.queue(elem, type),
          fn = queue.shift();
      if (fn === "inprogress") {
        fn = queue.shift();
      }
      if (fn) {
        if (type === "fx") {
          queue.unshift("inprogress");
        }
        fn.call(elem, function() {
          $.dequeue(elem, type);
        });
      }
    });
  };
  $.fn = $.prototype = {
    init: function(selector) {
      if (selector.nodeType) {
        this[0] = selector;
        return this;
      } else {
        throw new Error("Not a DOM node.");
      }
    },
    offset: function() {
      var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
        top: 0,
        left: 0
      };
      return {
        top: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
        left: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
      };
    },
    position: function() {
      function offsetParent() {
        var offsetParent = this.offsetParent || document;
        while (offsetParent && (!offsetParent.nodeType.toLowerCase === "html" && offsetParent.style.position === "static")) {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || document;
      }
      var elem = this[0],
          offsetParent = offsetParent.apply(elem),
          offset = this.offset(),
          parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? {
            top: 0,
            left: 0
          } : $(offsetParent).offset();
      offset.top -= parseFloat(elem.style.marginTop) || 0;
      offset.left -= parseFloat(elem.style.marginLeft) || 0;
      if (offsetParent.style) {
        parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;
        parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;
      }
      return {
        top: offset.top - parentOffset.top,
        left: offset.left - parentOffset.left
      };
    }
  };
  var cache = {};
  $.expando = "velocity" + (new Date().getTime());
  $.uuid = 0;
  var class2type = {},
      hasOwn = class2type.hasOwnProperty,
      toString = class2type.toString;
  var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
  for (var i = 0; i < types.length; i++) {
    class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
  }
  $.fn.init.prototype = $.fn;
  window.Velocity = {Utilities: $};
})(window);
;
(function(factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define("libs/velocity/1.2.2/velocity.js", [], factory);
  } else {
    factory();
  }
}(function() {
  return function(global, window, document, undefined) {
    var IE = (function() {
      if (document.documentMode) {
        return document.documentMode;
      } else {
        for (var i = 7; i > 4; i--) {
          var div = document.createElement("div");
          div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";
          if (div.getElementsByTagName("span").length) {
            div = null;
            return i;
          }
        }
      }
      return undefined;
    })();
    var rAFShim = (function() {
      var timeLast = 0;
      return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
        var timeCurrent = (new Date()).getTime(),
            timeDelta;
        timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
        timeLast = timeCurrent + timeDelta;
        return setTimeout(function() {
          callback(timeCurrent + timeDelta);
        }, timeDelta);
      };
    })();
    function compactSparseArray(array) {
      var index = -1,
          length = array ? array.length : 0,
          result = [];
      while (++index < length) {
        var value = array[index];
        if (value) {
          result.push(value);
        }
      }
      return result;
    }
    function sanitizeElements(elements) {
      if (Type.isWrapped(elements)) {
        elements = [].slice.call(elements);
      } else if (Type.isNode(elements)) {
        elements = [elements];
      }
      return elements;
    }
    var Type = {
      isString: function(variable) {
        return (typeof variable === "string");
      },
      isArray: Array.isArray || function(variable) {
        return Object.prototype.toString.call(variable) === "[object Array]";
      },
      isFunction: function(variable) {
        return Object.prototype.toString.call(variable) === "[object Function]";
      },
      isNode: function(variable) {
        return variable && variable.nodeType;
      },
      isNodeList: function(variable) {
        return typeof variable === "object" && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(variable)) && variable.length !== undefined && (variable.length === 0 || (typeof variable[0] === "object" && variable[0].nodeType > 0));
      },
      isWrapped: function(variable) {
        return variable && (variable.jquery || (window.Zepto && window.Zepto.zepto.isZ(variable)));
      },
      isSVG: function(variable) {
        return window.SVGElement && (variable instanceof window.SVGElement);
      },
      isEmptyObject: function(variable) {
        for (var name in variable) {
          return false;
        }
        return true;
      }
    };
    var $,
        isJQuery = false;
    if (global.fn && global.fn.jquery) {
      $ = global;
      isJQuery = true;
    } else {
      $ = window.Velocity.Utilities;
    }
    if (IE <= 8 && !isJQuery) {
      throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
    } else if (IE <= 7) {
      jQuery.fn.velocity = jQuery.fn.animate;
      return;
    }
    var DURATION_DEFAULT = 400,
        EASING_DEFAULT = "swing";
    var Velocity = {
      State: {
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        isAndroid: /Android/i.test(navigator.userAgent),
        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
        isChrome: window.chrome,
        isFirefox: /Firefox/i.test(navigator.userAgent),
        prefixElement: document.createElement("div"),
        prefixMatches: {},
        scrollAnchor: null,
        scrollPropertyLeft: null,
        scrollPropertyTop: null,
        isTicking: false,
        calls: []
      },
      CSS: {},
      Utilities: $,
      Redirects: {},
      Easings: {},
      Promise: window.Promise,
      defaults: {
        queue: "",
        duration: DURATION_DEFAULT,
        easing: EASING_DEFAULT,
        begin: undefined,
        complete: undefined,
        progress: undefined,
        display: undefined,
        visibility: undefined,
        loop: false,
        delay: false,
        mobileHA: true,
        _cacheValues: true
      },
      init: function(element) {
        $.data(element, "velocity", {
          isSVG: Type.isSVG(element),
          isAnimating: false,
          computedStyle: null,
          tweensContainer: null,
          rootPropertyValueCache: {},
          transformCache: {}
        });
      },
      hook: null,
      mock: false,
      version: {
        major: 1,
        minor: 2,
        patch: 2
      },
      debug: false
    };
    if (window.pageYOffset !== undefined) {
      Velocity.State.scrollAnchor = window;
      Velocity.State.scrollPropertyLeft = "pageXOffset";
      Velocity.State.scrollPropertyTop = "pageYOffset";
    } else {
      Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
      Velocity.State.scrollPropertyLeft = "scrollLeft";
      Velocity.State.scrollPropertyTop = "scrollTop";
    }
    function Data(element) {
      var response = $.data(element, "velocity");
      return response === null ? undefined : response;
    }
    ;
    function generateStep(steps) {
      return function(p) {
        return Math.round(p * steps) * (1 / steps);
      };
    }
    function generateBezier(mX1, mY1, mX2, mY2) {
      var NEWTON_ITERATIONS = 4,
          NEWTON_MIN_SLOPE = 0.001,
          SUBDIVISION_PRECISION = 0.0000001,
          SUBDIVISION_MAX_ITERATIONS = 10,
          kSplineTableSize = 11,
          kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
          float32ArraySupported = "Float32Array" in window;
      if (arguments.length !== 4) {
        return false;
      }
      for (var i = 0; i < 4; ++i) {
        if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
          return false;
        }
      }
      mX1 = Math.min(mX1, 1);
      mX2 = Math.min(mX2, 1);
      mX1 = Math.max(mX1, 0);
      mX2 = Math.max(mX2, 0);
      var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
      function A(aA1, aA2) {
        return 1.0 - 3.0 * aA2 + 3.0 * aA1;
      }
      function B(aA1, aA2) {
        return 3.0 * aA2 - 6.0 * aA1;
      }
      function C(aA1) {
        return 3.0 * aA1;
      }
      function calcBezier(aT, aA1, aA2) {
        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
      }
      function getSlope(aT, aA1, aA2) {
        return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
      }
      function newtonRaphsonIterate(aX, aGuessT) {
        for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
          var currentSlope = getSlope(aGuessT, mX1, mX2);
          if (currentSlope === 0.0)
            return aGuessT;
          var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
          aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
      }
      function calcSampleValues() {
        for (var i = 0; i < kSplineTableSize; ++i) {
          mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        }
      }
      function binarySubdivide(aX, aA, aB) {
        var currentX,
            currentT,
            i = 0;
        do {
          currentT = aA + (aB - aA) / 2.0;
          currentX = calcBezier(currentT, mX1, mX2) - aX;
          if (currentX > 0.0) {
            aB = currentT;
          } else {
            aA = currentT;
          }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
      }
      function getTForX(aX) {
        var intervalStart = 0.0,
            currentSample = 1,
            lastSample = kSplineTableSize - 1;
        for (; currentSample != lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }
        --currentSample;
        var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
            guessForT = intervalStart + dist * kSampleStepSize,
            initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
          return newtonRaphsonIterate(aX, guessForT);
        } else if (initialSlope == 0.0) {
          return guessForT;
        } else {
          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
        }
      }
      var _precomputed = false;
      function precompute() {
        _precomputed = true;
        if (mX1 != mY1 || mX2 != mY2)
          calcSampleValues();
      }
      var f = function(aX) {
        if (!_precomputed)
          precompute();
        if (mX1 === mY1 && mX2 === mY2)
          return aX;
        if (aX === 0)
          return 0;
        if (aX === 1)
          return 1;
        return calcBezier(getTForX(aX), mY1, mY2);
      };
      f.getControlPoints = function() {
        return [{
          x: mX1,
          y: mY1
        }, {
          x: mX2,
          y: mY2
        }];
      };
      var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
      f.toString = function() {
        return str;
      };
      return f;
    }
    var generateSpringRK4 = (function() {
      function springAccelerationForState(state) {
        return (-state.tension * state.x) - (state.friction * state.v);
      }
      function springEvaluateStateWithDerivative(initialState, dt, derivative) {
        var state = {
          x: initialState.x + derivative.dx * dt,
          v: initialState.v + derivative.dv * dt,
          tension: initialState.tension,
          friction: initialState.friction
        };
        return {
          dx: state.v,
          dv: springAccelerationForState(state)
        };
      }
      function springIntegrateState(state, dt) {
        var a = {
          dx: state.v,
          dv: springAccelerationForState(state)
        },
            b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
            c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
            d = springEvaluateStateWithDerivative(state, dt, c),
            dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
            dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);
        state.x = state.x + dxdt * dt;
        state.v = state.v + dvdt * dt;
        return state;
      }
      return function springRK4Factory(tension, friction, duration) {
        var initState = {
          x: -1,
          v: 0,
          tension: null,
          friction: null
        },
            path = [0],
            time_lapsed = 0,
            tolerance = 1 / 10000,
            DT = 16 / 1000,
            have_duration,
            dt,
            last_state;
        tension = parseFloat(tension) || 500;
        friction = parseFloat(friction) || 20;
        duration = duration || null;
        initState.tension = tension;
        initState.friction = friction;
        have_duration = duration !== null;
        if (have_duration) {
          time_lapsed = springRK4Factory(tension, friction);
          dt = time_lapsed / duration * DT;
        } else {
          dt = DT;
        }
        while (true) {
          last_state = springIntegrateState(last_state || initState, dt);
          path.push(1 + last_state.x);
          time_lapsed += 16;
          if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
            break;
          }
        }
        return !have_duration ? time_lapsed : function(percentComplete) {
          return path[(percentComplete * (path.length - 1)) | 0];
        };
      };
    }());
    Velocity.Easings = {
      linear: function(p) {
        return p;
      },
      swing: function(p) {
        return 0.5 - Math.cos(p * Math.PI) / 2;
      },
      spring: function(p) {
        return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6));
      }
    };
    $.each([["ease", [0.25, 0.1, 0.25, 1.0]], ["ease-in", [0.42, 0.0, 1.00, 1.0]], ["ease-out", [0.00, 0.0, 0.58, 1.0]], ["ease-in-out", [0.42, 0.0, 0.58, 1.0]], ["easeInSine", [0.47, 0, 0.745, 0.715]], ["easeOutSine", [0.39, 0.575, 0.565, 1]], ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]], ["easeInQuad", [0.55, 0.085, 0.68, 0.53]], ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]], ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]], ["easeInCubic", [0.55, 0.055, 0.675, 0.19]], ["easeOutCubic", [0.215, 0.61, 0.355, 1]], ["easeInOutCubic", [0.645, 0.045, 0.355, 1]], ["easeInQuart", [0.895, 0.03, 0.685, 0.22]], ["easeOutQuart", [0.165, 0.84, 0.44, 1]], ["easeInOutQuart", [0.77, 0, 0.175, 1]], ["easeInQuint", [0.755, 0.05, 0.855, 0.06]], ["easeOutQuint", [0.23, 1, 0.32, 1]], ["easeInOutQuint", [0.86, 0, 0.07, 1]], ["easeInExpo", [0.95, 0.05, 0.795, 0.035]], ["easeOutExpo", [0.19, 1, 0.22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [0.6, 0.04, 0.98, 0.335]], ["easeOutCirc", [0.075, 0.82, 0.165, 1]], ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]], function(i, easingArray) {
      Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
    });
    function getEasing(value, duration) {
      var easing = value;
      if (Type.isString(value)) {
        if (!Velocity.Easings[value]) {
          easing = false;
        }
      } else if (Type.isArray(value) && value.length === 1) {
        easing = generateStep.apply(null, value);
      } else if (Type.isArray(value) && value.length === 2) {
        easing = generateSpringRK4.apply(null, value.concat([duration]));
      } else if (Type.isArray(value) && value.length === 4) {
        easing = generateBezier.apply(null, value);
      } else {
        easing = false;
      }
      if (easing === false) {
        if (Velocity.Easings[Velocity.defaults.easing]) {
          easing = Velocity.defaults.easing;
        } else {
          easing = EASING_DEFAULT;
        }
      }
      return easing;
    }
    var CSS = Velocity.CSS = {
      RegEx: {
        isHex: /^#([A-f\d]{3}){1,2}$/i,
        valueUnwrap: /^[A-z]+\((.*)\)$/i,
        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
      },
      Lists: {
        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
      },
      Hooks: {
        templates: {
          "textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
          "boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
          "clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
          "backgroundPosition": ["X Y", "0% 0%"],
          "transformOrigin": ["X Y Z", "50% 50% 0px"],
          "perspectiveOrigin": ["X Y", "50% 50%"]
        },
        registered: {},
        register: function() {
          for (var i = 0; i < CSS.Lists.colors.length; i++) {
            var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
            CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha", rgbComponents];
          }
          var rootProperty,
              hookTemplate,
              hookNames;
          if (IE) {
            for (rootProperty in CSS.Hooks.templates) {
              hookTemplate = CSS.Hooks.templates[rootProperty];
              hookNames = hookTemplate[0].split(" ");
              var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);
              if (hookNames[0] === "Color") {
                hookNames.push(hookNames.shift());
                defaultValues.push(defaultValues.shift());
                CSS.Hooks.templates[rootProperty] = [hookNames.join(" "), defaultValues.join(" ")];
              }
            }
          }
          for (rootProperty in CSS.Hooks.templates) {
            hookTemplate = CSS.Hooks.templates[rootProperty];
            hookNames = hookTemplate[0].split(" ");
            for (var i in hookNames) {
              var fullHookName = rootProperty + hookNames[i],
                  hookPosition = i;
              CSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];
            }
          }
        },
        getRoot: function(property) {
          var hookData = CSS.Hooks.registered[property];
          if (hookData) {
            return hookData[0];
          } else {
            return property;
          }
        },
        cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
          if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
            rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
          }
          if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
            rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
          }
          return rootPropertyValue;
        },
        extractValue: function(fullHookName, rootPropertyValue) {
          var hookData = CSS.Hooks.registered[fullHookName];
          if (hookData) {
            var hookRoot = hookData[0],
                hookPosition = hookData[1];
            rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
            return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
          } else {
            return rootPropertyValue;
          }
        },
        injectValue: function(fullHookName, hookValue, rootPropertyValue) {
          var hookData = CSS.Hooks.registered[fullHookName];
          if (hookData) {
            var hookRoot = hookData[0],
                hookPosition = hookData[1],
                rootPropertyValueParts,
                rootPropertyValueUpdated;
            rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
            rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
            rootPropertyValueParts[hookPosition] = hookValue;
            rootPropertyValueUpdated = rootPropertyValueParts.join(" ");
            return rootPropertyValueUpdated;
          } else {
            return rootPropertyValue;
          }
        }
      },
      Normalizations: {
        registered: {
          clip: function(type, element, propertyValue) {
            switch (type) {
              case "name":
                return "clip";
              case "extract":
                var extracted;
                if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
                  extracted = propertyValue;
                } else {
                  extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);
                  extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
                }
                return extracted;
              case "inject":
                return "rect(" + propertyValue + ")";
            }
          },
          blur: function(type, element, propertyValue) {
            switch (type) {
              case "name":
                return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
              case "extract":
                var extracted = parseFloat(propertyValue);
                if (!(extracted || extracted === 0)) {
                  var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                  if (blurComponent) {
                    extracted = blurComponent[1];
                  } else {
                    extracted = 0;
                  }
                }
                return extracted;
              case "inject":
                if (!parseFloat(propertyValue)) {
                  return "none";
                } else {
                  return "blur(" + propertyValue + ")";
                }
            }
          },
          opacity: function(type, element, propertyValue) {
            if (IE <= 8) {
              switch (type) {
                case "name":
                  return "filter";
                case "extract":
                  var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);
                  if (extracted) {
                    propertyValue = extracted[1] / 100;
                  } else {
                    propertyValue = 1;
                  }
                  return propertyValue;
                case "inject":
                  element.style.zoom = 1;
                  if (parseFloat(propertyValue) >= 1) {
                    return "";
                  } else {
                    return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
                  }
              }
            } else {
              switch (type) {
                case "name":
                  return "opacity";
                case "extract":
                  return propertyValue;
                case "inject":
                  return propertyValue;
              }
            }
          }
        },
        register: function() {
          if (!(IE <= 9) && !Velocity.State.isGingerbread) {
            CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
          }
          for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
            (function() {
              var transformName = CSS.Lists.transformsBase[i];
              CSS.Normalizations.registered[transformName] = function(type, element, propertyValue) {
                switch (type) {
                  case "name":
                    return "transform";
                  case "extract":
                    if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
                      return /^scale/i.test(transformName) ? 1 : 0;
                    } else {
                      return Data(element).transformCache[transformName].replace(/[()]/g, "");
                    }
                  case "inject":
                    var invalid = false;
                    switch (transformName.substr(0, transformName.length - 1)) {
                      case "translate":
                        invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
                        break;
                      case "scal":
                      case "scale":
                        if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
                          propertyValue = 1;
                        }
                        invalid = !/(\d)$/i.test(propertyValue);
                        break;
                      case "skew":
                        invalid = !/(deg|\d)$/i.test(propertyValue);
                        break;
                      case "rotate":
                        invalid = !/(deg|\d)$/i.test(propertyValue);
                        break;
                    }
                    if (!invalid) {
                      Data(element).transformCache[transformName] = "(" + propertyValue + ")";
                    }
                    return Data(element).transformCache[transformName];
                }
              };
            })();
          }
          for (var i = 0; i < CSS.Lists.colors.length; i++) {
            (function() {
              var colorName = CSS.Lists.colors[i];
              CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
                switch (type) {
                  case "name":
                    return colorName;
                  case "extract":
                    var extracted;
                    if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
                      extracted = propertyValue;
                    } else {
                      var converted,
                          colorNames = {
                            black: "rgb(0, 0, 0)",
                            blue: "rgb(0, 0, 255)",
                            gray: "rgb(128, 128, 128)",
                            green: "rgb(0, 128, 0)",
                            red: "rgb(255, 0, 0)",
                            white: "rgb(255, 255, 255)"
                          };
                      if (/^[A-z]+$/i.test(propertyValue)) {
                        if (colorNames[propertyValue] !== undefined) {
                          converted = colorNames[propertyValue];
                        } else {
                          converted = colorNames.black;
                        }
                      } else if (CSS.RegEx.isHex.test(propertyValue)) {
                        converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
                      } else if (!(/^rgba?\(/i.test(propertyValue))) {
                        converted = colorNames.black;
                      }
                      extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                    }
                    if (!(IE <= 8) && extracted.split(" ").length === 3) {
                      extracted += " 1";
                    }
                    return extracted;
                  case "inject":
                    if (IE <= 8) {
                      if (propertyValue.split(" ").length === 4) {
                        propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
                      }
                    } else if (propertyValue.split(" ").length === 3) {
                      propertyValue += " 1";
                    }
                    return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
                }
              };
            })();
          }
        }
      },
      Names: {
        camelCase: function(property) {
          return property.replace(/-(\w)/g, function(match, subMatch) {
            return subMatch.toUpperCase();
          });
        },
        SVGAttribute: function(property) {
          var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
          if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
            SVGAttributes += "|transform";
          }
          return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
        },
        prefixCheck: function(property) {
          if (Velocity.State.prefixMatches[property]) {
            return [Velocity.State.prefixMatches[property], true];
          } else {
            var vendors = ["", "Webkit", "Moz", "ms", "O"];
            for (var i = 0,
                vendorsLength = vendors.length; i < vendorsLength; i++) {
              var propertyPrefixed;
              if (i === 0) {
                propertyPrefixed = property;
              } else {
                propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) {
                  return match.toUpperCase();
                });
              }
              if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
                Velocity.State.prefixMatches[property] = propertyPrefixed;
                return [propertyPrefixed, true];
              }
            }
            return [property, false];
          }
        }
      },
      Values: {
        hexToRgb: function(hex) {
          var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
              rgbParts;
          hex = hex.replace(shortformRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
          });
          rgbParts = longformRegex.exec(hex);
          return rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];
        },
        isCSSNullValue: function(value) {
          return (value == 0 || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));
        },
        getUnitType: function(property) {
          if (/^(rotate|skew)/i.test(property)) {
            return "deg";
          } else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
            return "";
          } else {
            return "px";
          }
        },
        getDisplayType: function(element) {
          var tagName = element && element.tagName.toString().toLowerCase();
          if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
            return "inline";
          } else if (/^(li)$/i.test(tagName)) {
            return "list-item";
          } else if (/^(tr)$/i.test(tagName)) {
            return "table-row";
          } else if (/^(table)$/i.test(tagName)) {
            return "table";
          } else if (/^(tbody)$/i.test(tagName)) {
            return "table-row-group";
          } else {
            return "block";
          }
        },
        addClass: function(element, className) {
          if (element.classList) {
            element.classList.add(className);
          } else {
            element.className += (element.className.length ? " " : "") + className;
          }
        },
        removeClass: function(element, className) {
          if (element.classList) {
            element.classList.remove(className);
          } else {
            element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
          }
        }
      },
      getPropertyValue: function(element, property, rootPropertyValue, forceStyleLookup) {
        function computePropertyValue(element, property) {
          var computedValue = 0;
          if (IE <= 8) {
            computedValue = $.css(element, property);
          } else {
            var toggleDisplay = false;
            if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
              toggleDisplay = true;
              CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
            }
            function revertDisplay() {
              if (toggleDisplay) {
                CSS.setPropertyValue(element, "display", "none");
              }
            }
            if (!forceStyleLookup) {
              if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
                var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
                revertDisplay();
                return contentBoxHeight;
              } else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
                var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
                revertDisplay();
                return contentBoxWidth;
              }
            }
            var computedStyle;
            if (Data(element) === undefined) {
              computedStyle = window.getComputedStyle(element, null);
            } else if (!Data(element).computedStyle) {
              computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null);
            } else {
              computedStyle = Data(element).computedStyle;
            }
            if (property === "borderColor") {
              property = "borderTopColor";
            }
            if (IE === 9 && property === "filter") {
              computedValue = computedStyle.getPropertyValue(property);
            } else {
              computedValue = computedStyle[property];
            }
            if (computedValue === "" || computedValue === null) {
              computedValue = element.style[property];
            }
            revertDisplay();
          }
          if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
            var position = computePropertyValue(element, "position");
            if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
              computedValue = $(element).position()[property] + "px";
            }
          }
          return computedValue;
        }
        var propertyValue;
        if (CSS.Hooks.registered[property]) {
          var hook = property,
              hookRoot = CSS.Hooks.getRoot(hook);
          if (rootPropertyValue === undefined) {
            rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]);
          }
          if (CSS.Normalizations.registered[hookRoot]) {
            rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
          }
          propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);
        } else if (CSS.Normalizations.registered[property]) {
          var normalizedPropertyName,
              normalizedPropertyValue;
          normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);
          if (normalizedPropertyName !== "transform") {
            normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]);
            if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
              normalizedPropertyValue = CSS.Hooks.templates[property][1];
            }
          }
          propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
        }
        if (!/^[\d-]/.test(propertyValue)) {
          if (Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)) {
            if (/^(height|width)$/i.test(property)) {
              try {
                propertyValue = element.getBBox()[property];
              } catch (error) {
                propertyValue = 0;
              }
            } else {
              propertyValue = element.getAttribute(property);
            }
          } else {
            propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]);
          }
        }
        if (CSS.Values.isCSSNullValue(propertyValue)) {
          propertyValue = 0;
        }
        if (Velocity.debug >= 2)
          console.log("Get " + property + ": " + propertyValue);
        return propertyValue;
      },
      setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
        var propertyName = property;
        if (property === "scroll") {
          if (scrollData.container) {
            scrollData.container["scroll" + scrollData.direction] = propertyValue;
          } else {
            if (scrollData.direction === "Left") {
              window.scrollTo(propertyValue, scrollData.alternateValue);
            } else {
              window.scrollTo(scrollData.alternateValue, propertyValue);
            }
          }
        } else {
          if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
            CSS.Normalizations.registered[property]("inject", element, propertyValue);
            propertyName = "transform";
            propertyValue = Data(element).transformCache[property];
          } else {
            if (CSS.Hooks.registered[property]) {
              var hookName = property,
                  hookRoot = CSS.Hooks.getRoot(property);
              rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot);
              propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
              property = hookRoot;
            }
            if (CSS.Normalizations.registered[property]) {
              propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
              property = CSS.Normalizations.registered[property]("name", element);
            }
            propertyName = CSS.Names.prefixCheck(property)[0];
            if (IE <= 8) {
              try {
                element.style[propertyName] = propertyValue;
              } catch (error) {
                if (Velocity.debug)
                  console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");
              }
            } else if (Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)) {
              element.setAttribute(property, propertyValue);
            } else {
              element.style[propertyName] = propertyValue;
            }
            if (Velocity.debug >= 2)
              console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
          }
        }
        return [propertyName, propertyValue];
      },
      flushTransformCache: function(element) {
        var transformString = "";
        if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && Data(element).isSVG) {
          function getTransformFloat(transformProperty) {
            return parseFloat(CSS.getPropertyValue(element, transformProperty));
          }
          var SVGTransforms = {
            translate: [getTransformFloat("translateX"), getTransformFloat("translateY")],
            skewX: [getTransformFloat("skewX")],
            skewY: [getTransformFloat("skewY")],
            scale: getTransformFloat("scale") !== 1 ? [getTransformFloat("scale"), getTransformFloat("scale")] : [getTransformFloat("scaleX"), getTransformFloat("scaleY")],
            rotate: [getTransformFloat("rotateZ"), 0, 0]
          };
          $.each(Data(element).transformCache, function(transformName) {
            if (/^translate/i.test(transformName)) {
              transformName = "translate";
            } else if (/^scale/i.test(transformName)) {
              transformName = "scale";
            } else if (/^rotate/i.test(transformName)) {
              transformName = "rotate";
            }
            if (SVGTransforms[transformName]) {
              transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";
              delete SVGTransforms[transformName];
            }
          });
        } else {
          var transformValue,
              perspective;
          $.each(Data(element).transformCache, function(transformName) {
            transformValue = Data(element).transformCache[transformName];
            if (transformName === "transformPerspective") {
              perspective = transformValue;
              return true;
            }
            if (IE === 9 && transformName === "rotateZ") {
              transformName = "rotate";
            }
            transformString += transformName + transformValue + " ";
          });
          if (perspective) {
            transformString = "perspective" + perspective + " " + transformString;
          }
        }
        CSS.setPropertyValue(element, "transform", transformString);
      }
    };
    CSS.Hooks.register();
    CSS.Normalizations.register();
    Velocity.hook = function(elements, arg2, arg3) {
      var value = undefined;
      elements = sanitizeElements(elements);
      $.each(elements, function(i, element) {
        if (Data(element) === undefined) {
          Velocity.init(element);
        }
        if (arg3 === undefined) {
          if (value === undefined) {
            value = Velocity.CSS.getPropertyValue(element, arg2);
          }
        } else {
          var adjustedSet = Velocity.CSS.setPropertyValue(element, arg2, arg3);
          if (adjustedSet[0] === "transform") {
            Velocity.CSS.flushTransformCache(element);
          }
          value = adjustedSet;
        }
      });
      return value;
    };
    var animate = function() {
      function getChain() {
        if (isUtility) {
          return promiseData.promise || null;
        } else {
          return elementsWrapped;
        }
      }
      var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
          isUtility,
          elementsWrapped,
          argumentIndex;
      var elements,
          propertiesMap,
          options;
      if (Type.isWrapped(this)) {
        isUtility = false;
        argumentIndex = 0;
        elements = this;
        elementsWrapped = this;
      } else {
        isUtility = true;
        argumentIndex = 1;
        elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];
      }
      elements = sanitizeElements(elements);
      if (!elements) {
        return;
      }
      if (syntacticSugar) {
        propertiesMap = arguments[0].properties || arguments[0].p;
        options = arguments[0].options || arguments[0].o;
      } else {
        propertiesMap = arguments[argumentIndex];
        options = arguments[argumentIndex + 1];
      }
      var elementsLength = elements.length,
          elementsIndex = 0;
      if (!/^(stop|finish)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
        var startingArgumentPosition = argumentIndex + 1;
        options = {};
        for (var i = startingArgumentPosition; i < arguments.length; i++) {
          if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
            options.duration = arguments[i];
          } else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
            options.easing = arguments[i];
          } else if (Type.isFunction(arguments[i])) {
            options.complete = arguments[i];
          }
        }
      }
      var promiseData = {
        promise: null,
        resolver: null,
        rejecter: null
      };
      if (isUtility && Velocity.Promise) {
        promiseData.promise = new Velocity.Promise(function(resolve, reject) {
          promiseData.resolver = resolve;
          promiseData.rejecter = reject;
        });
      }
      var action;
      switch (propertiesMap) {
        case "scroll":
          action = "scroll";
          break;
        case "reverse":
          action = "reverse";
          break;
        case "finish":
        case "stop":
          $.each(elements, function(i, element) {
            if (Data(element) && Data(element).delayTimer) {
              clearTimeout(Data(element).delayTimer.setTimeout);
              if (Data(element).delayTimer.next) {
                Data(element).delayTimer.next();
              }
              delete Data(element).delayTimer;
            }
          });
          var callsToStop = [];
          $.each(Velocity.State.calls, function(i, activeCall) {
            if (activeCall) {
              $.each(activeCall[1], function(k, activeElement) {
                var queueName = (options === undefined) ? "" : options;
                if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
                  return true;
                }
                $.each(elements, function(l, element) {
                  if (element === activeElement) {
                    if (options === true || Type.isString(options)) {
                      $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
                        if (Type.isFunction(item)) {
                          item(null, true);
                        }
                      });
                      $.queue(element, Type.isString(options) ? options : "", []);
                    }
                    if (propertiesMap === "stop") {
                      if (Data(element) && Data(element).tweensContainer && queueName !== false) {
                        $.each(Data(element).tweensContainer, function(m, activeTween) {
                          activeTween.endValue = activeTween.currentValue;
                        });
                      }
                      callsToStop.push(i);
                    } else if (propertiesMap === "finish") {
                      activeCall[2].duration = 1;
                    }
                  }
                });
              });
            }
          });
          if (propertiesMap === "stop") {
            $.each(callsToStop, function(i, j) {
              completeCall(j, true);
            });
            if (promiseData.promise) {
              promiseData.resolver(elements);
            }
          }
          return getChain();
        default:
          if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
            action = "start";
          } else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
            var opts = $.extend({}, options),
                durationOriginal = opts.duration,
                delayOriginal = opts.delay || 0;
            if (opts.backwards === true) {
              elements = $.extend(true, [], elements).reverse();
            }
            $.each(elements, function(elementIndex, element) {
              if (parseFloat(opts.stagger)) {
                opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);
              } else if (Type.isFunction(opts.stagger)) {
                opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
              }
              if (opts.drag) {
                opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);
                opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
              }
              Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
            });
            return getChain();
          } else {
            var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";
            if (promiseData.promise) {
              promiseData.rejecter(new Error(abortError));
            } else {
              console.log(abortError);
            }
            return getChain();
          }
      }
      var callUnitConversionData = {
        lastParent: null,
        lastPosition: null,
        lastFontSize: null,
        lastPercentToPxWidth: null,
        lastPercentToPxHeight: null,
        lastEmToPx: null,
        remToPx: null,
        vwToPx: null,
        vhToPx: null
      };
      var call = [];
      function processElement() {
        var element = this,
            opts = $.extend({}, Velocity.defaults, options),
            tweensContainer = {},
            elementUnitConversionData;
        if (Data(element) === undefined) {
          Velocity.init(element);
        }
        if (parseFloat(opts.delay) && opts.queue !== false) {
          $.queue(element, opts.queue, function(next) {
            Velocity.velocityQueueEntryFlag = true;
            Data(element).delayTimer = {
              setTimeout: setTimeout(next, parseFloat(opts.delay)),
              next: next
            };
          });
        }
        switch (opts.duration.toString().toLowerCase()) {
          case "fast":
            opts.duration = 200;
            break;
          case "normal":
            opts.duration = DURATION_DEFAULT;
            break;
          case "slow":
            opts.duration = 600;
            break;
          default:
            opts.duration = parseFloat(opts.duration) || 1;
        }
        if (Velocity.mock !== false) {
          if (Velocity.mock === true) {
            opts.duration = opts.delay = 1;
          } else {
            opts.duration *= parseFloat(Velocity.mock) || 1;
            opts.delay *= parseFloat(Velocity.mock) || 1;
          }
        }
        opts.easing = getEasing(opts.easing, opts.duration);
        if (opts.begin && !Type.isFunction(opts.begin)) {
          opts.begin = null;
        }
        if (opts.progress && !Type.isFunction(opts.progress)) {
          opts.progress = null;
        }
        if (opts.complete && !Type.isFunction(opts.complete)) {
          opts.complete = null;
        }
        if (opts.display !== undefined && opts.display !== null) {
          opts.display = opts.display.toString().toLowerCase();
          if (opts.display === "auto") {
            opts.display = Velocity.CSS.Values.getDisplayType(element);
          }
        }
        if (opts.visibility !== undefined && opts.visibility !== null) {
          opts.visibility = opts.visibility.toString().toLowerCase();
        }
        opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);
        function buildQueue(next) {
          if (opts.begin && elementsIndex === 0) {
            try {
              opts.begin.call(elements, elements);
            } catch (error) {
              setTimeout(function() {
                throw error;
              }, 1);
            }
          }
          if (action === "scroll") {
            var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),
                scrollOffset = parseFloat(opts.offset) || 0,
                scrollPositionCurrent,
                scrollPositionCurrentAlternate,
                scrollPositionEnd;
            if (opts.container) {
              if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
                opts.container = opts.container[0] || opts.container;
                scrollPositionCurrent = opts.container["scroll" + scrollDirection];
                scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset;
              } else {
                opts.container = null;
              }
            } else {
              scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]];
              scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]];
              scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset;
            }
            tweensContainer = {
              scroll: {
                rootPropertyValue: false,
                startValue: scrollPositionCurrent,
                currentValue: scrollPositionCurrent,
                endValue: scrollPositionEnd,
                unitType: "",
                easing: opts.easing,
                scrollData: {
                  container: opts.container,
                  direction: scrollDirection,
                  alternateValue: scrollPositionCurrentAlternate
                }
              },
              element: element
            };
            if (Velocity.debug)
              console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
          } else if (action === "reverse") {
            if (!Data(element).tweensContainer) {
              $.dequeue(element, opts.queue);
              return;
            } else {
              if (Data(element).opts.display === "none") {
                Data(element).opts.display = "auto";
              }
              if (Data(element).opts.visibility === "hidden") {
                Data(element).opts.visibility = "visible";
              }
              Data(element).opts.loop = false;
              Data(element).opts.begin = null;
              Data(element).opts.complete = null;
              if (!options.easing) {
                delete opts.easing;
              }
              if (!options.duration) {
                delete opts.duration;
              }
              opts = $.extend({}, Data(element).opts, opts);
              var lastTweensContainer = $.extend(true, {}, Data(element).tweensContainer);
              for (var lastTween in lastTweensContainer) {
                if (lastTween !== "element") {
                  var lastStartValue = lastTweensContainer[lastTween].startValue;
                  lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
                  lastTweensContainer[lastTween].endValue = lastStartValue;
                  if (!Type.isEmptyObject(options)) {
                    lastTweensContainer[lastTween].easing = opts.easing;
                  }
                  if (Velocity.debug)
                    console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
                }
              }
              tweensContainer = lastTweensContainer;
            }
          } else if (action === "start") {
            var lastTweensContainer;
            if (Data(element).tweensContainer && Data(element).isAnimating === true) {
              lastTweensContainer = Data(element).tweensContainer;
            }
            function parsePropertyValue(valueData, skipResolvingEasing) {
              var endValue = undefined,
                  easing = undefined,
                  startValue = undefined;
              if (Type.isArray(valueData)) {
                endValue = valueData[0];
                if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
                  startValue = valueData[1];
                } else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1])) || Type.isArray(valueData[1])) {
                  easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);
                  if (valueData[2] !== undefined) {
                    startValue = valueData[2];
                  }
                }
              } else {
                endValue = valueData;
              }
              if (!skipResolvingEasing) {
                easing = easing || opts.easing;
              }
              if (Type.isFunction(endValue)) {
                endValue = endValue.call(element, elementsIndex, elementsLength);
              }
              if (Type.isFunction(startValue)) {
                startValue = startValue.call(element, elementsIndex, elementsLength);
              }
              return [endValue || 0, easing, startValue];
            }
            $.each(propertiesMap, function(property, value) {
              if (RegExp("^" + CSS.Lists.colors.join("$|^") + "$").test(property)) {
                var valueData = parsePropertyValue(value, true),
                    endValue = valueData[0],
                    easing = valueData[1],
                    startValue = valueData[2];
                if (CSS.RegEx.isHex.test(endValue)) {
                  var colorComponents = ["Red", "Green", "Blue"],
                      endValueRGB = CSS.Values.hexToRgb(endValue),
                      startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;
                  for (var i = 0; i < colorComponents.length; i++) {
                    var dataArray = [endValueRGB[i]];
                    if (easing) {
                      dataArray.push(easing);
                    }
                    if (startValueRGB !== undefined) {
                      dataArray.push(startValueRGB[i]);
                    }
                    propertiesMap[property + colorComponents[i]] = dataArray;
                  }
                  delete propertiesMap[property];
                }
              }
            });
            for (var property in propertiesMap) {
              var valueData = parsePropertyValue(propertiesMap[property]),
                  endValue = valueData[0],
                  easing = valueData[1],
                  startValue = valueData[2];
              property = CSS.Names.camelCase(property);
              var rootProperty = CSS.Hooks.getRoot(property),
                  rootPropertyValue = false;
              if (!Data(element).isSVG && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
                if (Velocity.debug)
                  console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
                continue;
              }
              if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
                startValue = 0;
              }
              if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
                if (startValue === undefined) {
                  startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
                }
                rootPropertyValue = Data(element).rootPropertyValueCache[rootProperty];
              } else {
                if (CSS.Hooks.registered[property]) {
                  if (startValue === undefined) {
                    rootPropertyValue = CSS.getPropertyValue(element, rootProperty);
                    startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
                  } else {
                    rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
                  }
                } else if (startValue === undefined) {
                  startValue = CSS.getPropertyValue(element, property);
                }
              }
              var separatedValue,
                  endValueUnitType,
                  startValueUnitType,
                  operator = false;
              function separateValue(property, value) {
                var unitType,
                    numericValue;
                numericValue = (value || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(match) {
                  unitType = match;
                  return "";
                });
                if (!unitType) {
                  unitType = CSS.Values.getUnitType(property);
                }
                return [numericValue, unitType];
              }
              separatedValue = separateValue(property, startValue);
              startValue = separatedValue[0];
              startValueUnitType = separatedValue[1];
              separatedValue = separateValue(property, endValue);
              endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
                operator = subMatch;
                return "";
              });
              endValueUnitType = separatedValue[1];
              startValue = parseFloat(startValue) || 0;
              endValue = parseFloat(endValue) || 0;
              if (endValueUnitType === "%") {
                if (/^(fontSize|lineHeight)$/.test(property)) {
                  endValue = endValue / 100;
                  endValueUnitType = "em";
                } else if (/^scale/.test(property)) {
                  endValue = endValue / 100;
                  endValueUnitType = "";
                } else if (/(Red|Green|Blue)$/i.test(property)) {
                  endValue = (endValue / 100) * 255;
                  endValueUnitType = "";
                }
              }
              function calculateUnitRatios() {
                var sameRatioIndicators = {
                  myParent: element.parentNode || document.body,
                  position: CSS.getPropertyValue(element, "position"),
                  fontSize: CSS.getPropertyValue(element, "fontSize")
                },
                    samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
                    sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);
                callUnitConversionData.lastParent = sameRatioIndicators.myParent;
                callUnitConversionData.lastPosition = sameRatioIndicators.position;
                callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;
                var measurement = 100,
                    unitRatios = {};
                if (!sameEmRatio || !samePercentRatio) {
                  var dummy = Data(element).isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");
                  Velocity.init(dummy);
                  sameRatioIndicators.myParent.appendChild(dummy);
                  $.each(["overflow", "overflowX", "overflowY"], function(i, property) {
                    Velocity.CSS.setPropertyValue(dummy, property, "hidden");
                  });
                  Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
                  Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
                  Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");
                  $.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(i, property) {
                    Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
                  });
                  Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");
                  unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement;
                  unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement;
                  unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement;
                  sameRatioIndicators.myParent.removeChild(dummy);
                } else {
                  unitRatios.emToPx = callUnitConversionData.lastEmToPx;
                  unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
                  unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
                }
                if (callUnitConversionData.remToPx === null) {
                  callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16;
                }
                if (callUnitConversionData.vwToPx === null) {
                  callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100;
                  callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100;
                }
                unitRatios.remToPx = callUnitConversionData.remToPx;
                unitRatios.vwToPx = callUnitConversionData.vwToPx;
                unitRatios.vhToPx = callUnitConversionData.vhToPx;
                if (Velocity.debug >= 1)
                  console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
                return unitRatios;
              }
              if (/[\/*]/.test(operator)) {
                endValueUnitType = startValueUnitType;
              } else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
                if (endValue === 0) {
                  endValueUnitType = startValueUnitType;
                } else {
                  elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();
                  var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";
                  switch (startValueUnitType) {
                    case "%":
                      startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
                      break;
                    case "px":
                      break;
                    default:
                      startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
                  }
                  switch (endValueUnitType) {
                    case "%":
                      startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
                      break;
                    case "px":
                      break;
                    default:
                      startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
                  }
                }
              }
              switch (operator) {
                case "+":
                  endValue = startValue + endValue;
                  break;
                case "-":
                  endValue = startValue - endValue;
                  break;
                case "*":
                  endValue = startValue * endValue;
                  break;
                case "/":
                  endValue = startValue / endValue;
                  break;
              }
              tweensContainer[property] = {
                rootPropertyValue: rootPropertyValue,
                startValue: startValue,
                currentValue: startValue,
                endValue: endValue,
                unitType: endValueUnitType,
                easing: easing
              };
              if (Velocity.debug)
                console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
            }
            tweensContainer.element = element;
          }
          if (tweensContainer.element) {
            CSS.Values.addClass(element, "velocity-animating");
            call.push(tweensContainer);
            if (opts.queue === "") {
              Data(element).tweensContainer = tweensContainer;
              Data(element).opts = opts;
            }
            Data(element).isAnimating = true;
            if (elementsIndex === elementsLength - 1) {
              Velocity.State.calls.push([call, elements, opts, null, promiseData.resolver]);
              if (Velocity.State.isTicking === false) {
                Velocity.State.isTicking = true;
                tick();
              }
            } else {
              elementsIndex++;
            }
          }
        }
        if (opts.queue === false) {
          if (opts.delay) {
            setTimeout(buildQueue, opts.delay);
          } else {
            buildQueue();
          }
        } else {
          $.queue(element, opts.queue, function(next, clearQueue) {
            if (clearQueue === true) {
              if (promiseData.promise) {
                promiseData.resolver(elements);
              }
              return true;
            }
            Velocity.velocityQueueEntryFlag = true;
            buildQueue(next);
          });
        }
        if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
          $.dequeue(element);
        }
      }
      $.each(elements, function(i, element) {
        if (Type.isNode(element)) {
          processElement.call(element);
        }
      });
      var opts = $.extend({}, Velocity.defaults, options),
          reverseCallsCount;
      opts.loop = parseInt(opts.loop);
      reverseCallsCount = (opts.loop * 2) - 1;
      if (opts.loop) {
        for (var x = 0; x < reverseCallsCount; x++) {
          var reverseOptions = {
            delay: opts.delay,
            progress: opts.progress
          };
          if (x === reverseCallsCount - 1) {
            reverseOptions.display = opts.display;
            reverseOptions.visibility = opts.visibility;
            reverseOptions.complete = opts.complete;
          }
          animate(elements, "reverse", reverseOptions);
        }
      }
      return getChain();
    };
    Velocity = $.extend(animate, Velocity);
    Velocity.animate = animate;
    var ticker = window.requestAnimationFrame || rAFShim;
    if (!Velocity.State.isMobile && document.hidden !== undefined) {
      document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
          ticker = function(callback) {
            return setTimeout(function() {
              callback(true);
            }, 16);
          };
          tick();
        } else {
          ticker = window.requestAnimationFrame || rAFShim;
        }
      });
    }
    function tick(timestamp) {
      if (timestamp) {
        var timeCurrent = (new Date).getTime();
        var callsLength = Velocity.State.calls.length;
        if (callsLength > 10000) {
          Velocity.State.calls = compactSparseArray(Velocity.State.calls);
        }
        for (var i = 0; i < callsLength; i++) {
          if (!Velocity.State.calls[i]) {
            continue;
          }
          var callContainer = Velocity.State.calls[i],
              call = callContainer[0],
              opts = callContainer[2],
              timeStart = callContainer[3],
              firstTick = !!timeStart,
              tweenDummyValue = null;
          if (!timeStart) {
            timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
          }
          var percentComplete = Math.min((timeCurrent - timeStart) / opts.duration, 1);
          for (var j = 0,
              callLength = call.length; j < callLength; j++) {
            var tweensContainer = call[j],
                element = tweensContainer.element;
            if (!Data(element)) {
              continue;
            }
            var transformPropertyExists = false;
            if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
              if (opts.display === "flex") {
                var flexValues = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                $.each(flexValues, function(i, flexValue) {
                  CSS.setPropertyValue(element, "display", flexValue);
                });
              }
              CSS.setPropertyValue(element, "display", opts.display);
            }
            if (opts.visibility !== undefined && opts.visibility !== "hidden") {
              CSS.setPropertyValue(element, "visibility", opts.visibility);
            }
            for (var property in tweensContainer) {
              if (property !== "element") {
                var tween = tweensContainer[property],
                    currentValue,
                    easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;
                if (percentComplete === 1) {
                  currentValue = tween.endValue;
                } else {
                  var tweenDelta = tween.endValue - tween.startValue;
                  currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
                  if (!firstTick && (currentValue === tween.currentValue)) {
                    continue;
                  }
                }
                tween.currentValue = currentValue;
                if (property === "tween") {
                  tweenDummyValue = currentValue;
                } else {
                  if (CSS.Hooks.registered[property]) {
                    var hookRoot = CSS.Hooks.getRoot(property),
                        rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];
                    if (rootPropertyValueCache) {
                      tween.rootPropertyValue = rootPropertyValueCache;
                    }
                  }
                  var adjustedSetData = CSS.setPropertyValue(element, property, tween.currentValue + (parseFloat(currentValue) === 0 ? "" : tween.unitType), tween.rootPropertyValue, tween.scrollData);
                  if (CSS.Hooks.registered[property]) {
                    if (CSS.Normalizations.registered[hookRoot]) {
                      Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
                    } else {
                      Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
                    }
                  }
                  if (adjustedSetData[0] === "transform") {
                    transformPropertyExists = true;
                  }
                }
              }
            }
            if (opts.mobileHA) {
              if (Data(element).transformCache.translate3d === undefined) {
                Data(element).transformCache.translate3d = "(0px, 0px, 0px)";
                transformPropertyExists = true;
              }
            }
            if (transformPropertyExists) {
              CSS.flushTransformCache(element);
            }
          }
          if (opts.display !== undefined && opts.display !== "none") {
            Velocity.State.calls[i][2].display = false;
          }
          if (opts.visibility !== undefined && opts.visibility !== "hidden") {
            Velocity.State.calls[i][2].visibility = false;
          }
          if (opts.progress) {
            opts.progress.call(callContainer[1], callContainer[1], percentComplete, Math.max(0, (timeStart + opts.duration) - timeCurrent), timeStart, tweenDummyValue);
          }
          if (percentComplete === 1) {
            completeCall(i);
          }
        }
      }
      if (Velocity.State.isTicking) {
        ticker(tick);
      }
    }
    function completeCall(callIndex, isStopped) {
      if (!Velocity.State.calls[callIndex]) {
        return false;
      }
      var call = Velocity.State.calls[callIndex][0],
          elements = Velocity.State.calls[callIndex][1],
          opts = Velocity.State.calls[callIndex][2],
          resolver = Velocity.State.calls[callIndex][4];
      var remainingCallsExist = false;
      for (var i = 0,
          callLength = call.length; i < callLength; i++) {
        var element = call[i].element;
        if (!isStopped && !opts.loop) {
          if (opts.display === "none") {
            CSS.setPropertyValue(element, "display", opts.display);
          }
          if (opts.visibility === "hidden") {
            CSS.setPropertyValue(element, "visibility", opts.visibility);
          }
        }
        if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
          if (Data(element)) {
            Data(element).isAnimating = false;
            Data(element).rootPropertyValueCache = {};
            var transformHAPropertyExists = false;
            $.each(CSS.Lists.transforms3D, function(i, transformName) {
              var defaultValue = /^scale/.test(transformName) ? 1 : 0,
                  currentValue = Data(element).transformCache[transformName];
              if (Data(element).transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
                transformHAPropertyExists = true;
                delete Data(element).transformCache[transformName];
              }
            });
            if (opts.mobileHA) {
              transformHAPropertyExists = true;
              delete Data(element).transformCache.translate3d;
            }
            if (transformHAPropertyExists) {
              CSS.flushTransformCache(element);
            }
            CSS.Values.removeClass(element, "velocity-animating");
          }
        }
        if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
          try {
            opts.complete.call(elements, elements);
          } catch (error) {
            setTimeout(function() {
              throw error;
            }, 1);
          }
        }
        if (resolver && opts.loop !== true) {
          resolver(elements);
        }
        if (Data(element) && opts.loop === true && !isStopped) {
          $.each(Data(element).tweensContainer, function(propertyName, tweenContainer) {
            if (/^rotate/.test(propertyName) && parseFloat(tweenContainer.endValue) === 360) {
              tweenContainer.endValue = 0;
              tweenContainer.startValue = 360;
            }
            if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
              tweenContainer.endValue = 0;
              tweenContainer.startValue = 100;
            }
          });
          Velocity(element, "reverse", {
            loop: true,
            delay: opts.delay
          });
        }
        if (opts.queue !== false) {
          $.dequeue(element, opts.queue);
        }
      }
      Velocity.State.calls[callIndex] = false;
      for (var j = 0,
          callsLength = Velocity.State.calls.length; j < callsLength; j++) {
        if (Velocity.State.calls[j] !== false) {
          remainingCallsExist = true;
          break;
        }
      }
      if (remainingCallsExist === false) {
        Velocity.State.isTicking = false;
        delete Velocity.State.calls;
        Velocity.State.calls = [];
      }
    }
    global.Velocity = Velocity;
    if (global !== window) {
      global.fn.velocity = animate;
      global.fn.velocity.defaults = Velocity.defaults;
    }
    $.each(["Down", "Up"], function(i, direction) {
      Velocity.Redirects["slide" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
        var opts = $.extend({}, options),
            begin = opts.begin,
            complete = opts.complete,
            computedValues = {
              height: "",
              marginTop: "",
              marginBottom: "",
              paddingTop: "",
              paddingBottom: ""
            },
            inlineValues = {};
        if (opts.display === undefined) {
          opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
        }
        opts.begin = function() {
          begin && begin.call(elements, elements);
          for (var property in computedValues) {
            inlineValues[property] = element.style[property];
            var propertyValue = Velocity.CSS.getPropertyValue(element, property);
            computedValues[property] = (direction === "Down") ? [propertyValue, 0] : [0, propertyValue];
          }
          inlineValues.overflow = element.style.overflow;
          element.style.overflow = "hidden";
        };
        opts.complete = function() {
          for (var property in inlineValues) {
            element.style[property] = inlineValues[property];
          }
          complete && complete.call(elements, elements);
          promiseData && promiseData.resolver(elements);
        };
        Velocity(element, computedValues, opts);
      };
    });
    $.each(["In", "Out"], function(i, direction) {
      Velocity.Redirects["fade" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
        var opts = $.extend({}, options),
            propertiesMap = {opacity: (direction === "In") ? 1 : 0},
            originalComplete = opts.complete;
        if (elementsIndex !== elementsSize - 1) {
          opts.complete = opts.begin = null;
        } else {
          opts.complete = function() {
            if (originalComplete) {
              originalComplete.call(elements, elements);
            }
            promiseData && promiseData.resolver(elements);
          };
        }
        if (opts.display === undefined) {
          opts.display = (direction === "In" ? "auto" : "none");
        }
        Velocity(this, propertiesMap, opts);
      };
    });
    return Velocity;
  }((window.jQuery || window.Zepto || window), window, document);
}));

_removeDefine();
})();
System.register('js/main.js', ['libs/jquery/2.1.4/jquery.js', 'js/router/index.js', 'js/utils/env.js'], function (_export) {
  /**
   * Created by wushuyi on 2015/9/13.
   */
  'use strict';

  var $, register_all, router, env;
  return {
    setters: [function (_libsJquery214JqueryJs) {
      $ = _libsJquery214JqueryJs['default'];
    }, function (_jsRouterIndexJs) {
      register_all = _jsRouterIndexJs['default'];
      router = _jsRouterIndexJs.router;
    }, function (_jsUtilsEnvJs) {
      env = _jsUtilsEnvJs['default'];
    }],
    execute: function () {

      $('#nav, .prevent_touch').on('touchstart', function (evt) {
        evt.preventDefault();
      });
      register_all();
      router.init('/gftj');

      window.env = env;
    }
  };
});
System.register("js/utils/env.js", [], function (_export) {
  /**
   * Created by wushuyi on 2015/9/13.
   */
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {});
    }
  };
});
System.register('js/router/index.js', ['libs/Director/1.2.8/director.js', 'js/router/gftj.js', 'js/router/pyq.js', 'js/router/fxdt.js', 'js/router/wd.js', 'js/router/mapinfo.js', 'js/router/maplist.js', 'js/router/modal.js', 'js/router/role.js', 'js/router/follow.js', 'js/utils/env.js', 'js/router/utils.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var Director, register_gftj, register_pyq, register_fxdt, register_wd, register_mapinfo, register_maplist, register_modal, register_role, register_follow, env, routeHistory, getRouter, router;

    function register_all() {
        register_gftj(router);
        register_pyq(router);
        register_fxdt(router);
        register_wd(router);
        register_mapinfo(router);
        register_maplist(router);
        register_modal(router);
        register_role(router);
        register_follow(router);
    }

    return {
        setters: [function (_libsDirector128DirectorJs) {
            Director = _libsDirector128DirectorJs['default'];
        }, function (_jsRouterGftjJs) {
            register_gftj = _jsRouterGftjJs['default'];
        }, function (_jsRouterPyqJs) {
            register_pyq = _jsRouterPyqJs['default'];
        }, function (_jsRouterFxdtJs) {
            register_fxdt = _jsRouterFxdtJs['default'];
        }, function (_jsRouterWdJs) {
            register_wd = _jsRouterWdJs['default'];
        }, function (_jsRouterMapinfoJs) {
            register_mapinfo = _jsRouterMapinfoJs['default'];
        }, function (_jsRouterMaplistJs) {
            register_maplist = _jsRouterMaplistJs['default'];
        }, function (_jsRouterModalJs) {
            register_modal = _jsRouterModalJs['default'];
        }, function (_jsRouterRoleJs) {
            register_role = _jsRouterRoleJs['default'];
        }, function (_jsRouterFollowJs) {
            register_follow = _jsRouterFollowJs['default'];
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }, function (_jsRouterUtilsJs) {
            routeHistory = _jsRouterUtilsJs.routeHistory;
            getRouter = _jsRouterUtilsJs.getRouter;
        }],
        execute: function () {
            router = new Director.Router();

            _export('router', router);

            router.configure({
                before: function before() {
                    console.log('before');
                    routeHistory.push(getRouter());
                    window.routeHistory = routeHistory;
                }
            });
            env.router = router;
            env.first_page = '/gftj';
            _export('default', register_all);
        }
    };
});
System.register('js/router/fxdt.js', ['js/page/fxdt.js', 'js/utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var FxdtPage, env;

    function register(router) {
        var route = '/fxdt';
        var page = 'fxdt_page';

        router.on(route, function (id) {
            if (env[page]) {
                return false;
            }
            env[page] = new FxdtPage();
        });
        router.on('after', route, function () {
            env[page].destroy();
            delete env[page];
        });
    }

    return {
        setters: [function (_jsPageFxdtJs) {
            FxdtPage = _jsPageFxdtJs['default'];
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }],
        execute: function () {
            _export('default', register);
        }
    };
});
System.register('js/router/gftj.js', ['js/page/gftj.js', 'js/utils/env.js', 'js/router/utils.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var GftjPage, env, routeHistory, getRouter;

    function register(router) {
        var route = '/gftj';
        var page = 'gftj_page';

        router.on(route, function (id) {
            if (env[page]) {
                return false;
            }
            env[page] = new GftjPage();
        });
        router.on('after', route, function () {
            env[page].destroy();
            delete env[page];
        });
    }

    return {
        setters: [function (_jsPageGftjJs) {
            GftjPage = _jsPageGftjJs['default'];
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }, function (_jsRouterUtilsJs) {
            routeHistory = _jsRouterUtilsJs.routeHistory;
            getRouter = _jsRouterUtilsJs.getRouter;
        }],
        execute: function () {
            _export('default', register);
        }
    };
});
System.register('js/router/pyq.js', ['js/page/pyq.js', 'js/utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var PyqPage, env;

    function register(router) {
        var route = '/pyq';
        var page = 'pyq_page';

        router.on(route, function () {
            if (env[page]) {
                return false;
            }
            env[page] = new PyqPage();
        });
        router.on('after', route, function () {
            env[page].destroy();
            delete env[page];
        });
    }

    return {
        setters: [function (_jsPagePyqJs) {
            PyqPage = _jsPagePyqJs['default'];
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }],
        execute: function () {
            _export('default', register);
        }
    };
});
System.register('js/router/wd.js', ['js/page/wd.js', 'js/utils/env.js', 'js/router/utils.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var WdPage, env, getRouter;

    function register(router) {
        var route = '/wd';
        var page = 'wd_page';

        router.on(route, function () {
            if (env[page]) {
                return false;
            }
            env[page] = new WdPage();
        });
        router.on('after', route, function () {
            var nowRoute = getRouter();
            if (nowRoute.indexOf('/modal') !== -1) {
                setTimeout(function () {
                    env[page].destroy();
                    delete env[page];
                }, 500);
                return false;
            }

            env[page].destroy();
            delete env[page];
        });
    }

    return {
        setters: [function (_jsPageWdJs) {
            WdPage = _jsPageWdJs['default'];
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }, function (_jsRouterUtilsJs) {
            getRouter = _jsRouterUtilsJs.getRouter;
        }],
        execute: function () {
            _export('default', register);
        }
    };
});
System.register('js/router/mapinfo.js', ['js/page/mapinfo.js', 'js/utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/14.
     */
    'use strict';

    var MapInfoPage, env;

    function register(router) {
        var route = '/mapinfo/archives/:id';
        router.on(route, function (id) {
            env.mapinfo_page = new MapInfoPage({
                id: id
            });
        });
        router.on('after', route, function () {
            env.mapinfo_page.destroy();
            delete env.mapinfo_page;
        });
    }

    return {
        setters: [function (_jsPageMapinfoJs) {
            MapInfoPage = _jsPageMapinfoJs['default'];
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }],
        execute: function () {
            _export('default', register);
        }
    };
});
System.register('js/router/maplist.js', ['js/page/maplist.js', 'js/utils/env.js', 'js/router/utils.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/14.
     */
    'use strict';

    var MapListPage, env, getRouter;

    function register(router) {
        var route = 'mapinfo/list/:id';
        var page = 'mapinfo_list_page';

        router.on(route, function (id) {
            if (env[page]) {
                return false;
            }
            env[page] = new MapListPage({
                id: id
            });
        });
        router.on('after', route, function () {
            var nowRoute = getRouter();
            if (nowRoute.indexOf('/modal') !== -1) {
                setTimeout(function () {
                    env[page].destroy();
                    delete env[page];
                }, 500);
                return false;
            }
            env[page].destroy();
            delete env[page];
        });
    }

    return {
        setters: [function (_jsPageMaplistJs) {
            MapListPage = _jsPageMaplistJs['default'];
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }, function (_jsRouterUtilsJs) {
            getRouter = _jsRouterUtilsJs.getRouter;
        }],
        execute: function () {
            _export('default', register);
        }
    };
});
System.register('js/router/modal.js', ['js/page/modal.js', 'js/utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/17.
     */
    'use strict';

    var ModalManage, env;

    function register(router) {
        {
            (function () {
                var route = '/modal/set';
                var page = 'set_modal';
                router.on(route, function () {
                    env[page] = new ModalManage({
                        modal: 'set'
                    });
                });
                router.on('after', route, function () {
                    env[page].destory();
                    delete env[page];
                });
            })();
        }

        {
            (function () {
                var route = '/modal/address/:id';
                var page = 'address_modal';
                router.on(route, function (id) {
                    env[page] = new ModalManage({
                        id: id,
                        modal: 'address'
                    });
                });
                router.on('after', route, function () {
                    env[page].destory();
                    delete env[page];
                });
            })();
        }
    }

    return {
        setters: [function (_jsPageModalJs) {
            ModalManage = _jsPageModalJs['default'];
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }],
        execute: function () {
            _export('default', register);
        }
    };
});
System.register('js/router/role.js', ['js/page/role.js', 'js/utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/18.
     */
    'use strict';

    var RolePage, env;

    function register(router) {
        var route = '/role/:id';
        var page = 'role_page';

        router.on(route, function (id) {
            if (env[page]) {
                return false;
            }
            env[page] = new RolePage({
                id: id
            });
        });
        router.on('after', route, function () {
            env[page].destroy();
            delete env[page];
        });
    }

    return {
        setters: [function (_jsPageRoleJs) {
            RolePage = _jsPageRoleJs['default'];
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }],
        execute: function () {
            _export('default', register);
        }
    };
});
System.register('js/router/follow.js', ['js/page/follow.js', 'js/utils/env.js', 'js/router/utils.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var FollowPage, env, routeHistory;

    function register(router) {
        var route = '/follow/:type/:id';
        var page = 'follow_page';

        router.on(route, function (id) {
            if (env[page]) {
                return false;
            }
            env[page] = new FollowPage({
                id: id
            });
        });
        router.on('after', route, function () {
            env[page].destroy();
            delete env[page];
        });
    }

    return {
        setters: [function (_jsPageFollowJs) {
            FollowPage = _jsPageFollowJs['default'];
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }, function (_jsRouterUtilsJs) {
            routeHistory = _jsRouterUtilsJs.routeHistory;
        }],
        execute: function () {
            _export('default', register);
        }
    };
});
System.register('js/router/utils.js', ['js/utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/18.
     */
    'use strict';

    var env, historyList, routeHistory;

    _export('getRouter', getRouter);

    function getRouter() {
        var path = env.router.getRoute();
        path.unshift('');
        return path.join('/');
    }

    return {
        setters: [function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }],
        execute: function () {
            historyList = [];
            routeHistory = {
                push: function push(route) {
                    if (env.goback) {
                        env.goback = false;
                        return false;
                    }
                    if (historyList.length > 100) {
                        historyList.shift();
                    }
                    historyList.push(route);
                },
                goback: function goback(num) {
                    env.goback = true;
                    if (!num) {
                        num = 1;
                    }
                    for (var i = 0; i < num; i++) {
                        historyList.pop();
                    }
                    var route = historyList[historyList.length - 1] || '/gftj';
                    env.router.setRoute(route);
                },
                get: function get(status) {
                    if (status === 'now') {
                        return historyList[historyList.length - 1];
                    }
                    if (status === 'prve') {
                        return historyList[historyList.length - 2];
                    }
                    if (status === 'all') {
                        return historyList;
                    }
                }
            };

            _export('routeHistory', routeHistory);
        }
    };
});
System.register('js/page/pyq.js', ['libs/jquery/2.1.4/jquery.js', 'js/page/base.js', 'libs/iScroll/5.1.3/iscroll-lite.js', 'js/utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var $, BasePage, iScroll, env, PyqPage;
    return {
        setters: [function (_libsJquery214JqueryJs) {
            $ = _libsJquery214JqueryJs['default'];
        }, function (_jsPageBaseJs) {
            BasePage = _jsPageBaseJs['default'];
        }, function (_libsIScroll513IscrollLiteJs) {
            iScroll = _libsIScroll513IscrollLiteJs['default'];
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }],
        execute: function () {
            PyqPage = (function (_BasePage) {
                babelHelpers.inherits(PyqPage, _BasePage);

                function PyqPage() {
                    babelHelpers.classCallCheck(this, PyqPage);

                    if (arguments[0] === false) {
                        return false;
                    }
                    babelHelpers.get(Object.getPrototypeOf(PyqPage.prototype), 'constructor', this).call(this, false);
                    this.initialize.apply(this, arguments);
                }

                babelHelpers.createClass(PyqPage, [{
                    key: 'initialize',
                    value: function initialize() {
                        babelHelpers.get(Object.getPrototypeOf(PyqPage.prototype), 'initialize', this).call(this);
                        var $el = {};
                        this.$el = $el;
                        var iscrolls = {};
                        this.iscrolls = iscrolls;
                        $el.nav = $('.nav-item[data-router="/pyq"]');
                        $el.page = $('#page_pyq');
                        babelHelpers.get(Object.getPrototypeOf(PyqPage.prototype), 'startPage', this).call(this);
                        iscrolls.content = new iScroll($el.page.get(0));

                        this.onReview = function () {
                            iscrolls.content.refresh();
                        };
                        env.mainlayout.on('review', this.onReview);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var _this = this;

                        var self = this;
                        var iscrolls = this.iscrolls;

                        babelHelpers.get(Object.getPrototypeOf(PyqPage.prototype), 'endPage', this).call(this, function () {
                            env.mainlayout.off('review', self.onReview);
                            $.each(iscrolls, function (key, iscroll) {
                                iscroll.destroy();
                            });
                            _this.$el = null;
                        });
                    }
                }]);
                return PyqPage;
            })(BasePage);

            _export('default', PyqPage);
        }
    };
});
System.register('js/page/fxdt.js', ['libs/jquery/2.1.4/jquery.js', 'js/page/base.js', 'libs/iScroll/5.1.3/iscroll-lite.js', 'js/utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var $, BasePage, iScroll, env, FxdtPage;
    return {
        setters: [function (_libsJquery214JqueryJs) {
            $ = _libsJquery214JqueryJs['default'];
        }, function (_jsPageBaseJs) {
            BasePage = _jsPageBaseJs['default'];
        }, function (_libsIScroll513IscrollLiteJs) {
            iScroll = _libsIScroll513IscrollLiteJs['default'];
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }],
        execute: function () {
            FxdtPage = (function (_BasePage) {
                babelHelpers.inherits(FxdtPage, _BasePage);

                function FxdtPage() {
                    babelHelpers.classCallCheck(this, FxdtPage);

                    if (arguments[0] === false) {
                        return false;
                    }
                    babelHelpers.get(Object.getPrototypeOf(FxdtPage.prototype), 'constructor', this).call(this, false);
                    this.initialize.apply(this, arguments);
                }

                babelHelpers.createClass(FxdtPage, [{
                    key: 'initialize',
                    value: function initialize() {
                        babelHelpers.get(Object.getPrototypeOf(FxdtPage.prototype), 'initialize', this).call(this);
                        var $el = {};
                        this.$el = $el;
                        var iscrolls = {};
                        this.iscrolls = iscrolls;
                        $el.nav = $('.nav-item[data-router="/fxdt"]');
                        $el.page = $('#page_fxdt');
                        babelHelpers.get(Object.getPrototypeOf(FxdtPage.prototype), 'startPage', this).call(this);
                        iscrolls.content = new iScroll($el.page.get(0));
                        this.onReview = function () {
                            iscrolls.content.refresh();
                        };
                        env.mainlayout.on('review', this.onReview);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var self = this;
                        var iscrolls = this.iscrolls;

                        babelHelpers.get(Object.getPrototypeOf(FxdtPage.prototype), 'endPage', this).call(this, function () {
                            env.mainlayout.off('review', self.onReview);
                            $.each(iscrolls, function (key, iscroll) {
                                iscroll.destroy();
                            });
                            self.$el = null;
                        });
                    }
                }]);
                return FxdtPage;
            })(BasePage);

            _export('default', FxdtPage);
        }
    };
});
System.register('js/page/gftj.js', ['libs/jquery/2.1.4/jquery.js', 'libs/Swiper/3.1.2/js/swiper.js', 'js/page/base.js', 'libs/iScroll/5.1.3/iscroll-lite.js', 'js/utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var $, Swiper, BasePage, iScroll, env, GftjPage;
    return {
        setters: [function (_libsJquery214JqueryJs) {
            $ = _libsJquery214JqueryJs['default'];
        }, function (_libsSwiper312JsSwiperJs) {
            Swiper = _libsSwiper312JsSwiperJs['default'];
        }, function (_jsPageBaseJs) {
            BasePage = _jsPageBaseJs['default'];
        }, function (_libsIScroll513IscrollLiteJs) {
            iScroll = _libsIScroll513IscrollLiteJs['default'];
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }],
        execute: function () {
            GftjPage = (function (_BasePage) {
                babelHelpers.inherits(GftjPage, _BasePage);

                function GftjPage() {
                    babelHelpers.classCallCheck(this, GftjPage);

                    if (arguments[0] === false) {
                        return false;
                    }
                    babelHelpers.get(Object.getPrototypeOf(GftjPage.prototype), 'constructor', this).call(this, false);
                    this.initialize.apply(this, arguments);
                }

                babelHelpers.createClass(GftjPage, [{
                    key: 'initialize',
                    value: function initialize() {
                        babelHelpers.get(Object.getPrototypeOf(GftjPage.prototype), 'initialize', this).call(this);
                        var $el = {};
                        var iscrolls = {};
                        this.$el = $el;
                        this.iscrolls = iscrolls;
                        $el.nav = $('.nav-item[data-router="/gftj"]');
                        $el.page = $('#page_gftj');
                        $el.swiper = $el.page.find('.swiper-container');
                        $el.topPeople = $('.top-people');
                        $el.classify1 = $('.classify1');
                        $el.classify2 = $('.classify2');
                        babelHelpers.get(Object.getPrototypeOf(GftjPage.prototype), 'startPage', this).call(this);

                        this.my_swiper = new Swiper($el.swiper.get(0), {
                            speed: 400,
                            loop: true,
                            pagination: '.swiper-pagination',
                            autoplay: 2500,
                            autoplayDisableOnInteraction: false
                        });

                        this.initIscrolls();
                    }
                }, {
                    key: 'initIscrolls',
                    value: function initIscrolls() {
                        var $el = this.$el;
                        var iscrolls = this.iscrolls;

                        var reset_horizontal = function reset_horizontal($element) {
                            var $child = $($element.children()[0]);
                            var $grand_child = $($child.children()[0]);

                            $child.width(10000);
                            $child.width($grand_child.width());
                        };

                        reset_horizontal($el.topPeople);
                        reset_horizontal($el.classify1);
                        reset_horizontal($el.classify2);

                        iscrolls.content = new iScroll($el.page.get(0));
                        iscrolls.topPeople = new iScroll($el.topPeople.get(0), {
                            scrollX: true,
                            scrollY: false
                        });

                        iscrolls.classify1 = new iScroll($el.classify1.get(0), {
                            scrollX: true,
                            scrollY: false
                        });
                        iscrolls.classify2 = new iScroll($el.classify2.get(0), {
                            scrollX: true,
                            scrollY: false
                        });

                        this.onReview = function () {
                            iscrolls.content.refresh();
                        };
                        env.mainlayout.on('review', this.onReview);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var self = this;
                        var iscrolls = this.iscrolls;

                        babelHelpers.get(Object.getPrototypeOf(GftjPage.prototype), 'endPage', this).call(this, function () {
                            env.mainlayout.off('review', self.onReview);
                            $.each(iscrolls, function (key, iscroll) {
                                iscroll.destroy();
                            });

                            self.my_swiper.destroy();
                            self.$el = null;
                        });
                    }
                }]);
                return GftjPage;
            })(BasePage);

            _export('default', GftjPage);
        }
    };
});
System.register('js/page/wd.js', ['libs/jquery/2.1.4/jquery.js', 'js/page/base.js', 'libs/iScroll/5.1.3/iscroll-lite.js', 'js/utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    //import Swiper from 'Swiper'
    var $, BasePage, iScroll, env, WdPage;
    return {
        setters: [function (_libsJquery214JqueryJs) {
            $ = _libsJquery214JqueryJs['default'];
        }, function (_jsPageBaseJs) {
            BasePage = _jsPageBaseJs['default'];
        }, function (_libsIScroll513IscrollLiteJs) {
            iScroll = _libsIScroll513IscrollLiteJs['default'];
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }],
        execute: function () {
            WdPage = (function (_BasePage) {
                babelHelpers.inherits(WdPage, _BasePage);

                function WdPage() {
                    babelHelpers.classCallCheck(this, WdPage);

                    if (arguments[0] === false) {
                        return false;
                    }
                    babelHelpers.get(Object.getPrototypeOf(WdPage.prototype), 'constructor', this).call(this, false);
                    this.initialize.apply(this, arguments);
                }

                babelHelpers.createClass(WdPage, [{
                    key: 'initialize',
                    value: function initialize() {
                        babelHelpers.get(Object.getPrototypeOf(WdPage.prototype), 'initialize', this).call(this);
                        var $el = {};
                        this.$el = $el;
                        var iscrolls = {};
                        this.iscrolls = iscrolls;
                        $el.nav = $('.nav-item[data-router="/wd"]');
                        $el.page = $('#page_wd');
                        babelHelpers.get(Object.getPrototypeOf(WdPage.prototype), 'startPage', this).call(this);
                        iscrolls.content = new iScroll($el.page.get(0));

                        this.onReview = function () {
                            iscrolls.content.refresh();
                        };
                        env.mainlayout.on('review', this.onReview);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var self = this;
                        var iscrolls = this.iscrolls;
                        var $el = this.$el;
                        babelHelpers.get(Object.getPrototypeOf(WdPage.prototype), 'endPage', this).call(this, function () {
                            env.mainlayout.off('review', self.onReview);
                            $.each(iscrolls, function (key, iscroll) {
                                iscroll.destroy();
                            });
                            self.$el = null;
                        });
                    }
                }]);
                return WdPage;
            })(BasePage);

            _export('default', WdPage);
        }
    };
});
System.register('js/page/mapinfo.js', ['libs/jquery/2.1.4/jquery.js', 'js/page/base.js', 'libs/iScroll/5.1.3/iscroll-lite.js', 'js/utils/wsy_utils.js', 'js/router/utils.js', 'js/utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/14.
     */
    'use strict';

    var $, BasePage, iScroll, proxy, routeHistory, env, MapInfoPage;
    return {
        setters: [function (_libsJquery214JqueryJs) {
            $ = _libsJquery214JqueryJs['default'];
        }, function (_jsPageBaseJs) {
            BasePage = _jsPageBaseJs['default'];
        }, function (_libsIScroll513IscrollLiteJs) {
            iScroll = _libsIScroll513IscrollLiteJs['default'];
        }, function (_jsUtilsWsy_utilsJs) {
            proxy = _jsUtilsWsy_utilsJs.proxy;
        }, function (_jsRouterUtilsJs) {
            routeHistory = _jsRouterUtilsJs.routeHistory;
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }],
        execute: function () {
            MapInfoPage = (function (_BasePage) {
                babelHelpers.inherits(MapInfoPage, _BasePage);

                function MapInfoPage() {
                    babelHelpers.classCallCheck(this, MapInfoPage);

                    if (arguments[0] === false) {
                        return false;
                    }
                    babelHelpers.get(Object.getPrototypeOf(MapInfoPage.prototype), 'constructor', this).call(this, false);
                    this.initialize.apply(this, arguments);
                }

                babelHelpers.createClass(MapInfoPage, [{
                    key: 'initialize',
                    value: function initialize(options) {
                        babelHelpers.get(Object.getPrototypeOf(MapInfoPage.prototype), 'initialize', this).call(this);
                        var $el = {};
                        this.$el = $el;
                        var iscrolls = {};
                        this.iscrolls = iscrolls;
                        $el.page = $('#page_mapinfo');
                        $el.close = $el.page.find('.tab-close');
                        $el.tabList = $el.page.find('.tab-list');
                        $el.commentList = $el.page.find('.comment-list');
                        $el.prompt = $el.commentList.next('.prompt');
                        $el.hotNumBox = $('.hot-num-box');
                        $el.commentBox = $('.comment-box');
                        babelHelpers.get(Object.getPrototypeOf(MapInfoPage.prototype), 'startPage', this).call(this);
                        iscrolls.content = new iScroll($el.page.get(0));

                        $el.close.one('tap.mapinfo', function () {
                            var list = routeHistory.get('all');
                            var route = undefined;
                            do {
                                route = list.pop();
                                console.log('pop:', route);
                            } while (route && route.indexOf('/mapinfo') !== -1);
                            env.router.setRoute(route || env.first_page);
                        });
                        $el.tabList.attr('data-router', '/mapinfo/list/' + options.id);
                        var pullFunc = proxy(function () {
                            if (this.pullUpActionLock) {
                                return true;
                            }
                            if (iscrolls.content.maxScrollY - iscrolls.content.y > 100) {
                                this.pullUpAction();
                            }
                        }, this);
                        iscrolls.content.on('scrollStart.mapinfo', function () {
                            $el.page.one('touchend.mapinfo', pullFunc);
                        });

                        var $updata = $el.commentBox.find('.updata');
                        var $submit = $el.commentBox.find('.submit');
                        var $input = $el.commentBox.find('.input');
                        $el.hotNumBox.one('tap.mapinfo', '.comment-num', function () {
                            $updata.velocity({
                                height: 112
                            }, {
                                complete: function complete() {
                                    iscrolls.content.refresh();
                                }
                            });
                        });
                        $submit.on('tap.mapinfo', function () {
                            $input.val('');
                        });
                    }
                }, {
                    key: 'pullUpAction',
                    value: function pullUpAction() {
                        var temp = '<li>' + '<div class="comment clearfix">' + '<div class="avatar"></div>' + '<div class="msg">new 评论这是一条评论它评论评论这是一条评论它评论评论这是一条评论它评论</div>' + '</div>' + '</li>';
                        var reshtml = '';
                        for (var i = 10; i > 0; i--) {
                            reshtml = reshtml + temp;
                        }
                        this.pullUpActionLock = true;
                        var $el = this.$el;
                        var iscrolls = this.iscrolls;
                        var scrollTo = $el.commentList.find('.comment:last').get(0);

                        $el.loading = $('<li class="loading">loging...</li>');
                        $el.prompt.hide();
                        $el.commentList.append($el.loading);
                        iscrolls.content.refresh();
                        setTimeout(proxy(function () {
                            $el.loading.hide().remove();
                            $el.commentList.append(reshtml);
                            $el.prompt.show();
                            iscrolls.content.refresh();
                            this.pullUpActionLock = false;
                            iscrolls.content.scrollToElement(scrollTo, 1000);
                        }, this), 3000);
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var iscrolls = this.iscrolls;
                        var self = this;
                        var $el = this.$el;
                        babelHelpers.get(Object.getPrototypeOf(MapInfoPage.prototype), 'endPage', this).call(this, function () {
                            iscrolls.content.off('.mapinfo');
                            $.each($el, function (index, el) {
                                el.off('.mapinfo');
                            });
                            $.each(iscrolls, function (key, iscroll) {
                                iscroll.destroy();
                            });
                            self.$el = null;
                        });
                    }
                }]);
                return MapInfoPage;
            })(BasePage);

            _export('default', MapInfoPage);
        }
    };
});
System.register('js/page/maplist.js', ['libs/jquery/2.1.4/jquery.js', 'libs/Swiper/3.1.2/js/swiper.js', 'js/page/base.js', 'libs/iScroll/5.1.3/iscroll-lite.js', 'js/utils/env.js', 'js/router/utils.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var $, Swiper, BasePage, iScroll, env, routeHistory, MapListPage;
    return {
        setters: [function (_libsJquery214JqueryJs) {
            $ = _libsJquery214JqueryJs['default'];
        }, function (_libsSwiper312JsSwiperJs) {
            Swiper = _libsSwiper312JsSwiperJs['default'];
        }, function (_jsPageBaseJs) {
            BasePage = _jsPageBaseJs['default'];
        }, function (_libsIScroll513IscrollLiteJs) {
            iScroll = _libsIScroll513IscrollLiteJs['default'];
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }, function (_jsRouterUtilsJs) {
            routeHistory = _jsRouterUtilsJs.routeHistory;
        }],
        execute: function () {
            MapListPage = (function (_BasePage) {
                babelHelpers.inherits(MapListPage, _BasePage);

                function MapListPage() {
                    babelHelpers.classCallCheck(this, MapListPage);

                    if (arguments[0] === false) {
                        return false;
                    }
                    babelHelpers.get(Object.getPrototypeOf(MapListPage.prototype), 'constructor', this).call(this, false);
                    this.initialize.apply(this, arguments);
                }

                babelHelpers.createClass(MapListPage, [{
                    key: 'initialize',
                    value: function initialize(options) {
                        babelHelpers.get(Object.getPrototypeOf(MapListPage.prototype), 'initialize', this).call(this);
                        var $el = {};
                        this.$el = $el;
                        var iscrolls = {};
                        this.iscrolls = iscrolls;
                        $el.page = $('#page_maplist');
                        $el.close = $el.page.find('.tab-close');
                        $el.tabArchives = $el.page.find('.tab-archives');
                        babelHelpers.get(Object.getPrototypeOf(MapListPage.prototype), 'startPage', this).call(this);
                        $el.close.one('tap.maplist', function () {
                            var list = routeHistory.get('all');
                            var route = undefined;
                            do {
                                route = list.pop();
                                console.log('pop:', route);
                            } while (route && route.indexOf('/mapinfo') !== -1);
                            env.router.setRoute(route || env.first_page);
                        });
                        $el.tabArchives.attr('data-router', '/mapinfo/archives/' + options.id);

                        iscrolls.content = new iScroll($el.page.get(0));
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var _this = this;

                        var iscrolls = this.iscrolls;
                        babelHelpers.get(Object.getPrototypeOf(MapListPage.prototype), 'endPage', this).call(this, function () {
                            $.each(iscrolls, function (key, iscroll) {
                                iscroll.destroy();
                            });
                            _this.$el = null;
                        });
                    }
                }]);
                return MapListPage;
            })(BasePage);

            _export('default', MapListPage);
        }
    };
});
System.register('js/page/modal.js', ['libs/jquery/2.1.4/jquery.js', 'js/utils/wsy_utils.js', 'js/router/utils.js', 'js/utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/17.
     */
    'use strict';

    var $, transitionEnd, routeHistory, env, ModalManage;
    return {
        setters: [function (_libsJquery214JqueryJs) {
            $ = _libsJquery214JqueryJs['default'];
        }, function (_jsUtilsWsy_utilsJs) {
            transitionEnd = _jsUtilsWsy_utilsJs.transitionEnd;
        }, function (_jsRouterUtilsJs) {
            routeHistory = _jsRouterUtilsJs.routeHistory;
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }],
        execute: function () {
            ModalManage = (function () {
                function ModalManage() {
                    babelHelpers.classCallCheck(this, ModalManage);

                    this.initialize.apply(this, arguments);
                }

                babelHelpers.createClass(ModalManage, [{
                    key: 'initialize',
                    value: function initialize(options) {
                        var $el = {};
                        this.$el = $el;
                        $el.modalBox = $('#modal-box');
                        this['modal_' + options.modal](options);
                    }
                }, {
                    key: 'modal_set',
                    value: function modal_set(options) {
                        var $el = this.$el;

                        $el.modal = $('#modal-set');
                        $el.modalBox.show();
                        $el.close = $el.modal.find('.close');

                        $el.close.on('tap.modalmanage', function () {
                            $el.modal.removeClass('active');
                            routeHistory.goback();
                        });

                        setTimeout(function () {
                            $el.modal.addClass('active');
                        }, 100);
                    }
                }, {
                    key: 'modal_address',
                    value: function modal_address(options) {
                        var $el = this.$el;

                        $el.modal = $('#modal-address');
                        $el.modalBox.show();
                        $el.close = $el.modal.find('.close');

                        $el.close.one('tap.modalmanage', function () {
                            $el.modal.removeClass('active');
                            routeHistory.goback();
                        });

                        setTimeout(function () {
                            $el.modal.addClass('active');
                        }, 100);
                    }
                }, {
                    key: 'destory',
                    value: function destory() {
                        var $el = this.$el;
                        $.each($el, function (key, el) {
                            el.off('.modalmanage');
                        });
                        setTimeout(function () {
                            $el.modalBox.hide();
                        }, 400);
                    }
                }]);
                return ModalManage;
            })();

            _export('default', ModalManage);
        }
    };
});
System.register('js/page/role.js', ['libs/jquery/2.1.4/jquery.js', 'js/page/base.js', 'libs/iScroll/5.1.3/iscroll-lite.js', 'js/router/utils.js', 'js/utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/18.
     */

    //import Swiper from 'Swiper'
    'use strict';

    var $, BasePage, iScroll, routeHistory, env, RolePage;
    return {
        setters: [function (_libsJquery214JqueryJs) {
            $ = _libsJquery214JqueryJs['default'];
        }, function (_jsPageBaseJs) {
            BasePage = _jsPageBaseJs['default'];
        }, function (_libsIScroll513IscrollLiteJs) {
            iScroll = _libsIScroll513IscrollLiteJs['default'];
        }, function (_jsRouterUtilsJs) {
            routeHistory = _jsRouterUtilsJs.routeHistory;
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }],
        execute: function () {
            RolePage = (function (_BasePage) {
                babelHelpers.inherits(RolePage, _BasePage);

                function RolePage() {
                    babelHelpers.classCallCheck(this, RolePage);

                    if (arguments[0] === false) {
                        return false;
                    }
                    babelHelpers.get(Object.getPrototypeOf(RolePage.prototype), 'constructor', this).call(this, false);
                    this.initialize.apply(this, arguments);
                }

                babelHelpers.createClass(RolePage, [{
                    key: 'initialize',
                    value: function initialize(options) {
                        babelHelpers.get(Object.getPrototypeOf(RolePage.prototype), 'initialize', this).call(this);
                        var $el = {};
                        this.$el = $el;
                        var iscrolls = {};
                        this.iscrolls = iscrolls;
                        $el.page = $('#page_role');
                        $el.close = $el.page.find('.close');
                        //$el.close.attr('data-router', options.close_router);
                        $el.close.one('tap.rolepage', function () {
                            routeHistory.goback();
                        });
                        babelHelpers.get(Object.getPrototypeOf(RolePage.prototype), 'startPage', this).call(this);
                        iscrolls.content = new iScroll($el.page.get(0));
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var iscrolls = this.iscrolls;
                        var self = this;
                        var $el = this.$el;
                        babelHelpers.get(Object.getPrototypeOf(RolePage.prototype), 'endPage', this).call(this, function () {
                            $.each($el, function (key, el) {
                                el.off('.rolepage');
                            });
                            $.each(iscrolls, function (key, iscroll) {
                                iscroll.destroy();
                            });
                            self.$el = null;
                        });
                    }
                }]);
                return RolePage;
            })(BasePage);

            _export('default', RolePage);
        }
    };
});
System.register('js/page/follow.js', ['libs/jquery/2.1.4/jquery.js', 'js/page/base.js', 'libs/iScroll/5.1.3/iscroll-lite.js', 'js/router/utils.js', 'js/utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/18.
     */
    'use strict';

    var $, BasePage, iScroll, routeHistory, env, FollowPage;
    return {
        setters: [function (_libsJquery214JqueryJs) {
            $ = _libsJquery214JqueryJs['default'];
        }, function (_jsPageBaseJs) {
            BasePage = _jsPageBaseJs['default'];
        }, function (_libsIScroll513IscrollLiteJs) {
            iScroll = _libsIScroll513IscrollLiteJs['default'];
        }, function (_jsRouterUtilsJs) {
            routeHistory = _jsRouterUtilsJs.routeHistory;
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }],
        execute: function () {
            FollowPage = (function (_BasePage) {
                babelHelpers.inherits(FollowPage, _BasePage);

                function FollowPage() {
                    babelHelpers.classCallCheck(this, FollowPage);

                    if (arguments[0] === false) {
                        return false;
                    }
                    babelHelpers.get(Object.getPrototypeOf(FollowPage.prototype), 'constructor', this).call(this, false);
                    this.initialize.apply(this, arguments);
                }

                babelHelpers.createClass(FollowPage, [{
                    key: 'initialize',
                    value: function initialize(options) {
                        babelHelpers.get(Object.getPrototypeOf(FollowPage.prototype), 'initialize', this).call(this);
                        var $el = {};
                        this.$el = $el;
                        var iscrolls = {};
                        this.iscrolls = iscrolls;
                        $el.page = $('#page_follow');
                        $el.close = $el.page.find('.close');
                        $el.close.one('tap.followpage', function () {
                            routeHistory.goback();
                        });
                        babelHelpers.get(Object.getPrototypeOf(FollowPage.prototype), 'startPage', this).call(this);
                        iscrolls.content = new iScroll($el.page.get(0));
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var _this = this;

                        var self = this;
                        var $el = this.$el;
                        var iscrolls = this.iscrolls;
                        babelHelpers.get(Object.getPrototypeOf(FollowPage.prototype), 'endPage', this).call(this, function () {
                            $.each($el, function (key, el) {
                                el.off('.followpage');
                            });
                            $.each(iscrolls, function (key, iscroll) {
                                iscroll.destroy();
                            });
                            _this.$el = null;
                        });
                    }
                }]);
                return FollowPage;
            })(BasePage);

            _export('default', FollowPage);
        }
    };
});
System.register("js/utils/wsy_utils.js", [], function (_export) {
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
                var div = document.createElement('div');
                var transitions = {
                    transition: 'transitionend',
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'mozTransitionEnd',
                    OTransition: 'oTransitionEnd',
                    msTransition: 'MSTransitionEnd'
                };

                for (var t in transitions) {
                    if (div.style[t] !== undefined) {
                        return transitions[t];
                    }
                }
            })();

            _export("transitionEnd", transitionEnd);

            animationEnd = (function () {
                var div = document.createElement('div');
                var transitions = {
                    animation: 'animationend',
                    WebkitAnimation: 'webkitAnimationEnd',
                    MozAnimation: 'mozAnimationEnd',
                    OAnimation: 'oAnimationEnd',
                    msAnimation: 'MSAnimationEnd'
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
System.register('js/page/base.js', ['libs/jquery/2.1.4/jquery.js', 'libs/lodash.js/3.9.3/lodash.js', 'js/utils/jquery.touch.js', 'js/component/main_layout.js', 'js/utils/env.js', 'js/utils/wsy_utils.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var $, _, MainLayout, env, transitionEnd, animationEnd, PageBase;

    return {
        setters: [function (_libsJquery214JqueryJs) {
            $ = _libsJquery214JqueryJs['default'];
        }, function (_libsLodashJs393LodashJs) {
            _ = _libsLodashJs393LodashJs['default'];
        }, function (_jsUtilsJqueryTouchJs) {}, function (_jsComponentMain_layoutJs) {
            MainLayout = _jsComponentMain_layoutJs['default'];
        }, function (_jsUtilsEnvJs) {
            env = _jsUtilsEnvJs['default'];
        }, function (_jsUtilsWsy_utilsJs) {
            transitionEnd = _jsUtilsWsy_utilsJs.transitionEnd;
            animationEnd = _jsUtilsWsy_utilsJs.animationEnd;
        }],
        execute: function () {
            PageBase = (function () {
                function PageBase() {
                    babelHelpers.classCallCheck(this, PageBase);

                    if (arguments[0] === false) {
                        return false;
                    }
                    this.initialize.apply(this, arguments);
                }

                babelHelpers.createClass(PageBase, [{
                    key: 'initialize',
                    value: function initialize() {
                        this.initMainLayout();
                        this.initRouterEvent();
                        this.initGoolgeMap();
                    }
                }, {
                    key: 'initMainLayout',
                    value: function initMainLayout() {
                        if (env.mainlayout) {
                            return false;
                        }
                        env.mainlayout = new MainLayout({
                            move_min_height: 128,
                            default_height: 254,
                            $height_control: $('.height-control'),
                            $main: $('.main'),
                            $map: $('.map'),
                            $nav: $('.nav'),
                            $content: $('.content'),
                            $out_box: $('.wrapper')
                        });
                    }
                }, {
                    key: 'initGoolgeMap',
                    value: function initGoolgeMap() {
                        /*        if (env.gmap) {
                                    return false;
                                }
                                let $map = $('#map');
                                env.mainlayout.on('moveStart', function () {
                                    $map.height('100%');
                                    //google.maps.event.trigger(env.gmap, 'resize');
                                });
                                env.mainlayout.on('moveEnd', function (res) {
                                    $map.height(res);
                                });
                                if (!window.google) {
                                    return false;
                                }
                                env.gmap = new google.maps.Map($map.get(0), {
                                    center: new google.maps.LatLng(27.653981735563498, 117.98527836799622),
                                    zoom: 14,
                                    disableDefaultUI: true,
                                });
                        
                                env.mainlayout.on('moveEnd', function (res) {
                                    google.maps.event.trigger(env.gmap, 'resize');
                                });
                                let $map_xjdd = $('<div id="map-xjdd">新建地点</div>');
                                let $map_dw = $('<div id="map-dw">定位</div>');
                                let $map_ctl = $('<div id="map-ctl"></div>').append($map_xjdd).append($map_dw);
                                env.gmap.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push($map_ctl.get(0));*/
                    }
                }, {
                    key: 'initRouterEvent',
                    value: function initRouterEvent() {
                        if (env.init_router_event) {
                            return false;
                        }
                        env.init_router_event = true;
                        $(document).on('click', 'a', function (evt) {
                            evt.preventDefault();
                        });
                        $('.wrapper').on('tap', '[data-router]', function (evt) {
                            evt.preventDefault();
                            if (env.router_wait) {
                                return false;
                            }
                            var $self = $(this);
                            var uri = $self.data('router');
                            env.router.setRoute(uri);
                        });
                    }
                }, {
                    key: 'startPage',
                    value: function startPage() {
                        var $el = this.$el;
                        if ($el.nav) {
                            $el.nav.addClass('active');
                        }

                        $el.page.removeClass('cached');
                        $el.page.addClass('page-content');
                        env.router_wait = true;
                        var callback = function callback() {
                            env.router_wait = false;
                        };
                        if (env.page) {
                            //env.mainlayout.viewMoveAnima(env.mainlayout._data.default_height);
                            //$el.page.one(animationEnd, function () {
                            //    $el.page.removeClass('page-from-right-to-center');
                            //    callback();
                            //});
                            //$el.page.addClass('page-content page-from-right-to-center');

                            callback();
                        } else {
                            callback();
                        }
                        env.page = true;
                    }
                }, {
                    key: 'endPage',
                    value: function endPage(cb) {
                        var $el = this.$el;
                        if ($el.nav) {
                            $el.nav.removeClass('active');
                        }

                        $el.page.removeClass('page-content');
                        if (env.page) {
                            //let fireback = _.once(()=> {
                            //    $el.page.removeClass('page-from-center-to-left');
                            //    $el.page.addClass('cached');
                            //    if (cb) {
                            //        cb();
                            //    }
                            //});
                            // 修护回退没执行bug
                            //setTimeout(() => {
                            //    fireback();
                            //}, 500);
                            //$el.page.one(animationEnd, function () {
                            //    fireback()
                            //});
                            //$el.page.addClass('page-from-center-to-left');
                            $el.page.addClass('cached');
                            if (cb) {
                                cb();
                            }
                        }
                    }
                }]);
                return PageBase;
            })();

            _export('default', PageBase);
        }
    };
});
System.register('js/component/main_layout.js', ['libs/jquery/2.1.4/jquery.js', 'libs/hammer.js/2.0.4/hammer.js', 'libs/velocity/1.2.2/velocity.js', 'libs/EventEmitter/4.2.9/EventEmitter.js', 'js/utils/jquery.hammer.event.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/13.
     */
    'use strict';

    var $, Hammer, EventEmitter, MainLayout;
    return {
        setters: [function (_libsJquery214JqueryJs) {
            $ = _libsJquery214JqueryJs['default'];
        }, function (_libsHammerJs204HammerJs) {
            Hammer = _libsHammerJs204HammerJs['default'];
        }, function (_libsVelocity122VelocityJs) {}, function (_libsEventEmitter429EventEmitterJs) {
            EventEmitter = _libsEventEmitter429EventEmitterJs['default'];
        }, function (_jsUtilsJqueryHammerEventJs) {}],
        execute: function () {
            MainLayout = (function (_EventEmitter) {
                babelHelpers.inherits(MainLayout, _EventEmitter);

                function MainLayout() {
                    babelHelpers.classCallCheck(this, MainLayout);

                    babelHelpers.get(Object.getPrototypeOf(MainLayout.prototype), 'constructor', this).call(this);
                    this.initialize.apply(this, arguments);
                }

                babelHelpers.createClass(MainLayout, [{
                    key: 'initialize',
                    value: function initialize(options) {
                        this.$el = {};
                        this.top = null;
                        this.moveCtl = {
                            nowOn: null,
                            panMoveUp: true,
                            panMoveDown: true
                        };
                        this.max_height = null;

                        this.lock = false;
                        this.oldRes = options.default_height;

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
                        _data.default_height = options.default_height;

                        this._data = _data;

                        this.initListener();
                    }
                }, {
                    key: 'initListener',
                    value: function initListener() {
                        this.initHammer();
                        this.initControl();
                    }
                }, {
                    key: 'initHammer',
                    value: function initHammer() {
                        var mc = new Hammer.Manager(this.$el.height_control.get(0));
                        this.hammer = mc;
                        var pan = new Hammer.Pan({ direction: Hammer.DIRECTION_VERTICAL });
                        //let doubletap = new Hammer.Tap({event: 'doubletap', taps: 2});
                        var singletap = new Hammer.Tap({ event: 'singletap' });
                        mc.add([pan, singletap]);
                        //doubletap.recognizeWith('singletap');
                        //singletap.requireFailure('doubletap');
                        this.$el.height_control.data('hammer', mc);
                    }
                }, {
                    key: 'initControl',
                    value: function initControl() {
                        //this.$el.height_control.on('touchstart', function(){
                        //    console.log(touchstart)
                        //})
                        this.$el.height_control.on('panstart.mainlayout', $.proxy(this.panStart, this));
                        this.$el.height_control.on('panmove.mainlayout', $.proxy(this.panMove, this));
                        this.$el.height_control.on('panend.mainlayout', $.proxy(this.panEnd, this));
                        this.$el.height_control.on('singletap.mainlayout', $.proxy(this.singleTap, this));
                        //this.$el.height_control.on('doubletap.mainlayout', $.proxy(this.doubletap, this));
                    }
                }, {
                    key: 'panStart',
                    value: function panStart(evt) {
                        this.top = parseInt(this.$el.main.css('top').split('px')[0]);
                        this.emit('moveStart');
                    }
                }, {
                    key: 'panEnd',
                    value: function panEnd(evt) {
                        this.emit('moveEnd', this.oldRes);
                    }
                }, {
                    key: 'panMove',
                    value: function panMove(evt) {
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
                        this.viewMove(res);
                    }
                }, {
                    key: 'singleTap',
                    value: function singleTap(evt) {
                        if (this.lock === true) {
                            return false;
                        }
                        var _data = this._data;
                        var content_height = this.$el.content.height();
                        var map_height = this._data.win_height - this.$el.main.height();
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
                    }
                }, {
                    key: 'doubletap',
                    value: function doubletap(evt) {
                        if (this.lock === true) {
                            return false;
                        }
                        var _data = this._data;
                        var content_height = this.$el.content.height();
                        var map_height = this._data.win_height - this.$el.main.height();
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
                    }
                }, {
                    key: 'viewMove',
                    value: function viewMove(res) {
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
                    }
                }, {
                    key: 'viewMoveAnima',
                    value: function viewMoveAnima(res) {
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
                                begin: function begin() {
                                    self.emit('moveStart');
                                },
                                progress: function progress() {
                                    self.emit('review');
                                },
                                complete: function complete() {
                                    self.lock = false;
                                    self.emit('moveEnd', self.oldRes);
                                }
                            }
                        });
                        this.$el.map.velocity({
                            properties: {
                                height: res
                            },
                            options: {
                                mobileHA: false
                            }
                        });
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.hammer.destroy();
                        this.$el.height_control.off('.mainlayout');
                        this.$el = null;
                    }
                }]);
                return MainLayout;
            })(EventEmitter);

            _export('default', MainLayout);
        }
    };
});
System.register('js/utils/jquery.hammer.event.js', ['libs/jquery/2.1.4/jquery.js', 'libs/hammer.js/2.0.4/hammer.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/10.
     */
    'use strict';

    var $, Hammer;
    return {
        setters: [function (_libsJquery214JqueryJs) {
            $ = _libsJquery214JqueryJs['default'];
        }, function (_libsHammerJs204HammerJs) {
            Hammer = _libsHammerJs204HammerJs['default'];
        }],
        execute: function () {

            Hammer.Manager.prototype.emit = (function (originalEmit) {
                return function (type, data) {
                    originalEmit.call(this, type, data);
                    $(this.element).trigger({
                        type: type,
                        gesture: data
                    });
                };
            })(Hammer.Manager.prototype.emit);

            //$.event.special['tap'] = {
            //    setup: function () {
            //        var self = this;
            //        var $self = $(this);
            //        var mc = new Hammer.Manager(self);
            //        var tap = new Hammer.Tap({event: 'tap'});
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
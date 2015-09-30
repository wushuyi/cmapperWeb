"bundle";
System.register("assets/css/reset.css!github:systemjs/plugin-css@0.1.18", [], function() { return { setters: [], execute: function() {} } });

System.register("github:nolimits4web/Swiper@3.1.2/dist/css/swiper.css!github:systemjs/plugin-css@0.1.18", [], function() { return { setters: [], execute: function() {} } });

System.register("github:fengyuanchen/cropper@0.11.1/dist/cropper.css!github:systemjs/plugin-css@0.1.18", [], function() { return { setters: [], execute: function() {} } });

System.register("github:t4t5/sweetalert@1.1.0/dist/sweetalert.css!github:systemjs/plugin-css@0.1.18", [], function() { return { setters: [], execute: function() {} } });

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
(function(window) {
  if (!window.document)
    return;
  var document = window.document;
  if (!document.querySelectorAll) {
    document.querySelectorAll = function(selectors) {
      var style = document.createElement('style'),
          elements = [],
          element;
      document.documentElement.firstChild.appendChild(style);
      document._qsa = [];
      style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
      window.scrollBy(0, 0);
      style.parentNode.removeChild(style);
      while (document._qsa.length) {
        element = document._qsa.shift();
        element.style.removeAttribute('x-qsa');
        elements.push(element);
      }
      document._qsa = null;
      return elements;
    };
  }
  if (!document.querySelector) {
    document.querySelector = function(selectors) {
      var elements = document.querySelectorAll(selectors);
      return (elements.length) ? elements[0] : null;
    };
  }
  if (!document.getElementsByClassName) {
    document.getElementsByClassName = function(classNames) {
      classNames = String(classNames).replace(/^|\s+/g, '.');
      return document.querySelectorAll(classNames);
    };
  }
  if (!Object.keys) {
    Object.keys = function(o) {
      if (o !== Object(o)) {
        throw TypeError('Object.keys called on non-object');
      }
      var ret = [],
          p;
      for (p in o) {
        if (Object.prototype.hasOwnProperty.call(o, p)) {
          ret.push(p);
        }
      }
      return ret;
    };
  }
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(fun) {
      if (this === void 0 || this === null) {
        throw TypeError();
      }
      var t = Object(this);
      var len = t.length >>> 0;
      if (typeof fun !== "function") {
        throw TypeError();
      }
      var thisp = arguments[1],
          i;
      for (i = 0; i < len; i++) {
        if (i in t) {
          fun.call(thisp, t[i], i, t);
        }
      }
    };
  }
  (function(global) {
    var B64_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    global.atob = global.atob || function(input) {
      input = String(input);
      var position = 0,
          output = [],
          buffer = 0,
          bits = 0,
          n;
      input = input.replace(/\s/g, '');
      if ((input.length % 4) === 0) {
        input = input.replace(/=+$/, '');
      }
      if ((input.length % 4) === 1) {
        throw Error('InvalidCharacterError');
      }
      if (/[^+/0-9A-Za-z]/.test(input)) {
        throw Error('InvalidCharacterError');
      }
      while (position < input.length) {
        n = B64_ALPHABET.indexOf(input.charAt(position));
        buffer = (buffer << 6) | n;
        bits += 6;
        if (bits === 24) {
          output.push(String.fromCharCode((buffer >> 16) & 0xFF));
          output.push(String.fromCharCode((buffer >> 8) & 0xFF));
          output.push(String.fromCharCode(buffer & 0xFF));
          bits = 0;
          buffer = 0;
        }
        position += 1;
      }
      if (bits === 12) {
        buffer = buffer >> 4;
        output.push(String.fromCharCode(buffer & 0xFF));
      } else if (bits === 18) {
        buffer = buffer >> 2;
        output.push(String.fromCharCode((buffer >> 8) & 0xFF));
        output.push(String.fromCharCode(buffer & 0xFF));
      }
      return output.join('');
    };
    global.btoa = global.btoa || function(input) {
      input = String(input);
      var position = 0,
          out = [],
          o1,
          o2,
          o3,
          e1,
          e2,
          e3,
          e4;
      if (/[^\x00-\xFF]/.test(input)) {
        throw Error('InvalidCharacterError');
      }
      while (position < input.length) {
        o1 = input.charCodeAt(position++);
        o2 = input.charCodeAt(position++);
        o3 = input.charCodeAt(position++);
        e1 = o1 >> 2;
        e2 = ((o1 & 0x3) << 4) | (o2 >> 4);
        e3 = ((o2 & 0xf) << 2) | (o3 >> 6);
        e4 = o3 & 0x3f;
        if (position === input.length + 2) {
          e3 = 64;
          e4 = 64;
        } else if (position === input.length + 1) {
          e4 = 64;
        }
        out.push(B64_ALPHABET.charAt(e1), B64_ALPHABET.charAt(e2), B64_ALPHABET.charAt(e3), B64_ALPHABET.charAt(e4));
      }
      return out.join('');
    };
  }(window));
  if (!Object.prototype.hasOwnProperty) {
    Object.prototype.hasOwnProperty = function(prop) {
      var proto = this.__proto__ || this.constructor.prototype;
      return (prop in this) && (!(prop in proto) || proto[prop] !== this[prop]);
    };
  }
  (function() {
    if ('performance' in window === false) {
      window.performance = {};
    }
    Date.now = (Date.now || function() {
      return new Date().getTime();
    });
    if ('now' in window.performance === false) {
      var nowOffset = Date.now();
      if (performance.timing && performance.timing.navigationStart) {
        nowOffset = performance.timing.navigationStart;
      }
      window.performance.now = function now() {
        return Date.now() - nowOffset;
      };
    }
  })();
  if (!window.requestAnimationFrame) {
    if (window.webkitRequestAnimationFrame) {
      (function(global) {
        global.requestAnimationFrame = function(callback) {
          return webkitRequestAnimationFrame(function() {
            callback(global.performance.now());
          });
        };
        global.cancelAnimationFrame = webkitCancelAnimationFrame;
      }(window));
    } else if (window.mozRequestAnimationFrame) {
      (function(global) {
        global.requestAnimationFrame = function(callback) {
          return mozRequestAnimationFrame(function() {
            callback(global.performance.now());
          });
        };
        global.cancelAnimationFrame = mozCancelAnimationFrame;
      }(window));
    } else {
      (function(global) {
        global.requestAnimationFrame = function(callback) {
          return global.setTimeout(callback, 1000 / 60);
        };
        global.cancelAnimationFrame = global.clearTimeout;
      })(window);
    }
  }
})(this);
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define("github:imsky/holder@2.8.2/holder", [], factory);
  else if (typeof exports === 'object')
    exports["Holder"] = factory();
  else
    root["Holder"] = factory();
})(this, function() {
  return (function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId])
        return installedModules[moduleId].exports;
      var module = installedModules[moduleId] = {
        exports: {},
        id: moduleId,
        loaded: false
      };
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      module.loaded = true;
      return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.p = "";
    return __webpack_require__(0);
  })([function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(1);
  }, function(module, exports, __webpack_require__) {
    (function(global) {
      var onDomReady = __webpack_require__(2);
      var querystring = __webpack_require__(3);
      var SceneGraph = __webpack_require__(4);
      var utils = __webpack_require__(5);
      var SVG = __webpack_require__(6);
      var DOM = __webpack_require__(7);
      var Color = __webpack_require__(8);
      var constants = __webpack_require__(9);
      var svgRenderer = __webpack_require__(10);
      var extend = utils.extend;
      var dimensionCheck = utils.dimensionCheck;
      var SVG_NS = constants.svg_ns;
      var Holder = {
        version: constants.version,
        addTheme: function(name, theme) {
          name != null && theme != null && (App.settings.themes[name] = theme);
          delete App.vars.cache.themeKeys;
          return this;
        },
        addImage: function(src, el) {
          var nodes = DOM.getNodeArray(el);
          nodes.forEach(function(node) {
            var img = DOM.newEl('img');
            var domProps = {};
            domProps[App.setup.dataAttr] = src;
            DOM.setAttr(img, domProps);
            node.appendChild(img);
          });
          return this;
        },
        setResizeUpdate: function(el, value) {
          if (el.holderData) {
            el.holderData.resizeUpdate = !!value;
            if (el.holderData.resizeUpdate) {
              updateResizableElements(el);
            }
          }
        },
        run: function(userOptions) {
          userOptions = userOptions || {};
          var engineSettings = {};
          var options = extend(App.settings, userOptions);
          App.vars.preempted = true;
          App.vars.dataAttr = options.dataAttr || App.setup.dataAttr;
          App.vars.lineWrapRatio = options.lineWrapRatio || App.setup.lineWrapRatio;
          engineSettings.renderer = options.renderer ? options.renderer : App.setup.renderer;
          if (App.setup.renderers.join(',').indexOf(engineSettings.renderer) === -1) {
            engineSettings.renderer = App.setup.supportsSVG ? 'svg' : (App.setup.supportsCanvas ? 'canvas' : 'html');
          }
          var images = DOM.getNodeArray(options.images);
          var bgnodes = DOM.getNodeArray(options.bgnodes);
          var stylenodes = DOM.getNodeArray(options.stylenodes);
          var objects = DOM.getNodeArray(options.objects);
          engineSettings.stylesheets = [];
          engineSettings.svgXMLStylesheet = true;
          engineSettings.noFontFallback = options.noFontFallback ? options.noFontFallback : false;
          stylenodes.forEach(function(styleNode) {
            if (styleNode.attributes.rel && styleNode.attributes.href && styleNode.attributes.rel.value == 'stylesheet') {
              var href = styleNode.attributes.href.value;
              var proxyLink = DOM.newEl('a');
              proxyLink.href = href;
              var stylesheetURL = proxyLink.protocol + '//' + proxyLink.host + proxyLink.pathname + proxyLink.search;
              engineSettings.stylesheets.push(stylesheetURL);
            }
          });
          bgnodes.forEach(function(bgNode) {
            if (!global.getComputedStyle)
              return;
            var backgroundImage = global.getComputedStyle(bgNode, null).getPropertyValue('background-image');
            var dataBackgroundImage = bgNode.getAttribute('data-background-src');
            var rawURL = dataBackgroundImage || backgroundImage;
            var holderURL = null;
            var holderString = options.domain + '/';
            var holderStringIndex = rawURL.indexOf(holderString);
            if (holderStringIndex === 0) {
              holderURL = rawURL;
            } else if (holderStringIndex === 1 && rawURL[0] === '?') {
              holderURL = rawURL.slice(1);
            } else {
              var fragment = rawURL.substr(holderStringIndex).match(/([^\"]*)"?\)/);
              if (fragment !== null) {
                holderURL = fragment[1];
              } else if (rawURL.indexOf('url(') === 0) {
                throw 'Holder: unable to parse background URL: ' + rawURL;
              }
            }
            if (holderURL != null) {
              var holderFlags = parseURL(holderURL, options);
              if (holderFlags) {
                prepareDOMElement({
                  mode: 'background',
                  el: bgNode,
                  flags: holderFlags,
                  engineSettings: engineSettings
                });
              }
            }
          });
          objects.forEach(function(object) {
            var objectAttr = {};
            try {
              objectAttr.data = object.getAttribute('data');
              objectAttr.dataSrc = object.getAttribute(App.vars.dataAttr);
            } catch (e) {}
            var objectHasSrcURL = objectAttr.data != null && objectAttr.data.indexOf(options.domain) === 0;
            var objectHasDataSrcURL = objectAttr.dataSrc != null && objectAttr.dataSrc.indexOf(options.domain) === 0;
            if (objectHasSrcURL) {
              prepareImageElement(options, engineSettings, objectAttr.data, object);
            } else if (objectHasDataSrcURL) {
              prepareImageElement(options, engineSettings, objectAttr.dataSrc, object);
            }
          });
          images.forEach(function(image) {
            var imageAttr = {};
            try {
              imageAttr.src = image.getAttribute('src');
              imageAttr.dataSrc = image.getAttribute(App.vars.dataAttr);
              imageAttr.rendered = image.getAttribute('data-holder-rendered');
            } catch (e) {}
            var imageHasSrc = imageAttr.src != null;
            var imageHasDataSrcURL = imageAttr.dataSrc != null && imageAttr.dataSrc.indexOf(options.domain) === 0;
            var imageRendered = imageAttr.rendered != null && imageAttr.rendered == 'true';
            if (imageHasSrc) {
              if (imageAttr.src.indexOf(options.domain) === 0) {
                prepareImageElement(options, engineSettings, imageAttr.src, image);
              } else if (imageHasDataSrcURL) {
                if (imageRendered) {
                  prepareImageElement(options, engineSettings, imageAttr.dataSrc, image);
                } else {
                  (function(src, options, engineSettings, dataSrc, image) {
                    utils.imageExists(src, function(exists) {
                      if (!exists) {
                        prepareImageElement(options, engineSettings, dataSrc, image);
                      }
                    });
                  })(imageAttr.src, options, engineSettings, imageAttr.dataSrc, image);
                }
              }
            } else if (imageHasDataSrcURL) {
              prepareImageElement(options, engineSettings, imageAttr.dataSrc, image);
            }
          });
          return this;
        }
      };
      var App = {
        settings: {
          domain: 'holder.js',
          images: 'img',
          objects: 'object',
          bgnodes: 'body .holderjs',
          stylenodes: 'head link.holderjs',
          themes: {
            'gray': {
              background: '#EEEEEE',
              foreground: '#AAAAAA'
            },
            'social': {
              background: '#3a5a97',
              foreground: '#FFFFFF'
            },
            'industrial': {
              background: '#434A52',
              foreground: '#C2F200'
            },
            'sky': {
              background: '#0D8FDB',
              foreground: '#FFFFFF'
            },
            'vine': {
              background: '#39DBAC',
              foreground: '#1E292C'
            },
            'lava': {
              background: '#F8591A',
              foreground: '#1C2846'
            }
          }
        },
        defaults: {
          size: 10,
          units: 'pt',
          scale: 1 / 16
        }
      };
      function prepareImageElement(options, engineSettings, src, el) {
        var holderFlags = parseURL(src.substr(src.lastIndexOf(options.domain)), options);
        if (holderFlags) {
          prepareDOMElement({
            mode: null,
            el: el,
            flags: holderFlags,
            engineSettings: engineSettings
          });
        }
      }
      function parseURL(url, instanceOptions) {
        var holder = {
          theme: extend(App.settings.themes.gray, null),
          stylesheets: instanceOptions.stylesheets,
          instanceOptions: instanceOptions
        };
        var parts = url.split('?');
        var basics = parts[0].split('/');
        holder.holderURL = url;
        var dimensions = basics[1];
        var dimensionData = dimensions.match(/([\d]+p?)x([\d]+p?)/);
        if (!dimensionData)
          return false;
        holder.fluid = dimensions.indexOf('p') !== -1;
        holder.dimensions = {
          width: dimensionData[1].replace('p', '%'),
          height: dimensionData[2].replace('p', '%')
        };
        if (parts.length === 2) {
          var options = querystring.parse(parts[1]);
          if (options.bg) {
            holder.theme.background = utils.parseColor(options.bg);
          }
          if (options.fg) {
            holder.theme.foreground = utils.parseColor(options.fg);
          }
          if (options.bg && !options.fg) {
            holder.autoFg = true;
          }
          if (options.theme && holder.instanceOptions.themes.hasOwnProperty(options.theme)) {
            holder.theme = extend(holder.instanceOptions.themes[options.theme], null);
          }
          if (options.text) {
            holder.text = options.text;
          }
          if (options.textmode) {
            holder.textmode = options.textmode;
          }
          if (options.size) {
            holder.size = options.size;
          }
          if (options.font) {
            holder.font = options.font;
          }
          if (options.align) {
            holder.align = options.align;
          }
          holder.nowrap = utils.truthy(options.nowrap);
          holder.auto = utils.truthy(options.auto);
          holder.outline = utils.truthy(options.outline);
          if (utils.truthy(options.random)) {
            App.vars.cache.themeKeys = App.vars.cache.themeKeys || Object.keys(holder.instanceOptions.themes);
            var _theme = App.vars.cache.themeKeys[0 | Math.random() * App.vars.cache.themeKeys.length];
            holder.theme = extend(holder.instanceOptions.themes[_theme], null);
          }
        }
        return holder;
      }
      function prepareDOMElement(prepSettings) {
        var mode = prepSettings.mode;
        var el = prepSettings.el;
        var flags = prepSettings.flags;
        var _engineSettings = prepSettings.engineSettings;
        var dimensions = flags.dimensions,
            theme = flags.theme;
        var dimensionsCaption = dimensions.width + 'x' + dimensions.height;
        mode = mode == null ? (flags.fluid ? 'fluid' : 'image') : mode;
        if (flags.text != null) {
          theme.text = flags.text;
          if (el.nodeName.toLowerCase() === 'object') {
            var textLines = theme.text.split('\\n');
            for (var k = 0; k < textLines.length; k++) {
              textLines[k] = utils.encodeHtmlEntity(textLines[k]);
            }
            theme.text = textLines.join('\\n');
          }
        }
        var holderURL = flags.holderURL;
        var engineSettings = extend(_engineSettings, null);
        if (flags.font) {
          theme.font = flags.font;
          if (!engineSettings.noFontFallback && el.nodeName.toLowerCase() === 'img' && App.setup.supportsCanvas && engineSettings.renderer === 'svg') {
            engineSettings = extend(engineSettings, {renderer: 'canvas'});
          }
        }
        if (flags.font && engineSettings.renderer == 'canvas') {
          engineSettings.reRender = true;
        }
        if (mode == 'background') {
          if (el.getAttribute('data-background-src') == null) {
            DOM.setAttr(el, {'data-background-src': holderURL});
          }
        } else {
          var domProps = {};
          domProps[App.vars.dataAttr] = holderURL;
          DOM.setAttr(el, domProps);
        }
        flags.theme = theme;
        el.holderData = {
          flags: flags,
          engineSettings: engineSettings
        };
        if (mode == 'image' || mode == 'fluid') {
          DOM.setAttr(el, {'alt': (theme.text ? theme.text + ' [' + dimensionsCaption + ']' : dimensionsCaption)});
        }
        var renderSettings = {
          mode: mode,
          el: el,
          holderSettings: {
            dimensions: dimensions,
            theme: theme,
            flags: flags
          },
          engineSettings: engineSettings
        };
        if (mode == 'image') {
          if (!flags.auto) {
            el.style.width = dimensions.width + 'px';
            el.style.height = dimensions.height + 'px';
          }
          if (engineSettings.renderer == 'html') {
            el.style.backgroundColor = theme.background;
          } else {
            render(renderSettings);
            if (flags.textmode == 'exact') {
              el.holderData.resizeUpdate = true;
              App.vars.resizableImages.push(el);
              updateResizableElements(el);
            }
          }
        } else if (mode == 'background' && engineSettings.renderer != 'html') {
          render(renderSettings);
        } else if (mode == 'fluid') {
          el.holderData.resizeUpdate = true;
          if (dimensions.height.slice(-1) == '%') {
            el.style.height = dimensions.height;
          } else if (flags.auto == null || !flags.auto) {
            el.style.height = dimensions.height + 'px';
          }
          if (dimensions.width.slice(-1) == '%') {
            el.style.width = dimensions.width;
          } else if (flags.auto == null || !flags.auto) {
            el.style.width = dimensions.width + 'px';
          }
          if (el.style.display == 'inline' || el.style.display === '' || el.style.display == 'none') {
            el.style.display = 'block';
          }
          setInitialDimensions(el);
          if (engineSettings.renderer == 'html') {
            el.style.backgroundColor = theme.background;
          } else {
            App.vars.resizableImages.push(el);
            updateResizableElements(el);
          }
        }
      }
      function render(renderSettings) {
        var image = null;
        var mode = renderSettings.mode;
        var el = renderSettings.el;
        var holderSettings = renderSettings.holderSettings;
        var engineSettings = renderSettings.engineSettings;
        switch (engineSettings.renderer) {
          case 'svg':
            if (!App.setup.supportsSVG)
              return;
            break;
          case 'canvas':
            if (!App.setup.supportsCanvas)
              return;
            break;
          default:
            return;
        }
        var scene = {
          width: holderSettings.dimensions.width,
          height: holderSettings.dimensions.height,
          theme: holderSettings.theme,
          flags: holderSettings.flags
        };
        var sceneGraph = buildSceneGraph(scene);
        function getRenderedImage() {
          var image = null;
          switch (engineSettings.renderer) {
            case 'canvas':
              image = sgCanvasRenderer(sceneGraph, renderSettings);
              break;
            case 'svg':
              image = svgRenderer(sceneGraph, renderSettings);
              break;
            default:
              throw 'Holder: invalid renderer: ' + engineSettings.renderer;
          }
          return image;
        }
        image = getRenderedImage();
        if (image == null) {
          throw 'Holder: couldn\'t render placeholder';
        }
        if (mode == 'background') {
          el.style.backgroundImage = 'url(' + image + ')';
          el.style.backgroundSize = scene.width + 'px ' + scene.height + 'px';
        } else {
          if (el.nodeName.toLowerCase() === 'img') {
            DOM.setAttr(el, {'src': image});
          } else if (el.nodeName.toLowerCase() === 'object') {
            DOM.setAttr(el, {'data': image});
            DOM.setAttr(el, {'type': 'image/svg+xml'});
          }
          if (engineSettings.reRender) {
            global.setTimeout(function() {
              var image = getRenderedImage();
              if (image == null) {
                throw 'Holder: couldn\'t render placeholder';
              }
              if (el.nodeName.toLowerCase() === 'img') {
                DOM.setAttr(el, {'src': image});
              } else if (el.nodeName.toLowerCase() === 'object') {
                DOM.setAttr(el, {'data': image});
                DOM.setAttr(el, {'type': 'image/svg+xml'});
              }
            }, 150);
          }
        }
        DOM.setAttr(el, {'data-holder-rendered': true});
      }
      function buildSceneGraph(scene) {
        var fontSize = App.defaults.size;
        if (parseFloat(scene.theme.size)) {
          fontSize = scene.theme.size;
        } else if (parseFloat(scene.flags.size)) {
          fontSize = scene.flags.size;
        }
        scene.font = {
          family: scene.theme.font ? scene.theme.font : 'Arial, Helvetica, Open Sans, sans-serif',
          size: textSize(scene.width, scene.height, fontSize, App.defaults.scale),
          units: scene.theme.units ? scene.theme.units : App.defaults.units,
          weight: scene.theme.fontweight ? scene.theme.fontweight : 'bold'
        };
        scene.text = scene.theme.text || Math.floor(scene.width) + 'x' + Math.floor(scene.height);
        scene.noWrap = scene.theme.nowrap || scene.flags.nowrap;
        scene.align = scene.theme.align || scene.flags.align || 'center';
        switch (scene.flags.textmode) {
          case 'literal':
            scene.text = scene.flags.dimensions.width + 'x' + scene.flags.dimensions.height;
            break;
          case 'exact':
            if (!scene.flags.exactDimensions)
              break;
            scene.text = Math.floor(scene.flags.exactDimensions.width) + 'x' + Math.floor(scene.flags.exactDimensions.height);
            break;
        }
        var sceneGraph = new SceneGraph({
          width: scene.width,
          height: scene.height
        });
        var Shape = sceneGraph.Shape;
        var holderBg = new Shape.Rect('holderBg', {fill: scene.theme.background});
        holderBg.resize(scene.width, scene.height);
        sceneGraph.root.add(holderBg);
        if (scene.flags.outline) {
          var outlineColor = new Color(holderBg.properties.fill);
          outlineColor = outlineColor.lighten(outlineColor.lighterThan('7f7f7f') ? -0.1 : 0.1);
          holderBg.properties.outline = {
            fill: outlineColor.toHex(true),
            width: 2
          };
        }
        var holderTextColor = scene.theme.foreground;
        if (scene.flags.autoFg) {
          var holderBgColor = new Color(holderBg.properties.fill);
          var lightColor = new Color('fff');
          var darkColor = new Color('000', {'alpha': 0.285714});
          holderTextColor = holderBgColor.blendAlpha(holderBgColor.lighterThan('7f7f7f') ? darkColor : lightColor).toHex(true);
        }
        var holderTextGroup = new Shape.Group('holderTextGroup', {
          text: scene.text,
          align: scene.align,
          font: scene.font,
          fill: holderTextColor
        });
        holderTextGroup.moveTo(null, null, 1);
        sceneGraph.root.add(holderTextGroup);
        var tpdata = holderTextGroup.textPositionData = stagingRenderer(sceneGraph);
        if (!tpdata) {
          throw 'Holder: staging fallback not supported yet.';
        }
        holderTextGroup.properties.leading = tpdata.boundingBox.height;
        var textNode = null;
        var line = null;
        function finalizeLine(parent, line, width, height) {
          line.width = width;
          line.height = height;
          parent.width = Math.max(parent.width, line.width);
          parent.height += line.height;
        }
        var sceneMargin = scene.width * App.vars.lineWrapRatio;
        var maxLineWidth = sceneMargin;
        if (tpdata.lineCount > 1) {
          var offsetX = 0;
          var offsetY = 0;
          var lineIndex = 0;
          var lineKey;
          line = new Shape.Group('line' + lineIndex);
          if (scene.align === 'left' || scene.align === 'right') {
            maxLineWidth = scene.width * (1 - (1 - (App.vars.lineWrapRatio)) * 2);
          }
          for (var i = 0; i < tpdata.words.length; i++) {
            var word = tpdata.words[i];
            textNode = new Shape.Text(word.text);
            var newline = word.text == '\\n';
            if (!scene.noWrap && (offsetX + word.width >= maxLineWidth || newline === true)) {
              finalizeLine(holderTextGroup, line, offsetX, holderTextGroup.properties.leading);
              holderTextGroup.add(line);
              offsetX = 0;
              offsetY += holderTextGroup.properties.leading;
              lineIndex += 1;
              line = new Shape.Group('line' + lineIndex);
              line.y = offsetY;
            }
            if (newline === true) {
              continue;
            }
            textNode.moveTo(offsetX, 0);
            offsetX += tpdata.spaceWidth + word.width;
            line.add(textNode);
          }
          finalizeLine(holderTextGroup, line, offsetX, holderTextGroup.properties.leading);
          holderTextGroup.add(line);
          if (scene.align === 'left') {
            holderTextGroup.moveTo(scene.width - sceneMargin, null, null);
          } else if (scene.align === 'right') {
            for (lineKey in holderTextGroup.children) {
              line = holderTextGroup.children[lineKey];
              line.moveTo(scene.width - line.width, null, null);
            }
            holderTextGroup.moveTo(0 - (scene.width - sceneMargin), null, null);
          } else {
            for (lineKey in holderTextGroup.children) {
              line = holderTextGroup.children[lineKey];
              line.moveTo((holderTextGroup.width - line.width) / 2, null, null);
            }
            holderTextGroup.moveTo((scene.width - holderTextGroup.width) / 2, null, null);
          }
          holderTextGroup.moveTo(null, (scene.height - holderTextGroup.height) / 2, null);
          if ((scene.height - holderTextGroup.height) / 2 < 0) {
            holderTextGroup.moveTo(null, 0, null);
          }
        } else {
          textNode = new Shape.Text(scene.text);
          line = new Shape.Group('line0');
          line.add(textNode);
          holderTextGroup.add(line);
          if (scene.align === 'left') {
            holderTextGroup.moveTo(scene.width - sceneMargin, null, null);
          } else if (scene.align === 'right') {
            holderTextGroup.moveTo(0 - (scene.width - sceneMargin), null, null);
          } else {
            holderTextGroup.moveTo((scene.width - tpdata.boundingBox.width) / 2, null, null);
          }
          holderTextGroup.moveTo(null, (scene.height - tpdata.boundingBox.height) / 2, null);
        }
        return sceneGraph;
      }
      function textSize(width, height, fontSize, scale) {
        var stageWidth = parseInt(width, 10);
        var stageHeight = parseInt(height, 10);
        var bigSide = Math.max(stageWidth, stageHeight);
        var smallSide = Math.min(stageWidth, stageHeight);
        var newHeight = 0.8 * Math.min(smallSide, bigSide * scale);
        return Math.round(Math.max(fontSize, newHeight));
      }
      function updateResizableElements(element) {
        var images;
        if (element == null || element.nodeType == null) {
          images = App.vars.resizableImages;
        } else {
          images = [element];
        }
        for (var i = 0,
            l = images.length; i < l; i++) {
          var el = images[i];
          if (el.holderData) {
            var flags = el.holderData.flags;
            var dimensions = dimensionCheck(el);
            if (dimensions) {
              if (!el.holderData.resizeUpdate) {
                continue;
              }
              if (flags.fluid && flags.auto) {
                var fluidConfig = el.holderData.fluidConfig;
                switch (fluidConfig.mode) {
                  case 'width':
                    dimensions.height = dimensions.width / fluidConfig.ratio;
                    break;
                  case 'height':
                    dimensions.width = dimensions.height * fluidConfig.ratio;
                    break;
                }
              }
              var settings = {
                mode: 'image',
                holderSettings: {
                  dimensions: dimensions,
                  theme: flags.theme,
                  flags: flags
                },
                el: el,
                engineSettings: el.holderData.engineSettings
              };
              if (flags.textmode == 'exact') {
                flags.exactDimensions = dimensions;
                settings.holderSettings.dimensions = flags.dimensions;
              }
              render(settings);
            } else {
              setInvisible(el);
            }
          }
        }
      }
      function setInitialDimensions(el) {
        if (el.holderData) {
          var dimensions = dimensionCheck(el);
          if (dimensions) {
            var flags = el.holderData.flags;
            var fluidConfig = {
              fluidHeight: flags.dimensions.height.slice(-1) == '%',
              fluidWidth: flags.dimensions.width.slice(-1) == '%',
              mode: null,
              initialDimensions: dimensions
            };
            if (fluidConfig.fluidWidth && !fluidConfig.fluidHeight) {
              fluidConfig.mode = 'width';
              fluidConfig.ratio = fluidConfig.initialDimensions.width / parseFloat(flags.dimensions.height);
            } else if (!fluidConfig.fluidWidth && fluidConfig.fluidHeight) {
              fluidConfig.mode = 'height';
              fluidConfig.ratio = parseFloat(flags.dimensions.width) / fluidConfig.initialDimensions.height;
            }
            el.holderData.fluidConfig = fluidConfig;
          } else {
            setInvisible(el);
          }
        }
      }
      function visibilityCheck() {
        var renderableImages = [];
        var keys = Object.keys(App.vars.invisibleImages);
        var el;
        keys.forEach(function(key) {
          el = App.vars.invisibleImages[key];
          if (dimensionCheck(el) && el.nodeName.toLowerCase() == 'img') {
            renderableImages.push(el);
            delete App.vars.invisibleImages[key];
          }
        });
        if (renderableImages.length) {
          Holder.run({images: renderableImages});
        }
        setTimeout(function() {
          global.requestAnimationFrame(visibilityCheck);
        }, 10);
      }
      function startVisibilityCheck() {
        if (!App.vars.visibilityCheckStarted) {
          global.requestAnimationFrame(visibilityCheck);
          App.vars.visibilityCheckStarted = true;
        }
      }
      function setInvisible(el) {
        if (!el.holderData.invisibleId) {
          App.vars.invisibleId += 1;
          App.vars.invisibleImages['i' + App.vars.invisibleId] = el;
          el.holderData.invisibleId = App.vars.invisibleId;
        }
      }
      var stagingRenderer = (function() {
        var svg = null,
            stagingText = null,
            stagingTextNode = null;
        return function(graph) {
          var rootNode = graph.root;
          if (App.setup.supportsSVG) {
            var firstTimeSetup = false;
            var tnode = function(text) {
              return document.createTextNode(text);
            };
            if (svg == null || svg.parentNode !== document.body) {
              firstTimeSetup = true;
            }
            svg = SVG.initSVG(svg, rootNode.properties.width, rootNode.properties.height);
            svg.style.display = 'block';
            if (firstTimeSetup) {
              stagingText = DOM.newEl('text', SVG_NS);
              stagingTextNode = tnode(null);
              DOM.setAttr(stagingText, {x: 0});
              stagingText.appendChild(stagingTextNode);
              svg.appendChild(stagingText);
              document.body.appendChild(svg);
              svg.style.visibility = 'hidden';
              svg.style.position = 'absolute';
              svg.style.top = '-100%';
              svg.style.left = '-100%';
            }
            var holderTextGroup = rootNode.children.holderTextGroup;
            var htgProps = holderTextGroup.properties;
            DOM.setAttr(stagingText, {
              'y': htgProps.font.size,
              'style': utils.cssProps({
                'font-weight': htgProps.font.weight,
                'font-size': htgProps.font.size + htgProps.font.units,
                'font-family': htgProps.font.family
              })
            });
            stagingTextNode.nodeValue = htgProps.text;
            var stagingTextBBox = stagingText.getBBox();
            var lineCount = Math.ceil(stagingTextBBox.width / (rootNode.properties.width * App.vars.lineWrapRatio));
            var words = htgProps.text.split(' ');
            var newlines = htgProps.text.match(/\\n/g);
            lineCount += newlines == null ? 0 : newlines.length;
            stagingTextNode.nodeValue = htgProps.text.replace(/[ ]+/g, '');
            var computedNoSpaceLength = stagingText.getComputedTextLength();
            var diffLength = stagingTextBBox.width - computedNoSpaceLength;
            var spaceWidth = Math.round(diffLength / Math.max(1, words.length - 1));
            var wordWidths = [];
            if (lineCount > 1) {
              stagingTextNode.nodeValue = '';
              for (var i = 0; i < words.length; i++) {
                if (words[i].length === 0)
                  continue;
                stagingTextNode.nodeValue = utils.decodeHtmlEntity(words[i]);
                var bbox = stagingText.getBBox();
                wordWidths.push({
                  text: words[i],
                  width: bbox.width
                });
              }
            }
            svg.style.display = 'none';
            return {
              spaceWidth: spaceWidth,
              lineCount: lineCount,
              boundingBox: stagingTextBBox,
              words: wordWidths
            };
          } else {
            return false;
          }
        };
      })();
      var sgCanvasRenderer = (function() {
        var canvas = DOM.newEl('canvas');
        var ctx = null;
        return function(sceneGraph) {
          if (ctx == null) {
            ctx = canvas.getContext('2d');
          }
          var root = sceneGraph.root;
          canvas.width = App.dpr(root.properties.width);
          canvas.height = App.dpr(root.properties.height);
          ctx.textBaseline = 'middle';
          var bg = root.children.holderBg;
          var bgWidth = App.dpr(bg.width);
          var bgHeight = App.dpr(bg.height);
          var outlineWidth = 2;
          var outlineOffsetWidth = outlineWidth / 2;
          ctx.fillStyle = bg.properties.fill;
          ctx.fillRect(0, 0, bgWidth, bgHeight);
          if (bg.properties.outline) {
            ctx.strokeStyle = bg.properties.outline.fill;
            ctx.lineWidth = bg.properties.outline.width;
            ctx.moveTo(outlineOffsetWidth, outlineOffsetWidth);
            ctx.lineTo(bgWidth - outlineOffsetWidth, outlineOffsetWidth);
            ctx.lineTo(bgWidth - outlineOffsetWidth, bgHeight - outlineOffsetWidth);
            ctx.lineTo(outlineOffsetWidth, bgHeight - outlineOffsetWidth);
            ctx.lineTo(outlineOffsetWidth, outlineOffsetWidth);
            ctx.moveTo(0, outlineOffsetWidth);
            ctx.lineTo(bgWidth, bgHeight - outlineOffsetWidth);
            ctx.moveTo(0, bgHeight - outlineOffsetWidth);
            ctx.lineTo(bgWidth, outlineOffsetWidth);
            ctx.stroke();
          }
          var textGroup = root.children.holderTextGroup;
          ctx.font = textGroup.properties.font.weight + ' ' + App.dpr(textGroup.properties.font.size) + textGroup.properties.font.units + ' ' + textGroup.properties.font.family + ', monospace';
          ctx.fillStyle = textGroup.properties.fill;
          for (var lineKey in textGroup.children) {
            var line = textGroup.children[lineKey];
            for (var wordKey in line.children) {
              var word = line.children[wordKey];
              var x = App.dpr(textGroup.x + line.x + word.x);
              var y = App.dpr(textGroup.y + line.y + word.y + (textGroup.properties.leading / 2));
              ctx.fillText(word.properties.text, x, y);
            }
          }
          return canvas.toDataURL('image/png');
        };
      })();
      function debounce(fn) {
        if (!App.vars.debounceTimer)
          fn.call(this);
        if (App.vars.debounceTimer)
          global.clearTimeout(App.vars.debounceTimer);
        App.vars.debounceTimer = global.setTimeout(function() {
          App.vars.debounceTimer = null;
          fn.call(this);
        }, App.setup.debounce);
      }
      function resizeEvent() {
        debounce(function() {
          updateResizableElements(null);
        });
      }
      for (var flag in App.flags) {
        if (!App.flags.hasOwnProperty(flag))
          continue;
        App.flags[flag].match = function(val) {
          return val.match(this.regex);
        };
      }
      App.setup = {
        renderer: 'html',
        debounce: 100,
        ratio: 1,
        supportsCanvas: false,
        supportsSVG: false,
        lineWrapRatio: 0.9,
        dataAttr: 'data-src',
        renderers: ['html', 'canvas', 'svg']
      };
      App.dpr = function(val) {
        return val * App.setup.ratio;
      };
      App.vars = {
        preempted: false,
        resizableImages: [],
        invisibleImages: {},
        invisibleId: 0,
        visibilityCheckStarted: false,
        debounceTimer: null,
        cache: {}
      };
      (function() {
        var devicePixelRatio = 1,
            backingStoreRatio = 1;
        var canvas = DOM.newEl('canvas');
        var ctx = null;
        if (canvas.getContext) {
          if (canvas.toDataURL('image/png').indexOf('data:image/png') != -1) {
            App.setup.renderer = 'canvas';
            ctx = canvas.getContext('2d');
            App.setup.supportsCanvas = true;
          }
        }
        if (App.setup.supportsCanvas) {
          devicePixelRatio = global.devicePixelRatio || 1;
          backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
        }
        App.setup.ratio = devicePixelRatio / backingStoreRatio;
        if (!!document.createElementNS && !!document.createElementNS(SVG_NS, 'svg').createSVGRect) {
          App.setup.renderer = 'svg';
          App.setup.supportsSVG = true;
        }
      })();
      startVisibilityCheck();
      if (onDomReady) {
        onDomReady(function() {
          if (!App.vars.preempted) {
            Holder.run();
          }
          if (global.addEventListener) {
            global.addEventListener('resize', resizeEvent, false);
            global.addEventListener('orientationchange', resizeEvent, false);
          } else {
            global.attachEvent('onresize', resizeEvent);
          }
          if (typeof global.Turbolinks == 'object') {
            global.document.addEventListener('page:change', function() {
              Holder.run();
            });
          }
        });
      }
      module.exports = Holder;
    }.call(exports, (function() {
      return this;
    }())));
  }, function(module, exports, __webpack_require__) {
    function _onDomReady(win) {
      if (document.readyState == null && document.addEventListener) {
        document.addEventListener("DOMContentLoaded", function DOMContentLoaded() {
          document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
          document.readyState = "complete";
        }, false);
        document.readyState = "loading";
      }
      var doc = win.document,
          docElem = doc.documentElement,
          LOAD = "load",
          FALSE = false,
          ONLOAD = "on" + LOAD,
          COMPLETE = "complete",
          READYSTATE = "readyState",
          ATTACHEVENT = "attachEvent",
          DETACHEVENT = "detachEvent",
          ADDEVENTLISTENER = "addEventListener",
          DOMCONTENTLOADED = "DOMContentLoaded",
          ONREADYSTATECHANGE = "onreadystatechange",
          REMOVEEVENTLISTENER = "removeEventListener",
          w3c = ADDEVENTLISTENER in doc,
          _top = FALSE,
          isReady = FALSE,
          callbacks = [];
      function ready(fn) {
        if (!isReady) {
          if (!doc.body) {
            return defer(ready);
          }
          isReady = true;
          while (fn = callbacks.shift()) {
            defer(fn);
          }
        }
      }
      function completed(event) {
        if (w3c || event.type === LOAD || doc[READYSTATE] === COMPLETE) {
          detach();
          ready();
        }
      }
      function detach() {
        if (w3c) {
          doc[REMOVEEVENTLISTENER](DOMCONTENTLOADED, completed, FALSE);
          win[REMOVEEVENTLISTENER](LOAD, completed, FALSE);
        } else {
          doc[DETACHEVENT](ONREADYSTATECHANGE, completed);
          win[DETACHEVENT](ONLOAD, completed);
        }
      }
      function defer(fn, wait) {
        setTimeout(fn, +wait >= 0 ? wait : 1);
      }
      if (doc[READYSTATE] === COMPLETE) {
        defer(ready);
      } else if (w3c) {
        doc[ADDEVENTLISTENER](DOMCONTENTLOADED, completed, FALSE);
        win[ADDEVENTLISTENER](LOAD, completed, FALSE);
      } else {
        doc[ATTACHEVENT](ONREADYSTATECHANGE, completed);
        win[ATTACHEVENT](ONLOAD, completed);
        try {
          _top = win.frameElement == null && docElem;
        } catch (e) {}
        if (_top && _top.doScroll) {
          (function doScrollCheck() {
            if (!isReady) {
              try {
                _top.doScroll("left");
              } catch (e) {
                return defer(doScrollCheck, 50);
              }
              detach();
              ready();
            }
          })();
        }
      }
      function onDomReady(fn) {
        isReady ? defer(fn) : callbacks.push(fn);
      }
      onDomReady.version = "1.4.0";
      onDomReady.isReady = function() {
        return isReady;
      };
      return onDomReady;
    }
    module.exports = typeof window !== "undefined" && _onDomReady(window);
  }, function(module, exports, __webpack_require__) {
    var encode = encodeURIComponent;
    var decode = decodeURIComponent;
    var trim = __webpack_require__(11);
    var type = __webpack_require__(12);
    var arrayRegex = /(\w+)\[(\d+)\]/;
    var objectRegex = /\w+\.\w+/;
    exports.parse = function(str) {
      if ('string' !== typeof str)
        return {};
      str = trim(str);
      if ('' === str)
        return {};
      if ('?' === str.charAt(0))
        str = str.slice(1);
      var obj = {};
      var pairs = str.split('&');
      for (var i = 0; i < pairs.length; i++) {
        var parts = pairs[i].split('=');
        var key = decode(parts[0]);
        var m,
            ctx,
            prop;
        if (m = arrayRegex.exec(key)) {
          obj[m[1]] = obj[m[1]] || [];
          obj[m[1]][m[2]] = decode(parts[1]);
          continue;
        }
        if (m = objectRegex.test(key)) {
          m = key.split('.');
          ctx = obj;
          while (m.length) {
            prop = m.shift();
            if (!prop.length)
              continue;
            if (!ctx[prop]) {
              ctx[prop] = {};
            } else if (ctx[prop] && typeof ctx[prop] !== 'object') {
              break;
            }
            if (!m.length) {
              ctx[prop] = decode(parts[1]);
            }
            ctx = ctx[prop];
          }
          continue;
        }
        obj[parts[0]] = null == parts[1] ? '' : decode(parts[1]);
      }
      return obj;
    };
    exports.stringify = function(obj) {
      if (!obj)
        return '';
      var pairs = [];
      for (var key in obj) {
        var value = obj[key];
        if ('array' == type(value)) {
          for (var i = 0; i < value.length; ++i) {
            pairs.push(encode(key + '[' + i + ']') + '=' + encode(value[i]));
          }
          continue;
        }
        pairs.push(encode(key) + '=' + encode(obj[key]));
      }
      return pairs.join('&');
    };
  }, function(module, exports, __webpack_require__) {
    var SceneGraph = function(sceneProperties) {
      var nodeCount = 1;
      function merge(parent, child) {
        for (var prop in child) {
          parent[prop] = child[prop];
        }
        return parent;
      }
      var SceneNode = function(name) {
        nodeCount++;
        this.parent = null;
        this.children = {};
        this.id = nodeCount;
        this.name = 'n' + nodeCount;
        if (typeof name !== 'undefined') {
          this.name = name;
        }
        this.x = this.y = this.z = 0;
        this.width = this.height = 0;
      };
      SceneNode.prototype.resize = function(width, height) {
        if (width != null) {
          this.width = width;
        }
        if (height != null) {
          this.height = height;
        }
      };
      SceneNode.prototype.moveTo = function(x, y, z) {
        this.x = x != null ? x : this.x;
        this.y = y != null ? y : this.y;
        this.z = z != null ? z : this.z;
      };
      SceneNode.prototype.add = function(child) {
        var name = child.name;
        if (typeof this.children[name] === 'undefined') {
          this.children[name] = child;
          child.parent = this;
        } else {
          throw 'SceneGraph: child already exists: ' + name;
        }
      };
      var RootNode = function() {
        SceneNode.call(this, 'root');
        this.properties = sceneProperties;
      };
      RootNode.prototype = new SceneNode();
      var Shape = function(name, props) {
        SceneNode.call(this, name);
        this.properties = {'fill': '#000000'};
        if (typeof props !== 'undefined') {
          merge(this.properties, props);
        } else if (typeof name !== 'undefined' && typeof name !== 'string') {
          throw 'SceneGraph: invalid node name';
        }
      };
      Shape.prototype = new SceneNode();
      var Group = function() {
        Shape.apply(this, arguments);
        this.type = 'group';
      };
      Group.prototype = new Shape();
      var Rect = function() {
        Shape.apply(this, arguments);
        this.type = 'rect';
      };
      Rect.prototype = new Shape();
      var Text = function(text) {
        Shape.call(this);
        this.type = 'text';
        this.properties.text = text;
      };
      Text.prototype = new Shape();
      var root = new RootNode();
      this.Shape = {
        'Rect': Rect,
        'Text': Text,
        'Group': Group
      };
      this.root = root;
      return this;
    };
    module.exports = SceneGraph;
  }, function(module, exports, __webpack_require__) {
    exports.extend = function(a, b) {
      var c = {};
      for (var x in a) {
        if (a.hasOwnProperty(x)) {
          c[x] = a[x];
        }
      }
      if (b != null) {
        for (var y in b) {
          if (b.hasOwnProperty(y)) {
            c[y] = b[y];
          }
        }
      }
      return c;
    };
    exports.cssProps = function(props) {
      var ret = [];
      for (var p in props) {
        if (props.hasOwnProperty(p)) {
          ret.push(p + ':' + props[p]);
        }
      }
      return ret.join(';');
    };
    exports.encodeHtmlEntity = function(str) {
      var buf = [];
      var charCode = 0;
      for (var i = str.length - 1; i >= 0; i--) {
        charCode = str.charCodeAt(i);
        if (charCode > 128) {
          buf.unshift(['&#', charCode, ';'].join(''));
        } else {
          buf.unshift(str[i]);
        }
      }
      return buf.join('');
    };
    exports.imageExists = function(src, callback) {
      var image = new Image();
      image.onerror = function() {
        callback.call(this, false);
      };
      image.onload = function() {
        callback.call(this, true);
      };
      image.src = src;
    };
    exports.decodeHtmlEntity = function(str) {
      return str.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
      });
    };
    exports.dimensionCheck = function(el) {
      var dimensions = {
        height: el.clientHeight,
        width: el.clientWidth
      };
      if (dimensions.height && dimensions.width) {
        return dimensions;
      } else {
        return false;
      }
    };
    exports.truthy = function(val) {
      if (typeof val === 'string') {
        return val === 'true' || val === 'yes' || val === '1' || val === 'on' || val === '✓';
      }
      return !!val;
    };
    exports.parseColor = function(val) {
      var hexre = /(^(?:#?)[0-9a-f]{6}$)|(^(?:#?)[0-9a-f]{3}$)/i;
      var rgbre = /^rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
      var rgbare = /^rgba\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0\.\d{1,}|1)\)$/;
      var match = val.match(hexre);
      var retval;
      if (match !== null) {
        retval = match[1] || match[2];
        if (retval[0] !== '#') {
          return '#' + retval;
        } else {
          return retval;
        }
      }
      match = val.match(rgbre);
      if (match !== null) {
        retval = 'rgb(' + match.slice(1).join(',') + ')';
        return retval;
      }
      match = val.match(rgbare);
      if (match !== null) {
        retval = 'rgba(' + match.slice(1).join(',') + ')';
        return retval;
      }
      return null;
    };
  }, function(module, exports, __webpack_require__) {
    (function(global) {
      var DOM = __webpack_require__(7);
      var SVG_NS = 'http://www.w3.org/2000/svg';
      var NODE_TYPE_COMMENT = 8;
      exports.initSVG = function(svg, width, height) {
        var defs,
            style,
            initialize = false;
        if (svg && svg.querySelector) {
          style = svg.querySelector('style');
          if (style === null) {
            initialize = true;
          }
        } else {
          svg = DOM.newEl('svg', SVG_NS);
          initialize = true;
        }
        if (initialize) {
          defs = DOM.newEl('defs', SVG_NS);
          style = DOM.newEl('style', SVG_NS);
          DOM.setAttr(style, {'type': 'text/css'});
          defs.appendChild(style);
          svg.appendChild(defs);
        }
        if (svg.webkitMatchesSelector) {
          svg.setAttribute('xmlns', SVG_NS);
        }
        for (var i = 0; i < svg.childNodes.length; i++) {
          if (svg.childNodes[i].nodeType === NODE_TYPE_COMMENT) {
            svg.removeChild(svg.childNodes[i]);
          }
        }
        while (style.childNodes.length) {
          style.removeChild(style.childNodes[0]);
        }
        DOM.setAttr(svg, {
          'width': width,
          'height': height,
          'viewBox': '0 0 ' + width + ' ' + height,
          'preserveAspectRatio': 'none'
        });
        return svg;
      };
      exports.svgStringToDataURI = function() {
        var rawPrefix = 'data:image/svg+xml;charset=UTF-8,';
        var base64Prefix = 'data:image/svg+xml;charset=UTF-8;base64,';
        return function(svgString, base64) {
          if (base64) {
            return base64Prefix + btoa(global.unescape(encodeURIComponent(svgString)));
          } else {
            return rawPrefix + encodeURIComponent(svgString);
          }
        };
      }();
      exports.serializeSVG = function(svg, engineSettings) {
        if (!global.XMLSerializer)
          return;
        var serializer = new XMLSerializer();
        var svgCSS = '';
        var stylesheets = engineSettings.stylesheets;
        if (engineSettings.svgXMLStylesheet) {
          var xml = DOM.createXML();
          for (var i = stylesheets.length - 1; i >= 0; i--) {
            var csspi = xml.createProcessingInstruction('xml-stylesheet', 'href="' + stylesheets[i] + '" rel="stylesheet"');
            xml.insertBefore(csspi, xml.firstChild);
          }
          xml.removeChild(xml.documentElement);
          svgCSS = serializer.serializeToString(xml);
        }
        var svgText = serializer.serializeToString(svg);
        svgText = svgText.replace(/\&amp;(\#[0-9]{2,}\;)/g, '&$1');
        return svgCSS + svgText;
      };
    }.call(exports, (function() {
      return this;
    }())));
  }, function(module, exports, __webpack_require__) {
    (function(global) {
      exports.newEl = function(tag, namespace) {
        if (!global.document)
          return;
        if (namespace == null) {
          return global.document.createElement(tag);
        } else {
          return global.document.createElementNS(namespace, tag);
        }
      };
      exports.setAttr = function(el, attrs) {
        for (var a in attrs) {
          el.setAttribute(a, attrs[a]);
        }
      };
      exports.createXML = function() {
        if (!global.DOMParser)
          return;
        return new DOMParser().parseFromString('<xml />', 'application/xml');
      };
      exports.getNodeArray = function(val) {
        var retval = null;
        if (typeof(val) == 'string') {
          retval = document.querySelectorAll(val);
        } else if (global.NodeList && val instanceof global.NodeList) {
          retval = val;
        } else if (global.Node && val instanceof global.Node) {
          retval = [val];
        } else if (global.HTMLCollection && val instanceof global.HTMLCollection) {
          retval = val;
        } else if (val instanceof Array) {
          retval = val;
        } else if (val === null) {
          retval = [];
        }
        retval = Array.prototype.slice.call(retval);
        return retval;
      };
    }.call(exports, (function() {
      return this;
    }())));
  }, function(module, exports, __webpack_require__) {
    var Color = function(color, options) {
      if (typeof color !== 'string')
        return;
      this.original = color;
      if (color.charAt(0) === '#') {
        color = color.slice(1);
      }
      if (/[^a-f0-9]+/i.test(color))
        return;
      if (color.length === 3) {
        color = color.replace(/./g, '$&$&');
      }
      if (color.length !== 6)
        return;
      this.alpha = 1;
      if (options && options.alpha) {
        this.alpha = options.alpha;
      }
      this.set(parseInt(color, 16));
    };
    Color.rgb2hex = function(r, g, b) {
      function format(decimal) {
        var hex = (decimal | 0).toString(16);
        if (decimal < 16) {
          hex = '0' + hex;
        }
        return hex;
      }
      return [r, g, b].map(format).join('');
    };
    Color.hsl2rgb = function(h, s, l) {
      var H = h / 60;
      var C = (1 - Math.abs(2 * l - 1)) * s;
      var X = C * (1 - Math.abs(parseInt(H) % 2 - 1));
      var m = l - (C / 2);
      var r = 0,
          g = 0,
          b = 0;
      if (H >= 0 && H < 1) {
        r = C;
        g = X;
      } else if (H >= 1 && H < 2) {
        r = X;
        g = C;
      } else if (H >= 2 && H < 3) {
        g = C;
        b = X;
      } else if (H >= 3 && H < 4) {
        g = X;
        b = C;
      } else if (H >= 4 && H < 5) {
        r = X;
        b = C;
      } else if (H >= 5 && H < 6) {
        r = C;
        b = X;
      }
      r += m;
      g += m;
      b += m;
      r = parseInt(r * 255);
      g = parseInt(g * 255);
      b = parseInt(b * 255);
      return [r, g, b];
    };
    Color.prototype.set = function(val) {
      this.raw = val;
      var r = (this.raw & 0xFF0000) >> 16;
      var g = (this.raw & 0x00FF00) >> 8;
      var b = (this.raw & 0x0000FF);
      var y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      var u = -0.09991 * r - 0.33609 * g + 0.436 * b;
      var v = 0.615 * r - 0.55861 * g - 0.05639 * b;
      this.rgb = {
        r: r,
        g: g,
        b: b
      };
      this.yuv = {
        y: y,
        u: u,
        v: v
      };
      return this;
    };
    Color.prototype.lighten = function(multiplier) {
      var cm = Math.min(1, Math.max(0, Math.abs(multiplier))) * (multiplier < 0 ? -1 : 1);
      var bm = (255 * cm) | 0;
      var cr = Math.min(255, Math.max(0, this.rgb.r + bm));
      var cg = Math.min(255, Math.max(0, this.rgb.g + bm));
      var cb = Math.min(255, Math.max(0, this.rgb.b + bm));
      var hex = Color.rgb2hex(cr, cg, cb);
      return new Color(hex);
    };
    Color.prototype.toHex = function(addHash) {
      return (addHash ? '#' : '') + this.raw.toString(16);
    };
    Color.prototype.lighterThan = function(color) {
      if (!(color instanceof Color)) {
        color = new Color(color);
      }
      return this.yuv.y > color.yuv.y;
    };
    Color.prototype.blendAlpha = function(color) {
      if (!(color instanceof Color)) {
        color = new Color(color);
      }
      var Ca = color;
      var Cb = this;
      var r = Ca.alpha * Ca.rgb.r + (1 - Ca.alpha) * Cb.rgb.r;
      var g = Ca.alpha * Ca.rgb.g + (1 - Ca.alpha) * Cb.rgb.g;
      var b = Ca.alpha * Ca.rgb.b + (1 - Ca.alpha) * Cb.rgb.b;
      return new Color(Color.rgb2hex(r, g, b));
    };
    module.exports = Color;
  }, function(module, exports, __webpack_require__) {
    module.exports = {
      'version': '2.8.2',
      'svg_ns': 'http://www.w3.org/2000/svg'
    };
  }, function(module, exports, __webpack_require__) {
    (function(global) {
      var SVG = __webpack_require__(6);
      var DOM = __webpack_require__(7);
      var utils = __webpack_require__(5);
      var constants = __webpack_require__(9);
      var SVG_NS = constants.svg_ns;
      var generatorComment = '\n' + 'Created with Holder.js ' + constants.version + '.\n' + 'Learn more at http://holderjs.com\n' + '(c) 2012-2015 Ivan Malopinsky - http://imsky.co\n';
      module.exports = (function() {
        if (!global.XMLSerializer)
          return;
        var xml = DOM.createXML();
        var svg = SVG.initSVG(null, 0, 0);
        var bgEl = DOM.newEl('rect', SVG_NS);
        svg.appendChild(bgEl);
        return function(sceneGraph, renderSettings) {
          var root = sceneGraph.root;
          SVG.initSVG(svg, root.properties.width, root.properties.height);
          var groups = svg.querySelectorAll('g');
          for (var i = 0; i < groups.length; i++) {
            groups[i].parentNode.removeChild(groups[i]);
          }
          var holderURL = renderSettings.holderSettings.flags.holderURL;
          var holderId = 'holder_' + (Number(new Date()) + 32768 + (0 | Math.random() * 32768)).toString(16);
          var sceneGroupEl = DOM.newEl('g', SVG_NS);
          var textGroup = root.children.holderTextGroup;
          var tgProps = textGroup.properties;
          var textGroupEl = DOM.newEl('g', SVG_NS);
          var tpdata = textGroup.textPositionData;
          var textCSSRule = '#' + holderId + ' text { ' + utils.cssProps({
            'fill': tgProps.fill,
            'font-weight': tgProps.font.weight,
            'font-family': tgProps.font.family + ', monospace',
            'font-size': tgProps.font.size + tgProps.font.units
          }) + ' } ';
          var commentNode = xml.createComment('\n' + 'Source URL: ' + holderURL + generatorComment);
          var holderCSS = xml.createCDATASection(textCSSRule);
          var styleEl = svg.querySelector('style');
          var bg = root.children.holderBg;
          DOM.setAttr(sceneGroupEl, {id: holderId});
          svg.insertBefore(commentNode, svg.firstChild);
          styleEl.appendChild(holderCSS);
          sceneGroupEl.appendChild(bgEl);
          if (bg.properties.outline) {
            var outlineEl = DOM.newEl('path', SVG_NS);
            var outlineWidth = bg.properties.outline.width;
            var outlineOffsetWidth = outlineWidth / 2;
            DOM.setAttr(outlineEl, {
              'd': ['M', outlineOffsetWidth, outlineOffsetWidth, 'H', bg.width - outlineOffsetWidth, 'V', bg.height - outlineOffsetWidth, 'H', outlineOffsetWidth, 'V', 0, 'M', 0, outlineOffsetWidth, 'L', bg.width, bg.height - outlineOffsetWidth, 'M', 0, bg.height - outlineOffsetWidth, 'L', bg.width, outlineOffsetWidth].join(' '),
              'stroke-width': bg.properties.outline.width,
              'stroke': bg.properties.outline.fill,
              'fill': 'none'
            });
            sceneGroupEl.appendChild(outlineEl);
          }
          sceneGroupEl.appendChild(textGroupEl);
          svg.appendChild(sceneGroupEl);
          DOM.setAttr(bgEl, {
            'width': bg.width,
            'height': bg.height,
            'fill': bg.properties.fill
          });
          textGroup.y += tpdata.boundingBox.height * 0.8;
          for (var lineKey in textGroup.children) {
            var line = textGroup.children[lineKey];
            for (var wordKey in line.children) {
              var word = line.children[wordKey];
              var x = textGroup.x + line.x + word.x;
              var y = textGroup.y + line.y + word.y;
              var textEl = DOM.newEl('text', SVG_NS);
              var textNode = document.createTextNode(null);
              DOM.setAttr(textEl, {
                'x': x,
                'y': y
              });
              textNode.nodeValue = word.properties.text;
              textEl.appendChild(textNode);
              textGroupEl.appendChild(textEl);
            }
          }
          var svgString = SVG.svgStringToDataURI(SVG.serializeSVG(svg, renderSettings.engineSettings), renderSettings.mode === 'background');
          return svgString;
        };
      })();
    }.call(exports, (function() {
      return this;
    }())));
  }, function(module, exports, __webpack_require__) {
    exports = module.exports = trim;
    function trim(str) {
      return str.replace(/^\s*|\s*$/g, '');
    }
    exports.left = function(str) {
      return str.replace(/^\s*/, '');
    };
    exports.right = function(str) {
      return str.replace(/\s*$/, '');
    };
  }, function(module, exports, __webpack_require__) {
    var toString = Object.prototype.toString;
    module.exports = function(val) {
      switch (toString.call(val)) {
        case '[object Date]':
          return 'date';
        case '[object RegExp]':
          return 'regexp';
        case '[object Arguments]':
          return 'arguments';
        case '[object Array]':
          return 'array';
        case '[object Error]':
          return 'error';
      }
      if (val === null)
        return 'null';
      if (val === undefined)
        return 'undefined';
      if (val !== val)
        return 'nan';
      if (val && val.nodeType === 1)
        return 'element';
      val = val.valueOf ? val.valueOf() : Object.prototype.valueOf.apply(val);
      return typeof val;
    };
  }]);
});
;
(function(ctx, isMeteorPackage) {
  if (isMeteorPackage) {
    Holder = ctx.Holder;
  }
})(this, typeof Meteor !== 'undefined' && typeof Package !== 'undefined');

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("github:imsky/holder@2.8.2", ["github:imsky/holder@2.8.2/holder"], function(main) {
  return main;
});

_removeDefine();
})();
System.register("assets/js/style.js", ["github:imsky/holder@2.8.2", "assets/css/reset.css!github:systemjs/plugin-css@0.1.18", "github:nolimits4web/Swiper@3.1.2/dist/css/swiper.css!github:systemjs/plugin-css@0.1.18", "github:fengyuanchen/cropper@0.11.1/dist/cropper.css!github:systemjs/plugin-css@0.1.18", "github:t4t5/sweetalert@1.1.0/dist/sweetalert.css!github:systemjs/plugin-css@0.1.18"], function(_export) {
  'use strict';
  return {
    setters: [function(_holder) {}, function(_cssResetCss) {}, function(_SwiperDistCssSwiperCss) {}, function(_cropperDistCropperCss) {}, function(_sweetalertDistSweetalertCss) {}],
    execute: function() {}
  };
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
;
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
    define("github:Olical/EventEmitter@4.2.11/EventEmitter", [], function() {
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
define("github:Olical/EventEmitter@4.2.11", ["github:Olical/EventEmitter@4.2.11/EventEmitter"], function(main) {
  return main;
});

_removeDefine();
})();
System.registerDynamic("github:Modernizr/Modernizr@2.8.3/modernizr", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, "Modernizr", null);
  (function() {
    "format global";
    "exports Modernizr";
    window.Modernizr = (function(window, document, undefined) {
      var version = '2.8.3',
          Modernizr = {},
          enableClasses = true,
          docElement = document.documentElement,
          mod = 'modernizr',
          modElem = document.createElement(mod),
          mStyle = modElem.style,
          inputElem = document.createElement('input'),
          smile = ':)',
          toString = {}.toString,
          prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
          omPrefixes = 'Webkit Moz O ms',
          cssomPrefixes = omPrefixes.split(' '),
          domPrefixes = omPrefixes.toLowerCase().split(' '),
          ns = {'svg': 'http://www.w3.org/2000/svg'},
          tests = {},
          inputs = {},
          attrs = {},
          classes = [],
          slice = classes.slice,
          featureName,
          injectElementWithStyles = function(rule, callback, nodes, testnames) {
            var style,
                ret,
                node,
                docOverflow,
                div = document.createElement('div'),
                body = document.body,
                fakeBody = body || document.createElement('body');
            if (parseInt(nodes, 10)) {
              while (nodes--) {
                node = document.createElement('div');
                node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
                div.appendChild(node);
              }
            }
            style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('');
            div.id = mod;
            (body ? div : fakeBody).innerHTML += style;
            fakeBody.appendChild(div);
            if (!body) {
              fakeBody.style.background = '';
              fakeBody.style.overflow = 'hidden';
              docOverflow = docElement.style.overflow;
              docElement.style.overflow = 'hidden';
              docElement.appendChild(fakeBody);
            }
            ret = callback(div, rule);
            if (!body) {
              fakeBody.parentNode.removeChild(fakeBody);
              docElement.style.overflow = docOverflow;
            } else {
              div.parentNode.removeChild(div);
            }
            return !!ret;
          },
          testMediaQuery = function(mq) {
            var matchMedia = window.matchMedia || window.msMatchMedia;
            if (matchMedia) {
              return matchMedia(mq) && matchMedia(mq).matches || false;
            }
            var bool;
            injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function(node) {
              bool = (window.getComputedStyle ? getComputedStyle(node, null) : node.currentStyle)['position'] == 'absolute';
            });
            return bool;
          },
          isEventSupported = (function() {
            var TAGNAMES = {
              'select': 'input',
              'change': 'input',
              'submit': 'form',
              'reset': 'form',
              'error': 'img',
              'load': 'img',
              'abort': 'img'
            };
            function isEventSupported(eventName, element) {
              element = element || document.createElement(TAGNAMES[eventName] || 'div');
              eventName = 'on' + eventName;
              var isSupported = eventName in element;
              if (!isSupported) {
                if (!element.setAttribute) {
                  element = document.createElement('div');
                }
                if (element.setAttribute && element.removeAttribute) {
                  element.setAttribute(eventName, '');
                  isSupported = is(element[eventName], 'function');
                  if (!is(element[eventName], 'undefined')) {
                    element[eventName] = undefined;
                  }
                  element.removeAttribute(eventName);
                }
              }
              element = null;
              return isSupported;
            }
            return isEventSupported;
          })(),
          _hasOwnProperty = ({}).hasOwnProperty,
          hasOwnProp;
      if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
        hasOwnProp = function(object, property) {
          return _hasOwnProperty.call(object, property);
        };
      } else {
        hasOwnProp = function(object, property) {
          return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
        };
      }
      if (!Function.prototype.bind) {
        Function.prototype.bind = function bind(that) {
          var target = this;
          if (typeof target != "function") {
            throw new TypeError();
          }
          var args = slice.call(arguments, 1),
              bound = function() {
                if (this instanceof bound) {
                  var F = function() {};
                  F.prototype = target.prototype;
                  var self = new F();
                  var result = target.apply(self, args.concat(slice.call(arguments)));
                  if (Object(result) === result) {
                    return result;
                  }
                  return self;
                } else {
                  return target.apply(that, args.concat(slice.call(arguments)));
                }
              };
          return bound;
        };
      }
      function setCss(str) {
        mStyle.cssText = str;
      }
      function setCssAll(str1, str2) {
        return setCss(prefixes.join(str1 + ';') + (str2 || ''));
      }
      function is(obj, type) {
        return typeof obj === type;
      }
      function contains(str, substr) {
        return !!~('' + str).indexOf(substr);
      }
      function testProps(props, prefixed) {
        for (var i in props) {
          var prop = props[i];
          if (!contains(prop, "-") && mStyle[prop] !== undefined) {
            return prefixed == 'pfx' ? prop : true;
          }
        }
        return false;
      }
      function testDOMProps(props, obj, elem) {
        for (var i in props) {
          var item = obj[props[i]];
          if (item !== undefined) {
            if (elem === false)
              return props[i];
            if (is(item, 'function')) {
              return item.bind(elem || obj);
            }
            return item;
          }
        }
        return false;
      }
      function testPropsAll(prop, prefixed, elem) {
        var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
            props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');
        if (is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);
        } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
      }
      tests['flexbox'] = function() {
        return testPropsAll('flexWrap');
      };
      tests['flexboxlegacy'] = function() {
        return testPropsAll('boxDirection');
      };
      tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
      };
      tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
      };
      tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
      };
      tests['touch'] = function() {
        var bool;
        if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (', prefixes.join('touch-enabled),('), mod, ')', '{#modernizr{top:9px;position:absolute}}'].join(''), function(node) {
            bool = node.offsetTop === 9;
          });
        }
        return bool;
      };
      tests['geolocation'] = function() {
        return 'geolocation' in navigator;
      };
      tests['postmessage'] = function() {
        return !!window.postMessage;
      };
      tests['websqldatabase'] = function() {
        return !!window.openDatabase;
      };
      tests['indexedDB'] = function() {
        return !!testPropsAll("indexedDB", window);
      };
      tests['hashchange'] = function() {
        return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
      };
      tests['history'] = function() {
        return !!(window.history && history.pushState);
      };
      tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
      };
      tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
      };
      tests['rgba'] = function() {
        setCss('background-color:rgba(150,255,150,.5)');
        return contains(mStyle.backgroundColor, 'rgba');
      };
      tests['hsla'] = function() {
        setCss('background-color:hsla(120,40%,100%,.5)');
        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
      };
      tests['multiplebgs'] = function() {
        setCss('background:url(https://),url(https://),red url(https://)');
        return (/(url\s*\(.*?){3}/).test(mStyle.background);
      };
      tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
      };
      tests['borderimage'] = function() {
        return testPropsAll('borderImage');
      };
      tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
      };
      tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
      };
      tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
      };
      tests['opacity'] = function() {
        setCssAll('opacity:.55');
        return (/^0.55$/).test(mStyle.opacity);
      };
      tests['cssanimations'] = function() {
        return testPropsAll('animationName');
      };
      tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
      };
      tests['cssgradients'] = function() {
        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';
        setCss((str1 + '-webkit- '.split(' ').join(str2 + str1) + prefixes.join(str3 + str1)).slice(0, -str1.length));
        return contains(mStyle.backgroundImage, 'gradient');
      };
      tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
      };
      tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
      };
      tests['csstransforms3d'] = function() {
        var ret = !!testPropsAll('perspective');
        if (ret && 'webkitPerspective' in docElement.style) {
          injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function(node, rule) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
        }
        return ret;
      };
      tests['csstransitions'] = function() {
        return testPropsAll('transition');
      };
      tests['fontface'] = function() {
        var bool;
        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function(node, rule) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';
          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });
        return bool;
      };
      tests['generatedcontent'] = function() {
        var bool;
        injectElementWithStyles(['#', mod, '{font:0/0 a}#', mod, ':after{content:"', smile, '";visibility:hidden;font:3px/1 a}'].join(''), function(node) {
          bool = node.offsetHeight >= 3;
        });
        return bool;
      };
      tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;
        try {
          if (bool = !!elem.canPlayType) {
            bool = new Boolean(bool);
            bool.ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, '');
            bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, '');
            bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '');
          }
        } catch (e) {}
        return bool;
      };
      tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;
        try {
          if (bool = !!elem.canPlayType) {
            bool = new Boolean(bool);
            bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '');
            bool.mp3 = elem.canPlayType('audio/mpeg;').replace(/^no$/, '');
            bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '');
            bool.m4a = (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(/^no$/, '');
          }
        } catch (e) {}
        return bool;
      };
      tests['localstorage'] = function() {
        try {
          localStorage.setItem(mod, mod);
          localStorage.removeItem(mod);
          return true;
        } catch (e) {
          return false;
        }
      };
      tests['sessionstorage'] = function() {
        try {
          sessionStorage.setItem(mod, mod);
          sessionStorage.removeItem(mod);
          return true;
        } catch (e) {
          return false;
        }
      };
      tests['webworkers'] = function() {
        return !!window.Worker;
      };
      tests['applicationcache'] = function() {
        return !!window.applicationCache;
      };
      tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
      };
      tests['inlinesvg'] = function() {
        var div = document.createElement('div');
        div.innerHTML = '<svg/>';
        return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
      };
      tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
      };
      tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
      };
      function webforms() {
        Modernizr['input'] = (function(props) {
          for (var i = 0,
              len = props.length; i < len; i++) {
            attrs[props[i]] = !!(props[i] in inputElem);
          }
          if (attrs.list) {
            attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
          }
          return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
        Modernizr['inputtypes'] = (function(props) {
          for (var i = 0,
              bool,
              inputElemType,
              defaultView,
              len = props.length; i < len; i++) {
            inputElem.setAttribute('type', inputElemType = props[i]);
            bool = inputElem.type !== 'text';
            if (bool) {
              inputElem.value = smile;
              inputElem.style.cssText = 'position:absolute;visibility:hidden;';
              if (/^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined) {
                docElement.appendChild(inputElem);
                defaultView = document.defaultView;
                bool = defaultView.getComputedStyle && defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' && (inputElem.offsetHeight !== 0);
                docElement.removeChild(inputElem);
              } else if (/^(search|tel)$/.test(inputElemType)) {} else if (/^(url|email)$/.test(inputElemType)) {
                bool = inputElem.checkValidity && inputElem.checkValidity() === false;
              } else {
                bool = inputElem.value != smile;
              }
            }
            inputs[props[i]] = !!bool;
          }
          return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
      }
      for (var feature in tests) {
        if (hasOwnProp(tests, feature)) {
          featureName = feature.toLowerCase();
          Modernizr[featureName] = tests[feature]();
          classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
      }
      Modernizr.input || webforms();
      Modernizr.addTest = function(feature, test) {
        if (typeof feature == 'object') {
          for (var key in feature) {
            if (hasOwnProp(feature, key)) {
              Modernizr.addTest(key, feature[key]);
            }
          }
        } else {
          feature = feature.toLowerCase();
          if (Modernizr[feature] !== undefined) {
            return Modernizr;
          }
          test = typeof test == 'function' ? test() : test;
          if (typeof enableClasses !== "undefined" && enableClasses) {
            docElement.className += ' ' + (test ? '' : 'no-') + feature;
          }
          Modernizr[feature] = test;
        }
        return Modernizr;
      };
      setCss('');
      modElem = inputElem = null;
      ;
      (function(window, document) {
        var version = '3.7.0';
        var options = window.html5 || {};
        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
        var supportsHtml5Styles;
        var expando = '_html5shiv';
        var expanID = 0;
        var expandoData = {};
        var supportsUnknownElements;
        (function() {
          try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
            supportsHtml5Styles = ('hidden' in a);
            supportsUnknownElements = a.childNodes.length == 1 || (function() {
              (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (typeof frag.cloneNode == 'undefined' || typeof frag.createDocumentFragment == 'undefined' || typeof frag.createElement == 'undefined');
            }());
          } catch (e) {
            supportsHtml5Styles = true;
            supportsUnknownElements = true;
          }
        }());
        function addStyleSheet(ownerDocument, cssText) {
          var p = ownerDocument.createElement('p'),
              parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;
          p.innerHTML = 'x<style>' + cssText + '</style>';
          return parent.insertBefore(p.lastChild, parent.firstChild);
        }
        function getElements() {
          var elements = html5.elements;
          return typeof elements == 'string' ? elements.split(' ') : elements;
        }
        function getExpandoData(ownerDocument) {
          var data = expandoData[ownerDocument[expando]];
          if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
          }
          return data;
        }
        function createElement(nodeName, ownerDocument, data) {
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if (supportsUnknownElements) {
            return ownerDocument.createElement(nodeName);
          }
          if (!data) {
            data = getExpandoData(ownerDocument);
          }
          var node;
          if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
          } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
          } else {
            node = data.createElem(nodeName);
          }
          return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
        }
        function createDocumentFragment(ownerDocument, data) {
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if (supportsUnknownElements) {
            return ownerDocument.createDocumentFragment();
          }
          data = data || getExpandoData(ownerDocument);
          var clone = data.frag.cloneNode(),
              i = 0,
              elems = getElements(),
              l = elems.length;
          for (; i < l; i++) {
            clone.createElement(elems[i]);
          }
          return clone;
        }
        function shivMethods(ownerDocument, data) {
          if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
          }
          ownerDocument.createElement = function(nodeName) {
            if (!html5.shivMethods) {
              return data.createElem(nodeName);
            }
            return createElement(nodeName, ownerDocument, data);
          };
          ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' + 'var n=f.cloneNode(),c=n.createElement;' + 'h.shivMethods&&(' + getElements().join().replace(/[\w\-]+/g, function(nodeName) {
            data.createElem(nodeName);
            data.frag.createElement(nodeName);
            return 'c("' + nodeName + '")';
          }) + ');return n}')(html5, data.frag);
        }
        function shivDocument(ownerDocument) {
          if (!ownerDocument) {
            ownerDocument = document;
          }
          var data = getExpandoData(ownerDocument);
          if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
            data.hasCSS = !!addStyleSheet(ownerDocument, 'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' + 'mark{background:#FF0;color:#000}' + 'template{display:none}');
          }
          if (!supportsUnknownElements) {
            shivMethods(ownerDocument, data);
          }
          return ownerDocument;
        }
        var html5 = {
          'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',
          'version': version,
          'shivCSS': (options.shivCSS !== false),
          'supportsUnknownElements': supportsUnknownElements,
          'shivMethods': (options.shivMethods !== false),
          'type': 'default',
          'shivDocument': shivDocument,
          createElement: createElement,
          createDocumentFragment: createDocumentFragment
        };
        window.html5 = html5;
        shivDocument(document);
      }(this, document));
      Modernizr._version = version;
      Modernizr._prefixes = prefixes;
      Modernizr._domPrefixes = domPrefixes;
      Modernizr._cssomPrefixes = cssomPrefixes;
      Modernizr.mq = testMediaQuery;
      Modernizr.hasEvent = isEventSupported;
      Modernizr.testProp = function(prop) {
        return testProps([prop]);
      };
      Modernizr.testAllProps = testPropsAll;
      Modernizr.testStyles = injectElementWithStyles;
      Modernizr.prefixed = function(prop, obj, elem) {
        if (!obj) {
          return testPropsAll(prop, 'pfx');
        } else {
          return testPropsAll(prop, obj, elem);
        }
      };
      docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (enableClasses ? ' js ' + classes.join(' ') : '');
      return Modernizr;
    })(this, this.document);
  })();
  return _retrieveGlobal();
});

System.registerDynamic("github:Modernizr/Modernizr@2.8.3", ["github:Modernizr/Modernizr@2.8.3/modernizr"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:Modernizr/Modernizr@2.8.3/modernizr");
  global.define = __define;
  return module.exports;
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/var/arr", [], function() {
  return [];
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/var/slice", ["github:jquery/jquery@2.1.4/var/arr"], function(arr) {
  return arr.slice;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/var/concat", ["github:jquery/jquery@2.1.4/var/arr"], function(arr) {
  return arr.concat;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/var/push", ["github:jquery/jquery@2.1.4/var/arr"], function(arr) {
  return arr.push;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/var/indexOf", ["github:jquery/jquery@2.1.4/var/arr"], function(arr) {
  return arr.indexOf;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/var/class2type", [], function() {
  return {};
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/var/toString", ["github:jquery/jquery@2.1.4/var/class2type"], function(class2type) {
  return class2type.toString;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/var/hasOwn", ["github:jquery/jquery@2.1.4/var/class2type"], function(class2type) {
  return class2type.hasOwnProperty;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/var/support", [], function() {
  return {};
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/core", ["github:jquery/jquery@2.1.4/var/arr", "github:jquery/jquery@2.1.4/var/slice", "github:jquery/jquery@2.1.4/var/concat", "github:jquery/jquery@2.1.4/var/push", "github:jquery/jquery@2.1.4/var/indexOf", "github:jquery/jquery@2.1.4/var/class2type", "github:jquery/jquery@2.1.4/var/toString", "github:jquery/jquery@2.1.4/var/hasOwn", "github:jquery/jquery@2.1.4/var/support"], function(arr, slice, concat, push, indexOf, class2type, toString, hasOwn, support) {
  var document = window.document,
      version = "@VERSION",
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
  return jQuery;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
(function(window) {
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
  if (typeof define === "function" && define.amd) {
    define("github:jquery/jquery@2.1.4/sizzle/dist/sizzle", [], function() {
      return Sizzle;
    });
  } else if (typeof module !== "undefined" && module.exports) {
    module.exports = Sizzle;
  } else {
    window.Sizzle = Sizzle;
  }
})(window);

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/selector-sizzle", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/sizzle/dist/sizzle"], function(jQuery, Sizzle) {
  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;
  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/selector", ["github:jquery/jquery@2.1.4/selector-sizzle"], (void 0));

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/traversing/var/rneedsContext", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/selector"], function(jQuery) {
  return jQuery.expr.match.needsContext;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/core/var/rsingleTag", [], function() {
  return (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/traversing/findFilter", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/var/indexOf", "github:jquery/jquery@2.1.4/traversing/var/rneedsContext", "github:jquery/jquery@2.1.4/selector"], function(jQuery, indexOf, rneedsContext) {
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
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/core/init", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/core/var/rsingleTag", "github:jquery/jquery@2.1.4/traversing/findFilter"], function(jQuery, rsingleTag) {
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
  return init;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/traversing", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/var/indexOf", "github:jquery/jquery@2.1.4/traversing/var/rneedsContext", "github:jquery/jquery@2.1.4/core/init", "github:jquery/jquery@2.1.4/traversing/findFilter", "github:jquery/jquery@2.1.4/selector"], function(jQuery, indexOf, rneedsContext) {
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
  return jQuery;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/var/rnotwhite", [], function() {
  return (/\S+/g);
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/callbacks", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/var/rnotwhite"], function(jQuery, rnotwhite) {
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
  return jQuery;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/deferred", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/var/slice", "github:jquery/jquery@2.1.4/callbacks"], function(jQuery, slice) {
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
  return jQuery;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/core/ready", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/core/init", "github:jquery/jquery@2.1.4/deferred"], function(jQuery) {
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
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/core/access", ["github:jquery/jquery@2.1.4/core"], function(jQuery) {
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
  return access;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/data/accepts", ["github:jquery/jquery@2.1.4/core"], function(jQuery) {
  jQuery.acceptData = function(owner) {
    return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
  };
  return jQuery.acceptData;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/data/Data", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/var/rnotwhite", "github:jquery/jquery@2.1.4/data/accepts"], function(jQuery, rnotwhite) {
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
  return Data;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/data/var/data_priv", ["github:jquery/jquery@2.1.4/data/Data"], function(Data) {
  return new Data();
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/data/var/data_user", ["github:jquery/jquery@2.1.4/data/Data"], function(Data) {
  return new Data();
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/data", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/var/rnotwhite", "github:jquery/jquery@2.1.4/core/access", "github:jquery/jquery@2.1.4/data/var/data_priv", "github:jquery/jquery@2.1.4/data/var/data_user"], function(jQuery, rnotwhite, access, data_priv, data_user) {
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
  return jQuery;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/queue", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/data/var/data_priv", "github:jquery/jquery@2.1.4/deferred", "github:jquery/jquery@2.1.4/callbacks"], function(jQuery, data_priv) {
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
  return jQuery;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/var/pnum", [], function() {
  return (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/css/var/cssExpand", [], function() {
  return ["Top", "Right", "Bottom", "Left"];
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/css/var/isHidden", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/selector"], function(jQuery) {
  return function(elem, el) {
    elem = el || elem;
    return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
  };
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/manipulation/var/rcheckableType", [], function() {
  return (/^(?:checkbox|radio)$/i);
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/manipulation/support", ["github:jquery/jquery@2.1.4/var/support"], function(support) {
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
  return support;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/var/strundefined", [], function() {
  return typeof undefined;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/event/support", ["github:jquery/jquery@2.1.4/var/support"], function(support) {
  support.focusinBubbles = "onfocusin" in window;
  return support;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/event", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/var/strundefined", "github:jquery/jquery@2.1.4/var/rnotwhite", "github:jquery/jquery@2.1.4/var/hasOwn", "github:jquery/jquery@2.1.4/var/slice", "github:jquery/jquery@2.1.4/event/support", "github:jquery/jquery@2.1.4/data/var/data_priv", "github:jquery/jquery@2.1.4/core/init", "github:jquery/jquery@2.1.4/data/accepts", "github:jquery/jquery@2.1.4/selector"], function(jQuery, strundefined, rnotwhite, hasOwn, slice, support, data_priv) {
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
  return jQuery;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/manipulation", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/var/concat", "github:jquery/jquery@2.1.4/var/push", "github:jquery/jquery@2.1.4/core/access", "github:jquery/jquery@2.1.4/manipulation/var/rcheckableType", "github:jquery/jquery@2.1.4/manipulation/support", "github:jquery/jquery@2.1.4/data/var/data_priv", "github:jquery/jquery@2.1.4/data/var/data_user", "github:jquery/jquery@2.1.4/core/init", "github:jquery/jquery@2.1.4/data/accepts", "github:jquery/jquery@2.1.4/traversing", "github:jquery/jquery@2.1.4/selector", "github:jquery/jquery@2.1.4/event"], function(jQuery, concat, push, access, rcheckableType, support, data_priv, data_user) {
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
  return jQuery;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/css/defaultDisplay", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/manipulation"], function(jQuery) {
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
  return defaultDisplay;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/css/var/rmargin", [], function() {
  return (/^margin/);
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/css/var/rnumnonpx", ["github:jquery/jquery@2.1.4/var/pnum"], function(pnum) {
  return new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/css/var/getStyles", [], function() {
  return function(elem) {
    if (elem.ownerDocument.defaultView.opener) {
      return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
    }
    return window.getComputedStyle(elem, null);
  };
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/css/curCSS", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/css/var/rnumnonpx", "github:jquery/jquery@2.1.4/css/var/rmargin", "github:jquery/jquery@2.1.4/css/var/getStyles", "github:jquery/jquery@2.1.4/selector"], function(jQuery, rnumnonpx, rmargin, getStyles) {
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
  return curCSS;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/css/addGetHookIf", [], function() {
  function addGetHookIf(conditionFn, hookFn) {
    return {get: function() {
        if (conditionFn()) {
          delete this.get;
          return;
        }
        return (this.get = hookFn).apply(this, arguments);
      }};
  }
  return addGetHookIf;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/css/support", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/var/support"], function(jQuery, support) {
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
  return support;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/css/swap", ["github:jquery/jquery@2.1.4/core"], function(jQuery) {
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
  return jQuery.swap;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/css", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/var/pnum", "github:jquery/jquery@2.1.4/core/access", "github:jquery/jquery@2.1.4/css/var/rmargin", "github:jquery/jquery@2.1.4/css/var/rnumnonpx", "github:jquery/jquery@2.1.4/css/var/cssExpand", "github:jquery/jquery@2.1.4/css/var/isHidden", "github:jquery/jquery@2.1.4/css/var/getStyles", "github:jquery/jquery@2.1.4/css/curCSS", "github:jquery/jquery@2.1.4/css/defaultDisplay", "github:jquery/jquery@2.1.4/css/addGetHookIf", "github:jquery/jquery@2.1.4/css/support", "github:jquery/jquery@2.1.4/data/var/data_priv", "github:jquery/jquery@2.1.4/core/init", "github:jquery/jquery@2.1.4/css/swap", "github:jquery/jquery@2.1.4/core/ready", "github:jquery/jquery@2.1.4/selector"], function(jQuery, pnum, access, rmargin, rnumnonpx, cssExpand, isHidden, getStyles, curCSS, defaultDisplay, addGetHookIf, support, data_priv) {
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
  return jQuery;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/effects/Tween", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/css"], function(jQuery) {
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
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/effects", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/var/pnum", "github:jquery/jquery@2.1.4/css/var/cssExpand", "github:jquery/jquery@2.1.4/css/var/isHidden", "github:jquery/jquery@2.1.4/css/defaultDisplay", "github:jquery/jquery@2.1.4/data/var/data_priv", "github:jquery/jquery@2.1.4/core/init", "github:jquery/jquery@2.1.4/effects/Tween", "github:jquery/jquery@2.1.4/queue", "github:jquery/jquery@2.1.4/css", "github:jquery/jquery@2.1.4/deferred", "github:jquery/jquery@2.1.4/traversing"], function(jQuery, pnum, cssExpand, isHidden, defaultDisplay, data_priv) {
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
  return jQuery;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/queue/delay", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/queue", "github:jquery/jquery@2.1.4/effects"], function(jQuery) {
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
  return jQuery.fn.delay;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/attributes/support", ["github:jquery/jquery@2.1.4/var/support"], function(support) {
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
  return support;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/attributes/attr", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/var/rnotwhite", "github:jquery/jquery@2.1.4/var/strundefined", "github:jquery/jquery@2.1.4/core/access", "github:jquery/jquery@2.1.4/attributes/support", "github:jquery/jquery@2.1.4/selector"], function(jQuery, rnotwhite, strundefined, access, support) {
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
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/attributes/prop", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/core/access", "github:jquery/jquery@2.1.4/attributes/support"], function(jQuery, access, support) {
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
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/attributes/classes", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/var/rnotwhite", "github:jquery/jquery@2.1.4/var/strundefined", "github:jquery/jquery@2.1.4/data/var/data_priv", "github:jquery/jquery@2.1.4/core/init"], function(jQuery, rnotwhite, strundefined, data_priv) {
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
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/attributes/val", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/attributes/support", "github:jquery/jquery@2.1.4/core/init"], function(jQuery, support) {
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
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/attributes", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/attributes/attr", "github:jquery/jquery@2.1.4/attributes/prop", "github:jquery/jquery@2.1.4/attributes/classes", "github:jquery/jquery@2.1.4/attributes/val"], function(jQuery) {
  return jQuery;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/event/alias", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/event"], function(jQuery) {
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
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/ajax/var/nonce", ["github:jquery/jquery@2.1.4/core"], function(jQuery) {
  return jQuery.now();
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/ajax/var/rquery", [], function() {
  return (/\?/);
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/ajax/parseJSON", ["github:jquery/jquery@2.1.4/core"], function(jQuery) {
  jQuery.parseJSON = function(data) {
    return JSON.parse(data + "");
  };
  return jQuery.parseJSON;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/ajax/parseXML", ["github:jquery/jquery@2.1.4/core"], function(jQuery) {
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
  return jQuery.parseXML;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/ajax", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/var/rnotwhite", "github:jquery/jquery@2.1.4/ajax/var/nonce", "github:jquery/jquery@2.1.4/ajax/var/rquery", "github:jquery/jquery@2.1.4/core/init", "github:jquery/jquery@2.1.4/ajax/parseJSON", "github:jquery/jquery@2.1.4/ajax/parseXML", "github:jquery/jquery@2.1.4/deferred"], function(jQuery, rnotwhite, nonce, rquery) {
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
  return jQuery;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/manipulation/_evalUrl", ["github:jquery/jquery@2.1.4/ajax"], function(jQuery) {
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
  return jQuery._evalUrl;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/wrap", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/core/init", "github:jquery/jquery@2.1.4/manipulation", "github:jquery/jquery@2.1.4/traversing"], function(jQuery) {
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
  return jQuery;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/css/hiddenVisibleSelectors", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/selector"], function(jQuery) {
  jQuery.expr.filters.hidden = function(elem) {
    return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
  };
  jQuery.expr.filters.visible = function(elem) {
    return !jQuery.expr.filters.hidden(elem);
  };
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/serialize", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/manipulation/var/rcheckableType", "github:jquery/jquery@2.1.4/core/init", "github:jquery/jquery@2.1.4/traversing", "github:jquery/jquery@2.1.4/attributes/prop"], function(jQuery, rcheckableType) {
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
  return jQuery;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/ajax/xhr", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/var/support", "github:jquery/jquery@2.1.4/ajax"], function(jQuery, support) {
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
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/ajax/script", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/ajax"], function(jQuery) {
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
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/ajax/jsonp", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/ajax/var/nonce", "github:jquery/jquery@2.1.4/ajax/var/rquery", "github:jquery/jquery@2.1.4/ajax"], function(jQuery, nonce, rquery) {
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
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/core/parseHTML", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/core/var/rsingleTag", "github:jquery/jquery@2.1.4/manipulation"], function(jQuery, rsingleTag) {
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
  return jQuery.parseHTML;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/ajax/load", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/core/parseHTML", "github:jquery/jquery@2.1.4/ajax", "github:jquery/jquery@2.1.4/traversing", "github:jquery/jquery@2.1.4/manipulation", "github:jquery/jquery@2.1.4/selector", "github:jquery/jquery@2.1.4/event/alias"], function(jQuery) {
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
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/event/ajax", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/event"], function(jQuery) {
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
    jQuery.fn[type] = function(fn) {
      return this.on(type, fn);
    };
  });
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/effects/animatedSelector", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/selector", "github:jquery/jquery@2.1.4/effects"], function(jQuery) {
  jQuery.expr.filters.animated = function(elem) {
    return jQuery.grep(jQuery.timers, function(fn) {
      return elem === fn.elem;
    }).length;
  };
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/offset", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/var/strundefined", "github:jquery/jquery@2.1.4/core/access", "github:jquery/jquery@2.1.4/css/var/rnumnonpx", "github:jquery/jquery@2.1.4/css/curCSS", "github:jquery/jquery@2.1.4/css/addGetHookIf", "github:jquery/jquery@2.1.4/css/support", "github:jquery/jquery@2.1.4/core/init", "github:jquery/jquery@2.1.4/css", "github:jquery/jquery@2.1.4/selector"], function(jQuery, strundefined, access, rnumnonpx, curCSS, addGetHookIf, support) {
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
  return jQuery;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/dimensions", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/core/access", "github:jquery/jquery@2.1.4/css"], function(jQuery, access) {
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
  return jQuery;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/deprecated", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/traversing"], function(jQuery) {
  jQuery.fn.size = function() {
    return this.length;
  };
  jQuery.fn.andSelf = jQuery.fn.addBack;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/exports/amd", ["github:jquery/jquery@2.1.4/core"], function(jQuery) {
  if (typeof define === "function" && define.amd) {
    define("jquery", [], function() {
      return jQuery;
    });
  }
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/exports/global", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/var/strundefined"], function(jQuery, strundefined) {
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
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
define("github:jquery/jquery@2.1.4/jquery", ["github:jquery/jquery@2.1.4/core", "github:jquery/jquery@2.1.4/selector", "github:jquery/jquery@2.1.4/traversing", "github:jquery/jquery@2.1.4/callbacks", "github:jquery/jquery@2.1.4/deferred", "github:jquery/jquery@2.1.4/core/ready", "github:jquery/jquery@2.1.4/data", "github:jquery/jquery@2.1.4/queue", "github:jquery/jquery@2.1.4/queue/delay", "github:jquery/jquery@2.1.4/attributes", "github:jquery/jquery@2.1.4/event", "github:jquery/jquery@2.1.4/event/alias", "github:jquery/jquery@2.1.4/manipulation", "github:jquery/jquery@2.1.4/manipulation/_evalUrl", "github:jquery/jquery@2.1.4/wrap", "github:jquery/jquery@2.1.4/css", "github:jquery/jquery@2.1.4/css/hiddenVisibleSelectors", "github:jquery/jquery@2.1.4/serialize", "github:jquery/jquery@2.1.4/ajax", "github:jquery/jquery@2.1.4/ajax/xhr", "github:jquery/jquery@2.1.4/ajax/script", "github:jquery/jquery@2.1.4/ajax/jsonp", "github:jquery/jquery@2.1.4/ajax/load", "github:jquery/jquery@2.1.4/event/ajax", "github:jquery/jquery@2.1.4/effects", "github:jquery/jquery@2.1.4/effects/animatedSelector", "github:jquery/jquery@2.1.4/offset", "github:jquery/jquery@2.1.4/dimensions", "github:jquery/jquery@2.1.4/deprecated", "github:jquery/jquery@2.1.4/exports/amd", "github:jquery/jquery@2.1.4/exports/global"], function(jQuery) {
  return jQuery;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("github:jquery/jquery@2.1.4", ["github:jquery/jquery@2.1.4/jquery"], function(main) {
  return main;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
(function(root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define("github:nolimits4web/Swiper@3.1.2/dist/js/swiper.jquery.umd", ["github:jquery/jquery@2.1.4"], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.Swiper = factory(root.jQuery);
  }
}(this, function($) {
  'use strict';
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
  addLibraryPlugin($);
  var domLib = $;
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
  return Swiper;
}));

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("github:nolimits4web/Swiper@3.1.2", ["github:nolimits4web/Swiper@3.1.2/dist/js/swiper.jquery.umd"], function(main) {
  return main;
});

_removeDefine();
})();
System.registerDynamic("local_packages/Director/1.2.8/director.js", [], true, function(require, exports, module) {
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
    define("github:hammerjs/hammer.js@2.0.4/hammer", [], function() {
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
define("github:hammerjs/hammer.js@2.0.4", ["github:hammerjs/hammer.js@2.0.4/hammer"], function(main) {
  return main;
});

_removeDefine();
})();
System.registerDynamic("github:cubiq/iscroll@5.1.3/build/iscroll", [], true, function(require, exports, module) {
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
        resizeScrollbars: true,
        mouseWheelSpeed: 20,
        snapThreshold: 0.334,
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
      if (this.options.shrinkScrollbars == 'scale') {
        this.options.useTransition = false;
      }
      this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
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
        if (this.options.scrollbars || this.options.indicators) {
          this._initIndicators();
        }
        if (this.options.mouseWheel) {
          this._initWheel();
        }
        if (this.options.snap) {
          this._initSnap();
        }
        if (this.options.keyBindings) {
          this._initKeys();
        }
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
        if (this.options.snap) {
          var snap = this._nearestSnap(newX, newY);
          this.currentPage = snap;
          time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
          newX = snap.x;
          newY = snap.y;
          this.directionX = 0;
          this.directionY = 0;
          easing = this.options.bounceEasing;
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
        if (this.indicators) {
          for (var i = this.indicators.length; i--; ) {
            this.indicators[i].transitionTime(time);
          }
        }
      },
      _transitionTimingFunction: function(easing) {
        this.scrollerStyle[utils.style.transitionTimingFunction] = easing;
        if (this.indicators) {
          for (var i = this.indicators.length; i--; ) {
            this.indicators[i].transitionTimingFunction(easing);
          }
        }
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
        if (this.indicators) {
          for (var i = this.indicators.length; i--; ) {
            this.indicators[i].updatePosition();
          }
        }
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
      _initIndicators: function() {
        var interactive = this.options.interactiveScrollbars,
            customStyle = typeof this.options.scrollbars != 'string',
            indicators = [],
            indicator;
        var that = this;
        this.indicators = [];
        if (this.options.scrollbars) {
          if (this.options.scrollY) {
            indicator = {
              el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
              interactive: interactive,
              defaultScrollbars: true,
              customStyle: customStyle,
              resize: this.options.resizeScrollbars,
              shrink: this.options.shrinkScrollbars,
              fade: this.options.fadeScrollbars,
              listenX: false
            };
            this.wrapper.appendChild(indicator.el);
            indicators.push(indicator);
          }
          if (this.options.scrollX) {
            indicator = {
              el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
              interactive: interactive,
              defaultScrollbars: true,
              customStyle: customStyle,
              resize: this.options.resizeScrollbars,
              shrink: this.options.shrinkScrollbars,
              fade: this.options.fadeScrollbars,
              listenY: false
            };
            this.wrapper.appendChild(indicator.el);
            indicators.push(indicator);
          }
        }
        if (this.options.indicators) {
          indicators = indicators.concat(this.options.indicators);
        }
        for (var i = indicators.length; i--; ) {
          this.indicators.push(new Indicator(this, indicators[i]));
        }
        function _indicatorsMap(fn) {
          for (var i = that.indicators.length; i--; ) {
            fn.call(that.indicators[i]);
          }
        }
        if (this.options.fadeScrollbars) {
          this.on('scrollEnd', function() {
            _indicatorsMap(function() {
              this.fade();
            });
          });
          this.on('scrollCancel', function() {
            _indicatorsMap(function() {
              this.fade();
            });
          });
          this.on('scrollStart', function() {
            _indicatorsMap(function() {
              this.fade(1);
            });
          });
          this.on('beforeScrollStart', function() {
            _indicatorsMap(function() {
              this.fade(1, true);
            });
          });
        }
        this.on('refresh', function() {
          _indicatorsMap(function() {
            this.refresh();
          });
        });
        this.on('destroy', function() {
          _indicatorsMap(function() {
            this.destroy();
          });
          delete this.indicators;
        });
      },
      _initWheel: function() {
        utils.addEvent(this.wrapper, 'wheel', this);
        utils.addEvent(this.wrapper, 'mousewheel', this);
        utils.addEvent(this.wrapper, 'DOMMouseScroll', this);
        this.on('destroy', function() {
          utils.removeEvent(this.wrapper, 'wheel', this);
          utils.removeEvent(this.wrapper, 'mousewheel', this);
          utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
        });
      },
      _wheel: function(e) {
        if (!this.enabled) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        var wheelDeltaX,
            wheelDeltaY,
            newX,
            newY,
            that = this;
        if (this.wheelTimeout === undefined) {
          that._execEvent('scrollStart');
        }
        clearTimeout(this.wheelTimeout);
        this.wheelTimeout = setTimeout(function() {
          that._execEvent('scrollEnd');
          that.wheelTimeout = undefined;
        }, 400);
        if ('deltaX' in e) {
          if (e.deltaMode === 1) {
            wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
            wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
          } else {
            wheelDeltaX = -e.deltaX;
            wheelDeltaY = -e.deltaY;
          }
        } else if ('wheelDeltaX' in e) {
          wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
          wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
        } else if ('wheelDelta' in e) {
          wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
        } else if ('detail' in e) {
          wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
        } else {
          return;
        }
        wheelDeltaX *= this.options.invertWheelDirection;
        wheelDeltaY *= this.options.invertWheelDirection;
        if (!this.hasVerticalScroll) {
          wheelDeltaX = wheelDeltaY;
          wheelDeltaY = 0;
        }
        if (this.options.snap) {
          newX = this.currentPage.pageX;
          newY = this.currentPage.pageY;
          if (wheelDeltaX > 0) {
            newX--;
          } else if (wheelDeltaX < 0) {
            newX++;
          }
          if (wheelDeltaY > 0) {
            newY--;
          } else if (wheelDeltaY < 0) {
            newY++;
          }
          this.goToPage(newX, newY);
          return;
        }
        newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
        newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);
        if (newX > 0) {
          newX = 0;
        } else if (newX < this.maxScrollX) {
          newX = this.maxScrollX;
        }
        if (newY > 0) {
          newY = 0;
        } else if (newY < this.maxScrollY) {
          newY = this.maxScrollY;
        }
        this.scrollTo(newX, newY, 0);
      },
      _initSnap: function() {
        this.currentPage = {};
        if (typeof this.options.snap == 'string') {
          this.options.snap = this.scroller.querySelectorAll(this.options.snap);
        }
        this.on('refresh', function() {
          var i = 0,
              l,
              m = 0,
              n,
              cx,
              cy,
              x = 0,
              y,
              stepX = this.options.snapStepX || this.wrapperWidth,
              stepY = this.options.snapStepY || this.wrapperHeight,
              el;
          this.pages = [];
          if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
            return;
          }
          if (this.options.snap === true) {
            cx = Math.round(stepX / 2);
            cy = Math.round(stepY / 2);
            while (x > -this.scrollerWidth) {
              this.pages[i] = [];
              l = 0;
              y = 0;
              while (y > -this.scrollerHeight) {
                this.pages[i][l] = {
                  x: Math.max(x, this.maxScrollX),
                  y: Math.max(y, this.maxScrollY),
                  width: stepX,
                  height: stepY,
                  cx: x - cx,
                  cy: y - cy
                };
                y -= stepY;
                l++;
              }
              x -= stepX;
              i++;
            }
          } else {
            el = this.options.snap;
            l = el.length;
            n = -1;
            for (; i < l; i++) {
              if (i === 0 || el[i].offsetLeft <= el[i - 1].offsetLeft) {
                m = 0;
                n++;
              }
              if (!this.pages[m]) {
                this.pages[m] = [];
              }
              x = Math.max(-el[i].offsetLeft, this.maxScrollX);
              y = Math.max(-el[i].offsetTop, this.maxScrollY);
              cx = x - Math.round(el[i].offsetWidth / 2);
              cy = y - Math.round(el[i].offsetHeight / 2);
              this.pages[m][n] = {
                x: x,
                y: y,
                width: el[i].offsetWidth,
                height: el[i].offsetHeight,
                cx: cx,
                cy: cy
              };
              if (x > this.maxScrollX) {
                m++;
              }
            }
          }
          this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
          if (this.options.snapThreshold % 1 === 0) {
            this.snapThresholdX = this.options.snapThreshold;
            this.snapThresholdY = this.options.snapThreshold;
          } else {
            this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
            this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
          }
        });
        this.on('flick', function() {
          var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1000), Math.min(Math.abs(this.y - this.startY), 1000)), 300);
          this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time);
        });
      },
      _nearestSnap: function(x, y) {
        if (!this.pages.length) {
          return {
            x: 0,
            y: 0,
            pageX: 0,
            pageY: 0
          };
        }
        var i = 0,
            l = this.pages.length,
            m = 0;
        if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) {
          return this.currentPage;
        }
        if (x > 0) {
          x = 0;
        } else if (x < this.maxScrollX) {
          x = this.maxScrollX;
        }
        if (y > 0) {
          y = 0;
        } else if (y < this.maxScrollY) {
          y = this.maxScrollY;
        }
        for (; i < l; i++) {
          if (x >= this.pages[i][0].cx) {
            x = this.pages[i][0].x;
            break;
          }
        }
        l = this.pages[i].length;
        for (; m < l; m++) {
          if (y >= this.pages[0][m].cy) {
            y = this.pages[0][m].y;
            break;
          }
        }
        if (i == this.currentPage.pageX) {
          i += this.directionX;
          if (i < 0) {
            i = 0;
          } else if (i >= this.pages.length) {
            i = this.pages.length - 1;
          }
          x = this.pages[i][0].x;
        }
        if (m == this.currentPage.pageY) {
          m += this.directionY;
          if (m < 0) {
            m = 0;
          } else if (m >= this.pages[0].length) {
            m = this.pages[0].length - 1;
          }
          y = this.pages[0][m].y;
        }
        return {
          x: x,
          y: y,
          pageX: i,
          pageY: m
        };
      },
      goToPage: function(x, y, time, easing) {
        easing = easing || this.options.bounceEasing;
        if (x >= this.pages.length) {
          x = this.pages.length - 1;
        } else if (x < 0) {
          x = 0;
        }
        if (y >= this.pages[x].length) {
          y = this.pages[x].length - 1;
        } else if (y < 0) {
          y = 0;
        }
        var posX = this.pages[x][y].x,
            posY = this.pages[x][y].y;
        time = time === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;
        this.currentPage = {
          x: posX,
          y: posY,
          pageX: x,
          pageY: y
        };
        this.scrollTo(posX, posY, time, easing);
      },
      next: function(time, easing) {
        var x = this.currentPage.pageX,
            y = this.currentPage.pageY;
        x++;
        if (x >= this.pages.length && this.hasVerticalScroll) {
          x = 0;
          y++;
        }
        this.goToPage(x, y, time, easing);
      },
      prev: function(time, easing) {
        var x = this.currentPage.pageX,
            y = this.currentPage.pageY;
        x--;
        if (x < 0 && this.hasVerticalScroll) {
          x = 0;
          y--;
        }
        this.goToPage(x, y, time, easing);
      },
      _initKeys: function(e) {
        var keys = {
          pageUp: 33,
          pageDown: 34,
          end: 35,
          home: 36,
          left: 37,
          up: 38,
          right: 39,
          down: 40
        };
        var i;
        if (typeof this.options.keyBindings == 'object') {
          for (i in this.options.keyBindings) {
            if (typeof this.options.keyBindings[i] == 'string') {
              this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
            }
          }
        } else {
          this.options.keyBindings = {};
        }
        for (i in keys) {
          this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
        }
        utils.addEvent(window, 'keydown', this);
        this.on('destroy', function() {
          utils.removeEvent(window, 'keydown', this);
        });
      },
      _key: function(e) {
        if (!this.enabled) {
          return;
        }
        var snap = this.options.snap,
            newX = snap ? this.currentPage.pageX : this.x,
            newY = snap ? this.currentPage.pageY : this.y,
            now = utils.getTime(),
            prevTime = this.keyTime || 0,
            acceleration = 0.250,
            pos;
        if (this.options.useTransition && this.isInTransition) {
          pos = this.getComputedPosition();
          this._translate(Math.round(pos.x), Math.round(pos.y));
          this.isInTransition = false;
        }
        this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;
        switch (e.keyCode) {
          case this.options.keyBindings.pageUp:
            if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
              newX += snap ? 1 : this.wrapperWidth;
            } else {
              newY += snap ? 1 : this.wrapperHeight;
            }
            break;
          case this.options.keyBindings.pageDown:
            if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
              newX -= snap ? 1 : this.wrapperWidth;
            } else {
              newY -= snap ? 1 : this.wrapperHeight;
            }
            break;
          case this.options.keyBindings.end:
            newX = snap ? this.pages.length - 1 : this.maxScrollX;
            newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
            break;
          case this.options.keyBindings.home:
            newX = 0;
            newY = 0;
            break;
          case this.options.keyBindings.left:
            newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
            break;
          case this.options.keyBindings.up:
            newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
            break;
          case this.options.keyBindings.right:
            newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
            break;
          case this.options.keyBindings.down:
            newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
            break;
          default:
            return;
        }
        if (snap) {
          this.goToPage(newX, newY);
          return;
        }
        if (newX > 0) {
          newX = 0;
          this.keyAcceleration = 0;
        } else if (newX < this.maxScrollX) {
          newX = this.maxScrollX;
          this.keyAcceleration = 0;
        }
        if (newY > 0) {
          newY = 0;
          this.keyAcceleration = 0;
        } else if (newY < this.maxScrollY) {
          newY = this.maxScrollY;
          this.keyAcceleration = 0;
        }
        this.scrollTo(newX, newY, 0);
        this.keyTime = now;
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
    function createDefaultScrollbar(direction, interactive, type) {
      var scrollbar = document.createElement('div'),
          indicator = document.createElement('div');
      if (type === true) {
        scrollbar.style.cssText = 'position:absolute;z-index:9999';
        indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
      }
      indicator.className = 'iScrollIndicator';
      if (direction == 'h') {
        if (type === true) {
          scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
          indicator.style.height = '100%';
        }
        scrollbar.className = 'iScrollHorizontalScrollbar';
      } else {
        if (type === true) {
          scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
          indicator.style.width = '100%';
        }
        scrollbar.className = 'iScrollVerticalScrollbar';
      }
      scrollbar.style.cssText += ';overflow:hidden';
      if (!interactive) {
        scrollbar.style.pointerEvents = 'none';
      }
      scrollbar.appendChild(indicator);
      return scrollbar;
    }
    function Indicator(scroller, options) {
      this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
      this.wrapperStyle = this.wrapper.style;
      this.indicator = this.wrapper.children[0];
      this.indicatorStyle = this.indicator.style;
      this.scroller = scroller;
      this.options = {
        listenX: true,
        listenY: true,
        interactive: false,
        resize: true,
        defaultScrollbars: false,
        shrink: false,
        fade: false,
        speedRatioX: 0,
        speedRatioY: 0
      };
      for (var i in options) {
        this.options[i] = options[i];
      }
      this.sizeRatioX = 1;
      this.sizeRatioY = 1;
      this.maxPosX = 0;
      this.maxPosY = 0;
      if (this.options.interactive) {
        if (!this.options.disableTouch) {
          utils.addEvent(this.indicator, 'touchstart', this);
          utils.addEvent(window, 'touchend', this);
        }
        if (!this.options.disablePointer) {
          utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
          utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
        }
        if (!this.options.disableMouse) {
          utils.addEvent(this.indicator, 'mousedown', this);
          utils.addEvent(window, 'mouseup', this);
        }
      }
      if (this.options.fade) {
        this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
        this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? '0.001s' : '0ms';
        this.wrapperStyle.opacity = '0';
      }
    }
    Indicator.prototype = {
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
        }
      },
      destroy: function() {
        if (this.options.interactive) {
          utils.removeEvent(this.indicator, 'touchstart', this);
          utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
          utils.removeEvent(this.indicator, 'mousedown', this);
          utils.removeEvent(window, 'touchmove', this);
          utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
          utils.removeEvent(window, 'mousemove', this);
          utils.removeEvent(window, 'touchend', this);
          utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
          utils.removeEvent(window, 'mouseup', this);
        }
        if (this.options.defaultScrollbars) {
          this.wrapper.parentNode.removeChild(this.wrapper);
        }
      },
      _start: function(e) {
        var point = e.touches ? e.touches[0] : e;
        e.preventDefault();
        e.stopPropagation();
        this.transitionTime();
        this.initiated = true;
        this.moved = false;
        this.lastPointX = point.pageX;
        this.lastPointY = point.pageY;
        this.startTime = utils.getTime();
        if (!this.options.disableTouch) {
          utils.addEvent(window, 'touchmove', this);
        }
        if (!this.options.disablePointer) {
          utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
        }
        if (!this.options.disableMouse) {
          utils.addEvent(window, 'mousemove', this);
        }
        this.scroller._execEvent('beforeScrollStart');
      },
      _move: function(e) {
        var point = e.touches ? e.touches[0] : e,
            deltaX,
            deltaY,
            newX,
            newY,
            timestamp = utils.getTime();
        if (!this.moved) {
          this.scroller._execEvent('scrollStart');
        }
        this.moved = true;
        deltaX = point.pageX - this.lastPointX;
        this.lastPointX = point.pageX;
        deltaY = point.pageY - this.lastPointY;
        this.lastPointY = point.pageY;
        newX = this.x + deltaX;
        newY = this.y + deltaY;
        this._pos(newX, newY);
        e.preventDefault();
        e.stopPropagation();
      },
      _end: function(e) {
        if (!this.initiated) {
          return;
        }
        this.initiated = false;
        e.preventDefault();
        e.stopPropagation();
        utils.removeEvent(window, 'touchmove', this);
        utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
        utils.removeEvent(window, 'mousemove', this);
        if (this.scroller.options.snap) {
          var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
          var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);
          if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
            this.scroller.directionX = 0;
            this.scroller.directionY = 0;
            this.scroller.currentPage = snap;
            this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
          }
        }
        if (this.moved) {
          this.scroller._execEvent('scrollEnd');
        }
      },
      transitionTime: function(time) {
        time = time || 0;
        this.indicatorStyle[utils.style.transitionDuration] = time + 'ms';
        if (!time && utils.isBadAndroid) {
          this.indicatorStyle[utils.style.transitionDuration] = '0.001s';
        }
      },
      transitionTimingFunction: function(easing) {
        this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
      },
      refresh: function() {
        this.transitionTime();
        if (this.options.listenX && !this.options.listenY) {
          this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
        } else if (this.options.listenY && !this.options.listenX) {
          this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
        } else {
          this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
        }
        if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
          utils.addClass(this.wrapper, 'iScrollBothScrollbars');
          utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');
          if (this.options.defaultScrollbars && this.options.customStyle) {
            if (this.options.listenX) {
              this.wrapper.style.right = '8px';
            } else {
              this.wrapper.style.bottom = '8px';
            }
          }
        } else {
          utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
          utils.addClass(this.wrapper, 'iScrollLoneScrollbar');
          if (this.options.defaultScrollbars && this.options.customStyle) {
            if (this.options.listenX) {
              this.wrapper.style.right = '2px';
            } else {
              this.wrapper.style.bottom = '2px';
            }
          }
        }
        var r = this.wrapper.offsetHeight;
        if (this.options.listenX) {
          this.wrapperWidth = this.wrapper.clientWidth;
          if (this.options.resize) {
            this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
            this.indicatorStyle.width = this.indicatorWidth + 'px';
          } else {
            this.indicatorWidth = this.indicator.clientWidth;
          }
          this.maxPosX = this.wrapperWidth - this.indicatorWidth;
          if (this.options.shrink == 'clip') {
            this.minBoundaryX = -this.indicatorWidth + 8;
            this.maxBoundaryX = this.wrapperWidth - 8;
          } else {
            this.minBoundaryX = 0;
            this.maxBoundaryX = this.maxPosX;
          }
          this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
        }
        if (this.options.listenY) {
          this.wrapperHeight = this.wrapper.clientHeight;
          if (this.options.resize) {
            this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
            this.indicatorStyle.height = this.indicatorHeight + 'px';
          } else {
            this.indicatorHeight = this.indicator.clientHeight;
          }
          this.maxPosY = this.wrapperHeight - this.indicatorHeight;
          if (this.options.shrink == 'clip') {
            this.minBoundaryY = -this.indicatorHeight + 8;
            this.maxBoundaryY = this.wrapperHeight - 8;
          } else {
            this.minBoundaryY = 0;
            this.maxBoundaryY = this.maxPosY;
          }
          this.maxPosY = this.wrapperHeight - this.indicatorHeight;
          this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
        }
        this.updatePosition();
      },
      updatePosition: function() {
        var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
            y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;
        if (!this.options.ignoreBoundaries) {
          if (x < this.minBoundaryX) {
            if (this.options.shrink == 'scale') {
              this.width = Math.max(this.indicatorWidth + x, 8);
              this.indicatorStyle.width = this.width + 'px';
            }
            x = this.minBoundaryX;
          } else if (x > this.maxBoundaryX) {
            if (this.options.shrink == 'scale') {
              this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
              this.indicatorStyle.width = this.width + 'px';
              x = this.maxPosX + this.indicatorWidth - this.width;
            } else {
              x = this.maxBoundaryX;
            }
          } else if (this.options.shrink == 'scale' && this.width != this.indicatorWidth) {
            this.width = this.indicatorWidth;
            this.indicatorStyle.width = this.width + 'px';
          }
          if (y < this.minBoundaryY) {
            if (this.options.shrink == 'scale') {
              this.height = Math.max(this.indicatorHeight + y * 3, 8);
              this.indicatorStyle.height = this.height + 'px';
            }
            y = this.minBoundaryY;
          } else if (y > this.maxBoundaryY) {
            if (this.options.shrink == 'scale') {
              this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
              this.indicatorStyle.height = this.height + 'px';
              y = this.maxPosY + this.indicatorHeight - this.height;
            } else {
              y = this.maxBoundaryY;
            }
          } else if (this.options.shrink == 'scale' && this.height != this.indicatorHeight) {
            this.height = this.indicatorHeight;
            this.indicatorStyle.height = this.height + 'px';
          }
        }
        this.x = x;
        this.y = y;
        if (this.scroller.options.useTransform) {
          this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
        } else {
          this.indicatorStyle.left = x + 'px';
          this.indicatorStyle.top = y + 'px';
        }
      },
      _pos: function(x, y) {
        if (x < 0) {
          x = 0;
        } else if (x > this.maxPosX) {
          x = this.maxPosX;
        }
        if (y < 0) {
          y = 0;
        } else if (y > this.maxPosY) {
          y = this.maxPosY;
        }
        x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
        y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;
        this.scroller.scrollTo(x, y);
      },
      fade: function(val, hold) {
        if (hold && !this.visible) {
          return;
        }
        clearTimeout(this.fadeTimeout);
        this.fadeTimeout = null;
        var time = val ? 250 : 500,
            delay = val ? 0 : 300;
        val = val ? '1' : '0';
        this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';
        this.fadeTimeout = setTimeout((function(val) {
          this.wrapperStyle.opacity = val;
          this.visible = +val;
        }).bind(this, val), delay);
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

System.registerDynamic("github:cubiq/iscroll@5.1.3", ["github:cubiq/iscroll@5.1.3/build/iscroll"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:cubiq/iscroll@5.1.3/build/iscroll");
  global.define = __define;
  return module.exports;
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
;
(function() {
  var undefined;
  var VERSION = '3.10.1';
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
  var LARGE_ARRAY_SIZE = 200;
  var LAZY_FILTER_FLAG = 1,
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
  var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
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
  var contextProps = ['Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array', 'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number', 'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'isFinite', 'parseFloat', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap'];
  var shadowProps = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
  var templateCounter = -1;
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[stringTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[mapTag] = cloneableTags[setTag] = cloneableTags[weakMapTag] = false;
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
  var regexpEscapes = {
    '0': 'x30',
    '1': 'x31',
    '2': 'x32',
    '3': 'x33',
    '4': 'x34',
    '5': 'x35',
    '6': 'x36',
    '7': 'x37',
    '8': 'x38',
    '9': 'x39',
    'A': 'x41',
    'B': 'x42',
    'C': 'x43',
    'D': 'x44',
    'E': 'x45',
    'F': 'x46',
    'a': 'x61',
    'b': 'x62',
    'c': 'x63',
    'd': 'x64',
    'e': 'x65',
    'f': 'x66',
    'n': 'x6e',
    'r': 'x72',
    't': 'x74',
    'u': 'x75',
    'v': 'x76',
    'x': 'x78'
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
        var order = orders[index];
        return result * ((order === 'asc' || order === true) ? 1 : -1);
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
  function escapeRegExpChar(chr, leadingChar, whitespaceChar) {
    if (leadingChar) {
      chr = regexpEscapes[chr];
    } else if (whitespaceChar) {
      chr = stringEscapes[chr];
    }
    return '\\' + chr;
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
  var isHostObject = (function() {
    try {
      Object({'toString': 0} + '');
    } catch (e) {
      return function() {
        return false;
      };
    }
    return function(value) {
      return typeof value.toString != 'function' && typeof(value + '') == 'string';
    };
  }());
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
        errorProto = Error.prototype,
        objectProto = Object.prototype,
        stringProto = String.prototype;
    var fnToString = Function.prototype.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var idCounter = 0;
    var objToString = objectProto.toString;
    var oldDash = root._;
    var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    var ArrayBuffer = context.ArrayBuffer,
        clearTimeout = context.clearTimeout,
        parseFloat = context.parseFloat,
        pow = Math.pow,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        Set = getNative(context, 'Set'),
        setTimeout = context.setTimeout,
        splice = arrayProto.splice,
        Uint8Array = context.Uint8Array,
        WeakMap = getNative(context, 'WeakMap');
    var nativeCeil = Math.ceil,
        nativeCreate = getNative(Object, 'create'),
        nativeFloor = Math.floor,
        nativeIsArray = getNative(Array, 'isArray'),
        nativeIsFinite = context.isFinite,
        nativeKeys = getNative(Object, 'keys'),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = getNative(Date, 'now'),
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random;
    var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
        POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    var MAX_ARRAY_LENGTH = 4294967295,
        MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
        HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var metaMap = WeakMap && new WeakMap;
    var realNames = {};
    var ctorByTag = {};
    ctorByTag[float32Tag] = context.Float32Array;
    ctorByTag[float64Tag] = context.Float64Array;
    ctorByTag[int8Tag] = context.Int8Array;
    ctorByTag[int16Tag] = context.Int16Array;
    ctorByTag[int32Tag] = context.Int32Array;
    ctorByTag[uint8Tag] = Uint8Array;
    ctorByTag[uint8ClampedTag] = context.Uint8ClampedArray;
    ctorByTag[uint16Tag] = context.Uint16Array;
    ctorByTag[uint32Tag] = context.Uint32Array;
    var nonEnumProps = {};
    nonEnumProps[arrayTag] = nonEnumProps[dateTag] = nonEnumProps[numberTag] = {
      'constructor': true,
      'toLocaleString': true,
      'toString': true,
      'valueOf': true
    };
    nonEnumProps[boolTag] = nonEnumProps[stringTag] = {
      'constructor': true,
      'toString': true,
      'valueOf': true
    };
    nonEnumProps[errorTag] = nonEnumProps[funcTag] = nonEnumProps[regexpTag] = {
      'constructor': true,
      'toString': true
    };
    nonEnumProps[objectTag] = {'constructor': true};
    arrayEach(shadowProps, function(key) {
      for (var tag in nonEnumProps) {
        if (hasOwnProperty.call(nonEnumProps, tag)) {
          var props = nonEnumProps[tag];
          props[key] = hasOwnProperty.call(props, key);
        }
      }
    });
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
      support.enumErrorProps = propertyIsEnumerable.call(errorProto, 'message') || propertyIsEnumerable.call(errorProto, 'name');
      support.enumPrototypes = propertyIsEnumerable.call(Ctor, 'prototype');
      support.nonEnumShadows = !/valueOf/.test(props);
      support.ownLast = props[0] != 'x';
      support.spliceObjects = (splice.call(object, 0, 1), !object[0]);
      support.unindexedChars = ('x'[0] + Object('x')[0]) != 'xx';
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
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = POSITIVE_INFINITY;
      this.__views__ = [];
    }
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = arrayCopy(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = arrayCopy(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = arrayCopy(this.__views__);
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
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);
      if (!isArr || arrLength < LARGE_ARRAY_SIZE || (arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];
      outer: while (length-- && resIndex < takeCount) {
        index += dir;
        var iterIndex = -1,
            value = array[index];
        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);
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
    function arrayConcat(array, other) {
      var index = -1,
          length = array.length,
          othIndex = -1,
          othLength = other.length,
          result = Array(length + othLength);
      while (++index < length) {
        result[index] = array[index];
      }
      while (++othIndex < othLength) {
        result[index++] = other[othIndex];
      }
      return result;
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
    function arrayPush(array, values) {
      var index = -1,
          length = values.length,
          offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
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
    function arraySum(array, iteratee) {
      var length = array.length,
          result = 0;
      while (length--) {
        result += +iteratee(array[length]) || 0;
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
          if (isHostObject(value)) {
            return object ? value : {};
          }
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
          object.prototype = undefined;
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
          isCommon = indexOf === baseIndexOf,
          cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
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
    function baseFlatten(array, isDeep, isStrict, result) {
      result || (result = []);
      var index = -1,
          length = array.length;
      while (++index < length) {
        var value = array[index];
        if (isObjectLike(value) && isArrayLike(value) && (isStrict || isArray(value) || isArguments(value))) {
          if (isDeep) {
            baseFlatten(value, isDeep, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
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
      object = toObject(object);
      if (pathKey !== undefined && pathKey in object) {
        path = [pathKey];
      }
      var index = 0,
          length = path.length;
      while (object != null && index < length) {
        object = toObject(object)[path[index++]];
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
      var objIsObj = objTag == objectTag && !isHostObject(object),
          othIsObj = othTag == objectTag && !isHostObject(other),
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
          object = toObject(object);
          return object[key] === value && (value !== undefined || (key in object));
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
          props = isSrcArr ? undefined : keys(source);
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
        return object == null ? undefined : toObject(object)[key];
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
      return min + nativeFloor(nativeRandom() * (max - min + 1));
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
          isCommon = indexOf === baseIndexOf,
          isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
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
        var action = actions[index];
        result = action.func.apply(action.thisArg, arrayPush([result], action.args));
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
        var mid = nativeFloor((low + high) / 2),
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
      var result = new ArrayBuffer(buffer.byteLength),
          view = new Uint8Array(result);
      view.set(new Uint8Array(buffer));
      return result;
    }
    function composeArgs(args, partials, holders) {
      var holdersLength = holders.length,
          argsIndex = -1,
          argsLength = nativeMax(args.length - holdersLength, 0),
          leftIndex = -1,
          leftLength = partials.length,
          result = Array(leftLength + argsLength);
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
    function createCache(values) {
      return (nativeCreate && Set) ? new SetCache(values) : null;
    }
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
          case 6:
            return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7:
            return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);
        return isObject(result) ? result : thisBinding;
      };
    }
    function createCurry(flag) {
      function curryFunc(func, arity, guard) {
        if (guard && isIterateeCall(func, arity, guard)) {
          arity = undefined;
        }
        var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
        result.placeholder = curryFunc.placeholder;
        return result;
      }
      return curryFunc;
    }
    function createDefaults(assigner, customizer) {
      return restParam(function(args) {
        var object = args[0];
        if (object == null) {
          return object;
        }
        args.push(customizer);
        return assigner.apply(undefined, args);
      });
    }
    function createExtremum(comparator, exValue) {
      return function(collection, iteratee, thisArg) {
        if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
          iteratee = undefined;
        }
        iteratee = getCallback(iteratee, thisArg, 3);
        if (iteratee.length == 1) {
          collection = isArray(collection) ? collection : toIterable(collection);
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
            wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? -1 : length;
        while (++index < length) {
          func = funcs[index];
          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;
          if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];
          if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;
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
        return createWrapper(func, flag, undefined, partials, holders);
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
          Ctor = isBindKey ? undefined : createCtorWrapper(func);
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
            var newArgPos = argPos ? arrayCopy(argPos) : undefined,
                newArity = nativeMax(arity - length, 0),
                newsHolders = isCurry ? argsHolders : undefined,
                newHoldersRight = isCurry ? undefined : argsHolders,
                newPartials = isCurry ? args : undefined,
                newPartialsRight = isCurry ? undefined : args;
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
      return repeat(chars, nativeCeil(padLength / chars.length)).slice(0, padLength);
    }
    function createPartialWrapper(func, bitmask, thisArg, partials) {
      var isBind = bitmask & BIND_FLAG,
          Ctor = createCtorWrapper(func);
      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength);
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
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        precision = precision === undefined ? 0 : (+precision || 0);
        if (precision) {
          precision = pow(10, precision);
          return func(number * precision) / precision;
        }
        return func(number);
      };
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
        partials = holders = undefined;
      }
      length -= (holders ? holders.length : 0);
      if (bitmask & PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;
        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func),
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
      var result = (func.name + ''),
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
          length = transforms.length;
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
          if (Ctor instanceof Ctor) {
            Ctor = ctorByTag[tag];
          }
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
      var funcName = getFuncName(func),
          other = lodash[funcName];
      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
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
    function mergeDefaults(objectValue, sourceValue) {
      return objectValue === undefined ? sourceValue : merge(objectValue, sourceValue, mergeDefaults);
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
    function shimKeys(object) {
      var props = keysIn(object),
          propsLength = props.length,
          length = propsLength && object.length;
      var allowIndexes = !!length && isLength(length) && (isArray(object) || isArguments(object) || isString(object));
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
      if (lodash.support.unindexedChars && isString(value)) {
        return value.split('');
      }
      return isObject(value) ? value : Object(value);
    }
    function toObject(value) {
      if (lodash.support.unindexedChars && isString(value)) {
        var index = -1,
            length = value.length,
            result = Object(value);
        while (++index < length) {
          result[index] = value.charAt(index);
        }
        return result;
      }
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
        size = nativeMax(nativeFloor(size) || 1, 1);
      }
      var index = 0,
          length = array ? array.length : 0,
          resIndex = -1,
          result = Array(nativeCeil(length / size));
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
      return (isObjectLike(array) && isArrayLike(array)) ? baseDifference(array, baseFlatten(values, false, true)) : [];
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
        var index = binaryIndex(array, value);
        if (index < length && (value === value ? (value === array[index]) : (array[index] !== array[index]))) {
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
          isCommon = indexOf === baseIndexOf,
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
        iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
        isSorted = false;
      }
      var callback = getCallback();
      if (!(iteratee == null && callback === baseCallback)) {
        iteratee = callback(iteratee, thisArg, 3);
      }
      return (isSorted && getIndexOf() === baseIndexOf) ? sortedUniq(array, iteratee) : baseUniq(array, iteratee);
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
          var result = result ? arrayPush(baseDifference(result, array), baseDifference(array, result)) : array;
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
    var wrapperConcat = restParam(function(values) {
      values = baseFlatten(values);
      return this.thru(function(array) {
        return arrayConcat(isArray(array) ? array : [toObject(array)], values);
      });
    });
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
      var interceptor = function(value) {
        return value.reverse();
      };
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [interceptor],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(interceptor);
    }
    function wrapperToString() {
      return (this.value() + '');
    }
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }
    var at = restParam(function(collection, props) {
      if (isArrayLike(collection)) {
        collection = toIterable(collection);
      }
      return baseAt(collection, baseFlatten(props));
    });
    var countBy = createAggregator(function(result, value, key) {
      hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
    });
    function every(collection, predicate, thisArg) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
        predicate = undefined;
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
      if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
        fromIndex = 0;
      } else {
        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
      }
      return (typeof collection == 'string' || !isArray(collection) && isString(collection)) ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1) : (!!length && getIndexOf(collection, target, fromIndex) > -1);
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
        var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
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
        predicate = undefined;
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
        iteratee = undefined;
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
        orders = undefined;
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
        n = undefined;
      }
      n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
      return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
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
          func = undefined;
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
        leading = !!options.leading;
        maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      function cancel() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        if (maxTimeoutId) {
          clearTimeout(maxTimeoutId);
        }
        lastCalled = 0;
        maxTimeoutId = timeoutId = trailingCall = undefined;
      }
      function complete(isCalled, id) {
        if (id) {
          clearTimeout(id);
        }
        maxTimeoutId = timeoutId = trailingCall = undefined;
        if (isCalled) {
          lastCalled = now();
          result = func.apply(thisArg, args);
          if (!timeoutId && !maxTimeoutId) {
            args = thisArg = undefined;
          }
        }
      }
      function delayed() {
        var remaining = wait - (now() - stamp);
        if (remaining <= 0 || remaining > wait) {
          complete(trailingCall, maxTimeoutId);
        } else {
          timeoutId = setTimeout(delayed, remaining);
        }
      }
      function maxDelayed() {
        complete(trailing, timeoutId);
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
          args = thisArg = undefined;
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
    var modArgs = restParam(function(func, transforms) {
      transforms = baseFlatten(transforms);
      if (typeof func != 'function' || !arrayEvery(transforms, baseIsFunction)) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = transforms.length;
      return restParam(function(args) {
        var index = nativeMin(args.length, length);
        while (index--) {
          args[index] = transforms[index](args[index]);
        }
        return func.apply(this, args);
      });
    });
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
      return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
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
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': +wait,
        'trailing': trailing
      });
    }
    function wrap(value, wrapper) {
      wrapper = wrapper == null ? identity : wrapper;
      return createWrapper(wrapper, PARTIAL_FLAG, undefined, [value], []);
    }
    function clone(value, isDeep, customizer, thisArg) {
      if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
        isDeep = false;
      } else if (typeof isDeep == 'function') {
        thisArg = customizer;
        customizer = isDeep;
        isDeep = false;
      }
      return typeof customizer == 'function' ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 3)) : baseClone(value, isDeep);
    }
    function cloneDeep(value, customizer, thisArg) {
      return typeof customizer == 'function' ? baseClone(value, true, bindCallback(customizer, thisArg, 3)) : baseClone(value, true);
    }
    function gt(value, other) {
      return value > other;
    }
    function gte(value, other) {
      return value >= other;
    }
    function isArguments(value) {
      return isObjectLike(value) && isArrayLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
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
      return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
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
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }
    function isFunction(value) {
      return isObject(value) && objToString.call(value) == funcTag;
    }
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
      if (isFunction(value)) {
        return reIsNative.test(fnToString.call(value));
      }
      return isObjectLike(value) && (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
    }
    function isNull(value) {
      return value === null;
    }
    function isNumber(value) {
      return typeof value == 'number' || (isObjectLike(value) && objToString.call(value) == numberTag);
    }
    function isPlainObject(value) {
      var Ctor;
      if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isHostObject(value) && !isArguments(value)) || (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
        return false;
      }
      var result;
      if (lodash.support.ownLast) {
        baseForIn(value, function(subValue, key, object) {
          result = hasOwnProperty.call(object, key);
          return false;
        });
        return result !== false;
      }
      baseForIn(value, function(subValue, key) {
        result = key;
      });
      return result === undefined || hasOwnProperty.call(value, result);
    }
    function isRegExp(value) {
      return isObject(value) && objToString.call(value) == regexpTag;
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
      return (lodash.support.unindexedChars && isString(value)) ? value.split('') : arrayCopy(value);
    }
    function toPlainObject(value) {
      return baseCopy(value, keysIn(value));
    }
    var merge = createAssigner(baseMerge);
    var assign = createAssigner(function(object, source, customizer) {
      return customizer ? assignWith(object, source, customizer) : baseAssign(object, source);
    });
    function create(prototype, properties, guard) {
      var result = baseCreate(prototype);
      if (guard && isIterateeCall(prototype, properties, guard)) {
        properties = undefined;
      }
      return properties ? baseAssign(result, properties) : result;
    }
    var defaults = createDefaults(assign, assignDefaults);
    var defaultsDeep = createDefaults(merge, mergeDefaults);
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
      var result = object == null ? undefined : baseGet(object, toPath(path), (path + ''));
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
      return result || (isLength(object.length) && isIndex(path, object.length) && (isArray(object) || isArguments(object) || isString(object)));
    }
    function invert(object, multiValue, guard) {
      if (guard && isIterateeCall(object, multiValue, guard)) {
        multiValue = undefined;
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
      var Ctor = object == null ? undefined : object.constructor;
      if ((typeof Ctor == 'function' && Ctor.prototype === object) || (typeof object == 'function' ? lodash.support.enumPrototypes : isArrayLike(object))) {
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
      var length = object.length,
          support = lodash.support;
      length = (length && isLength(length) && (isArray(object) || isArguments(object) || isString(object)) && length) || 0;
      var Ctor = object.constructor,
          index = -1,
          proto = (isFunction(Ctor) && Ctor.prototype) || objectProto,
          isProto = proto === object,
          result = Array(length),
          skipIndexes = length > 0,
          skipErrorProps = support.enumErrorProps && (object === errorProto || object instanceof Error),
          skipProto = support.enumPrototypes && isFunction(object);
      while (++index < length) {
        result[index] = (index + '');
      }
      for (var key in object) {
        if (!(skipProto && key == 'prototype') && !(skipErrorProps && (key == 'message' || key == 'name')) && !(skipIndexes && isIndex(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      if (support.nonEnumShadows && object !== objectProto) {
        var tag = object === stringProto ? stringTag : (object === errorProto ? errorTag : objToString.call(object)),
            nonEnums = nonEnumProps[tag] || nonEnumProps[objectTag];
        if (tag == objectTag) {
          proto = objectProto;
        }
        length = shadowProps.length;
        while (length--) {
          key = shadowProps[length];
          var nonEnum = nonEnums[key];
          if (!(isProto && nonEnum) && (nonEnum ? hasOwnProperty.call(object, key) : object[key] !== proto[key])) {
            result.push(key);
          }
        }
      }
      return result;
    }
    var mapKeys = createObjectMapper(true);
    var mapValues = createObjectMapper();
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
      var result = object == null ? undefined : toObject(object)[path];
      if (result === undefined) {
        if (object != null && !isKey(path, object)) {
          path = toPath(path);
          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
          result = object == null ? undefined : toObject(object)[last(path)];
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
            accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
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
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = +end || 0;
      }
      return value >= nativeMin(start, end) && value < nativeMax(start, end);
    }
    function random(min, max, floating) {
      if (floating && isIterateeCall(min, max, floating)) {
        max = floating = undefined;
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
      return (string && reHasRegExpChars.test(string)) ? string.replace(reRegExpChars, escapeRegExpChar) : (string || '(?:)');
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
          leftLength = nativeFloor(mid),
          rightLength = nativeCeil(mid);
      chars = createPadding('', rightLength, chars);
      return chars.slice(0, leftLength) + string + chars;
    }
    var padLeft = createPadDir();
    var padRight = createPadDir(true);
    function parseInt(string, radix, guard) {
      if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      string = trim(string);
      return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
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
        n = nativeFloor(n / 2);
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
        options = otherOptions = undefined;
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
        options = undefined;
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
        pattern = undefined;
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
        thisArg = undefined;
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
            props = isObj ? keys(source) : undefined,
            methodNames = (props && props.length) ? baseFunctions(source, props) : undefined;
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
              return func.apply(object, arrayPush([this.value()], arguments));
            };
          }(func));
        }
      }
      return object;
    }
    function noConflict() {
      root._ = oldDash;
      return this;
    }
    function noop() {}
    function property(path) {
      return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
    }
    function propertyOf(object) {
      return function(path) {
        return baseGet(object, toPath(path), (path + ''));
      };
    }
    function range(start, end, step) {
      if (step && isIterateeCall(start, end, step)) {
        end = step = undefined;
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
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);
      while (++index < length) {
        result[index] = start;
        start += step;
      }
      return result;
    }
    function times(n, iteratee, thisArg) {
      n = nativeFloor(n);
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
    var ceil = createRound('ceil');
    var floor = createRound('floor');
    var max = createExtremum(gt, NEGATIVE_INFINITY);
    var min = createExtremum(lt, POSITIVE_INFINITY);
    var round = createRound('round');
    function sum(collection, iteratee, thisArg) {
      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
        iteratee = undefined;
      }
      iteratee = getCallback(iteratee, thisArg, 3);
      return iteratee.length == 1 ? arraySum(isArray(collection) ? collection : toIterable(collection), iteratee) : baseSum(collection, iteratee);
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
    lodash.defaultsDeep = defaultsDeep;
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
    lodash.modArgs = modArgs;
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
    lodash.ceil = ceil;
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
    lodash.floor = floor;
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
    lodash.round = round;
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
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        var filtered = this.__filtered__;
        if (filtered && !index) {
          return new LazyWrapper(this);
        }
        n = n == null ? 1 : nativeMax(nativeFloor(n) || 0, 0);
        var result = this.clone();
        if (filtered) {
          result.__takeCount__ = nativeMin(result.__takeCount__, n);
        } else {
          result.__views__.push({
            'size': n,
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };
      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type != LAZY_MAP_FLAG;
      LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getCallback(iteratee, thisArg, 1),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
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
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
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
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = (+end || 0);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };
    LazyWrapper.prototype.takeRightWhile = function(predicate, thisArg) {
      return this.reverse().takeWhile(predicate, thisArg).reverse();
    };
    LazyWrapper.prototype.toArray = function() {
      return this.take(POSITIVE_INFINITY);
    };
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
          retUnwrapped = /^(?:first|last)$/.test(methodName),
          lodashFunc = lodash[retUnwrapped ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName];
      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var args = retUnwrapped ? [1] : arguments,
            chainAll = this.__chain__,
            value = this.__wrapped__,
            isHybrid = !!this.__actions__.length,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);
        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          isLazy = useLazy = false;
        }
        var interceptor = function(value) {
          return (retUnwrapped && chainAll) ? lodashFunc(value, 1)[0] : lodashFunc.apply(undefined, arrayPush([value], args));
        };
        var action = {
          'func': thru,
          'args': [interceptor],
          'thisArg': undefined
        },
            onlyLazy = isLazy && !isHybrid;
        if (retUnwrapped && !chainAll) {
          if (onlyLazy) {
            value = value.clone();
            value.__actions__.push(action);
            return func.call(value);
          }
          return lodashFunc.call(undefined, this.value())[0];
        }
        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push(action);
          return new LodashWrapper(result, chainAll);
        }
        return this.thru(interceptor);
      };
    });
    arrayEach(['join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function(methodName) {
      var protoFunc = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          fixObjects = !support.spliceObjects && /^(?:pop|shift|splice)$/.test(methodName),
          retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);
      var func = !fixObjects ? protoFunc : function() {
        var result = protoFunc.apply(this, arguments);
        if (this.length === 0) {
          delete this[0];
        }
        return result;
      };
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
        var key = (lodashFunc.name + ''),
            names = realNames[key] || (realNames[key] = []);
        names.push({
          'name': methodName,
          'func': lodashFunc
        });
      }
    });
    realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.concat = wrapperConcat;
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
    define("github:lodash/lodash@3.10.1/lodash.src", [], function() {
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
define("github:lodash/lodash@3.10.1", ["github:lodash/lodash@3.10.1/lodash.src"], function(main) {
  return main;
});

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
    define("github:julianshapiro/velocity@1.2.3/velocity", [], factory);
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
      if (!/^(stop|finish|finishAll)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
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
        case "finishAll":
        case "stop":
          $.each(elements, function(i, element) {
            if (Data(element) && Data(element).delayTimer) {
              clearTimeout(Data(element).delayTimer.setTimeout);
              if (Data(element).delayTimer.next) {
                Data(element).delayTimer.next();
              }
              delete Data(element).delayTimer;
            }
            if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
              $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
                if (Type.isFunction(item)) {
                  item();
                }
              });
              $.queue(element, Type.isString(options) ? options : "", []);
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
                    } else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
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
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("github:julianshapiro/velocity@1.2.3", ["github:julianshapiro/velocity@1.2.3/velocity"], function(main) {
  return main;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
(function() {
  var device,
      previousDevice,
      addClass,
      documentElement,
      find,
      handleOrientation,
      hasClass,
      orientationEvent,
      removeClass,
      userAgent;
  previousDevice = window.device;
  device = {};
  window.device = device;
  documentElement = window.document.documentElement;
  userAgent = window.navigator.userAgent.toLowerCase();
  device.ios = function() {
    return device.iphone() || device.ipod() || device.ipad();
  };
  device.iphone = function() {
    return !device.windows() && find('iphone');
  };
  device.ipod = function() {
    return find('ipod');
  };
  device.ipad = function() {
    return find('ipad');
  };
  device.android = function() {
    return !device.windows() && find('android');
  };
  device.androidPhone = function() {
    return device.android() && find('mobile');
  };
  device.androidTablet = function() {
    return device.android() && !find('mobile');
  };
  device.blackberry = function() {
    return find('blackberry') || find('bb10') || find('rim');
  };
  device.blackberryPhone = function() {
    return device.blackberry() && !find('tablet');
  };
  device.blackberryTablet = function() {
    return device.blackberry() && find('tablet');
  };
  device.windows = function() {
    return find('windows');
  };
  device.windowsPhone = function() {
    return device.windows() && find('phone');
  };
  device.windowsTablet = function() {
    return device.windows() && (find('touch') && !device.windowsPhone());
  };
  device.fxos = function() {
    return (find('(mobile;') || find('(tablet;')) && find('; rv:');
  };
  device.fxosPhone = function() {
    return device.fxos() && find('mobile');
  };
  device.fxosTablet = function() {
    return device.fxos() && find('tablet');
  };
  device.meego = function() {
    return find('meego');
  };
  device.cordova = function() {
    return window.cordova && location.protocol === 'file:';
  };
  device.nodeWebkit = function() {
    return typeof window.process === 'object';
  };
  device.mobile = function() {
    return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
  };
  device.tablet = function() {
    return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
  };
  device.desktop = function() {
    return !device.tablet() && !device.mobile();
  };
  device.television = function() {
    var i,
        tvString;
    television = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"];
    i = 0;
    while (i < television.length) {
      if (find(television[i])) {
        return true;
      }
      i++;
    }
    return false;
  };
  device.portrait = function() {
    return (window.innerHeight / window.innerWidth) > 1;
  };
  device.landscape = function() {
    return (window.innerHeight / window.innerWidth) < 1;
  };
  device.noConflict = function() {
    window.device = previousDevice;
    return this;
  };
  find = function(needle) {
    return userAgent.indexOf(needle) !== -1;
  };
  hasClass = function(className) {
    var regex;
    regex = new RegExp(className, 'i');
    return documentElement.className.match(regex);
  };
  addClass = function(className) {
    var currentClassNames = null;
    if (!hasClass(className)) {
      currentClassNames = documentElement.className.replace(/^\s+|\s+$/g, '');
      documentElement.className = currentClassNames + " " + className;
    }
  };
  removeClass = function(className) {
    if (hasClass(className)) {
      documentElement.className = documentElement.className.replace(" " + className, "");
    }
  };
  if (device.ios()) {
    if (device.ipad()) {
      addClass("ios ipad tablet");
    } else if (device.iphone()) {
      addClass("ios iphone mobile");
    } else if (device.ipod()) {
      addClass("ios ipod mobile");
    }
  } else if (device.android()) {
    if (device.androidTablet()) {
      addClass("android tablet");
    } else {
      addClass("android mobile");
    }
  } else if (device.blackberry()) {
    if (device.blackberryTablet()) {
      addClass("blackberry tablet");
    } else {
      addClass("blackberry mobile");
    }
  } else if (device.windows()) {
    if (device.windowsTablet()) {
      addClass("windows tablet");
    } else if (device.windowsPhone()) {
      addClass("windows mobile");
    } else {
      addClass("desktop");
    }
  } else if (device.fxos()) {
    if (device.fxosTablet()) {
      addClass("fxos tablet");
    } else {
      addClass("fxos mobile");
    }
  } else if (device.meego()) {
    addClass("meego mobile");
  } else if (device.nodeWebkit()) {
    addClass("node-webkit");
  } else if (device.television()) {
    addClass("television");
  } else if (device.desktop()) {
    addClass("desktop");
  }
  if (device.cordova()) {
    addClass("cordova");
  }
  handleOrientation = function() {
    if (device.landscape()) {
      removeClass("portrait");
      addClass("landscape");
    } else {
      removeClass("landscape");
      addClass("portrait");
    }
    return;
  };
  if (Object.prototype.hasOwnProperty.call(window, "onorientationchange")) {
    orientationEvent = "orientationchange";
  } else {
    orientationEvent = "resize";
  }
  if (window.addEventListener) {
    window.addEventListener(orientationEvent, handleOrientation, false);
  } else if (window.attachEvent) {
    window.attachEvent(orientationEvent, handleOrientation);
  } else {
    window[orientationEvent] = handleOrientation;
  }
  handleOrientation();
  if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    define("github:matthewhudson/device.js@0.2.7/lib/device", [], function() {
      return device;
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = device;
  } else {
    window.device = device;
  }
}).call(this);

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("github:matthewhudson/device.js@0.2.7", ["github:matthewhudson/device.js@0.2.7/lib/device"], function(main) {
  return main;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
(function(window) {
  'use strict';
  var CanvasPrototype = window.HTMLCanvasElement && window.HTMLCanvasElement.prototype,
      hasBlobConstructor = window.Blob && (function() {
        try {
          return Boolean(new Blob());
        } catch (e) {
          return false;
        }
      }()),
      hasArrayBufferViewSupport = hasBlobConstructor && window.Uint8Array && (function() {
        try {
          return new Blob([new Uint8Array(100)]).size === 100;
        } catch (e) {
          return false;
        }
      }()),
      BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
      dataURLtoBlob = (hasBlobConstructor || BlobBuilder) && window.atob && window.ArrayBuffer && window.Uint8Array && function(dataURI) {
        var byteString,
            arrayBuffer,
            intArray,
            i,
            mimeString,
            bb;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
          byteString = atob(dataURI.split(',')[1]);
        } else {
          byteString = decodeURIComponent(dataURI.split(',')[1]);
        }
        arrayBuffer = new ArrayBuffer(byteString.length);
        intArray = new Uint8Array(arrayBuffer);
        for (i = 0; i < byteString.length; i += 1) {
          intArray[i] = byteString.charCodeAt(i);
        }
        mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        if (hasBlobConstructor) {
          return new Blob([hasArrayBufferViewSupport ? intArray : arrayBuffer], {type: mimeString});
        }
        bb = new BlobBuilder();
        bb.append(arrayBuffer);
        return bb.getBlob(mimeString);
      };
  if (window.HTMLCanvasElement && !CanvasPrototype.toBlob) {
    if (CanvasPrototype.mozGetAsFile) {
      CanvasPrototype.toBlob = function(callback, type, quality) {
        if (quality && CanvasPrototype.toDataURL && dataURLtoBlob) {
          callback(dataURLtoBlob(this.toDataURL(type, quality)));
        } else {
          callback(this.mozGetAsFile('blob', type));
        }
      };
    } else if (CanvasPrototype.toDataURL && dataURLtoBlob) {
      CanvasPrototype.toBlob = function(callback, type, quality) {
        callback(dataURLtoBlob(this.toDataURL(type, quality)));
      };
    }
  }
  if (typeof define === 'function' && define.amd) {
    define("github:blueimp/JavaScript-Canvas-to-Blob@2.2.0/js/canvas-to-blob", [], function() {
      return dataURLtoBlob;
    });
  } else {
    window.dataURLtoBlob = dataURLtoBlob;
  }
}(window));

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("github:blueimp/JavaScript-Canvas-to-Blob@2.2.0", ["github:blueimp/JavaScript-Canvas-to-Blob@2.2.0/js/canvas-to-blob"], function(main) {
  return main;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
(function($) {
  'use strict';
  var loadImage = function(file, callback, options) {
    var img = document.createElement('img'),
        url,
        oUrl;
    img.onerror = callback;
    img.onload = function() {
      if (oUrl && !(options && options.noRevoke)) {
        loadImage.revokeObjectURL(oUrl);
      }
      if (callback) {
        callback(loadImage.scale(img, options));
      }
    };
    if (loadImage.isInstanceOf('Blob', file) || loadImage.isInstanceOf('File', file)) {
      url = oUrl = loadImage.createObjectURL(file);
      img._type = file.type;
    } else if (typeof file === 'string') {
      url = file;
      if (options && options.crossOrigin) {
        img.crossOrigin = options.crossOrigin;
      }
    } else {
      return false;
    }
    if (url) {
      img.src = url;
      return img;
    }
    return loadImage.readFile(file, function(e) {
      var target = e.target;
      if (target && target.result) {
        img.src = target.result;
      } else {
        if (callback) {
          callback(e);
        }
      }
    });
  },
      urlAPI = (window.createObjectURL && window) || (window.URL && URL.revokeObjectURL && URL) || (window.webkitURL && webkitURL);
  loadImage.isInstanceOf = function(type, obj) {
    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
  };
  loadImage.transformCoordinates = function() {
    return;
  };
  loadImage.getTransformedOptions = function(img, options) {
    var aspectRatio = options.aspectRatio,
        newOptions,
        i,
        width,
        height;
    if (!aspectRatio) {
      return options;
    }
    newOptions = {};
    for (i in options) {
      if (options.hasOwnProperty(i)) {
        newOptions[i] = options[i];
      }
    }
    newOptions.crop = true;
    width = img.naturalWidth || img.width;
    height = img.naturalHeight || img.height;
    if (width / height > aspectRatio) {
      newOptions.maxWidth = height * aspectRatio;
      newOptions.maxHeight = height;
    } else {
      newOptions.maxWidth = width;
      newOptions.maxHeight = width / aspectRatio;
    }
    return newOptions;
  };
  loadImage.renderImageToCanvas = function(canvas, img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight) {
    canvas.getContext('2d').drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    return canvas;
  };
  loadImage.hasCanvasOption = function(options) {
    return options.canvas || options.crop || options.aspectRatio;
  };
  loadImage.scale = function(img, options) {
    options = options || {};
    var canvas = document.createElement('canvas'),
        useCanvas = img.getContext || (loadImage.hasCanvasOption(options) && canvas.getContext),
        width = img.naturalWidth || img.width,
        height = img.naturalHeight || img.height,
        destWidth = width,
        destHeight = height,
        maxWidth,
        maxHeight,
        minWidth,
        minHeight,
        sourceWidth,
        sourceHeight,
        sourceX,
        sourceY,
        tmp,
        scaleUp = function() {
          var scale = Math.max((minWidth || destWidth) / destWidth, (minHeight || destHeight) / destHeight);
          if (scale > 1) {
            destWidth = destWidth * scale;
            destHeight = destHeight * scale;
          }
        },
        scaleDown = function() {
          var scale = Math.min((maxWidth || destWidth) / destWidth, (maxHeight || destHeight) / destHeight);
          if (scale < 1) {
            destWidth = destWidth * scale;
            destHeight = destHeight * scale;
          }
        };
    if (useCanvas) {
      options = loadImage.getTransformedOptions(img, options);
      sourceX = options.left || 0;
      sourceY = options.top || 0;
      if (options.sourceWidth) {
        sourceWidth = options.sourceWidth;
        if (options.right !== undefined && options.left === undefined) {
          sourceX = width - sourceWidth - options.right;
        }
      } else {
        sourceWidth = width - sourceX - (options.right || 0);
      }
      if (options.sourceHeight) {
        sourceHeight = options.sourceHeight;
        if (options.bottom !== undefined && options.top === undefined) {
          sourceY = height - sourceHeight - options.bottom;
        }
      } else {
        sourceHeight = height - sourceY - (options.bottom || 0);
      }
      destWidth = sourceWidth;
      destHeight = sourceHeight;
    }
    maxWidth = options.maxWidth;
    maxHeight = options.maxHeight;
    minWidth = options.minWidth;
    minHeight = options.minHeight;
    if (useCanvas && maxWidth && maxHeight && options.crop) {
      destWidth = maxWidth;
      destHeight = maxHeight;
      tmp = sourceWidth / sourceHeight - maxWidth / maxHeight;
      if (tmp < 0) {
        sourceHeight = maxHeight * sourceWidth / maxWidth;
        if (options.top === undefined && options.bottom === undefined) {
          sourceY = (height - sourceHeight) / 2;
        }
      } else if (tmp > 0) {
        sourceWidth = maxWidth * sourceHeight / maxHeight;
        if (options.left === undefined && options.right === undefined) {
          sourceX = (width - sourceWidth) / 2;
        }
      }
    } else {
      if (options.contain || options.cover) {
        minWidth = maxWidth = maxWidth || minWidth;
        minHeight = maxHeight = maxHeight || minHeight;
      }
      if (options.cover) {
        scaleDown();
        scaleUp();
      } else {
        scaleUp();
        scaleDown();
      }
    }
    if (useCanvas) {
      canvas.width = destWidth;
      canvas.height = destHeight;
      loadImage.transformCoordinates(canvas, options);
      return loadImage.renderImageToCanvas(canvas, img, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, destWidth, destHeight);
    }
    img.width = destWidth;
    img.height = destHeight;
    return img;
  };
  loadImage.createObjectURL = function(file) {
    return urlAPI ? urlAPI.createObjectURL(file) : false;
  };
  loadImage.revokeObjectURL = function(url) {
    return urlAPI ? urlAPI.revokeObjectURL(url) : false;
  };
  loadImage.readFile = function(file, callback, method) {
    if (window.FileReader) {
      var fileReader = new FileReader();
      fileReader.onload = fileReader.onerror = callback;
      method = method || 'readAsDataURL';
      if (fileReader[method]) {
        fileReader[method](file);
        return fileReader;
      }
    }
    return false;
  };
  if (typeof define === 'function' && define.amd) {
    define("github:blueimp/JavaScript-Load-Image@1.14.0/js/load-image", [], function() {
      return loadImage;
    });
  } else {
    $.loadImage = loadImage;
  }
}(window));

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("github:blueimp/JavaScript-Load-Image@1.14.0", ["github:blueimp/JavaScript-Load-Image@1.14.0/js/load-image"], function(main) {
  return main;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define("github:fengyuanchen/cropper@0.11.1/dist/cropper", ["github:jquery/jquery@2.1.4"], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(jQuery);
  }
})(function($) {
  'use strict';
  var $window = $(window);
  var $document = $(document);
  var location = window.location;
  var NAMESPACE = 'cropper';
  var PREVIEW = 'preview.' + NAMESPACE;
  var CLASS_MODAL = 'cropper-modal';
  var CLASS_HIDE = 'cropper-hide';
  var CLASS_HIDDEN = 'cropper-hidden';
  var CLASS_INVISIBLE = 'cropper-invisible';
  var CLASS_MOVE = 'cropper-move';
  var CLASS_CROP = 'cropper-crop';
  var CLASS_DISABLED = 'cropper-disabled';
  var CLASS_BG = 'cropper-bg';
  var EVENT_MOUSE_DOWN = 'mousedown touchstart pointerdown MSPointerDown';
  var EVENT_MOUSE_MOVE = 'mousemove touchmove pointermove MSPointerMove';
  var EVENT_MOUSE_UP = 'mouseup touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel';
  var EVENT_WHEEL = 'wheel mousewheel DOMMouseScroll';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_LOAD = 'load.' + NAMESPACE;
  var EVENT_ERROR = 'error.' + NAMESPACE;
  var EVENT_RESIZE = 'resize.' + NAMESPACE;
  var EVENT_BUILD = 'build.' + NAMESPACE;
  var EVENT_BUILT = 'built.' + NAMESPACE;
  var EVENT_CROP_START = 'cropstart.' + NAMESPACE;
  var EVENT_CROP_MOVE = 'cropmove.' + NAMESPACE;
  var EVENT_CROP_END = 'cropend.' + NAMESPACE;
  var EVENT_CROP = 'crop.' + NAMESPACE;
  var EVENT_ZOOM = 'zoom.' + NAMESPACE;
  var REGEXP_ACTIONS = /^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/;
  var ACTION_EAST = 'e';
  var ACTION_WEST = 'w';
  var ACTION_SOUTH = 's';
  var ACTION_NORTH = 'n';
  var ACTION_SOUTH_EAST = 'se';
  var ACTION_SOUTH_WEST = 'sw';
  var ACTION_NORTH_EAST = 'ne';
  var ACTION_NORTH_WEST = 'nw';
  var ACTION_ALL = 'all';
  var ACTION_CROP = 'crop';
  var ACTION_MOVE = 'move';
  var ACTION_ZOOM = 'zoom';
  var ACTION_NONE = 'none';
  var SUPPORT_CANVAS = $.isFunction($('<canvas>')[0].getContext);
  var sqrt = Math.sqrt;
  var min = Math.min;
  var max = Math.max;
  var abs = Math.abs;
  var sin = Math.sin;
  var cos = Math.cos;
  var num = parseFloat;
  var prototype = {};
  function isNumber(n) {
    return typeof n === 'number' && !isNaN(n);
  }
  function isUndefined(n) {
    return typeof n === 'undefined';
  }
  function toArray(obj, offset) {
    var args = [];
    if (isNumber(offset)) {
      args.push(offset);
    }
    return args.slice.apply(obj, args);
  }
  function proxy(fn, context) {
    var args = toArray(arguments, 2);
    return function() {
      return fn.apply(context, args.concat(toArray(arguments)));
    };
  }
  function isCrossOriginURL(url) {
    var parts = url.match(/^(https?:)\/\/([^\:\/\?#]+):?(\d*)/i);
    return parts && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
  }
  function addTimestamp(url) {
    var timestamp = 'timestamp=' + (new Date()).getTime();
    return (url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp);
  }
  function getImageData(image) {
    var naturalWidth = image.naturalWidth;
    var naturalHeight = image.naturalHeight;
    var newImage;
    if (!naturalWidth) {
      newImage = new Image();
      newImage.src = image.src;
      naturalWidth = newImage.width;
      naturalHeight = newImage.height;
    }
    return {
      naturalWidth: naturalWidth,
      naturalHeight: naturalHeight,
      aspectRatio: naturalWidth / naturalHeight
    };
  }
  function getTransform(options) {
    var transforms = [];
    var rotate = options.rotate;
    var scaleX = options.scaleX;
    var scaleY = options.scaleY;
    if (isNumber(rotate)) {
      transforms.push('rotate(' + rotate + 'deg)');
    }
    if (isNumber(scaleX) && isNumber(scaleY)) {
      transforms.push('scale(' + scaleX + ',' + scaleY + ')');
    }
    return transforms.length ? transforms.join(' ') : 'none';
  }
  function getRotatedSizes(data, reverse) {
    var deg = abs(data.degree) % 180;
    var arc = (deg > 90 ? (180 - deg) : deg) * Math.PI / 180;
    var sinArc = sin(arc);
    var cosArc = cos(arc);
    var width = data.width;
    var height = data.height;
    var aspectRatio = data.aspectRatio;
    var newWidth;
    var newHeight;
    if (!reverse) {
      newWidth = width * cosArc + height * sinArc;
      newHeight = width * sinArc + height * cosArc;
    } else {
      newWidth = width / (cosArc + sinArc / aspectRatio);
      newHeight = newWidth / aspectRatio;
    }
    return {
      width: newWidth,
      height: newHeight
    };
  }
  function getSourceCanvas(image, data) {
    var canvas = $('<canvas>')[0];
    var context = canvas.getContext('2d');
    var x = 0;
    var y = 0;
    var width = data.naturalWidth;
    var height = data.naturalHeight;
    var rotate = data.rotate;
    var scaleX = data.scaleX;
    var scaleY = data.scaleY;
    var scalable = isNumber(scaleX) && isNumber(scaleY) && (scaleX !== 1 || scaleY !== 1);
    var rotatable = isNumber(rotate) && rotate !== 0;
    var advanced = rotatable || scalable;
    var canvasWidth = width;
    var canvasHeight = height;
    var translateX;
    var translateY;
    var rotated;
    if (scalable) {
      translateX = width / 2;
      translateY = height / 2;
    }
    if (rotatable) {
      rotated = getRotatedSizes({
        width: width,
        height: height,
        degree: rotate
      });
      canvasWidth = rotated.width;
      canvasHeight = rotated.height;
      translateX = rotated.width / 2;
      translateY = rotated.height / 2;
    }
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    if (advanced) {
      x = -width / 2;
      y = -height / 2;
      context.save();
      context.translate(translateX, translateY);
    }
    if (rotatable) {
      context.rotate(rotate * Math.PI / 180);
    }
    if (scalable) {
      context.scale(scaleX, scaleY);
    }
    context.drawImage(image, x, y, width, height);
    if (advanced) {
      context.restore();
    }
    return canvas;
  }
  function Cropper(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Cropper.DEFAULTS, $.isPlainObject(options) && options);
    this.ready = false;
    this.built = false;
    this.complete = false;
    this.rotated = false;
    this.cropped = false;
    this.disabled = false;
    this.replaced = false;
    this.isImg = false;
    this.originalUrl = '';
    this.canvas = null;
    this.cropBox = null;
    this.init();
  }
  $.extend(prototype, {
    init: function() {
      var $this = this.$element;
      var url;
      if ($this.is('img')) {
        this.isImg = true;
        this.originalUrl = url = $this.attr('src');
        if (!url) {
          return;
        }
        url = $this.prop('src');
      } else if ($this.is('canvas') && SUPPORT_CANVAS) {
        url = $this[0].toDataURL();
      }
      this.load(url);
    },
    trigger: function(type, data) {
      var e = $.Event(type, data);
      this.$element.trigger(e);
      return e.isDefaultPrevented();
    },
    load: function(url) {
      var options = this.options;
      var $this = this.$element;
      var crossOrigin = '';
      var bustCacheUrl;
      var $clone;
      if (!url) {
        return;
      }
      this.url = url;
      $this.one(EVENT_BUILD, options.build);
      if (this.trigger(EVENT_BUILD)) {
        return;
      }
      if (options.checkImageOrigin && isCrossOriginURL(url)) {
        crossOrigin = ' crossOrigin="anonymous"';
        if (!$this.prop('crossOrigin')) {
          bustCacheUrl = addTimestamp(url);
        }
      }
      this.$clone = $clone = $('<img' + crossOrigin + ' src="' + (bustCacheUrl || url) + '">');
      if (this.isImg) {
        if ($this[0].complete) {
          this.start();
        } else {
          $this.one(EVENT_LOAD, $.proxy(this.start, this));
        }
      } else {
        $clone.one(EVENT_LOAD, $.proxy(this.start, this)).one(EVENT_ERROR, $.proxy(this.stop, this)).addClass(CLASS_HIDE).insertAfter($this);
      }
    },
    start: function() {
      this.image = getImageData(this.isImg ? this.$element[0] : this.$clone[0]);
      this.ready = true;
      this.build();
    },
    stop: function() {
      this.$clone.remove();
      this.$clone = null;
    }
  });
  $.extend(prototype, {
    build: function() {
      var options = this.options;
      var $this = this.$element;
      var $clone = this.$clone;
      var $cropper;
      var $cropBox;
      var $face;
      if (!this.ready) {
        return;
      }
      if (this.built) {
        this.unbuild();
      }
      this.$container = $this.parent();
      this.$cropper = $cropper = $(Cropper.TEMPLATE);
      this.$canvas = $cropper.find('.cropper-canvas').append($clone);
      this.$dragBox = $cropper.find('.cropper-drag-box');
      this.$cropBox = $cropBox = $cropper.find('.cropper-crop-box');
      this.$viewBox = $cropper.find('.cropper-view-box');
      this.$face = $face = $cropBox.find('.cropper-face');
      $this.addClass(CLASS_HIDDEN).after($cropper);
      if (!this.isImg) {
        $clone.removeClass(CLASS_HIDE);
      }
      this.initPreview();
      this.bind();
      options.aspectRatio = num(options.aspectRatio) || NaN;
      if (options.autoCrop) {
        this.cropped = true;
        if (options.modal) {
          this.$dragBox.addClass(CLASS_MODAL);
        }
      } else {
        $cropBox.addClass(CLASS_HIDDEN);
      }
      if (!options.guides) {
        $cropBox.find('.cropper-dashed').addClass(CLASS_HIDDEN);
      }
      if (!options.center) {
        $cropBox.find('.cropper-center').addClass(CLASS_HIDDEN);
      }
      if (options.cropBoxMovable) {
        $face.addClass(CLASS_MOVE).data('action', ACTION_ALL);
      }
      if (!options.highlight) {
        $face.addClass(CLASS_INVISIBLE);
      }
      if (options.background) {
        $cropper.addClass(CLASS_BG);
      }
      if (!options.cropBoxResizable) {
        $cropBox.find('.cropper-line, .cropper-point').addClass(CLASS_HIDDEN);
      }
      this.setDragMode(options.dragCrop ? ACTION_CROP : (options.movable ? ACTION_MOVE : ACTION_NONE));
      this.render();
      this.built = true;
      this.setData(options.data);
      $this.one(EVENT_BUILT, options.built);
      setTimeout($.proxy(function() {
        this.trigger(EVENT_BUILT);
        this.complete = true;
      }, this), 0);
    },
    unbuild: function() {
      if (!this.built) {
        return;
      }
      this.built = false;
      this.initialImage = null;
      this.initialCanvas = null;
      this.initialCropBox = null;
      this.container = null;
      this.canvas = null;
      this.cropBox = null;
      this.unbind();
      this.resetPreview();
      this.$preview = null;
      this.$viewBox = null;
      this.$cropBox = null;
      this.$dragBox = null;
      this.$canvas = null;
      this.$container = null;
      this.$cropper.remove();
      this.$cropper = null;
    }
  });
  $.extend(prototype, {
    render: function() {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();
      this.renderCanvas();
      if (this.cropped) {
        this.renderCropBox();
      }
    },
    initContainer: function() {
      var options = this.options;
      var $this = this.$element;
      var $container = this.$container;
      var $cropper = this.$cropper;
      $cropper.addClass(CLASS_HIDDEN);
      $this.removeClass(CLASS_HIDDEN);
      $cropper.css((this.container = {
        width: max($container.width(), num(options.minContainerWidth) || 200),
        height: max($container.height(), num(options.minContainerHeight) || 100)
      }));
      $this.addClass(CLASS_HIDDEN);
      $cropper.removeClass(CLASS_HIDDEN);
    },
    initCanvas: function() {
      var container = this.container;
      var containerWidth = container.width;
      var containerHeight = container.height;
      var image = this.image;
      var aspectRatio = image.aspectRatio;
      var canvas = {
        aspectRatio: aspectRatio,
        width: containerWidth,
        height: containerHeight
      };
      if (containerHeight * aspectRatio > containerWidth) {
        canvas.height = containerWidth / aspectRatio;
      } else {
        canvas.width = containerHeight * aspectRatio;
      }
      canvas.oldLeft = canvas.left = (containerWidth - canvas.width) / 2;
      canvas.oldTop = canvas.top = (containerHeight - canvas.height) / 2;
      this.canvas = canvas;
      this.limitCanvas(true, true);
      this.initialImage = $.extend({}, image);
      this.initialCanvas = $.extend({}, canvas);
    },
    limitCanvas: function(size, position) {
      var options = this.options;
      var strict = options.strict;
      var container = this.container;
      var containerWidth = container.width;
      var containerHeight = container.height;
      var canvas = this.canvas;
      var aspectRatio = canvas.aspectRatio;
      var cropBox = this.cropBox;
      var cropped = this.cropped && cropBox;
      var initialCanvas = this.initialCanvas || canvas;
      var initialCanvasWidth = initialCanvas.width;
      var initialCanvasHeight = initialCanvas.height;
      var minCanvasWidth;
      var minCanvasHeight;
      if (size) {
        minCanvasWidth = num(options.minCanvasWidth) || 0;
        minCanvasHeight = num(options.minCanvasHeight) || 0;
        if (minCanvasWidth) {
          if (strict) {
            minCanvasWidth = max(cropped ? cropBox.width : initialCanvasWidth, minCanvasWidth);
          }
          minCanvasHeight = minCanvasWidth / aspectRatio;
        } else if (minCanvasHeight) {
          if (strict) {
            minCanvasHeight = max(cropped ? cropBox.height : initialCanvasHeight, minCanvasHeight);
          }
          minCanvasWidth = minCanvasHeight * aspectRatio;
        } else if (strict) {
          if (cropped) {
            minCanvasWidth = cropBox.width;
            minCanvasHeight = cropBox.height;
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          } else {
            minCanvasWidth = initialCanvasWidth;
            minCanvasHeight = initialCanvasHeight;
          }
        }
        $.extend(canvas, {
          minWidth: minCanvasWidth,
          minHeight: minCanvasHeight,
          maxWidth: Infinity,
          maxHeight: Infinity
        });
      }
      if (position) {
        if (strict) {
          if (cropped) {
            canvas.minLeft = min(cropBox.left, (cropBox.left + cropBox.width) - canvas.width);
            canvas.minTop = min(cropBox.top, (cropBox.top + cropBox.height) - canvas.height);
            canvas.maxLeft = cropBox.left;
            canvas.maxTop = cropBox.top;
          } else {
            canvas.minLeft = min(0, containerWidth - canvas.width);
            canvas.minTop = min(0, containerHeight - canvas.height);
            canvas.maxLeft = max(0, containerWidth - canvas.width);
            canvas.maxTop = max(0, containerHeight - canvas.height);
          }
        } else {
          canvas.minLeft = -canvas.width;
          canvas.minTop = -canvas.height;
          canvas.maxLeft = containerWidth;
          canvas.maxTop = containerHeight;
        }
      }
    },
    renderCanvas: function(changed) {
      var options = this.options;
      var canvas = this.canvas;
      var image = this.image;
      var aspectRatio;
      var rotated;
      if (this.rotated) {
        this.rotated = false;
        rotated = getRotatedSizes({
          width: image.width,
          height: image.height,
          degree: image.rotate
        });
        aspectRatio = rotated.width / rotated.height;
        if (aspectRatio !== canvas.aspectRatio) {
          canvas.left -= (rotated.width - canvas.width) / 2;
          canvas.top -= (rotated.height - canvas.height) / 2;
          canvas.width = rotated.width;
          canvas.height = rotated.height;
          canvas.aspectRatio = aspectRatio;
          this.limitCanvas(true, false);
        }
      }
      if (canvas.width > canvas.maxWidth || canvas.width < canvas.minWidth) {
        canvas.left = canvas.oldLeft;
      }
      if (canvas.height > canvas.maxHeight || canvas.height < canvas.minHeight) {
        canvas.top = canvas.oldTop;
      }
      canvas.width = min(max(canvas.width, canvas.minWidth), canvas.maxWidth);
      canvas.height = min(max(canvas.height, canvas.minHeight), canvas.maxHeight);
      this.limitCanvas(false, true);
      canvas.oldLeft = canvas.left = min(max(canvas.left, canvas.minLeft), canvas.maxLeft);
      canvas.oldTop = canvas.top = min(max(canvas.top, canvas.minTop), canvas.maxTop);
      this.$canvas.css({
        width: canvas.width,
        height: canvas.height,
        left: canvas.left,
        top: canvas.top
      });
      this.renderImage();
      if (this.cropped && options.strict) {
        this.limitCropBox(true, true);
      }
      if (changed) {
        this.output();
      }
    },
    renderImage: function(changed) {
      var canvas = this.canvas;
      var image = this.image;
      var reversed;
      if (image.rotate) {
        reversed = getRotatedSizes({
          width: canvas.width,
          height: canvas.height,
          degree: image.rotate,
          aspectRatio: image.aspectRatio
        }, true);
      }
      $.extend(image, reversed ? {
        width: reversed.width,
        height: reversed.height,
        left: (canvas.width - reversed.width) / 2,
        top: (canvas.height - reversed.height) / 2
      } : {
        width: canvas.width,
        height: canvas.height,
        left: 0,
        top: 0
      });
      this.$clone.css({
        width: image.width,
        height: image.height,
        marginLeft: image.left,
        marginTop: image.top,
        transform: getTransform(image)
      });
      if (changed) {
        this.output();
      }
    },
    initCropBox: function() {
      var options = this.options;
      var canvas = this.canvas;
      var aspectRatio = options.aspectRatio;
      var autoCropArea = num(options.autoCropArea) || 0.8;
      var cropBox = {
        width: canvas.width,
        height: canvas.height
      };
      if (aspectRatio) {
        if (canvas.height * aspectRatio > canvas.width) {
          cropBox.height = cropBox.width / aspectRatio;
        } else {
          cropBox.width = cropBox.height * aspectRatio;
        }
      }
      this.cropBox = cropBox;
      this.limitCropBox(true, true);
      cropBox.width = min(max(cropBox.width, cropBox.minWidth), cropBox.maxWidth);
      cropBox.height = min(max(cropBox.height, cropBox.minHeight), cropBox.maxHeight);
      cropBox.width = max(cropBox.minWidth, cropBox.width * autoCropArea);
      cropBox.height = max(cropBox.minHeight, cropBox.height * autoCropArea);
      cropBox.oldLeft = cropBox.left = canvas.left + (canvas.width - cropBox.width) / 2;
      cropBox.oldTop = cropBox.top = canvas.top + (canvas.height - cropBox.height) / 2;
      this.initialCropBox = $.extend({}, cropBox);
    },
    limitCropBox: function(size, position) {
      var options = this.options;
      var strict = options.strict;
      var container = this.container;
      var containerWidth = container.width;
      var containerHeight = container.height;
      var canvas = this.canvas;
      var cropBox = this.cropBox;
      var aspectRatio = options.aspectRatio;
      var minCropBoxWidth;
      var minCropBoxHeight;
      if (size) {
        minCropBoxWidth = num(options.minCropBoxWidth) || 0;
        minCropBoxHeight = num(options.minCropBoxHeight) || 0;
        cropBox.minWidth = min(containerWidth, minCropBoxWidth);
        cropBox.minHeight = min(containerHeight, minCropBoxHeight);
        cropBox.maxWidth = min(containerWidth, strict ? canvas.width : containerWidth);
        cropBox.maxHeight = min(containerHeight, strict ? canvas.height : containerHeight);
        if (aspectRatio) {
          if (cropBox.maxHeight * aspectRatio > cropBox.maxWidth) {
            cropBox.minHeight = cropBox.minWidth / aspectRatio;
            cropBox.maxHeight = cropBox.maxWidth / aspectRatio;
          } else {
            cropBox.minWidth = cropBox.minHeight * aspectRatio;
            cropBox.maxWidth = cropBox.maxHeight * aspectRatio;
          }
        }
        cropBox.minWidth = min(cropBox.maxWidth, cropBox.minWidth);
        cropBox.minHeight = min(cropBox.maxHeight, cropBox.minHeight);
      }
      if (position) {
        if (strict) {
          cropBox.minLeft = max(0, canvas.left);
          cropBox.minTop = max(0, canvas.top);
          cropBox.maxLeft = min(containerWidth, canvas.left + canvas.width) - cropBox.width;
          cropBox.maxTop = min(containerHeight, canvas.top + canvas.height) - cropBox.height;
        } else {
          cropBox.minLeft = 0;
          cropBox.minTop = 0;
          cropBox.maxLeft = containerWidth - cropBox.width;
          cropBox.maxTop = containerHeight - cropBox.height;
        }
      }
    },
    renderCropBox: function() {
      var options = this.options;
      var container = this.container;
      var containerWidth = container.width;
      var containerHeight = container.height;
      var cropBox = this.cropBox;
      if (cropBox.width > cropBox.maxWidth || cropBox.width < cropBox.minWidth) {
        cropBox.left = cropBox.oldLeft;
      }
      if (cropBox.height > cropBox.maxHeight || cropBox.height < cropBox.minHeight) {
        cropBox.top = cropBox.oldTop;
      }
      cropBox.width = min(max(cropBox.width, cropBox.minWidth), cropBox.maxWidth);
      cropBox.height = min(max(cropBox.height, cropBox.minHeight), cropBox.maxHeight);
      this.limitCropBox(false, true);
      cropBox.oldLeft = cropBox.left = min(max(cropBox.left, cropBox.minLeft), cropBox.maxLeft);
      cropBox.oldTop = cropBox.top = min(max(cropBox.top, cropBox.minTop), cropBox.maxTop);
      if (options.movable && options.cropBoxMovable) {
        this.$face.data('action', (cropBox.width === containerWidth && cropBox.height === containerHeight) ? ACTION_MOVE : ACTION_ALL);
      }
      this.$cropBox.css({
        width: cropBox.width,
        height: cropBox.height,
        left: cropBox.left,
        top: cropBox.top
      });
      if (this.cropped && options.strict) {
        this.limitCanvas(true, true);
      }
      if (!this.disabled) {
        this.output();
      }
    },
    output: function() {
      this.preview();
      if (this.complete) {
        this.trigger(EVENT_CROP, this.getData());
      } else if (!this.built) {
        this.$element.one(EVENT_BUILT, $.proxy(function() {
          this.trigger(EVENT_CROP, this.getData());
        }, this));
      }
    }
  });
  $.extend(prototype, {
    initPreview: function() {
      var url = this.url;
      this.$preview = $(this.options.preview);
      this.$viewBox.html('<img src="' + url + '">');
      this.$preview.each(function() {
        var $this = $(this);
        $this.data(PREVIEW, {
          width: $this.width(),
          height: $this.height(),
          original: $this.html()
        });
        $this.html('<img src="' + url + '" style="display:block;width:100%;' + 'min-width:0!important;min-height:0!important;' + 'max-width:none!important;max-height:none!important;' + 'image-orientation:0deg!important">');
      });
    },
    resetPreview: function() {
      this.$preview.each(function() {
        var $this = $(this);
        $this.html($this.data(PREVIEW).original).removeData(PREVIEW);
      });
    },
    preview: function() {
      var image = this.image;
      var canvas = this.canvas;
      var cropBox = this.cropBox;
      var width = image.width;
      var height = image.height;
      var left = cropBox.left - canvas.left - image.left;
      var top = cropBox.top - canvas.top - image.top;
      if (!this.cropped || this.disabled) {
        return;
      }
      this.$viewBox.find('img').css({
        width: width,
        height: height,
        marginLeft: -left,
        marginTop: -top,
        transform: getTransform(image)
      });
      this.$preview.each(function() {
        var $this = $(this);
        var data = $this.data(PREVIEW);
        var ratio = data.width / cropBox.width;
        var newWidth = data.width;
        var newHeight = cropBox.height * ratio;
        if (newHeight > data.height) {
          ratio = data.height / cropBox.height;
          newWidth = cropBox.width * ratio;
          newHeight = data.height;
        }
        $this.width(newWidth).height(newHeight).find('img').css({
          width: width * ratio,
          height: height * ratio,
          marginLeft: -left * ratio,
          marginTop: -top * ratio,
          transform: getTransform(image)
        });
      });
    }
  });
  $.extend(prototype, {
    bind: function() {
      var options = this.options;
      var $this = this.$element;
      var $cropper = this.$cropper;
      if ($.isFunction(options.cropstart)) {
        $this.on(EVENT_CROP_START, options.cropstart);
      }
      if ($.isFunction(options.cropmove)) {
        $this.on(EVENT_CROP_MOVE, options.cropmove);
      }
      if ($.isFunction(options.cropend)) {
        $this.on(EVENT_CROP_END, options.cropend);
      }
      if ($.isFunction(options.crop)) {
        $this.on(EVENT_CROP, options.crop);
      }
      if ($.isFunction(options.zoom)) {
        $this.on(EVENT_ZOOM, options.zoom);
      }
      $cropper.on(EVENT_MOUSE_DOWN, $.proxy(this.cropStart, this));
      if (options.zoomable && options.mouseWheelZoom) {
        $cropper.on(EVENT_WHEEL, $.proxy(this.wheel, this));
      }
      if (options.doubleClickToggle) {
        $cropper.on(EVENT_DBLCLICK, $.proxy(this.dblclick, this));
      }
      $document.on(EVENT_MOUSE_MOVE, (this._cropMove = proxy(this.cropMove, this))).on(EVENT_MOUSE_UP, (this._cropEnd = proxy(this.cropEnd, this)));
      if (options.responsive) {
        $window.on(EVENT_RESIZE, (this._resize = proxy(this.resize, this)));
      }
    },
    unbind: function() {
      var options = this.options;
      var $this = this.$element;
      var $cropper = this.$cropper;
      if ($.isFunction(options.cropstart)) {
        $this.off(EVENT_CROP_START, options.cropstart);
      }
      if ($.isFunction(options.cropmove)) {
        $this.off(EVENT_CROP_MOVE, options.cropmove);
      }
      if ($.isFunction(options.cropend)) {
        $this.off(EVENT_CROP_END, options.cropend);
      }
      if ($.isFunction(options.crop)) {
        $this.off(EVENT_CROP, options.crop);
      }
      if ($.isFunction(options.zoom)) {
        $this.off(EVENT_ZOOM, options.zoom);
      }
      $cropper.off(EVENT_MOUSE_DOWN, this.cropStart);
      if (options.zoomable && options.mouseWheelZoom) {
        $cropper.off(EVENT_WHEEL, this.wheel);
      }
      if (options.doubleClickToggle) {
        $cropper.off(EVENT_DBLCLICK, this.dblclick);
      }
      $document.off(EVENT_MOUSE_MOVE, this._cropMove).off(EVENT_MOUSE_UP, this._cropEnd);
      if (options.responsive) {
        $window.off(EVENT_RESIZE, this._resize);
      }
    }
  });
  $.extend(prototype, {
    resize: function() {
      var $container = this.$container;
      var container = this.container;
      var canvasData;
      var cropBoxData;
      var ratio;
      if (this.disabled || !container) {
        return;
      }
      ratio = $container.width() / container.width;
      if (ratio !== 1 || $container.height() !== container.height) {
        canvasData = this.getCanvasData();
        cropBoxData = this.getCropBoxData();
        this.render();
        this.setCanvasData($.each(canvasData, function(i, n) {
          canvasData[i] = n * ratio;
        }));
        this.setCropBoxData($.each(cropBoxData, function(i, n) {
          cropBoxData[i] = n * ratio;
        }));
      }
    },
    dblclick: function() {
      if (this.disabled) {
        return;
      }
      if (this.$dragBox.hasClass(CLASS_CROP)) {
        this.setDragMode(ACTION_MOVE);
      } else {
        this.setDragMode(ACTION_CROP);
      }
    },
    wheel: function(event) {
      var originalEvent = event.originalEvent;
      var e = originalEvent;
      var ratio = num(this.options.wheelZoomRatio) || 0.1;
      var delta = 1;
      if (this.disabled) {
        return;
      }
      event.preventDefault();
      if (e.deltaY) {
        delta = e.deltaY > 0 ? 1 : -1;
      } else if (e.wheelDelta) {
        delta = -e.wheelDelta / 120;
      } else if (e.detail) {
        delta = e.detail > 0 ? 1 : -1;
      }
      this.zoom(-delta * ratio, originalEvent);
    },
    cropStart: function(event) {
      var options = this.options;
      var originalEvent = event.originalEvent;
      var touches = originalEvent && originalEvent.touches;
      var e = event;
      var touchesLength;
      var action;
      if (this.disabled) {
        return;
      }
      if (touches) {
        touchesLength = touches.length;
        if (touchesLength > 1) {
          if (options.zoomable && options.touchDragZoom && touchesLength === 2) {
            e = touches[1];
            this.startX2 = e.pageX;
            this.startY2 = e.pageY;
            action = ACTION_ZOOM;
          } else {
            return;
          }
        }
        e = touches[0];
      }
      action = action || $(e.target).data('action');
      if (REGEXP_ACTIONS.test(action)) {
        if (this.trigger(EVENT_CROP_START, {
          originalEvent: originalEvent,
          action: action
        })) {
          return;
        }
        event.preventDefault();
        this.action = action;
        this.cropping = false;
        this.startX = e.pageX || originalEvent && originalEvent.pageX;
        this.startY = e.pageY || originalEvent && originalEvent.pageY;
        if (action === ACTION_CROP) {
          this.cropping = true;
          this.$dragBox.addClass(CLASS_MODAL);
        }
      }
    },
    cropMove: function(event) {
      var options = this.options;
      var originalEvent = event.originalEvent;
      var touches = originalEvent && originalEvent.touches;
      var e = event;
      var action = this.action;
      var touchesLength;
      if (this.disabled) {
        return;
      }
      if (touches) {
        touchesLength = touches.length;
        if (touchesLength > 1) {
          if (options.zoomable && options.touchDragZoom && touchesLength === 2) {
            e = touches[1];
            this.endX2 = e.pageX;
            this.endY2 = e.pageY;
          } else {
            return;
          }
        }
        e = touches[0];
      }
      if (action) {
        if (this.trigger(EVENT_CROP_MOVE, {
          originalEvent: originalEvent,
          action: action
        })) {
          return;
        }
        event.preventDefault();
        this.endX = e.pageX || originalEvent && originalEvent.pageX;
        this.endY = e.pageY || originalEvent && originalEvent.pageY;
        this.change(e.shiftKey, action === ACTION_ZOOM ? originalEvent : null);
      }
    },
    cropEnd: function(event) {
      var originalEvent = event.originalEvent;
      var action = this.action;
      if (this.disabled) {
        return;
      }
      if (action) {
        event.preventDefault();
        if (this.cropping) {
          this.cropping = false;
          this.$dragBox.toggleClass(CLASS_MODAL, this.cropped && this.options.modal);
        }
        this.action = '';
        this.trigger(EVENT_CROP_END, {
          originalEvent: originalEvent,
          action: action
        });
      }
    }
  });
  $.extend(prototype, {change: function(shiftKey, originalEvent) {
      var options = this.options;
      var aspectRatio = options.aspectRatio;
      var action = this.action;
      var container = this.container;
      var canvas = this.canvas;
      var cropBox = this.cropBox;
      var width = cropBox.width;
      var height = cropBox.height;
      var left = cropBox.left;
      var top = cropBox.top;
      var right = left + width;
      var bottom = top + height;
      var minLeft = 0;
      var minTop = 0;
      var maxWidth = container.width;
      var maxHeight = container.height;
      var renderable = true;
      var offset;
      var range;
      if (!aspectRatio && shiftKey) {
        aspectRatio = width && height ? width / height : 1;
      }
      if (options.strict) {
        minLeft = cropBox.minLeft;
        minTop = cropBox.minTop;
        maxWidth = minLeft + min(container.width, canvas.width);
        maxHeight = minTop + min(container.height, canvas.height);
      }
      range = {
        x: this.endX - this.startX,
        y: this.endY - this.startY
      };
      if (aspectRatio) {
        range.X = range.y * aspectRatio;
        range.Y = range.x / aspectRatio;
      }
      switch (action) {
        case ACTION_ALL:
          left += range.x;
          top += range.y;
          break;
        case ACTION_EAST:
          if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }
          width += range.x;
          if (aspectRatio) {
            height = width / aspectRatio;
            top -= range.Y / 2;
          }
          if (width < 0) {
            action = ACTION_WEST;
            width = 0;
          }
          break;
        case ACTION_NORTH:
          if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }
          height -= range.y;
          top += range.y;
          if (aspectRatio) {
            width = height * aspectRatio;
            left += range.X / 2;
          }
          if (height < 0) {
            action = ACTION_SOUTH;
            height = 0;
          }
          break;
        case ACTION_WEST:
          if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }
          width -= range.x;
          left += range.x;
          if (aspectRatio) {
            height = width / aspectRatio;
            top += range.Y / 2;
          }
          if (width < 0) {
            action = ACTION_EAST;
            width = 0;
          }
          break;
        case ACTION_SOUTH:
          if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }
          height += range.y;
          if (aspectRatio) {
            width = height * aspectRatio;
            left -= range.X / 2;
          }
          if (height < 0) {
            action = ACTION_NORTH;
            height = 0;
          }
          break;
        case ACTION_NORTH_EAST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
              renderable = false;
              break;
            }
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
          } else {
            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width += range.x;
            }
            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }
          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_WEST;
            height = 0;
            width = 0;
          } else if (width < 0) {
            action = ACTION_NORTH_WEST;
            width = 0;
          } else if (height < 0) {
            action = ACTION_SOUTH_EAST;
            height = 0;
          }
          break;
        case ACTION_NORTH_WEST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
              renderable = false;
              break;
            }
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
            left += range.X;
          } else {
            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }
            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }
          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_EAST;
            height = 0;
            width = 0;
          } else if (width < 0) {
            action = ACTION_NORTH_EAST;
            width = 0;
          } else if (height < 0) {
            action = ACTION_SOUTH_WEST;
            height = 0;
          }
          break;
        case ACTION_SOUTH_WEST:
          if (aspectRatio) {
            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
              renderable = false;
              break;
            }
            width -= range.x;
            left += range.x;
            height = width / aspectRatio;
          } else {
            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }
            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }
          if (width < 0 && height < 0) {
            action = ACTION_NORTH_EAST;
            height = 0;
            width = 0;
          } else if (width < 0) {
            action = ACTION_SOUTH_EAST;
            width = 0;
          } else if (height < 0) {
            action = ACTION_NORTH_WEST;
            height = 0;
          }
          break;
        case ACTION_SOUTH_EAST:
          if (aspectRatio) {
            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
              renderable = false;
              break;
            }
            width += range.x;
            height = width / aspectRatio;
          } else {
            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width += range.x;
            }
            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }
          if (width < 0 && height < 0) {
            action = ACTION_NORTH_WEST;
            height = 0;
            width = 0;
          } else if (width < 0) {
            action = ACTION_SOUTH_WEST;
            width = 0;
          } else if (height < 0) {
            action = ACTION_NORTH_EAST;
            height = 0;
          }
          break;
        case ACTION_MOVE:
          canvas.left += range.x;
          canvas.top += range.y;
          this.renderCanvas(true);
          renderable = false;
          break;
        case ACTION_ZOOM:
          this.zoom((function(x1, y1, x2, y2) {
            var z1 = sqrt(x1 * x1 + y1 * y1);
            var z2 = sqrt(x2 * x2 + y2 * y2);
            return (z2 - z1) / z1;
          })(abs(this.startX - this.startX2), abs(this.startY - this.startY2), abs(this.endX - this.endX2), abs(this.endY - this.endY2)), originalEvent);
          this.startX2 = this.endX2;
          this.startY2 = this.endY2;
          renderable = false;
          break;
        case ACTION_CROP:
          if (range.x && range.y) {
            offset = this.$cropper.offset();
            left = this.startX - offset.left;
            top = this.startY - offset.top;
            width = cropBox.minWidth;
            height = cropBox.minHeight;
            if (range.x > 0) {
              if (range.y > 0) {
                action = ACTION_SOUTH_EAST;
              } else {
                action = ACTION_NORTH_EAST;
                top -= height;
              }
            } else {
              if (range.y > 0) {
                action = ACTION_SOUTH_WEST;
                left -= width;
              } else {
                action = ACTION_NORTH_WEST;
                left -= width;
                top -= height;
              }
            }
            if (!this.cropped) {
              this.cropped = true;
              this.$cropBox.removeClass(CLASS_HIDDEN);
            }
          }
          break;
      }
      if (renderable) {
        cropBox.width = width;
        cropBox.height = height;
        cropBox.left = left;
        cropBox.top = top;
        this.action = action;
        this.renderCropBox();
      }
      this.startX = this.endX;
      this.startY = this.endY;
    }});
  $.extend(prototype, {
    crop: function() {
      if (!this.built || this.disabled) {
        return;
      }
      if (!this.cropped) {
        this.cropped = true;
        this.limitCropBox(true, true);
        if (this.options.modal) {
          this.$dragBox.addClass(CLASS_MODAL);
        }
        this.$cropBox.removeClass(CLASS_HIDDEN);
      }
      this.setCropBoxData(this.initialCropBox);
    },
    reset: function() {
      if (!this.built || this.disabled) {
        return;
      }
      this.image = $.extend({}, this.initialImage);
      this.canvas = $.extend({}, this.initialCanvas);
      this.cropBox = $.extend({}, this.initialCropBox);
      this.renderCanvas();
      if (this.cropped) {
        this.renderCropBox();
      }
    },
    clear: function() {
      if (!this.cropped || this.disabled) {
        return;
      }
      $.extend(this.cropBox, {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      });
      this.cropped = false;
      this.renderCropBox();
      this.limitCanvas();
      this.renderCanvas();
      this.$dragBox.removeClass(CLASS_MODAL);
      this.$cropBox.addClass(CLASS_HIDDEN);
    },
    replace: function(url) {
      if (!this.disabled && url) {
        if (this.isImg) {
          this.$element.attr('src', url);
        }
        this.options.data = null;
        this.load(url);
      }
    },
    enable: function() {
      if (this.built) {
        this.disabled = false;
        this.$cropper.removeClass(CLASS_DISABLED);
      }
    },
    disable: function() {
      if (this.built) {
        this.disabled = true;
        this.$cropper.addClass(CLASS_DISABLED);
      }
    },
    destroy: function() {
      var $this = this.$element;
      if (this.ready) {
        if (this.isImg) {
          $this.attr('src', this.originalUrl);
        }
        this.unbuild();
        $this.removeClass(CLASS_HIDDEN);
      } else {
        if (this.isImg) {
          $this.off(EVENT_LOAD, this.start);
        } else if (this.$clone) {
          this.$clone.remove();
        }
      }
      $this.removeData(NAMESPACE);
    },
    move: function(offsetX, offsetY) {
      var canvas = this.canvas;
      if (isUndefined(offsetY)) {
        offsetY = offsetX;
      }
      offsetX = num(offsetX);
      offsetY = num(offsetY);
      if (this.built && !this.disabled && this.options.movable) {
        canvas.left += isNumber(offsetX) ? offsetX : 0;
        canvas.top += isNumber(offsetY) ? offsetY : 0;
        this.renderCanvas(true);
      }
    },
    zoom: function(ratio, _originalEvent) {
      var canvas = this.canvas;
      var width;
      var height;
      ratio = num(ratio);
      if (ratio && this.built && !this.disabled && this.options.zoomable) {
        if (this.trigger(EVENT_ZOOM, {
          originalEvent: _originalEvent,
          ratio: ratio
        })) {
          return;
        }
        if (ratio < 0) {
          ratio = 1 / (1 - ratio);
        } else {
          ratio = 1 + ratio;
        }
        width = canvas.width * ratio;
        height = canvas.height * ratio;
        canvas.left -= (width - canvas.width) / 2;
        canvas.top -= (height - canvas.height) / 2;
        canvas.width = width;
        canvas.height = height;
        this.renderCanvas(true);
        this.setDragMode(ACTION_MOVE);
      }
    },
    rotate: function(degree) {
      var image = this.image;
      var rotate = image.rotate || 0;
      degree = num(degree) || 0;
      if (this.built && !this.disabled && this.options.rotatable) {
        image.rotate = (rotate + degree) % 360;
        this.rotated = true;
        this.renderCanvas(true);
      }
    },
    scale: function(scaleX, scaleY) {
      var image = this.image;
      if (isUndefined(scaleY)) {
        scaleY = scaleX;
      }
      scaleX = num(scaleX);
      scaleY = num(scaleY);
      if (this.built && !this.disabled && this.options.scalable) {
        image.scaleX = isNumber(scaleX) ? scaleX : 1;
        image.scaleY = isNumber(scaleY) ? scaleY : 1;
        this.renderImage(true);
      }
    },
    getData: function(rounded) {
      var options = this.options;
      var image = this.image;
      var canvas = this.canvas;
      var cropBox = this.cropBox;
      var ratio;
      var data;
      if (this.built && this.cropped) {
        data = {
          x: cropBox.left - canvas.left,
          y: cropBox.top - canvas.top,
          width: cropBox.width,
          height: cropBox.height
        };
        ratio = image.width / image.naturalWidth;
        $.each(data, function(i, n) {
          n = n / ratio;
          data[i] = rounded ? Math.round(n) : n;
        });
      } else {
        data = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      if (options.rotatable) {
        data.rotate = image.rotate || 0;
      }
      if (options.scalable) {
        data.scaleX = image.scaleX || 1;
        data.scaleY = image.scaleY || 1;
      }
      return data;
    },
    setData: function(data) {
      var image = this.image;
      var canvas = this.canvas;
      var cropBoxData = {};
      var ratio;
      if ($.isFunction(data)) {
        data = data.call(this.$element);
      }
      if (this.built && !this.disabled && $.isPlainObject(data)) {
        if (isNumber(data.rotate) && data.rotate !== image.rotate && this.options.rotatable) {
          image.rotate = data.rotate;
          this.rotated = true;
          this.renderCanvas(true);
        }
        ratio = image.width / image.naturalWidth;
        if (isNumber(data.x)) {
          cropBoxData.left = data.x * ratio + canvas.left;
        }
        if (isNumber(data.y)) {
          cropBoxData.top = data.y * ratio + canvas.top;
        }
        if (isNumber(data.width)) {
          cropBoxData.width = data.width * ratio;
        }
        if (isNumber(data.height)) {
          cropBoxData.height = data.height * ratio;
        }
        this.setCropBoxData(cropBoxData);
      }
    },
    getContainerData: function() {
      return this.built ? this.container : {};
    },
    getImageData: function() {
      return this.ready ? this.image : {};
    },
    getCanvasData: function() {
      var canvas = this.canvas;
      var data;
      if (this.built) {
        data = {
          left: canvas.left,
          top: canvas.top,
          width: canvas.width,
          height: canvas.height
        };
      }
      return data || {};
    },
    setCanvasData: function(data) {
      var canvas = this.canvas;
      var aspectRatio = canvas.aspectRatio;
      if ($.isFunction(data)) {
        data = data.call(this.$element);
      }
      if (this.built && !this.disabled && $.isPlainObject(data)) {
        if (isNumber(data.left)) {
          canvas.left = data.left;
        }
        if (isNumber(data.top)) {
          canvas.top = data.top;
        }
        if (isNumber(data.width)) {
          canvas.width = data.width;
          canvas.height = data.width / aspectRatio;
        } else if (isNumber(data.height)) {
          canvas.height = data.height;
          canvas.width = data.height * aspectRatio;
        }
        this.renderCanvas(true);
      }
    },
    getCropBoxData: function() {
      var cropBox = this.cropBox;
      var data;
      if (this.built && this.cropped) {
        data = {
          left: cropBox.left,
          top: cropBox.top,
          width: cropBox.width,
          height: cropBox.height
        };
      }
      return data || {};
    },
    setCropBoxData: function(data) {
      var cropBox = this.cropBox;
      var aspectRatio = this.options.aspectRatio;
      var widthChanged;
      var heightChanged;
      if ($.isFunction(data)) {
        data = data.call(this.$element);
      }
      if (this.built && this.cropped && !this.disabled && $.isPlainObject(data)) {
        if (isNumber(data.left)) {
          cropBox.left = data.left;
        }
        if (isNumber(data.top)) {
          cropBox.top = data.top;
        }
        if (isNumber(data.width) && data.width !== cropBox.width) {
          widthChanged = true;
          cropBox.width = data.width;
        }
        if (isNumber(data.height) && data.height !== cropBox.height) {
          heightChanged = true;
          cropBox.height = data.height;
        }
        if (aspectRatio) {
          if (widthChanged) {
            cropBox.height = cropBox.width / aspectRatio;
          } else if (heightChanged) {
            cropBox.width = cropBox.height * aspectRatio;
          }
        }
        this.renderCropBox();
      }
    },
    getCroppedCanvas: function(options) {
      var originalWidth;
      var originalHeight;
      var canvasWidth;
      var canvasHeight;
      var scaledWidth;
      var scaledHeight;
      var scaledRatio;
      var aspectRatio;
      var canvas;
      var context;
      var data;
      if (!this.built || !this.cropped || !SUPPORT_CANVAS) {
        return;
      }
      if (!$.isPlainObject(options)) {
        options = {};
      }
      data = this.getData();
      originalWidth = data.width;
      originalHeight = data.height;
      aspectRatio = originalWidth / originalHeight;
      if ($.isPlainObject(options)) {
        scaledWidth = options.width;
        scaledHeight = options.height;
        if (scaledWidth) {
          scaledHeight = scaledWidth / aspectRatio;
          scaledRatio = scaledWidth / originalWidth;
        } else if (scaledHeight) {
          scaledWidth = scaledHeight * aspectRatio;
          scaledRatio = scaledHeight / originalHeight;
        }
      }
      canvasWidth = scaledWidth || originalWidth;
      canvasHeight = scaledHeight || originalHeight;
      canvas = $('<canvas>')[0];
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      context = canvas.getContext('2d');
      if (options.fillColor) {
        context.fillStyle = options.fillColor;
        context.fillRect(0, 0, canvasWidth, canvasHeight);
      }
      context.drawImage.apply(context, (function() {
        var source = getSourceCanvas(this.$clone[0], this.image);
        var sourceWidth = source.width;
        var sourceHeight = source.height;
        var args = [source];
        var srcX = data.x;
        var srcY = data.y;
        var srcWidth;
        var srcHeight;
        var dstX;
        var dstY;
        var dstWidth;
        var dstHeight;
        if (srcX <= -originalWidth || srcX > sourceWidth) {
          srcX = srcWidth = dstX = dstWidth = 0;
        } else if (srcX <= 0) {
          dstX = -srcX;
          srcX = 0;
          srcWidth = dstWidth = min(sourceWidth, originalWidth + srcX);
        } else if (srcX <= sourceWidth) {
          dstX = 0;
          srcWidth = dstWidth = min(originalWidth, sourceWidth - srcX);
        }
        if (srcWidth <= 0 || srcY <= -originalHeight || srcY > sourceHeight) {
          srcY = srcHeight = dstY = dstHeight = 0;
        } else if (srcY <= 0) {
          dstY = -srcY;
          srcY = 0;
          srcHeight = dstHeight = min(sourceHeight, originalHeight + srcY);
        } else if (srcY <= sourceHeight) {
          dstY = 0;
          srcHeight = dstHeight = min(originalHeight, sourceHeight - srcY);
        }
        args.push(srcX, srcY, srcWidth, srcHeight);
        if (scaledRatio) {
          dstX *= scaledRatio;
          dstY *= scaledRatio;
          dstWidth *= scaledRatio;
          dstHeight *= scaledRatio;
        }
        if (dstWidth > 0 && dstHeight > 0) {
          args.push(dstX, dstY, dstWidth, dstHeight);
        }
        return args;
      }).call(this));
      return canvas;
    },
    setAspectRatio: function(aspectRatio) {
      var options = this.options;
      if (!this.disabled && !isUndefined(aspectRatio)) {
        options.aspectRatio = num(aspectRatio) || NaN;
        if (this.built) {
          this.initCropBox();
          if (this.cropped) {
            this.renderCropBox();
          }
        }
      }
    },
    setDragMode: function(mode) {
      var options = this.options;
      var croppable;
      var movable;
      if (this.ready && !this.disabled) {
        croppable = options.dragCrop && mode === ACTION_CROP;
        movable = options.movable && mode === ACTION_MOVE;
        mode = (croppable || movable) ? mode : ACTION_NONE;
        this.$dragBox.data('action', mode).toggleClass(CLASS_CROP, croppable).toggleClass(CLASS_MOVE, movable);
        if (!options.cropBoxMovable) {
          this.$face.data('action', mode).toggleClass(CLASS_CROP, croppable).toggleClass(CLASS_MOVE, movable);
        }
      }
    }
  });
  $.extend(Cropper.prototype, prototype);
  Cropper.DEFAULTS = {
    aspectRatio: NaN,
    data: null,
    preview: '',
    strict: true,
    responsive: true,
    checkImageOrigin: true,
    modal: true,
    guides: true,
    center: true,
    highlight: true,
    background: true,
    autoCrop: true,
    autoCropArea: 0.8,
    dragCrop: true,
    movable: true,
    rotatable: true,
    scalable: true,
    zoomable: true,
    mouseWheelZoom: true,
    wheelZoomRatio: 0.1,
    touchDragZoom: true,
    cropBoxMovable: true,
    cropBoxResizable: true,
    doubleClickToggle: true,
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: 200,
    minContainerHeight: 100,
    build: null,
    built: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  };
  Cropper.setDefaults = function(options) {
    $.extend(Cropper.DEFAULTS, options);
  };
  Cropper.TEMPLATE = ('<div class="cropper-container">' + '<div class="cropper-canvas"></div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-action="e"></span>' + '<span class="cropper-line line-n" data-action="n"></span>' + '<span class="cropper-line line-w" data-action="w"></span>' + '<span class="cropper-line line-s" data-action="s"></span>' + '<span class="cropper-point point-e" data-action="e"></span>' + '<span class="cropper-point point-n" data-action="n"></span>' + '<span class="cropper-point point-w" data-action="w"></span>' + '<span class="cropper-point point-s" data-action="s"></span>' + '<span class="cropper-point point-ne" data-action="ne"></span>' + '<span class="cropper-point point-nw" data-action="nw"></span>' + '<span class="cropper-point point-sw" data-action="sw"></span>' + '<span class="cropper-point point-se" data-action="se"></span>' + '</div>' + '</div>');
  Cropper.other = $.fn.cropper;
  $.fn.cropper = function(options) {
    var args = toArray(arguments, 1);
    var result;
    this.each(function() {
      var $this = $(this);
      var data = $this.data(NAMESPACE);
      var fn;
      if (!data) {
        if (/destroy/.test(options)) {
          return;
        }
        $this.data(NAMESPACE, (data = new Cropper(this, options)));
      }
      if (typeof options === 'string' && $.isFunction(fn = data[options])) {
        result = fn.apply(data, args);
      }
    });
    return isUndefined(result) ? this : result;
  };
  $.fn.cropper.Constructor = Cropper;
  $.fn.cropper.setDefaults = Cropper.setDefaults;
  $.fn.cropper.noConflict = function() {
    $.fn.cropper = Cropper.other;
    return this;
  };
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("github:fengyuanchen/cropper@0.11.1", ["github:fengyuanchen/cropper@0.11.1/dist/cropper"], function(main) {
  return main;
});

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
!function(e, t, n) {
  "use strict";
  !function o(e, t, n) {
    function a(s, l) {
      if (!t[s]) {
        if (!e[s]) {
          var i = "function" == typeof require && require;
          if (!l && i)
            return i(s, !0);
          if (r)
            return r(s, !0);
          var u = new Error("Cannot find module '" + s + "'");
          throw u.code = "MODULE_NOT_FOUND", u;
        }
        var c = t[s] = {exports: {}};
        e[s][0].call(c.exports, function(t) {
          var n = e[s][1][t];
          return a(n ? n : t);
        }, c, c.exports, o, e, t, n);
      }
      return t[s].exports;
    }
    for (var r = "function" == typeof require && require,
        s = 0; s < n.length; s++)
      a(n[s]);
    return a;
  }({
    1: [function(o) {
      var a,
          r,
          s,
          l,
          i = function(e) {
            return e && e.__esModule ? e : {"default": e};
          },
          u = o("./modules/handle-dom"),
          c = o("./modules/utils"),
          d = o("./modules/handle-swal-dom"),
          f = o("./modules/handle-click"),
          p = o("./modules/handle-key"),
          m = i(p),
          v = o("./modules/default-params"),
          y = i(v),
          h = o("./modules/set-params"),
          g = i(h);
      s = l = function() {
        function o(e) {
          var t = s;
          return t[e] === n ? y["default"][e] : t[e];
        }
        var s = arguments[0];
        if (u.addClass(t.body, "stop-scrolling"), d.resetInput(), s === n)
          return c.logStr("SweetAlert expects at least 1 attribute!"), !1;
        var i = c.extend({}, y["default"]);
        switch (typeof s) {
          case "string":
            i.title = s, i.text = arguments[1] || "", i.type = arguments[2] || "";
            break;
          case "object":
            if (s.title === n)
              return c.logStr('Missing "title" argument!'), !1;
            i.title = s.title;
            for (var p in y["default"])
              i[p] = o(p);
            i.confirmButtonText = i.showCancelButton ? "Confirm" : y["default"].confirmButtonText, i.confirmButtonText = o("confirmButtonText"), i.doneFunction = arguments[1] || null;
            break;
          default:
            return c.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof s), !1;
        }
        g["default"](i), d.fixVerticalPosition(), d.openModal(arguments[1]);
        for (var v = d.getModal(),
            h = v.querySelectorAll("button"),
            b = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"],
            w = function(e) {
              return f.handleButton(e, i, v);
            },
            C = 0; C < h.length; C++)
          for (var S = 0; S < b.length; S++) {
            var x = b[S];
            h[C][x] = w;
          }
        d.getOverlay().onclick = w, a = e.onkeydown;
        var k = function(e) {
          return m["default"](e, i, v);
        };
        e.onkeydown = k, e.onfocus = function() {
          setTimeout(function() {
            r !== n && (r.focus(), r = n);
          }, 0);
        }, l.enableButtons();
      }, s.setDefaults = l.setDefaults = function(e) {
        if (!e)
          throw new Error("userParams is required");
        if ("object" != typeof e)
          throw new Error("userParams has to be a object");
        c.extend(y["default"], e);
      }, s.close = l.close = function() {
        var o = d.getModal();
        u.fadeOut(d.getOverlay(), 5), u.fadeOut(o, 5), u.removeClass(o, "showSweetAlert"), u.addClass(o, "hideSweetAlert"), u.removeClass(o, "visible");
        var s = o.querySelector(".sa-icon.sa-success");
        u.removeClass(s, "animate"), u.removeClass(s.querySelector(".sa-tip"), "animateSuccessTip"), u.removeClass(s.querySelector(".sa-long"), "animateSuccessLong");
        var l = o.querySelector(".sa-icon.sa-error");
        u.removeClass(l, "animateErrorIcon"), u.removeClass(l.querySelector(".sa-x-mark"), "animateXMark");
        var i = o.querySelector(".sa-icon.sa-warning");
        return u.removeClass(i, "pulseWarning"), u.removeClass(i.querySelector(".sa-body"), "pulseWarningIns"), u.removeClass(i.querySelector(".sa-dot"), "pulseWarningIns"), setTimeout(function() {
          var e = o.getAttribute("data-custom-class");
          u.removeClass(o, e);
        }, 300), u.removeClass(t.body, "stop-scrolling"), e.onkeydown = a, e.previousActiveElement && e.previousActiveElement.focus(), r = n, clearTimeout(o.timeout), !0;
      }, s.showInputError = l.showInputError = function(e) {
        var t = d.getModal(),
            n = t.querySelector(".sa-input-error");
        u.addClass(n, "show");
        var o = t.querySelector(".sa-error-container");
        u.addClass(o, "show"), o.querySelector("p").innerHTML = e, setTimeout(function() {
          s.enableButtons();
        }, 1), t.querySelector("input").focus();
      }, s.resetInputError = l.resetInputError = function(e) {
        if (e && 13 === e.keyCode)
          return !1;
        var t = d.getModal(),
            n = t.querySelector(".sa-input-error");
        u.removeClass(n, "show");
        var o = t.querySelector(".sa-error-container");
        u.removeClass(o, "show");
      }, s.disableButtons = l.disableButtons = function() {
        var e = d.getModal(),
            t = e.querySelector("button.confirm"),
            n = e.querySelector("button.cancel");
        t.disabled = !0, n.disabled = !0;
      }, s.enableButtons = l.enableButtons = function() {
        var e = d.getModal(),
            t = e.querySelector("button.confirm"),
            n = e.querySelector("button.cancel");
        t.disabled = !1, n.disabled = !1;
      }, "undefined" != typeof e ? e.sweetAlert = e.swal = s : c.logStr("SweetAlert is a frontend module!");
    }, {
      "./modules/default-params": 2,
      "./modules/handle-click": 3,
      "./modules/handle-dom": 4,
      "./modules/handle-key": 5,
      "./modules/handle-swal-dom": 6,
      "./modules/set-params": 8,
      "./modules/utils": 9
    }],
    2: [function(e, t, n) {
      Object.defineProperty(n, "__esModule", {value: !0});
      var o = {
        title: "",
        text: "",
        type: null,
        allowOutsideClick: !1,
        showConfirmButton: !0,
        showCancelButton: !1,
        closeOnConfirm: !0,
        closeOnCancel: !0,
        confirmButtonText: "OK",
        confirmButtonColor: "#8CD4F5",
        cancelButtonText: "Cancel",
        imageUrl: null,
        imageSize: null,
        timer: null,
        customClass: "",
        html: !1,
        animation: !0,
        allowEscapeKey: !0,
        inputType: "text",
        inputPlaceholder: "",
        inputValue: "",
        showLoaderOnConfirm: !1
      };
      n["default"] = o, t.exports = n["default"];
    }, {}],
    3: [function(t, n, o) {
      Object.defineProperty(o, "__esModule", {value: !0});
      var a = t("./utils"),
          r = (t("./handle-swal-dom"), t("./handle-dom")),
          s = function(t, n, o) {
            function s(e) {
              m && n.confirmButtonColor && (p.style.backgroundColor = e);
            }
            var u,
                c,
                d,
                f = t || e.event,
                p = f.target || f.srcElement,
                m = -1 !== p.className.indexOf("confirm"),
                v = -1 !== p.className.indexOf("sweet-overlay"),
                y = r.hasClass(o, "visible"),
                h = n.doneFunction && "true" === o.getAttribute("data-has-done-function");
            switch (m && n.confirmButtonColor && (u = n.confirmButtonColor, c = a.colorLuminance(u, -.04), d = a.colorLuminance(u, -.14)), f.type) {
              case "mouseover":
                s(c);
                break;
              case "mouseout":
                s(u);
                break;
              case "mousedown":
                s(d);
                break;
              case "mouseup":
                s(c);
                break;
              case "focus":
                var g = o.querySelector("button.confirm"),
                    b = o.querySelector("button.cancel");
                m ? b.style.boxShadow = "none" : g.style.boxShadow = "none";
                break;
              case "click":
                var w = o === p,
                    C = r.isDescendant(o, p);
                if (!w && !C && y && !n.allowOutsideClick)
                  break;
                m && h && y ? l(o, n) : h && y || v ? i(o, n) : r.isDescendant(o, p) && "BUTTON" === p.tagName && sweetAlert.close();
            }
          },
          l = function(e, t) {
            var n = !0;
            r.hasClass(e, "show-input") && (n = e.querySelector("input").value, n || (n = "")), t.doneFunction(n), t.closeOnConfirm && sweetAlert.close(), t.showLoaderOnConfirm && sweetAlert.disableButtons();
          },
          i = function(e, t) {
            var n = String(t.doneFunction).replace(/\s/g, ""),
                o = "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10);
            o && t.doneFunction(!1), t.closeOnCancel && sweetAlert.close();
          };
      o["default"] = {
        handleButton: s,
        handleConfirm: l,
        handleCancel: i
      }, n.exports = o["default"];
    }, {
      "./handle-dom": 4,
      "./handle-swal-dom": 6,
      "./utils": 9
    }],
    4: [function(n, o, a) {
      Object.defineProperty(a, "__esModule", {value: !0});
      var r = function(e, t) {
        return new RegExp(" " + t + " ").test(" " + e.className + " ");
      },
          s = function(e, t) {
            r(e, t) || (e.className += " " + t);
          },
          l = function(e, t) {
            var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
            if (r(e, t)) {
              for (; n.indexOf(" " + t + " ") >= 0; )
                n = n.replace(" " + t + " ", " ");
              e.className = n.replace(/^\s+|\s+$/g, "");
            }
          },
          i = function(e) {
            var n = t.createElement("div");
            return n.appendChild(t.createTextNode(e)), n.innerHTML;
          },
          u = function(e) {
            e.style.opacity = "", e.style.display = "block";
          },
          c = function(e) {
            if (e && !e.length)
              return u(e);
            for (var t = 0; t < e.length; ++t)
              u(e[t]);
          },
          d = function(e) {
            e.style.opacity = "", e.style.display = "none";
          },
          f = function(e) {
            if (e && !e.length)
              return d(e);
            for (var t = 0; t < e.length; ++t)
              d(e[t]);
          },
          p = function(e, t) {
            for (var n = t.parentNode; null !== n; ) {
              if (n === e)
                return !0;
              n = n.parentNode;
            }
            return !1;
          },
          m = function(e) {
            e.style.left = "-9999px", e.style.display = "block";
            var t,
                n = e.clientHeight;
            return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding-top"), 10) : parseInt(e.currentStyle.padding), e.style.left = "", e.style.display = "none", "-" + parseInt((n + t) / 2) + "px";
          },
          v = function(e, t) {
            if (+e.style.opacity < 1) {
              t = t || 16, e.style.opacity = 0, e.style.display = "block";
              var n = +new Date,
                  o = function(e) {
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return t.toString = function() {
                      return e.toString();
                    }, t;
                  }(function() {
                    e.style.opacity = +e.style.opacity + (new Date - n) / 100, n = +new Date, +e.style.opacity < 1 && setTimeout(o, t);
                  });
              o();
            }
            e.style.display = "block";
          },
          y = function(e, t) {
            t = t || 16, e.style.opacity = 1;
            var n = +new Date,
                o = function(e) {
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t.toString = function() {
                    return e.toString();
                  }, t;
                }(function() {
                  e.style.opacity = +e.style.opacity - (new Date - n) / 100, n = +new Date, +e.style.opacity > 0 ? setTimeout(o, t) : e.style.display = "none";
                });
            o();
          },
          h = function(n) {
            if ("function" == typeof MouseEvent) {
              var o = new MouseEvent("click", {
                view: e,
                bubbles: !1,
                cancelable: !0
              });
              n.dispatchEvent(o);
            } else if (t.createEvent) {
              var a = t.createEvent("MouseEvents");
              a.initEvent("click", !1, !1), n.dispatchEvent(a);
            } else
              t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick();
          },
          g = function(t) {
            "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0);
          };
      a.hasClass = r, a.addClass = s, a.removeClass = l, a.escapeHtml = i, a._show = u, a.show = c, a._hide = d, a.hide = f, a.isDescendant = p, a.getTopMargin = m, a.fadeIn = v, a.fadeOut = y, a.fireClick = h, a.stopEventPropagation = g;
    }, {}],
    5: [function(t, o, a) {
      Object.defineProperty(a, "__esModule", {value: !0});
      var r = t("./handle-dom"),
          s = t("./handle-swal-dom"),
          l = function(t, o, a) {
            var l = t || e.event,
                i = l.keyCode || l.which,
                u = a.querySelector("button.confirm"),
                c = a.querySelector("button.cancel"),
                d = a.querySelectorAll("button[tabindex]");
            if (-1 !== [9, 13, 32, 27].indexOf(i)) {
              for (var f = l.target || l.srcElement,
                  p = -1,
                  m = 0; m < d.length; m++)
                if (f === d[m]) {
                  p = m;
                  break;
                }
              9 === i ? (f = -1 === p ? u : p === d.length - 1 ? d[0] : d[p + 1], r.stopEventPropagation(l), f.focus(), o.confirmButtonColor && s.setFocusStyle(f, o.confirmButtonColor)) : 13 === i ? ("INPUT" === f.tagName && (f = u, u.focus()), f = -1 === p ? u : n) : 27 === i && o.allowEscapeKey === !0 ? (f = c, r.fireClick(f, l)) : f = n;
            }
          };
      a["default"] = l, o.exports = a["default"];
    }, {
      "./handle-dom": 4,
      "./handle-swal-dom": 6
    }],
    6: [function(n, o, a) {
      var r = function(e) {
        return e && e.__esModule ? e : {"default": e};
      };
      Object.defineProperty(a, "__esModule", {value: !0});
      var s = n("./utils"),
          l = n("./handle-dom"),
          i = n("./default-params"),
          u = r(i),
          c = n("./injected-html"),
          d = r(c),
          f = ".sweet-alert",
          p = ".sweet-overlay",
          m = function() {
            var e = t.createElement("div");
            for (e.innerHTML = d["default"]; e.firstChild; )
              t.body.appendChild(e.firstChild);
          },
          v = function(e) {
            function t() {
              return e.apply(this, arguments);
            }
            return t.toString = function() {
              return e.toString();
            }, t;
          }(function() {
            var e = t.querySelector(f);
            return e || (m(), e = v()), e;
          }),
          y = function() {
            var e = v();
            return e ? e.querySelector("input") : void 0;
          },
          h = function() {
            return t.querySelector(p);
          },
          g = function(e, t) {
            var n = s.hexToRgb(t);
            e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)";
          },
          b = function(n) {
            var o = v();
            l.fadeIn(h(), 10), l.show(o), l.addClass(o, "showSweetAlert"), l.removeClass(o, "hideSweetAlert"), e.previousActiveElement = t.activeElement;
            var a = o.querySelector("button.confirm");
            a.focus(), setTimeout(function() {
              l.addClass(o, "visible");
            }, 500);
            var r = o.getAttribute("data-timer");
            if ("null" !== r && "" !== r) {
              var s = n;
              o.timeout = setTimeout(function() {
                var e = (s || null) && "true" === o.getAttribute("data-has-done-function");
                e ? s(null) : sweetAlert.close();
              }, r);
            }
          },
          w = function() {
            var e = v(),
                t = y();
            l.removeClass(e, "show-input"), t.value = u["default"].inputValue, t.setAttribute("type", u["default"].inputType), t.setAttribute("placeholder", u["default"].inputPlaceholder), C();
          },
          C = function(e) {
            if (e && 13 === e.keyCode)
              return !1;
            var t = v(),
                n = t.querySelector(".sa-input-error");
            l.removeClass(n, "show");
            var o = t.querySelector(".sa-error-container");
            l.removeClass(o, "show");
          },
          S = function() {
            var e = v();
            e.style.marginTop = l.getTopMargin(v());
          };
      a.sweetAlertInitialize = m, a.getModal = v, a.getOverlay = h, a.getInput = y, a.setFocusStyle = g, a.openModal = b, a.resetInput = w, a.resetInputError = C, a.fixVerticalPosition = S;
    }, {
      "./default-params": 2,
      "./handle-dom": 4,
      "./injected-html": 7,
      "./utils": 9
    }],
    7: [function(e, t, n) {
      Object.defineProperty(n, "__esModule", {value: !0});
      var o = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';
      n["default"] = o, t.exports = n["default"];
    }, {}],
    8: [function(e, t, o) {
      Object.defineProperty(o, "__esModule", {value: !0});
      var a = e("./utils"),
          r = e("./handle-swal-dom"),
          s = e("./handle-dom"),
          l = ["error", "warning", "info", "success", "input", "prompt"],
          i = function(e) {
            var t = r.getModal(),
                o = t.querySelector("h2"),
                i = t.querySelector("p"),
                u = t.querySelector("button.cancel"),
                c = t.querySelector("button.confirm");
            if (o.innerHTML = e.html ? e.title : s.escapeHtml(e.title).split("\n").join("<br>"), i.innerHTML = e.html ? e.text : s.escapeHtml(e.text || "").split("\n").join("<br>"), e.text && s.show(i), e.customClass)
              s.addClass(t, e.customClass), t.setAttribute("data-custom-class", e.customClass);
            else {
              var d = t.getAttribute("data-custom-class");
              s.removeClass(t, d), t.setAttribute("data-custom-class", "");
            }
            if (s.hide(t.querySelectorAll(".sa-icon")), e.type && !a.isIE8()) {
              var f = function() {
                for (var o = !1,
                    a = 0; a < l.length; a++)
                  if (e.type === l[a]) {
                    o = !0;
                    break;
                  }
                if (!o)
                  return logStr("Unknown alert type: " + e.type), {v: !1};
                var i = ["success", "error", "warning", "info"],
                    u = n;
                -1 !== i.indexOf(e.type) && (u = t.querySelector(".sa-icon.sa-" + e.type), s.show(u));
                var c = r.getInput();
                switch (e.type) {
                  case "success":
                    s.addClass(u, "animate"), s.addClass(u.querySelector(".sa-tip"), "animateSuccessTip"), s.addClass(u.querySelector(".sa-long"), "animateSuccessLong");
                    break;
                  case "error":
                    s.addClass(u, "animateErrorIcon"), s.addClass(u.querySelector(".sa-x-mark"), "animateXMark");
                    break;
                  case "warning":
                    s.addClass(u, "pulseWarning"), s.addClass(u.querySelector(".sa-body"), "pulseWarningIns"), s.addClass(u.querySelector(".sa-dot"), "pulseWarningIns");
                    break;
                  case "input":
                  case "prompt":
                    c.setAttribute("type", e.inputType), c.value = e.inputValue, c.setAttribute("placeholder", e.inputPlaceholder), s.addClass(t, "show-input"), setTimeout(function() {
                      c.focus(), c.addEventListener("keyup", swal.resetInputError);
                    }, 400);
                }
              }();
              if ("object" == typeof f)
                return f.v;
            }
            if (e.imageUrl) {
              var p = t.querySelector(".sa-icon.sa-custom");
              p.style.backgroundImage = "url(" + e.imageUrl + ")", s.show(p);
              var m = 80,
                  v = 80;
              if (e.imageSize) {
                var y = e.imageSize.toString().split("x"),
                    h = y[0],
                    g = y[1];
                h && g ? (m = h, v = g) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + e.imageSize);
              }
              p.setAttribute("style", p.getAttribute("style") + "width:" + m + "px; height:" + v + "px");
            }
            t.setAttribute("data-has-cancel-button", e.showCancelButton), e.showCancelButton ? u.style.display = "inline-block" : s.hide(u), t.setAttribute("data-has-confirm-button", e.showConfirmButton), e.showConfirmButton ? c.style.display = "inline-block" : s.hide(c), e.cancelButtonText && (u.innerHTML = s.escapeHtml(e.cancelButtonText)), e.confirmButtonText && (c.innerHTML = s.escapeHtml(e.confirmButtonText)), e.confirmButtonColor && (c.style.backgroundColor = e.confirmButtonColor, c.style.borderLeftColor = e.confirmLoadingButtonColor, c.style.borderRightColor = e.confirmLoadingButtonColor, r.setFocusStyle(c, e.confirmButtonColor)), t.setAttribute("data-allow-outside-click", e.allowOutsideClick);
            var b = e.doneFunction ? !0 : !1;
            t.setAttribute("data-has-done-function", b), e.animation ? "string" == typeof e.animation ? t.setAttribute("data-animation", e.animation) : t.setAttribute("data-animation", "pop") : t.setAttribute("data-animation", "none"), t.setAttribute("data-timer", e.timer);
          };
      o["default"] = i, t.exports = o["default"];
    }, {
      "./handle-dom": 4,
      "./handle-swal-dom": 6,
      "./utils": 9
    }],
    9: [function(t, n, o) {
      Object.defineProperty(o, "__esModule", {value: !0});
      var a = function(e, t) {
        for (var n in t)
          t.hasOwnProperty(n) && (e[n] = t[n]);
        return e;
      },
          r = function(e) {
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null;
          },
          s = function() {
            return e.attachEvent && !e.addEventListener;
          },
          l = function(t) {
            e.console && e.console.log("SweetAlert: " + t);
          },
          i = function(e, t) {
            e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
            var n,
                o,
                a = "#";
            for (o = 0; 3 > o; o++)
              n = parseInt(e.substr(2 * o, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16), a += ("00" + n).substr(n.length);
            return a;
          };
      o.extend = a, o.hexToRgb = r, o.isIE8 = s, o.logStr = l, o.colorLuminance = i;
    }, {}]
  }, {}, [1]), "function" == typeof define && define.amd ? define("github:t4t5/sweetalert@1.1.0/dist/sweetalert.min", [], function() {
    return sweetAlert;
  }) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert);
}(window, document);

_removeDefine();
})();
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("github:t4t5/sweetalert@1.1.0", ["github:t4t5/sweetalert@1.1.0/dist/sweetalert.min"], function(main) {
  return main;
});

_removeDefine();
})();
System.register('bundle.config.js', ['assets/js/style.js', 'github:Olical/EventEmitter@4.2.11', 'github:Modernizr/Modernizr@2.8.3', 'github:nolimits4web/Swiper@3.1.2', 'local_packages/Director/1.2.8/director.js', 'github:hammerjs/hammer.js@2.0.4', 'github:imsky/holder@2.8.2', 'github:cubiq/iscroll@5.1.3', 'github:jquery/jquery@2.1.4', 'github:lodash/lodash@3.10.1', 'github:julianshapiro/velocity@1.2.3', 'github:matthewhudson/device.js@0.2.7', 'github:blueimp/JavaScript-Canvas-to-Blob@2.2.0', 'github:blueimp/JavaScript-Load-Image@1.14.0', 'github:fengyuanchen/cropper@0.11.1', 'github:t4t5/sweetalert@1.1.0'], function (_export) {
  /**
   * Created by wushuyi on 2015/9/27.
   */
  //import 'babel';

  'use strict';

  return {
    setters: [function (_assetsJsStyleJs) {}, function (_githubOlicalEventEmitter4211) {}, function (_githubModernizrModernizr283) {}, function (_githubNolimits4webSwiper312) {}, function (_local_packagesDirector128DirectorJs) {}, function (_githubHammerjsHammerJs204) {}, function (_githubImskyHolder282) {}, function (_githubCubiqIscroll513) {}, function (_githubJqueryJquery214) {}, function (_githubLodashLodash3101) {}, function (_githubJulianshapiroVelocity123) {}, function (_githubMatthewhudsonDeviceJs027) {}, function (_githubBlueimpJavaScriptCanvasToBlob220) {}, function (_githubBlueimpJavaScriptLoadImage1140) {}, function (_githubFengyuanchenCropper0111) {}, function (_githubT4t5Sweetalert110) {}],
    execute: function () {}
  };
});
System.register('assets/css/reset.css!github:systemjs/plugin-css@0.1.18', [], false, function() {});
System.register('github:nolimits4web/Swiper@3.1.2/dist/css/swiper.css!github:systemjs/plugin-css@0.1.18', [], false, function() {});
System.register('github:fengyuanchen/cropper@0.11.1/dist/cropper.css!github:systemjs/plugin-css@0.1.18', [], false, function() {});
System.register('github:t4t5/sweetalert@1.1.0/dist/sweetalert.css!github:systemjs/plugin-css@0.1.18', [], false, function() {});
//# sourceMappingURL=cache.js.map
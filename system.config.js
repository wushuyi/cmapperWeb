System.config({
  baseURL: "/workdir/cmapperWeb",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "cache/cache.js": [
      "bundle.config.js",
      "assets/js/style.js",
      "github:Modernizr/Modernizr@2.8.3",
      "github:Olical/EventEmitter@4.2.11",
      "github:nolimits4web/Swiper@3.1.2",
      "local_packages/Director/1.2.8/director.js",
      "github:hammerjs/hammer.js@2.0.4",
      "github:imsky/holder@2.8.2",
      "github:jquery/jquery@2.1.4",
      "github:cubiq/iscroll@5.1.3",
      "github:blueimp/JavaScript-Canvas-to-Blob@2.2.0",
      "github:lodash/lodash@3.10.1",
      "github:julianshapiro/velocity@1.2.3",
      "github:matthewhudson/device.js@0.2.7",
      "github:fengyuanchen/cropper@0.11.1",
      "github:blueimp/JavaScript-Load-Image@1.14.0",
      "github:t4t5/sweetalert@1.1.0",
      "github:Modernizr/Modernizr@2.8.3/modernizr",
      "github:Olical/EventEmitter@4.2.11/EventEmitter",
      "github:blueimp/JavaScript-Canvas-to-Blob@2.2.0/js/canvas-to-blob",
      "github:imsky/holder@2.8.2/holder",
      "github:cubiq/iscroll@5.1.3/build/iscroll",
      "github:jquery/jquery@2.1.4/jquery",
      "github:nolimits4web/Swiper@3.1.2/dist/js/swiper.jquery.umd",
      "github:matthewhudson/device.js@0.2.7/lib/device",
      "github:hammerjs/hammer.js@2.0.4/hammer",
      "github:julianshapiro/velocity@1.2.3/velocity",
      "github:lodash/lodash@3.10.1/lodash.src",
      "github:blueimp/JavaScript-Load-Image@1.14.0/js/load-image",
      "github:fengyuanchen/cropper@0.11.1/dist/cropper",
      "github:t4t5/sweetalert@1.1.0/dist/sweetalert.min",
      "assets/css/reset.css!github:systemjs/plugin-css@0.1.18",
      "github:nolimits4web/Swiper@3.1.2/dist/css/swiper.css!github:systemjs/plugin-css@0.1.18",
      "github:fengyuanchen/cropper@0.11.1/dist/cropper.css!github:systemjs/plugin-css@0.1.18",
      "github:t4t5/sweetalert@1.1.0/dist/sweetalert.css!github:systemjs/plugin-css@0.1.18",
      "github:jquery/jquery@2.1.4/core",
      "github:jquery/jquery@2.1.4/selector",
      "github:jquery/jquery@2.1.4/traversing",
      "github:jquery/jquery@2.1.4/callbacks",
      "github:jquery/jquery@2.1.4/deferred",
      "github:jquery/jquery@2.1.4/core/ready",
      "github:jquery/jquery@2.1.4/queue",
      "github:jquery/jquery@2.1.4/data",
      "github:jquery/jquery@2.1.4/queue/delay",
      "github:jquery/jquery@2.1.4/attributes",
      "github:jquery/jquery@2.1.4/event",
      "github:jquery/jquery@2.1.4/manipulation",
      "github:jquery/jquery@2.1.4/event/alias",
      "github:jquery/jquery@2.1.4/manipulation/_evalUrl",
      "github:jquery/jquery@2.1.4/wrap",
      "github:jquery/jquery@2.1.4/css",
      "github:jquery/jquery@2.1.4/css/hiddenVisibleSelectors",
      "github:jquery/jquery@2.1.4/serialize",
      "github:jquery/jquery@2.1.4/ajax",
      "github:jquery/jquery@2.1.4/ajax/xhr",
      "github:jquery/jquery@2.1.4/ajax/script",
      "github:jquery/jquery@2.1.4/ajax/jsonp",
      "github:jquery/jquery@2.1.4/ajax/load",
      "github:jquery/jquery@2.1.4/event/ajax",
      "github:jquery/jquery@2.1.4/effects",
      "github:jquery/jquery@2.1.4/effects/animatedSelector",
      "github:jquery/jquery@2.1.4/offset",
      "github:jquery/jquery@2.1.4/dimensions",
      "github:jquery/jquery@2.1.4/deprecated",
      "github:jquery/jquery@2.1.4/exports/amd",
      "github:jquery/jquery@2.1.4/exports/global",
      "github:jquery/jquery@2.1.4/var/slice",
      "github:jquery/jquery@2.1.4/var/arr",
      "github:jquery/jquery@2.1.4/var/push",
      "github:jquery/jquery@2.1.4/var/concat",
      "github:jquery/jquery@2.1.4/var/indexOf",
      "github:jquery/jquery@2.1.4/var/class2type",
      "github:jquery/jquery@2.1.4/var/toString",
      "github:jquery/jquery@2.1.4/var/hasOwn",
      "github:jquery/jquery@2.1.4/var/support",
      "github:jquery/jquery@2.1.4/selector-sizzle",
      "github:jquery/jquery@2.1.4/traversing/var/rneedsContext",
      "github:jquery/jquery@2.1.4/core/init",
      "github:jquery/jquery@2.1.4/traversing/findFilter",
      "github:jquery/jquery@2.1.4/var/rnotwhite",
      "github:jquery/jquery@2.1.4/data/var/data_priv",
      "github:jquery/jquery@2.1.4/core/access",
      "github:jquery/jquery@2.1.4/data/var/data_user",
      "github:jquery/jquery@2.1.4/attributes/attr",
      "github:jquery/jquery@2.1.4/attributes/prop",
      "github:jquery/jquery@2.1.4/attributes/classes",
      "github:jquery/jquery@2.1.4/attributes/val",
      "github:jquery/jquery@2.1.4/var/strundefined",
      "github:jquery/jquery@2.1.4/event/support",
      "github:jquery/jquery@2.1.4/manipulation/var/rcheckableType",
      "github:jquery/jquery@2.1.4/data/accepts",
      "github:jquery/jquery@2.1.4/manipulation/support",
      "github:jquery/jquery@2.1.4/var/pnum",
      "github:jquery/jquery@2.1.4/css/var/rmargin",
      "github:jquery/jquery@2.1.4/css/var/rnumnonpx",
      "github:jquery/jquery@2.1.4/css/var/cssExpand",
      "github:jquery/jquery@2.1.4/css/var/isHidden",
      "github:jquery/jquery@2.1.4/css/var/getStyles",
      "github:jquery/jquery@2.1.4/css/curCSS",
      "github:jquery/jquery@2.1.4/css/defaultDisplay",
      "github:jquery/jquery@2.1.4/css/addGetHookIf",
      "github:jquery/jquery@2.1.4/css/swap",
      "github:jquery/jquery@2.1.4/css/support",
      "github:jquery/jquery@2.1.4/ajax/var/nonce",
      "github:jquery/jquery@2.1.4/ajax/var/rquery",
      "github:jquery/jquery@2.1.4/ajax/parseXML",
      "github:jquery/jquery@2.1.4/ajax/parseJSON",
      "github:jquery/jquery@2.1.4/core/parseHTML",
      "github:jquery/jquery@2.1.4/effects/Tween",
      "github:jquery/jquery@2.1.4/core/var/rsingleTag",
      "github:jquery/jquery@2.1.4/data/Data",
      "github:jquery/jquery@2.1.4/sizzle/dist/sizzle",
      "github:jquery/jquery@2.1.4/attributes/support"
    ]
  },
  buildCSS: true,
  separateCSS: true,

  map: {
    "EventEmitter": "github:Olical/EventEmitter@4.2.11",
    "Modernizr": "github:Modernizr/Modernizr@2.8.3",
    "Swiper": "github:nolimits4web/Swiper@3.1.2",
    "babel": "npm:babel-core@5.8.25",
    "babel-runtime": "npm:babel-runtime@5.8.25",
    "canvas2blob": "github:blueimp/JavaScript-Canvas-to-Blob@2.2.0",
    "clean-css": "npm:clean-css@3.4.4",
    "commander": "npm:commander@2.8.1",
    "core-js": "npm:core-js@1.2.0",
    "cropper": "github:fengyuanchen/cropper@0.11.1",
    "css": "github:systemjs/plugin-css@0.1.18",
    "device": "github:matthewhudson/device.js@0.2.7",
    "director": "local_packages/Director/1.2.8/director",
    "gmaps": "github:hpneo/gmaps@0.4.19",
    "googlemaps": "https://maps.googleapis.com/maps/api/js?key=AIzaSyCSqDuHCUNDiT_xUMJNx6wI-67vzrXSHhM&ibraries=geometry",
    "hammer": "github:hammerjs/hammer.js@2.0.4",
    "holder": "github:imsky/holder@2.8.2",
    "iscroll": "github:cubiq/iscroll@5.1.3",
    "jquery": "github:jquery/jquery@2.1.4",
    "loadImage": "github:blueimp/JavaScript-Load-Image@1.14.0",
    "lodash": "github:lodash/lodash@3.10.1",
    "sweetalert": "github:t4t5/sweetalert@1.1.0",
    "velocity": "github:julianshapiro/velocity@1.2.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.25": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.5.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:clean-css@3.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

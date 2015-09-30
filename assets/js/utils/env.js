System.register(['./signal', 'jquery'], function (_export) {
  /**
   * Created by wushuyi on 2015/9/13.
   */
  'use strict';

  var signal, $;
  return {
    setters: [function (_signal) {
      signal = _signal.signal;
    }, function (_jquery) {
      $ = _jquery['default'];
    }],
    execute: function () {
      _export('default', {
        signal: signal,
        mapReady: $.Deferred()
      });
    }
  };
});

//# sourceMappingURL=env.js.map
System.register(['./signal'], function (_export) {
  /**
   * Created by wushuyi on 2015/9/13.
   */
  'use strict';

  var signal;
  return {
    setters: [function (_signal) {
      signal = _signal.signal;
    }],
    execute: function () {

      console.log(signal);

      _export('default', {
        signal: signal
      });
    }
  };
});

//# sourceMappingURL=env.js.map
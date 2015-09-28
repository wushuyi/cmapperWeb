System.register(['../utils/env.js'], function (_export) {
    /**
     * Created by wushuyi on 2015/9/18.
     */
    'use strict';

    var env, historyList, routeHistory;

    _export('getRouter', getRouter);

    _export('isModal', isModal);

    function getRouter() {
        var path = env.router.getRoute();
        path.unshift('');
        return path.join('/');
    }

    function isModal() {
        return getRouter().indexOf('/modal') !== -1;
    }

    return {
        setters: [function (_utilsEnvJs) {
            env = _utilsEnvJs['default'];
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

//# sourceMappingURL=utils.js.map
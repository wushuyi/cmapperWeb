/**
 * Created by wushuyi on 2015/9/18.
 */
import {default as env} from '../utils/env.js'
let historyList = [];

export function getRouter() {
    let path = env.router.getRoute();
    path.unshift('');
    return path.join('/');
}

export let routeHistory = {
    push: function (route) {
        if (env.goback) {
            env.goback = false;
            return false;
        }
        if (historyList.length > 100) {
            historyList.shift();
        }
        historyList.push(route);
    },
    goback: function (num) {
        env.goback = true;
        if(!num){
            num = 1;
        }
        for(let i = 0; i < num; i++){
            historyList.pop();
        }
        let route = historyList[historyList.length - 1] || '/gftj';
        env.router.setRoute(route);
    },
    get: function (status) {
        if (status === 'now') {
            return historyList[historyList.length - 1];
        }
        if (status === 'prve') {
            return historyList[historyList.length - 2];
        }
        if (status === 'all') {
            return historyList;
        }
    },
};
/**
 * Created by wushuyi on 2015/9/13.
 */
import {signal} from './signal';
import $ from 'jquery';

export default {
    signal: signal,
    mapReady: $.Deferred()
}
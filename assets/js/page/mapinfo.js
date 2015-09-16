/**
 * Created by wushuyi on 2015/9/14.
 */
import $ from 'jquery'
import {default as BasePage} from './base.js'
import iScroll from 'iScroll';
import {proxy} from '../utils/wsy_utils.js'


class MapInfoPage extends BasePage {
    constructor(...arg) {
        if (arg[0] === false) {
            return false;
        }
        super(false);
        this.initialize(...arg);
    }

    initialize(options) {
        super.initialize();
        let $el = {};
        this.$el = $el;
        let iscrolls = {};
        this.iscrolls = iscrolls;
        $el.page = $('#page_mapinfo');
        $el.close = $el.page.find('.tab-close');
        $el.tabList = $el.page.find('.tab-list');
        $el.commentList = $el.page.find('.comment-list');
        $el.prompt = $el.commentList.next('.prompt');
        $el.hotNumBox = $('.hot-num-box');
        $el.commentBox = $('.comment-box');
        super.startPage();
        iscrolls.content = new iScroll($el.page.get(0));

        $el.close.attr('data-router', options.close_route);
        $el.close.on('tap', function(){
            delete env.mapinfo_close_route;
        });
        $el.tabList.attr('data-router', '/mapinfo/list/' + options.id);
        var pullFunc = proxy(function () {
            if (this.pullUpActionLock) {
                return true;
            }
            if ((iscrolls.content.maxScrollY - iscrolls.content.y) > 100) {
                this.pullUpAction();
            }
        }, this);
        iscrolls.content.on('scrollStart', function () {
            $el.page.one('touchend', pullFunc);
        });

        var $updata = $el.commentBox.find('.updata');
        var $submit = $el.commentBox.find('.submit');
        var $input = $el.commentBox.find('.input');
        $el.hotNumBox.find('.comment-num').one('tap', function () {
            $updata.velocity({
                height: 112
            },{
                complete:function(){
                    iscrolls.content.refresh();
                }
            })
        });
        $submit.on('tap', function () {
            $input.val('');
        });

    }

    pullUpAction() {
        let temp = '<li>' +
            '<div class="comment clearfix">' +
            '<div class="avatar"></div>' +
            '<div class="msg">new 评论这是一条评论它评论评论这是一条评论它评论评论这是一条评论它评论</div>' +
            '</div>' +
            '</li>';
        let reshtml = '';
        for (let i = 10; i > 0; i--) {
            reshtml = reshtml + temp;
        }
        this.pullUpActionLock = true;
        let $el = this.$el;
        let iscrolls = this.iscrolls;
        let scrollTo = $el.commentList.find('.comment:last').get(0);

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

    destroy() {
        let iscrolls = this.iscrolls;
        super.endPage(() => {
            $.each(iscrolls, function (key, iscroll) {
                iscroll.destroy();
            });
            this.$el = null;
        });
    }

}

export default MapInfoPage;
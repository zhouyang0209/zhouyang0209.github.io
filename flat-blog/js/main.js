;
$(function()
{
    // 严格模式
    'use strict';
    
    // 赋值过程
    var sidebar = $('#side-bar'),
        mask = $('.mask'),
        backButton = $('.back-to-top'),
        sidebar_trigger = $('#side-bar-trigger');

    // 定义函数
    function showSideBar(){
        mask.fadeIn();
        sidebar.css('transform','translate(0,0)');

        // css3 动画效果
        // sidebar.animate({'right':0});
    }

    function hideSideBar(){
        mask.fadeOut();
        sidebar.css('transform','translate(' + sidebar.width() + 'px' +',0)');

        // css3 动画效果
        // sidebar.animate({'right':0});
    }

    // 绑定事件：
    // 监听侧栏触发器点击事件
    sidebar_trigger.on('click',showSideBar); 

    // 监听mask点击事件
    mask.on('click',hideSideBar); 

    // 监听返回顶部按钮 点击事件
    backButton.on('click', function(){ 
        $('html,body').animate({
            scrollTop:0
        },700)
    })

    // 监听window 的scroll 事件
    $(window).on('scroll',function(){
        // 如果已滚动 的部分高于窗口高度，
        if($(window).scrollTop() > $(window).height()){
            // 显示返回顶部按钮
            backButton.fadeIn();
        }else{
            // 否则隐藏返回按钮
            backButton.fadeOut();
        }
    })

    // 浏览器加载的时候直接触发  scoll事件
    $(window).trigger('scroll');
})
window.onload = function() {
    var bgColorIdx;
    var colorList;
    var toTop;
    var navBar;
    var win;
    var jsonData;

    function makeJsonData(json){
        $.each(json,function(propName, value){
            return new Vue({
                el: "#" + propName,
                data: value
            });
        });
    }

    function loadJsonData(url) {
        $.ajax({
            type: "GET",
            url: url,
            dataType:"json",
            async: true,
            success: function(response){
                jsonData = response;
                makeJsonData(jsonData);
            }
        });
    }

    function initGlobalVars() {
        bgColorIdx = 0;
        colorList = ['#FF4040', '#FF9840', '#FFBF40', '#218555', '#36BBCE', '#514ED9', '#8E41D5'];
        toTop = $(".back-to-top");
        navBar = $("#naviBar");
        win = $(window);
        loadJsonData("/json/resume_info.json");
    }

    function initDefaultStatus(){
        win.ready(function() {
            if(win.scrollTop() === 0){
                toTop.hide();
            }
        });
    }

    function initNavScrollEvent() {
        win.scroll(function(){
            var css = {};
            if(win.scrollTop() > 0){
                toTop.fadeIn();
            }else{
                toTop.fadeOut();
            }
        });
        toTop.click(function() {
            $("body,html").animate({ scrollTop: 0 }, 500);
        });
    }

    function addListeners() {
        initNavScrollEvent();
    }

    function initColorChangeAnimation(css) {
        css = {};
        if (bgColorIdx >= colorList.length) {
            bgColorIdx = 0;
        }
        css.backgroundColor = colorList[bgColorIdx];
        bgColorIdx++;
        setTimeout(function(){
            $(".doc-floater").animate(css, 5000, initColorChangeAnimation(css));
        },10000);
    }
    function initBgPics(){
       var picList = [
            'bg_cc.jpg',
            'bg_cc_lulu.jpg',
            'bg_sesyoumaru.jpg', 
            'bg_fuuma_kamui.jpg', 
            'bg_lulu.jpg', 
            'bg_suzaku.jpg',
            'bg_384.jpg',
            'bg_suzaku.jpg',
            'bg_aoba.jpg',
            'bg_black_saber.jpg',
            'bg_quanzhi.jpg',
            ''
        ];
        CustomizeUtil.randomPicLoader(picList, $("body"));
    }

    function initEverything() {
        initGlobalVars();
        initDefaultStatus();
        addListeners();
        initColorChangeAnimation({});
        initBgPics();
    }

    initEverything();
}
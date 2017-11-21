window.onload = function() {
    var bgColorIdx;
    var colorList;
    var toTop;
    var navBar;
    var win;

    function initGlobalVars() {
        bgColorIdx = 0;
        colorList = ['#FF4040', '#FF9840', '#FFBF40', '#218555', '#36BBCE', '#514ED9', '#8E41D5'];
        toTop = $(".back-to-top");
        navBar = $("#naviBar");
        win = $(window);
    }

    function initDefaultStatus(){
        win.ready(function() {
            if(win.scrollTop() === 0){
                toTop.hide();
                // navBar.css({"background-color" : "transparent"});
            }else{
                // navBar.css({"background-color" : "#f8f8f8"});
            }
        });
    }

    function initNavScrollEvent() {
        win.scroll(function(){
            var css = {};
            if(win.scrollTop() > 0){
                // navBar.css({"background-color" : "#f8f8f8"}); 
                toTop.fadeIn();
            }else{
                // navBar.css({"background-color" : "transparent"});
                toTop.fadeOut();
            }
        });
        toTop.click(function() {
            $("body,html").animate({ scrollTop: 0 }, 500);
        });
    }

    function addListeners() {
        // initNavClickEvent();
        initNavScrollEvent();
    }

    function initBgAnimation(css) {
        css = {};
        if (bgColorIdx >= colorList.length) {
            bgColorIdx = 0;
        }
        css.backgroundColor = colorList[bgColorIdx];
        bgColorIdx++;
        setTimeout(function(){
            $("#main-container").animate(css, 5000, initBgAnimation(css));
        },10000);
    }

    function initEverything() {
        initGlobalVars();
        initDefaultStatus();
        addListeners();
        initBgAnimation({});   
    }

    initEverything();
}
var Initial = false;
window.onload = function() {
    var bgColorIdx;
    var colorList;

    function initGlobalVars() {
        bgColorIdx = 0;
        colorList = ['#FF4040', '#FF9840', '#FFF273', '#74E868', '#36BBCE', '#514ED9', '#8E41D5'];
    }

    function initParticles() {
        particlesJS.load('particles-js', 'json/particles-polygon.json', function() {
            console.log("This is Joy's blog page.");
        });
    }
    function initNavClickEvent(){
        $("#naviBar").click(function(e){
            var targetEl = e.target.parentNode;
            if (targetEl.id != "navi-right") {
                if (!$(targetEl).hasClass("active")) {
                    $(targetEl).addClass("active");
                    clearSiblingsClass(targetEl, "active");
                }
                // loadMainContent(targetEl);
            }
        });
        var clearSiblingsClass = function(el, cls) {
            var siblings = el.parentNode.children;
            for (var i = 0; i < siblings.length; i++) {
                if (el.id === siblings[i].id) {
                    continue;
                }
                if ($(siblings[i]).hasClass(cls)) {
                    $(siblings[i]).removeClass(cls);
                }
            }
        }
    }

    function initNavScrollEvent() {
        var win = $(window);
        win.scroll(function(){
            var css = {};
            var navBar = $("#naviBar");
            if(win.scrollTop() > 0){
                navBar.css({"background-color" : "#f8f8f8"});
            }else{
                navBar.css({"background-color" : "transparent"});
            }
            
        });
    }

    function addListeners() {
        initNavClickEvent();
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
            $("#particles-js").animate(css, 5000, initBgAnimation(css));
        },10000);
    }

    function initEverything() {
        initGlobalVars();
        initParticles();
        addListeners();
        initBgAnimation();
        // initMainContent();
    }

    if (!this.Initial) {
        initEverything();
        this.Initial = false;
    }
}
(function() {
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

    function initDefaultStatus() {
        win.ready(function() {
            if (win.scrollTop() === 0) {
                toTop.hide();
            }
        });
    }

    function initNavScrollEvent() {
        win.scroll(function() {
            var css = {};
            if (win.scrollTop() > 0) {
                toTop.fadeIn();
            } else {
                toTop.fadeOut();
            }
        });
        toTop.click(function() {
            $("body,html").animate({ scrollTop: 0 }, 500);
        });
    }

    function initSearchActivity() {
        $(".nav-search button").click(triggerSearch);
        $(".nav-search input").keydown(function(evt) {
            switch (evt.keyCode) {
                case 13:
                    //Enter
                    triggerSearch();
                    break;
                default:
                    break;
            }
        });

        function triggerSearch() {
            var searchInput = $(".nav-search input");
            var searchVal = searchInput.val().trim();
            if (CommonUtil.isEmpty(searchVal)) {
                return;
            }
            window.open("http://cn.bing.com/search?q=" + searchVal, "_top");
        }
    }

    function addListeners() {
        initNavScrollEvent();
        initSearchActivity();
    }

    function initColorChangeAnimation(css) {
        css = {};
        if (bgColorIdx >= colorList.length) {
            bgColorIdx = 0;
        }
        css.backgroundColor = colorList[bgColorIdx];
        bgColorIdx++;
        setTimeout(function() {
            $(".doc-floater").animate(css, 5000, initColorChangeAnimation(css));
        }, 10000);
    }

    function initBgPics() {
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
})();
window.onload = function() {
    var picList;

    function initGlobalVars() {
        picList = [
            'bg_cc.jpg',
            'bg_cc_lulu.jpg',
            'bg_sesyoumaru.jpg', 
            'bg_fuuma_kamui.jpg', 
            'bg_lulu.jpg', 
            'bg_suzaku.jpg',
            'bg_384.jpg',
            'bg_suzaku.jpg',
            'bg_sieru_384.jpg',
            'bg_black_saber.jpg'
        ];
    }

    function initParticles() {
        particlesJS.load('particles-js', 'json/particles-polygon.json', function() {
            console.log("This is Joy's blog page.");
        });
    }

    function initBgRandomPic() {
        var bgPic = picList[Math.floor(10*Math.random())];
        if(bgPic === undefined || bgPic === null || bgPic === ''){
            bgPic = 'bg_default.jpg';
        }
        $("body").css({"background-image": "url(/img/" + bgPic + ")"});
    }

    function initEverything() {
        initGlobalVars();
        initParticles();
        initBgRandomPic();
    }
    initEverything();

}
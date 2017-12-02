(function() {

    function initParticles() {
        particlesJS.load('particles-js', 'json/particles-polygon.json', function() {
            console.log("This is Joy's blog page.");
        });
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
            'bg_rei_archer.jpg',
            'bg_black_saber.jpg',
            'bg_final_fantacy.jpg',
            ''
        ];
        CustomizeUtil.randomPicLoader(picList, $("body"));
    }

    function initEverything() {
        initParticles();
        initBgPics();
    }
    initEverything();

})();
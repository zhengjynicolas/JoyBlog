var Initial = false;
window.onload = function() {
    function addListeners() {
        $("#naviBar").on('click', function(e) {
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

    function initEverything() {
	    particlesJS.load('particles-js', 'json/particles-polygon.json', function() {
	    	console.log("This is Joy's blog page.");
	    });
        addListeners();
        // initMainContent();
    }

    if (!this.Initial) {
        initEverything();
        this.Initial = false;
    }
}
var randomPicLoader = {
	init : function(picList, jqObj){
		var factor = Math.ceil(picList.length / 10);
        var bgPic = picList[Math.floor(factor*10*Math.random())];
        if(bgPic === undefined || bgPic === null || bgPic === ''){
            bgPic = 'bg_default.jpg';
        }
        jqObj.css({"background-image": "url(/img/" + bgPic + ")"});
	}
}
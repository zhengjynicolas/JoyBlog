CustomizeUtil = {
	randomPicLoader : function(picList, jqObj){
		//random pick background pickture
        var bgPic = picList[Math.floor(picList.length * Math.random())];
        if (bgPic === undefined || bgPic === null || bgPic === '') {
            bgPic = 'bg_default.jpg';
        }
        jqObj.css({ "background-image": "url(/img/" + bgPic + ")" });
	}
}
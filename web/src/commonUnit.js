// function commonModules(){
// 	var modules = {};

// 	function randomPicLoader(picList, jqObj){
//         var bgPic = picList[Math.floor(picList.length * Math.random())];
//         if (bgPic === undefined || bgPic === null || bgPic === '') {
//             bgPic = 'bg_default.jpg';
//         }
//         jqObj.css({ "background-image": "url(/img/" + bgPic + ")" });
// 	};

// 	modules.randomPicLoader = randomPicLoader;

// 	return modules;
    
// } deprecated

var commonModules = {
	randomPicLoader : function(picList, jqObj){
        var bgPic = picList[Math.floor(picList.length * Math.random())];
        if (bgPic === undefined || bgPic === null || bgPic === '') {
            bgPic = 'bg_default.jpg';
        }
        jqObj.css({ "background-image": "url(/img/" + bgPic + ")" });
	}
}
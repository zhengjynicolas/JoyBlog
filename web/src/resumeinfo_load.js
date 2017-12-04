(function(){
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
                makeJsonData(response);
            }
        });
    }
    
    loadJsonData("/json/resume_info.json");

})();
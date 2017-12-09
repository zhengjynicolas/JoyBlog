CustomizeUtil = {
	randomPicLoader : function(picList, jqObj){
		//random pick background pickture
        var bgPic = picList[Math.floor(picList.length * Math.random())];
        if (bgPic === undefined || bgPic === null || bgPic === '') {
            bgPic = 'bg_default.jpg';
        }
        jqObj.css({ "background-image": "url(/img/" + bgPic + ")" });
	},
    makeVueData : function(json){
        $.each(json,function(propName, value){
            return new Vue({
                el: "#" + propName,
                data: value
            });
        });
    },
    loadJsonData : function(url) {
        var scope = this;
        $.ajax({
            me: scope,
            type: "GET",
            url: url,
            dataType:"json",
            async: true,
            success: function(response){
                this.me.makeVueData(response);
            }
        });
    }
}
CommonUtil = {
    /**
     * Returns `true` if the passed value is a JavaScript Object, `false` otherwise.
     * @param {Object} value The value to test.
     * @return {Boolean}
     * @method
     */
    isObject : (toString.call(null) === '[object Object]') ?
    function(value) {
        // check ownerDocument here as well to exclude DOM nodes 
        return value != null && toString.call(value) === '[object Object]' && value.ownerDocument === undefined;
    } :
    function(value) {
        return toString.call(value) === '[object Object]';
    },

    /**
     * Returns `true` if the passed value is a JavaScript Array, `false` otherwise.
     *
     * @param {Object} target The target to test.
     * @return {Boolean}
     * @method
     */
    isArray : ('isArray' in Array) ? Array.isArray : function(value) {
        return toString.call(value) === '[object Array]';
    },

    /**
     * Returns `true `if the passed value is a string.
     * @param {Object} value The value to test.
     * @return {Boolean}
     */
    isString: function(value) {
        return typeof value === 'string';
    },

    /**
     * Returns the given value itself if it's not empty, as described in {@link Ext#isEmpty}; returns the default
     * value (second argument) otherwise.
     *
     * @param {Object} value The value to test.
     * @param {Object} defaultValue The value to return if the original value is empty.
     * @return {Object} value, if non-empty, else defaultValue.
     */
    isEmpty : function(value){
        if(value == null || value === '' ||
           (this.isArray(value) && value.length === 0) ||
           (this.isObject(value) && Object.keys(value).length === 0 ||
           (this.isString(value)) && value === '')){
            return true;
        }
        return false;
    }
}
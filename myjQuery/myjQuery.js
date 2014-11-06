/*
    This jQuery Source code is a copy of jQuery source code for learning purpose.
    If it offends your copyright, plz contact me via lzc.sdu#gmail.com to delete this 
    repository.
*/


(function(){
    
    var _jQuery = window.jQuery;
    var _$ = window.$;
    
    var jQuery = window.$ = window.jQuery = function(selector, context){
        /// TODO
        return new jQuery.fn.init(selector, context);
    };
    
    jQuery.fn = jQuery.prototype = {
        init: function(selector, context){
            ///TODO
        }
    };

    jQuery.fn.init.prototype = jQuery.prototype;
    // jQuery.prototype.init.prototype = jQuery.prototype;

    
})();
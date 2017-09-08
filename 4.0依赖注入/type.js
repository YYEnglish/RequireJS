define([],function(){
    return {
        isString:function(str){
            return typeof str==="string";
        },
        isFunction :function (fun){
            return typeof fun==="function";
        }
        
    }
})
define(["./type"],function(type){
    console.log("bibaowai");
    return function(name){
        if(!type.isString(name)) throw new Error('参数必须是字符串');
        console.log(name);
    }
})
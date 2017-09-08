//封装一个tab栏模块？
    //为什么要封装？
//          -->更好的复用
//          也考虑到未来可能造成的全局变量污染

    //如何封装？
    //把一个公共的或者相同的部分（逻辑）放在一起
    //把不同的部分让用户传递过来，然后进行特殊处理，比如参数：data/other
var tab=(function(){
return function(data,other){
    console.log("yi");
    console.log("er"+data);
    other && console.log(other);
    console.log('si');
}

})();
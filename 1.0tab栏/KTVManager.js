var KTVManager=(function(){
var total=0;
var leastPrice=1000;
return {
    xioafei:function(price){
        total+=price;
    },
    maidan:function(){
        if (total>=leastPrice){
            console.log("OK");
        }else{
            console.log("NO!请再消费"+(leastPrice-total)+"￥");
        }
    }
}
})();
define(["productlnfo","shop","star"],function(productlnfo,shop,star){
    return function(){
        productlnfo();
        shop();
        star();
    }
})
var md5=require("md5");
String.prototype.toJson=function(){
    return JSON.parse(this)
}
String.prototype.hash=function(){
    return md5(this).toString();
}
module.exports=String;
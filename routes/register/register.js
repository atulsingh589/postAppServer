const service=require("./service");
register=(config,mongo,app)=>{
    app.post("/register",service(mongo).saveUserDetails);
}
module.exports=register;
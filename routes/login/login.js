const service=require("./service");
auth=(config,mongo,app)=>{
    app.post("/login",service(mongo).getUserDetails);
}
module.exports=auth;
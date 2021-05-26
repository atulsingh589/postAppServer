const express=require("express");
const app=express();
const fs=require("fs");
const fileUpload=require("express-fileupload");
const mongodb=require("mongodb");
const cors=require("cors");
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(fileUpload())
app.use(cors());
app.options('*', cors())
const prototypes=require("./prototypes");
var config =  fs.readFileSync("./.env",{encoding:'utf-8',flag:'r'}).toJson();
const mongo=require("./db")(config,mongodb.MongoClient);
var routes = require("./routes")(config,mongo,app);
app.listen(config.port,()=>{
    console.log("Server Started");
})
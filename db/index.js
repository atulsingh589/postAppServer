getConnection=async (config,mongoClient)=>{
    config.dburl = "mongodb://"+config.mongodb.host+":"+config.mongodb.port;
    let connection= await connectdb(mongoClient,config);
    return connection;
}
connectdb=(mongoClient,config)=>{
    return new Promise((resolve,reject)=>{
        let client = new mongoClient(config.dburl,{ useUnifiedTopology: true });
        client.connect((err)=>{
            if(err){
                reject(err);
            }
            else{
                let db = client.db(config.mongodb.dbname)
                resolve(db)
            }
        })
    })
}
module.exports=getConnection
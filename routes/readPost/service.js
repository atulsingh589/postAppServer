var fs = require("fs");
var ObjectID = require('mongodb').ObjectID
readService = (mongo, config) => {
    return {
        readPost: async (req, res) => {
            mongo.then((db, err) => {
                db.collection("posts").find({}).toArray(function (err, data) {
                    if (err) {
                        res.send({ status: false, error: err.message }.fromJson())
                    }
                    if (data) {
                        res.send({ status: true, message: data });
                    }
                })
            })
        },
		getFile:async(req,res)=>{
			
			mongo.then((db,err)=>{
				let id = new ObjectID(req.params.id);
				db.collection("upload").findOne({_id:id}).then((image,err)=>{
					if(err || !image){
						return res.send({status:false,error:"No File"});
					}
					console.log(image)
					let filepath=__dirname+config.file_path+image.filepath;
					fs.readFile(filepath,(err,data)=>{
						if(err){
							return res.send({status:false,error:err.message});
						}
						res.writeHead(200,{'Content-Type': image.filetype});
						res.end(data);
					})
					
					
				})
			
			})
			
		}

    }
}

module.exports = readService;
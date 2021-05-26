let fileModel = require("../../models/fileModel");
let addModel = require("../../models/addModel");
addService = (mongo, config) => {
    return {
        savePost: async (req, res) => {
            let post = req.body;
            let validation = addModel.validate(post);
            if (validation.length > 0) {
                res.send({ status: false, error: validation[0].message })
            }
            else {
                mongo.then((db, err) => {
                    db.collection("posts").insertOne(post, function (err, data) {
                        if (err) {
                            console.log(err);
                            res.send({ status: false, error: err.message }.fromJson())
                        }
                        if (data) {
                            res.send({ status: true, message: "Post added Successfully" });
                        }
                    })
                })


            }

        },
        uploadMedia: (req, res) => {			
			
            if (!req.files || Object.keys(req.files).length === 0) {
				return res.send({status:false,error:"No File Selected"});
			  }
            else 
			{
				let file=req.files.media;
                let extension = (file.name.indexOf(".") === -1) ? "" : ("." + file.name.split(".")[1]);
                let filename = new Date().getTime().toString().hash() + extension;
                filepath = __dirname + config.file_path + filename;
                let saveFile = {
                    filepath: filename,
                    filetype: file.mimetype
                }
                file.mv(filepath, (err) => {
                    if (err) {
                        res.send({ status: false, error: err.message })
                    }
                    else { 
						mongo.then(async(db,err)=>{
						let result = await db.collection("upload").insertOne(saveFile);
                        if (result) {
                            res.send({ status: true, file: result.insertedId })
                        }
                        else {
                            res.send({ status: false, error: "500 Internal Server Error" })
                        }
						})
                        
                    }
                })
            }

        }

    }
}

module.exports = addService;
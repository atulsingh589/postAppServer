let updateModel = require("../../models/updateModel");
var ObjectId=require("mongodb").ObjectID;
updateService = (mongo, config) => {
    return {
        updatePost: async (req, res) => {
            let post = req.body;
            let validation = updateModel.validate(post);
            if (validation.length > 0) {
                res.send({ status: false, error: validation[0].message })
            }
            else {
                mongo.then((db, err) => {
					let id=new ObjectId(post._id);
					delete post._id;
                    db.collection("posts").updateOne({ _id:id  }, { $set: post }, function (err, data) {
                        if (err) {
                            console.log(err);
                            res.send({ status: false, error: err.message }.fromJson())
                        }
                        if (data) {
                            res.send({ status: true, message: "Post Updated Successfully" });
                        }
                    })
                })


            }

        }

    }
}

module.exports = updateService;
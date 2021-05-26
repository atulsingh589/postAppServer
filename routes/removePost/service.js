let removeAllModel = require("../../models/removeAllModel");
let removeModel = require("../../models/removeModel");
var ObjectId=require("mongodb").ObjectID;
removeService = (mongo, config) => {
    return {
        removePost: async (req, res) => {
            let post = req.body;
            let validation = removeModel.validate(post);
            if (validation.length > 0) {
                res.send({ status: false, error: validation[0].message })
            }
            else {
				let id=new ObjectId(post._id)
                mongo.then((db, err) => {
                    db.collection("posts").remove({ _id: id }, function (err, data) {
                        if (err) {
                            console.log(err);
                            res.send({ status: false, error: err.message }.fromJson())
                        }
                        if (data) {
                            res.send({ status: true, message: "Post removed Successfully" });
                        }
                    })
                })


            }

        },
        removeAllPost: async (req, res) => {
            let post = req.body;
            if (post.ids.length == 0) {
                res.send({ status: false, error: "No Post sellected" })
            }
            else {
                mongo.then((db, err) => {
					console.log(post)
					let ids=post.ids.map((id)=>{return new ObjectId(id)})
                    db.collection("posts").deleteMany({ _id: { $in: ids } }, function (err, data) {
                        if (err) {
                            console.log(err);
                            res.send({ status: false, error: err.message }.fromJson())
                        }
                        if (data) {
                            res.send({ status: true, message: "Post removed Successfully" });
                        }
                    })
                })


            }

        },

    }
}

module.exports = removeService;
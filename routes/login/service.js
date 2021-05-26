let loginModel = require("../../models/loginModel");
loginService = (mongo) => {
    return {
        getUserDetails: (req, res) => {
            let user = { username: req.body.username, password: req.body.password };
            let validation = loginModel.validate(user);
            console.log(validation)
            if (validation.length > 0) {
                res.send({ status: false, error: validation[0].message })
            }
            else {
                mongo.then((db, err) => {
                    user.password = user.password.hash();
                    db.collection("users").findOne({ $and: [user] }, { projection: { password: 0 } }).then(function (data, err) {
                        if (err) {
                            res.send({ status: false, error: err.message }.fromJson())
                        }
                        else {
                            if (data) {
                                // delete data.password;
                                res.send({status:true,message:"Successfully Logged In",data:data}.fromJson());
                            }
                            else {
                                res.send({ status: false, error: "User not found" }.fromJson());
                            }
                        }
                    })
                })
            }
        }
    }
}
module.exports = loginService;
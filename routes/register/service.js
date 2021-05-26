let registerModel = require("../../models/registerModel");
registerService = (mongo) => {
    return {
        saveUserDetails: async (req, res) => {
            let user = { name: req.body.name, email: req.body.email, username: req.body.username, password: req.body.password };
            let validation = registerModel.validate(user);
            if (validation.length > 0) {
                res.send({ status: false, error: validation[0].message })
            }
            else {
                let exists = await checkIfExists(user, mongo);
                if (!exists) {
                    mongo.then((db, err) => {
                        user.password = user.password.hash();
                        db.collection("users").insertOne(user, function (err, data) {
                            if (err) {
                                console.log(err);
                                res.send({ status: false, error: err.message }.fromJson())
                            }
                            if (data) {
                                res.send({ status: true, message: "Saved Successfully" });
                            }
                        })
                    })
                }
                else {
                    res.send({ status: false, message: "User Already Exists" });
                }

            }

        },

    }
}

checkIfExists = (user, mongo) => {
    return new Promise((resolve, reject) => {
        mongo.then((db) => {
            db.collection("users").findOne({ $or: [{ username: user.username, email: user.email }] }).then((data, err) => {
                if (data) {

                    resolve(true)
                }
                else {
                    resolve(false)
                }
            })
        })

    })
}
module.exports = registerService;
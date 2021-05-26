const service = require("./service");
postupdate = (config, mongo, app) => {
    app.post("/post/update", service(mongo, config).updatePost);
}
module.exports = postupdate
const service = require("./service");
postRemove = (config, mongo, app) => {
    app.post("/post/remove", service(mongo, config).removePost);
    app.post("/post/remove/all", service(mongo, config).removeAllPost);
}
module.exports = postRemove
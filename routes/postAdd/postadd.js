const service = require("./service");
postadd = (config, mongo, app) => {
    app.post("/post/add", service(mongo, config).savePost);
    app.post("/post/upload", service(mongo, config).uploadMedia);
}
module.exports = postadd
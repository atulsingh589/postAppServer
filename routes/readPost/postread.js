const service = require("./service");
postRead = (config, mongo, app) => {
    app.post("/post/read", service(mongo, config).readPost);
	app.get("/image/:id", service(mongo, config).getFile);
}
module.exports = postRead
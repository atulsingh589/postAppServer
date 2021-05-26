var login = require("./login");
var register = require("./register");
var postAdd = require("./postAdd");
var readPost = require("./readPost");
var updatePost = require("./updatePost");
var removePost = require("./removePost");
main = (config, mongo, app) => {
    return {
        login: login(config, mongo, app),
        register: register(config, mongo, app),
        postAdd: postAdd(config, mongo, app),
        readPost: readPost(config, mongo, app),
        updatePost: updatePost(config, mongo, app),
        removePost: removePost(config, mongo, app),
    }
}
module.exports = main
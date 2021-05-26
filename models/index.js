var loginModel = require("./loginModel");
var registerModel = require("./registerModel");
var addModel = require("./addModel");
var removeModel = require("./removeModel");
var removeAllModel = require("./removeAllModel");
var updateModel = require("./updateModel");
var fileModel = require("./fileModel");
let models = {
    login: loginModel,
    registerModel: registerModel,
    addModel: addModel,
    removeModel: removeModel,
    removeAllModel: removeAllModel,
    updateModel: updateModel,
    fileModel: fileModel
}
module.exports = models
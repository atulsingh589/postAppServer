var validator = require("validate");
let removeAllModel = new validator({
    _ids: [{
        type: String,
        required: true,
    }]
});
module.exports = removeAllModel;
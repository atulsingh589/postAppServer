var validator = require("validate");
let removeModel = new validator({
    _id: {
        type: String,
        required: true,
    }
});
module.exports = removeModel
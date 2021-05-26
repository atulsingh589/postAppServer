var validator = require("validate");
let loginModel = new validator({
    username: {
        type: String,
        required: true,
        length: { min: 5, max: 32 }
    },
    password: {
        type: String,
        required: true,
        length: { min: 5, max: 15 }
    }
});
module.exports = loginModel;
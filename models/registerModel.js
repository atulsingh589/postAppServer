var validator = require("validate");

let registerModel = new validator({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        length: { min: 5, max: 32 }
    },
    email: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    },
    password: {
        type: String,
        required: true,
        length: { min: 5, max: 15 }
    }
});
registerModel.message({
    match: (path) => `${path} should be valid`
})
module.exports = registerModel
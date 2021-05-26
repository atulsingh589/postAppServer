var validator = require("validate");
let fileModel = new validator({
    media: {
        type: Object,
        required: true
    }
})
module.exports = fileModel
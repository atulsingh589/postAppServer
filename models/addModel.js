var validator = require("validate");
let addModel = new validator({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    media: {
        file_id: {
            type: String,
            required: true
        },
        file_type: {
            type: String,
            required: true
        }
    },
    targetDate: {
        type: String,
        required: true
    },
    scheduleDate: {
        type: String,
        required: true
    },
    accountDetail: {
        type: String,
        required: true
    }
});
module.exports = addModel;
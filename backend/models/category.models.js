const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    mainimage: {
        type: String,
        required: true,
    },
    btn:{
        type: String,
        required: true,
    },
    backgroundimage:{
        type: String,
        required: true,
    },
    backgroundColor:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Category", categorySchema);
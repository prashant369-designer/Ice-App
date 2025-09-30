const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
       main_heading: {
        type: String,
        required: true,
       },
       category:[{
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}]
});

module.exports = mongoose.model("Menu", menuSchema);
const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    description:{
        type:String,
        required:true,
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("reviews", reviewsSchema);
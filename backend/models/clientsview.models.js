const mongoose = require("mongoose");
const clientsviewSchema = new mongoose.Schema({
    heading:{
        type:"String",
        required:true
    },
    message:{
        type:"String",
        required:true
    },
    image:{
        type:"String",
        required:true
    },
    rating:{
        type:"Number",
        required:true
    }
})

module.exports = mongoose.model("Clientsview", clientsviewSchema);
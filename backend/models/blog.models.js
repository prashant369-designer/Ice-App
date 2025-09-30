const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  createdBy: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  badge: [{
    type: String,
    required: true
  }],
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Blog", blogSchema);

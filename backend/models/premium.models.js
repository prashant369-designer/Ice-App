const mongoose = require("mongoose");

const premiumiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    distinct: true,
  },
  content: {
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
  },
  rating: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  skutype: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
  },
  afterdiscount: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Premiumice", premiumiceSchema);

const Like = require("../models/like.models");
const Product = require("../models/premium.models");

// Add to like
exports.addToLike = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let LikeItem = await Like.findOne({ productId });
    if (LikeItem) {
      LikeItem.quantity += quantity || 1;
      await LikeItem.save();
    } else {
      LikeItem = await Like.create({ productId, quantity: quantity || 1 });
    }

    res.status(201).json(LikeItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get liked Items
exports.getLike = async (req, res) => {
  try{
    const likeItems = await Like.find().populate("productId");
    res.status(200).json(likeItems);
  }catch(error){
    res.status(500).json({ message: error.message });
  }
}

// Remove from liked items
exports.removeFromLike = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Like.findByIdAndDelete(id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.status(200).json({ message: "Item removed from Like" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

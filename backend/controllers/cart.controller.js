const Cart = require("../models/cart.models");
const Product = require("../models/premium.models");

// Add to Cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cartItem = await Cart.findOne({ productId });
    if (cartItem) {
      cartItem.quantity += quantity || 1;
      await cartItem.save();
    } else {
      cartItem = await Cart.create({ productId, quantity: quantity || 1 });
    }

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Cart Items
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.find().populate("productId");
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove from Cart
exports.removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Cart.findByIdAndDelete(id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

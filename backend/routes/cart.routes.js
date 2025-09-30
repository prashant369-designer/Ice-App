const express = require("express");
const { addToCart, getCart, removeFromCart } = require("../controllers/cart.controller");

const router = express.Router();

router.post("/", addToCart);
router.get("/", getCart);
router.delete("/:id", removeFromCart);

module.exports = router;

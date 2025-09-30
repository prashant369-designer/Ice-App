const express = require("express");
const { addToLike, getLike, removeFromLike } = require("../controllers/like.controller");

const router = express.Router();

router.post("/", addToLike);
router.get("/", getLike);
router.delete("/:id", removeFromLike);

module.exports = router;

const express = require("express");
const {
    createReview,
    getReviews,
    getReviewById,
    deleteReview,
    updateReview

} = require("../controllers/reviews.controller");

const router = express.Router();

router.post("/", createReview);
router.get("/", getReviews);
router.get("/:id", getReviewById);
router.delete("/:id", deleteReview);
router.put("/:id", updateReview);

module.exports = router;

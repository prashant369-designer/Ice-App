const express = require("express");
const {
    createReview,
    getReviews,
    getReviewById,
    deleteReview

} = require("../controllers/clientview.controller");

const router = express.Router();    

router.post("/", createReview);
router.get("/", getReviews);
router.get("/:id", getReviewById);
router.delete("/:id", deleteReview);

module.exports = router;
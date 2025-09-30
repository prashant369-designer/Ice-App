const model = require("../models/clientsview.models");

exports.createReview = async (req, res) => {
    try {
        const review = await model.create(req.body);
        res.status(201).json(review);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getReviews = async (req, res) => {
    try {
        const reviews = await model.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getReviewById = async (req, res) => {
    try {
        const review = await model.findById(req.params.id);
        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteReview = async (req, res) => {
    try {
        const review = await model.findByIdAndDelete(req.params.id);
        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }
        res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
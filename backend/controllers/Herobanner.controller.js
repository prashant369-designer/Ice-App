const Herobanner = require("../models/herobanner.models");

// Create Herobanner
exports.createHerobanner = async (req, res) => {
    try {
        const banner = await Herobanner.create(req.body);
        res.status(201).json(banner);
        } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Herobanners
exports.getHerobanners = async (req, res) => {
    try {
        const herobanners = await Herobanner.find();
        res.status(200).json(herobanners);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Herobanner by ID
exports.getHerobannerById = async (req, res) => {
    try {
        const { id } = req.params;
        const herobannerData = await Herobanner.findById(id);

        if (!herobannerData) {
            return res.status(404).json({ message: "Herobanner not found." });
        }

        res.status(200).json(herobannerData);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Herobanner
exports.updateHerobanner = async (req, res) => {
    try {
        const banner = await Herobanner.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(banner);
        } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Herobanner
exports.deleteHerobanner = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedHerobanner = await Herobanner.findByIdAndDelete(id);

        if (!deletedHerobanner) {
            return res.status(404).json({ message: "Herobanner not found." });
        }

        res.status(200).json({ message: "Herobanner deleted successfully." });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

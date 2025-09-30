const Model = require("../models/premium.models");

// Create premiumIce
exports.createpremiumice = async (req, res) => {
    try {
        const { title, description, content, image, price, rating, category, skutype, discount } = req.body;
        if (!title || !description || !content || !image || !price || !rating || !category || !skutype || discount == null) {
            return res.status(400).json({ message: "Missing required fields." });
        }
        if (discount > price) {
            return res.status(400).json({ message: "Discount cannot be greater than the price." });
        }
        const afterdiscount = price - discount;
        const discountPercentage = ((discount / price) * 100).toFixed(2);

        const newpremiumice = await Model.create({
            title,
            description,
            content,
            image,
            price,
            rating,
            category,
            skutype,
            discount,
            afterdiscount,
            discountPercentage
        });

        res.status(201).json("created successfully");
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all premiumIce
exports.getpremiumice = async (req, res) => {
    try {
        const premiumice = await Model.find();
        res.status(200).json(premiumice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete premiumIce
exports.deletepremiumice = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedpremiumice = await Model.findByIdAndDelete(id);
        if (!deletedpremiumice) {
            return res.status(404).json({ message: "premiumice not found." });
        }
        res.status(200).json({ message: "premiumice deleted successfully." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update premiumIce
exports.updatepremiumice = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedpremiumice = await Model.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedpremiumice) {
            return res.status(404).json({ message: "premiumice not found." });
        }
        res.status(200).json(updatedpremiumice);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get premiumIce by ID
exports.getpremiumiceById = async (req, res) => {
    try {
        const { id } = req.params;
        const premiumice = await Model.findById(id);
        if (!premiumice) {
            return res.status(404).json({ message: "premiumice not found." });
        }
        res.status(200).json(premiumice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//get search items by title and description
exports.searchpremiumice = async (req, res) => {
   const searchTerm = req.params.query;
    if (!searchTerm) {
        return res.status(400).json({ error: 'Search term is required' });
    }
    try {
        const results = await Model.find({
            $or: [
                { title: { $regex: searchTerm, $options: 'i' } },
                { description: { $regex: searchTerm, $options: 'i' } },
            ],
        });
        res.json(results);
    } catch (err) {
        console.error('Error during search:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}
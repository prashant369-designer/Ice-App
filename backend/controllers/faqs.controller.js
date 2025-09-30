const model = require("../models/faqs.models");

exports.createfaq = async (req, res) => {
    try {
        const faq = await model.create(req.body);
        res.status(200).json(faq);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getfaq = async (req, res) => {
    try {
        const faq = await model.find();
        res.status(200).json(faq);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getfaqbyid = async (req, res) => {
    try {
        const faq = await model.findById(req.params.id);
        res.status(200).json(faq);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deletefaq = async (req, res) => {
    try {
        const faq = await model.findByIdAndDelete(req.params.id);
        res.status(200).json(faq);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updatefaq = async (req, res) => {
    try {
        const faq = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(faq);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
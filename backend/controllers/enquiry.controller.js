const mongoose = require("mongoose");
const Enquiry = require("../models/enquiry.models");

// Create a new enquiry
exports.createEnquiry = async (req, res) => {
  try {
    const { productId, name, email, number, message } = req.body;
    
    if (!productId || !name || !email || !number || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }
    const enquiry = new Enquiry({
      productId,
      name,
      email,
      number,
      message,
    });
    await enquiry.save();
    res.status(201).json({ message: "Enquiry created successfully", enquiry });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// Get all enquiries
exports.getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().populate("productId");
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// Get single enquiry by ID
exports.getEnquiryById = async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id).populate("productId");
    if (!enquiry) {
      return res.status(404).json({ error: "Enquiry not found" });
    }
    res.status(200).json(enquiry);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// Delete an enquiry
exports.deleteEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ error: "Enquiry not found" });
    }
    res.status(200).json({ message: "Enquiry deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};
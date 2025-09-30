const express = require("express");
const router = express.Router();
const {
    createEnquiry,
   getAllEnquiries,
    getEnquiryById,
    deleteEnquiry
} = require ("../controllers/enquiry.controller");

router.post("/", createEnquiry);
router.get("/", getAllEnquiries);
router.get("/:id", getEnquiryById);
router.delete("/:id", deleteEnquiry);

module.exports = router;
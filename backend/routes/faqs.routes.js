const express = require("express");
const router = express.Router();
const {
  createfaq,
  getfaq,
  getfaqbyid,
  deletefaq,
  updatefaq,
} = require("../controllers/faqs.controller");

router.post("/", createfaq);
router.get("/", getfaq);
router.get("/:id", getfaqbyid);
router.put("/:id", updatefaq);
router.delete("/:id", deletefaq);

module.exports = router;

const express = require("express");
const {
    createHerobanner,
    getHerobanners,
    getHerobannerById,
    updateHerobanner,
    deleteHerobanner
} = require("../controllers/Herobanner.controller");

const router = express.Router();

router.post("/", createHerobanner);
router.get("/", getHerobanners);
router.get("/:id", getHerobannerById);
router.put("/:id", updateHerobanner);
router.delete("/:id", deleteHerobanner);

module.exports = router;

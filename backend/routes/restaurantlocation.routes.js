const express = require("express");
const router = express.Router();
const {
    createlocation,
    getlocation,
    getlocationbyid,
    deletelocation,
    updatelocation

} = require("../controllers/restaurantlocation.controller");

router.post("/", createlocation);
router.get("/", getlocation);
router.get("/:id", getlocationbyid);
router.put("/:id", updatelocation);
router.delete("/:id", deletelocation);

module.exports = router;
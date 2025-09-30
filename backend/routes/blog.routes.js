const express = require("express");
const router = express.Router();

const {
    createblogmodel,
    getblogmodel,
    getblogmodelbyid,
    deleteblogmodel,
    updateblogmodel

} = require("../controllers/blog.controller");

router.post("/", createblogmodel);
router.get("/", getblogmodel);
router.get("/:id", getblogmodelbyid);
router.put("/:id", updateblogmodel);
router.delete("/:id", deleteblogmodel);

module.exports = router;

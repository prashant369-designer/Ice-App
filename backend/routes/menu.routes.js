const express = require("express");
const {
    createmenu,
    getmenu,
    getmenubyid,
    deletemenu,
    updatemenu

} = require("../controllers/menu.controller");

const router = express.Router();

router.post("/", createmenu);
router.get("/", getmenu);
router.get("/:id", getmenubyid);
router.put("/:id", updatemenu);
router.delete("/:id", deletemenu);

module.exports = router;
const express = require("express");
const {
  registerUser,
  loginUser,updatePassword,foregtPassword
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/update-password", updatePassword);
router.post("/forgot-password", foregtPassword);



module.exports = router;
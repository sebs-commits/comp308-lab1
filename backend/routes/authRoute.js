const express = require("express");
const router = express.Router();
const { registerStudent, loginStudent } = require("../controllers/authController.js")
const { authVerification } = require("../middleware/auth.js")

// maybe change this and add auth verification by role
router.post("/register",authVerification, registerStudent);
router.post("/login", loginStudent);

module.exports = router;
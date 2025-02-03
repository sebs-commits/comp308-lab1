// add route protection
const express = require("express");
const router = express.Router();
const { getAllStudents } = require("../controllers/studentController.js")
const { authVerification } = require("../middleware/auth.js")

router.get("/list-students",authVerification, getAllStudents )

module.exports = router;
const express = require("express");
const router = express.Router();
const { createCourse } = require("../controllers/courseController.js")

router.post("/create", createCourse);

module.exports = router;
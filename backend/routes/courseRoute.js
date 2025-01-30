const express = require("express");
const router = express.Router();
const { createCourse, getAllCourses } = require("../controllers/courseController.js")

router.post("/create", createCourse);
router.get("/course-list", getAllCourses)

module.exports = router;
const express = require("express");
const router = express.Router();
const { createCourse, getAllCourses, getCourseById } = require("../controllers/courseController.js")

router.post("/create", createCourse);
router.get("/course-list", getAllCourses)
router.get("/course-list/:id", getCourseById)

module.exports = router;
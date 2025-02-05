const express = require("express");
const router = express.Router();
const { createCourse, getAllCourses, getCourseById, updateCourse } = require("../controllers/courseController.js")
const { authVerification } = require("../middleware/auth.js")

router.post("/create", authVerification, createCourse);
router.get("/course-list", authVerification, getAllCourses)
// not sure if this route is needed
router.get("/course-list/:id", authVerification, getCourseById)
router.patch("course-list/:id", authVerification, updateCourse)


module.exports = router;
const express = require("express");
const router = express.Router();
const { addCourse, dropCourse, getCourseListById} = require("../controllers/studentController.js")
const { authVerification } = require("../middleware/auth.js")
router.patch("/add-course", authVerification, addCourse)
router.patch("/drop-course/", authVerification, dropCourse)
router.get("/get-course/:id", authVerification, getCourseListById)
module.exports = router;
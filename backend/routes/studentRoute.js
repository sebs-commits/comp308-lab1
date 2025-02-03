const express = require("express");
const router = express.Router();
const { addCourse, dropCourse, getCourseListById} = require("../controllers/studentController.js")

router.patch("/add-course", addCourse)
router.patch("/drop-course/", dropCourse)
router.get("/get-course/:id", getCourseListById)
module.exports = router;
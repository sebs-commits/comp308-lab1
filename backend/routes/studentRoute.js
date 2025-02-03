const express = require("express");
const router = express.Router();
const { addCourse, dropCourse} = require("../controllers/studentController.js")

router.patch("/add-course", addCourse)
router.patch("/drop-course/", dropCourse)
module.exports = router;
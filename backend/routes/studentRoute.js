const express = require("express");
const router = express.Router();
const { addCourse, } = require("../controllers/studentController.js")

router.patch("/add-course", addCourse)
module.exports = router;
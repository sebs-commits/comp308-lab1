// add route protection
const express = require("express");
const router = express.Router();
const {getAllStudents} = require("../controllers/studentController.js")

router.get("/list-students", getAllStudents)

module.exports = router;
// sign up student

const Student = require("../models/student.js");
const jwt = require("jsonwebtoken");

const registerStudent = async (req, res) => {
    try{
        const { firstName, lastName, studentEmail, program, password } = req.body;
        const student = new Student({ firstName, lastName, studentEmail, program, password });
        await student.save();
        res.status(200).json({ message: "User registered!"})
    }
    catch (error){
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    registerStudent,
}
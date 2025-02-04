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
const loginStudent = async (req, res) => {
    try{
        const { studentEmail, password } = req.body;
        if (!studentEmail || !password) {
            throw new Error ("Please fill all fields, thanks!")
        }
        // look for student
        const student = await Student.findOne({ studentEmail});
        if (!student || student.password !== password){
            throw new Error ("Incorrect email or password")
        }
        
        // generate token
        const token = jwt.sign(
            {student:{ _id: student._id }},
            process.env.JWT_SECRET,
            {
              expiresIn: "1h",
            }
          );
      
          res.status(200).json({ 
            message: "Log in successful",
            token,
            student: { 
                    _id: student._id,
                    role: student.role
                },
        });

    }
    catch (error){
        res.status(400).json({message: error.message})
    }
}
module.exports = {
    registerStudent,
    loginStudent,
}
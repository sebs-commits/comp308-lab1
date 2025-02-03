const Student = require("../models/student.js");
const Course = require("../models/course.js")

const getAllStudents = async ( req, res ) => {
    try{
        const students = await Student.find({})
        res.status(200).send(students)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}
// find student id
// find course id
// add course id to student
// save
const addCourse = async ( req, res ) =>{
    try{
        const studentId = req.body.studentId;
        const student = await Student.findById(studentId);
        const courseId = req.body.courseId;
        const course = await Course.findById(courseId);

        await Course.findByIdAndUpdate(
            courseId,
            {$push: {students: studentId}}
        )
        res.status(200).json({message: "Sucess: Student added to course!"})
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}
module.exports = {
    getAllStudents,
    addCourse
}
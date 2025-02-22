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
        const { studentId, courseId, section } = req.body;
        const student = await Student.findById(studentId);
        const course = await Course.findById(courseId);

        await Course.findByIdAndUpdate(
            courseId,
            {
                $push: {
                    students: {
                        studentId: studentId,
                        section: section
                    }
                }
            }
        )
        res.status(200).json({message: "Sucess: Student added to course!"})
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}
//drop course
const dropCourse = async (req, res)=>{
    try{
        const studentId = req.body.studentId;
        const courseId = req.body.courseId;
        await Course.findByIdAndUpdate(
            courseId,
            {
                $pull: {
                    students: { studentId: studentId }
                }
            }
        )
        res.status(200).json({message: "Success: Student removed from course"})
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}
// list all courses taken by student
const getCourseListById = async(req, res) =>{
    try{
        const studentId = req.params.id;
        if(!studentId){
            throw new Error ("Id does not match")
        }
        const courses = await Course.find({
            students: studentId
        })
        res.status(200).json(courses)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}
module.exports = {
    getAllStudents,
    addCourse,
    dropCourse,
    getCourseListById,
}
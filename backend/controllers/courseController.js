const Course = require("../models/course.js")

const createCourse = async ( req, res) => {
    try {
        if (Array.isArray(req.body)){
            const courses = await Course.insertMany(req.body);
            res.status(200).json({
                message: "Created courses successfully",
                courses: courses
            });
        }
        else {
            const course = new Course(req.body);
            await course.save();
            res.status(200).json({
            message: "Created course successfully \n" + course,
            })
        }   
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}
const getAllCourses = async ( req, res ) => {
    try{
        const courses = await Course.find({})
        res.status(200).send(courses)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}
const getCourseById = async ( req, res ) => {
    try{
        const course = await Course.findById(req.params.id);
        if (!course){
            throw new Error ("Course not found");
        }
        res.status(200).send(course)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}
module.exports ={
    createCourse,
    getAllCourses,
    getCourseById,
}
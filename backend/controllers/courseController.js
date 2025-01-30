const Course = require("../models/course.js")

const createCourse = async ( req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(200).json({
            message: "Created course successfully \n" + course,
        })
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}
module.exports ={
    createCourse,
}
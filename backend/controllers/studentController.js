const Student = require("../models/student.js");

const getAllStudents = async ( req, res ) => {
    try{
        const students = await Student.find({})
        res.status(200).send(students)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}
module.exports = {
    getAllStudents,
}
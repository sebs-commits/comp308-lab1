const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    students: [{
        studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
        section: { type: Number, required: true }
    }],
    courseCode: { type: String, required: true },
    courseName: { type: String, required: true },
    section: [{ type: Number, required: true }],
    semester: { type: Number, required: true }
})

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
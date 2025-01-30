const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentNumber: { type: Number, required: true, unique: true },
    firstName:{ type: String, required: true },
    lastName: { type: String, required: true },
    studentEmail:{ type: String, required: true, unique: true },
    password:{ type: String, required: true },
    address: { type: String, required: true},
    program: { type: String, required: true },
    age: { type: Number, required: false}, // custom field #1
    favLanguage: { type: String, enum: ["JAVA", "SQL", "C#", "JAVASCRIPT", "NONE"], default: "NONE", uppercase: true, required: true } // custom field #2
})

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
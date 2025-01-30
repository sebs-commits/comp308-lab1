const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentNumber: { type: String, default: function (){
        return this._id // function to use mongodb as the student number instead
    } },
    firstName:{ type: String, required: true },
    lastName: { type: String, required: true },
    studentEmail:{ type: String, required: true, unique: true },
    password:{ type: String, required: true },
    address: { type: String, required: false }, 
    program: { type: String, required: true }, // keep required
    age: { type: Number, required: false}, // custom field #1
    favLanguage: { type: String, enum: ["JAVA", "SQL", "C#", "JAVASCRIPT", "NONE"], default: "NONE", uppercase: true, required: true }, // custom field #2
    role: { type: String, required: true, default: "STUDENT"}
})

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
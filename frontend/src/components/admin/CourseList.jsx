import React, { useEffect, useState } from 'react';
import { adminService } from '../../services/admin.service';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedSection, setSelectedSection] = useState(null);
    const [enrolledStudents, setEnrolledStudents] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const data = await adminService.getAllCourses();
            setCourses(data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const handleOpenModal = async (course, section) => {
        try {
            setSelectedCourse(course);
            setSelectedSection(section);
            const students = await adminService.getStudentsByCourse(course._id, section);
            setEnrolledStudents(students);
            document.getElementById('enrollmentModal').showModal();
        } catch (error) {
            console.error('Error fetching enrolled students:', error);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Course List</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Course Code</th>
                            <th>Course Name</th>
                            <th>Sections</th>
                            <th>Semester</th>
                            <th>Total Enrolled</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course) => (
                            <tr key={course._id}>
                                <td>{course.courseCode}</td>
                                <td>{course.courseName}</td>
                                <td>
                                    <select 
                                        className="select select-bordered select-sm"
                                        onChange={(e) => handleOpenModal(course, parseInt(e.target.value))}
                                    >
                                        <option value="">Select Section</option>
                                        {course.section.map(sec => (
                                            <option key={sec} value={sec}>{sec}</option>
                                        ))}
                                    </select>
                                </td>
                                <td>{course.semester}</td>
                                <td>{course.students.length}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <dialog id="enrollmentModal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        {selectedCourse?.courseName} - Section {selectedSection}
                    </h3>
                    <div className="py-4">
                        {enrolledStudents.length > 0 ? (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Program</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {enrolledStudents.map((student) => (
                                        <tr key={student._id}>
                                            <td>{`${student.firstName} ${student.lastName}`}</td>
                                            <td>{student.studentEmail}</td>
                                            <td>{student.program}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No students enrolled in this section.</p>
                        )}
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default CourseList;
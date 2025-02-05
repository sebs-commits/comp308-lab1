import React, { useEffect, useState } from 'react';
import { adminService } from '../../services/admin.service';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
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

    const handleOpenModal = async (course) => {
        try {
            setSelectedCourse(course);
            const students = await adminService.getStudentsByCourse(course._id);
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
                            <th>Section</th>
                            <th>Semester</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course) => (
                            <tr key={course._id}>
                                <td>{course.courseCode}</td>
                                <td>{course.courseName}</td>
                                <td>{course.section}</td>
                                <td>{course.semester}</td>
                                <td>
                                    <button 
                                        className="btn btn-primary btn-sm"
                                        onClick={() => handleOpenModal(course)}
                                    >
                                        View Students
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <dialog id="enrollmentModal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        {selectedCourse ? `Enrolled Students - ${selectedCourse.courseName}` : 'Loading...'}
                    </h3>
                    <div className="py-4">
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Program</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {enrolledStudents && enrolledStudents.length > 0 ? (
                                        enrolledStudents.map((student) => (
                                            <tr key={student._id}>
                                                <td>{student.firstName}</td>
                                                <td>{student.lastName}</td>
                                                <td>{student.program}</td>
                                                <td>{student.studentEmail}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="text-center">No students enrolled</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
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
import React, { useEffect, useState } from 'react';
import { getCourses, enrollInCourse, dropCourse } from '../../services/course.Service';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const studentId = localStorage.getItem('studentId');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await getCourses();
                setCourses(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    const isEnrolled = (course) => {
        return course.students.includes(studentId);
    };

    const handleEnroll = async (courseId) => {
        try {
            await enrollInCourse(courseId);
            const updatedCourses = await getCourses();
            setCourses(updatedCourses);
        } catch (error) {
            console.error('Enrollment failed:', error);
        }
    };

    const handleDrop = async (courseId) => {
        try {
            await dropCourse(courseId);
            const updatedCourses = await getCourses();
            setCourses(updatedCourses);
        } catch (error) {
            console.error('Drop failed:', error);
        }
    };

    if (loading) return <div className="loading loading-spinner text-primary"></div>;
    if (error) return <div className="text-error">Error: {error}</div>;

    return (
        <div className="p-4 text-gray-900">
            <h2 className="text-2xl font-bold mb-4">All Courses</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="text-gray-900">
                            <th>Status</th>
                            <th>Course Code</th>
                            <th>Course Name</th>
                            <th>Section</th>
                            <th>Semester</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course) => (
                            <tr key={course._id} className={isEnrolled(course) ? 'bg-gray-300' : ''}>
                                <td>
                                    {isEnrolled(course) ? 
                                        <span className="badge badge-success">Enrolled</span> : 
                                        <span className="badge">Not Enrolled</span>
                                    }
                                </td>
                                <td>{course.courseCode}</td>
                                <td>{course.courseName}</td>
                                <td>{course.section}</td>
                                <td>{course.semester}</td>
                                <td>
                                    {isEnrolled(course) ? (
                                        <button 
                                            className="btn btn-sm btn-error"
                                            onClick={() => handleDrop(course._id)}>
                                            Drop
                                        </button>
                                    ) : (
                                        <button 
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleEnroll(course._id)}>
                                            Enroll
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CourseList;
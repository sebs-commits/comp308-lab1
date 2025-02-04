const CourseList = () => {
    // will replace later
    const courses = [
        { code: 'CS101', name: 'Introduction to Computer Science', section: 1, semester: 'Fall 2023' },
        { code: 'MATH201', name: 'Calculus II', section: 3, semester: 'Spring 2024' },
        { code: 'PHYS101', name: 'Physics Fundamentals', section: 2, semester: 'Fall 2023' }
    ];

    return (
        <div className="p-4 text-gray-900">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">All Courses</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* table header */}
                    <thead>
                        <tr>
                            <th>Course Code</th>
                            <th>Course Name</th>
                            <th>Section</th>
                            <th>Semester</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {/* table contents */}
                    <tbody>
                        {courses.map((course, index) => (
                            <tr key={index}>
                                <td>{course.code}</td>
                                <td>{course.name}</td>
                                <td>{course.section}</td>
                                <td>{course.semester}</td>
                                <td>
                                    <button className="btn btn-sm btn-primary mr-2">Test btn</button>
                                    <button className="btn btn-sm btn-secondary">Test btn</button>
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
import React from 'react';
import StudentNav from './StudentNav';


const StudentHome = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <StudentNav />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-semibold text-gray-900">Student Home Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                </div>
            </div>
        </div>
    );
};

export default StudentHome;
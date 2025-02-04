import React from 'react';
import AdminNav from './AdminNav';
import AdminRegisterForm from './AdminRegisterForm'
import StudentList from './StudentList.jsx'


const AdminHome = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <AdminNav />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-semibold text-gray-900">Admin Home Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-8 rounded-lg shadow-md">
                <AdminRegisterForm/>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                <StudentList/>
                </div>
                
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
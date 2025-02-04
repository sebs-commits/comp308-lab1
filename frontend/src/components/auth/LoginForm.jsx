import React, { useState } from 'react';
import { authService } from '../../services/auth.service.js';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        studentEmail: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const clickDemoAdmin = (e) => {
        e.preventDefault();
        setFormData({
            studentEmail: "admin@admin.com",
            password: "idk"
        })
    }
    const clickDemoStudent = (e) => {
        e.preventDefault();
        setFormData({
            studentEmail: "john@example.com",
            password: "idk"
        })
    }

    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.login({
                studentEmail: formData.studentEmail,
                password: formData.password
            });
            
            const role = localStorage.getItem('role');  
            if (role === 'ADMIN') {
                navigate("/admin");
            } else {
                navigate("/student");
            }
        } catch (error) {
            console.error('Login failed:', error.response?.data?.message || 'An error occurred');
        }
    };
    

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <label className="input input-bordered flex items-center gap-2 bg-gray-100 text-gray-900 font-semibold">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input 
                    type="email" 
                    name="studentEmail"
                    value={formData.studentEmail}
                    onChange={handleChange}
                    className="grow" 
                    placeholder="Email" 
                />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-gray-100 text-gray-900 font-semibold">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd" />
                </svg>
                <input 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="grow" 
                    placeholder="Password" 
                />
            </label>
            
            <button 
                type="submit" 
                className="btn btn-primary w-full">
                Login
            </button>
            
            <div className="text-sm text-center text-gray-500">
              <a href="#" className="hover:underline" onClick={clickDemoStudent}>Demo Student</a>
            </div>
            <div className="text-sm text-center text-gray-500">
              <a href="#" className="hover:underline" onClick={clickDemoAdmin}>Demo Admin</a>
            </div>
          </form>
        </div>
      </div>
    )
  }
  
  export default LoginForm;
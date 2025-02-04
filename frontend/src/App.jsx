import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from "./components/auth/LoginForm.jsx"
import StudentHome from "./components/student/StudentHome.jsx";
import AdminHome from "./components/admin/AdminHome.jsx"

function App() {

  const isAuthenticated = localStorage.getItem('token') && localStorage.getItem('studentId');

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminHome/>} />
        <Route path="/" element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/student" element={isAuthenticated ? <StudentHome/> : <Navigate to="/login"/>} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

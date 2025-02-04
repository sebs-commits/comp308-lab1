import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from "./components/auth/LoginForm.jsx"
import StudentHome from "./components/student/StudentHome.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/student" element={<StudentHome/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

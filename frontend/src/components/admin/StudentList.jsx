import { useEffect, useState } from "react";
import { adminService } from "../../services/admin.service";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const data = await adminService.getAllStudents();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  return (
    <div className="p-4 text-gray-900">
      <h2 className="text-2xl font-bold mb-4">Student List</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-gray-900">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Program</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.program}</td>
                <td>{student.studentEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;

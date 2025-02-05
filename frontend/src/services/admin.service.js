import api from './api.service';
import { ENDPOINTS } from '../utils/constants';

export const adminService = {
    registerStudent: async (studentData) => {
        const response = await api.post(ENDPOINTS.REGISTER, studentData);
        return response.data;
    },

    getAllStudents: async () => {
        const response = await api.get(ENDPOINTS.LIST_STUDENTS);
        return response.data;
    },

    getAllCourses: async () => {
        const response = await api.get(ENDPOINTS.COURSES);
        return response.data;
    },

    //logic
    // first get the course with student IDs
    // then get all students
    // filter students that are in the course
    getStudentsByCourse: async (courseId, section) => {
        try {            
            const courseResponse = await api.get(`${ENDPOINTS.COURSES}/${courseId}`);
            const courseStudents = courseResponse.data.students;
            
            const sectionStudentIds = courseStudents
                .filter(student => student.section === section)
                .map(student => student.studentId);
            
            const studentsResponse = await api.get(ENDPOINTS.LIST_STUDENTS);
            const allStudents = studentsResponse.data;
            // this part will only get students in this section
            const enrolledStudents = allStudents.filter(student => 
                sectionStudentIds.includes(student._id)
            );

            return enrolledStudents;
        } catch (error) {
            console.error('Error fetching students by course:', error);
            return [];
        }
    }
};
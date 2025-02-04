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
    getStudentsByCourse: async (courseId) => {
        try {            
            const courseResponse = await api.get(`${ENDPOINTS.COURSES}/${courseId}`);
            const studentIds = courseResponse.data.students;

            const studentsResponse = await api.get(ENDPOINTS.LIST_STUDENTS);
            const allStudents = studentsResponse.data;

            const enrolledStudents = allStudents.filter(student => 
                studentIds.includes(student._id)
            );

            return enrolledStudents;
        } catch (error) {
            console.error('Error fetching students by course:', error);
            return [];
        }
    }
};
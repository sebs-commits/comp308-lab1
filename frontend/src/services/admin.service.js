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

    getStudentsByCourse: async (courseId) => {
        const response = await api.get(`${ENDPOINTS.COURSE_STUDENTS}/${courseId}`);
        return response.data;
    }
};
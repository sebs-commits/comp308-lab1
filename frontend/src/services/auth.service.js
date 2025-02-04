import api from './api.service';
import { ENDPOINTS } from '../utils/constants';

export const authService = {
    login: async (credentials) => {
        const response = await api.post(ENDPOINTS.LOGIN, credentials);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('studentId', response.data.student._id);
        }
        return response.data;
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('studentId');
    }
};
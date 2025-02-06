import api from "./api.service";
import { ENDPOINTS } from "../utils/constants";

export const getCourses = async () => {
  const response = await api.get(ENDPOINTS.COURSES);
  return response.data;
};

export const enrollInCourse = async (courseId, section) => {
  const response = await api.patch(ENDPOINTS.ADD_COURSE, {
    courseId,
    studentId: localStorage.getItem("studentId"),
    section,
  });
  return response.data;
};

export const dropCourse = async (courseId) => {
  const response = await api.patch(ENDPOINTS.DROP_COURSE, {
    courseId,
    studentId: localStorage.getItem("studentId"),
  });
  return response.data;
};
export const updateCourse = async (courseId, updates) => {
  const response = await api.patch(`${ENDPOINTS.COURSES}/${courseId}`, updates);
  return response.data;
};

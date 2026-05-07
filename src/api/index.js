import axiosClient from './axiosClient'
import API_PATH from '@/configs/paths/API_PATH'

export { API_PATH }

export const learningApi = {
  getCourses: (params) => axiosClient.get(API_PATH.CONTENT.COURSES, { params }),
  getStudents: (params) => axiosClient.get(API_PATH.PEOPLE.STUDENTS, { params }),
  getPayments: (params) => axiosClient.get(API_PATH.COMMERCE.PAYMENTS, { params }),
}

export default axiosClient

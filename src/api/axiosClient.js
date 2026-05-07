import axios from 'axios'
import { getLocalstorageData } from '@/utils/helper/localstorage'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  timeout: 15000,
})

axiosClient.interceptors.request.use((config) => {
  const token = getLocalstorageData('yipi_access_token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

export default axiosClient

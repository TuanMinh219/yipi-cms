import axiosClient from './axiosClient'
import API_PATH from '@/configs/paths/API_PATH'

export const authApi = {
  resolveAccount: (username) =>
    axiosClient.get(API_PATH.AUTH.RESOLVE, {
      params: { username },
    }),
  login: (payload) => axiosClient.post(API_PATH.AUTH.LOGIN, payload),
  register: (payload) => axiosClient.post(API_PATH.AUTH.REGISTER, payload),
}

import { createSlice } from '@reduxjs/toolkit'
import {
  getLocalstorageData,
  removeLocalstorageData,
  setLocalstorageData,
} from '@/utils/helper/localstorage'
import { ROLE_ACCOUNT } from '@/constants/constants'

const ACCESS_TOKEN_KEY = 'yipi_access_token'
const USER_KEY = 'yipi_user'

const initialState = {
  user: getLocalstorageData(USER_KEY),
  isAuthenticated: Boolean(getLocalstorageData(ACCESS_TOKEN_KEY)),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const payload = action.payload || {}
      const accessToken = payload.accessToken || `local-session-${Date.now()}`
      const refreshToken = payload.refreshToken || null
      const account = payload.account || payload.user || {}
      const user = {
        userInfo: {
          sub: account.username || payload.username || 'admin@yipi.edu',
          fullName: account.fullName || payload.fullName || 'Yipi Admin',
          role: account.role || account.accountType || payload.role || ROLE_ACCOUNT.ADMIN,
          accountType: account.accountType || payload.accountType || ROLE_ACCOUNT.ADMIN,
        },
      }

      setLocalstorageData({ key: ACCESS_TOKEN_KEY, data: accessToken })
      if (refreshToken) {
        setLocalstorageData({ key: 'yipi_refresh_token', data: refreshToken })
      }
      setLocalstorageData({ key: USER_KEY, data: user })

      state.user = user
      state.isAuthenticated = true
    },
    logout: (state) => {
      removeLocalstorageData(ACCESS_TOKEN_KEY)
      removeLocalstorageData('yipi_refresh_token')
      removeLocalstorageData(USER_KEY)

      state.user = null
      state.isAuthenticated = false
    },
  },
})

export const { login: loginAction, logout: logoutAction } = authSlice.actions
export const selectAuth = (state) => state.auth
export default authSlice.reducer

import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/features/Auth/auth.slice'
import themeReducer from '@/features/Theme/theme.slice'
import { setStore } from './storeRef'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
})

setStore(store)

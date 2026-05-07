import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/features/Auth/auth.slice'
import { setStore } from './storeRef'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

setStore(store)

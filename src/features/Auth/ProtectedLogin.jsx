import { Navigate } from 'react-router-dom'
import { getPostLoginPath } from './authRouting'
import useAuth from './useAuth'
import Login from '.'

export default function ProtectedLogin() {
  const { isAuthenticated, user } = useAuth()

  if (isAuthenticated) {
    return <Navigate to={getPostLoginPath(user)} replace />
  }

  return <Login />
}

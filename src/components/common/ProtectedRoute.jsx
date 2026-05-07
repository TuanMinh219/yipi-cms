import { Navigate, useLocation } from 'react-router-dom'
import PATH from '@/configs/paths/PATH'
import { getAccountType, getPostLoginPath } from '@/features/Auth/authRouting'
import useAuth from '@/features/Auth/useAuth'

export default function ProtectedRoute({ children, allowedAccountTypes }) {
  const location = useLocation()
  const { isAuthenticated, user } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to={PATH.LOGIN} replace state={{ from: location }} />
  }

  if (
    allowedAccountTypes?.length &&
    !allowedAccountTypes.includes(getAccountType(user))
  ) {
    return <Navigate to={getPostLoginPath(user)} replace />
  }

  return children
}

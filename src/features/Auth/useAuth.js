import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PATH from '@/configs/paths/PATH'
import { loginAction, logoutAction, selectAuth } from './auth.slice'
import { getPostLoginPath } from './authRouting'

export default function useAuth() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isAuthenticated } = useSelector(selectAuth)

  const logInUser = (payload) => {
    dispatch(loginAction(payload))
    navigate(getPostLoginPath(payload), { replace: true })
  }

  const logOutUser = () => {
    dispatch(logoutAction())
    navigate(PATH.LOGIN, { replace: true })
  }

  return {
    user,
    isAuthenticated,
    logInUser,
    logOutUser,
  }
}

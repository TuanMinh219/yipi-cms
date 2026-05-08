
import { ConfigProvider, theme as antdTheme } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import routes from '@/configs/routes'
import { setThemeMode } from '@/features/Theme/theme.slice'
import 'antd/dist/reset.css'
import 'react-toastify/dist/ReactToastify.css'
import '@/assets/styles/index.scss'

const router = createBrowserRouter(routes)
const THEME_STORAGE_KEY = 'yipi_cms_theme_mode'

function App() {
  const dispatch = useDispatch()
  const themeMode = useSelector((state) => state.theme?.mode || 'light')
  const isDark = themeMode === 'dark'

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (storedTheme === 'dark' || storedTheme === 'light') {
      dispatch(setThemeMode(storedTheme))
      return
    }

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    dispatch(setThemeMode(prefersDark ? 'dark' : 'light'))
  }, [dispatch])

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, themeMode)
    document.documentElement.classList.toggle('theme-dark', isDark)
    document.documentElement.classList.toggle('theme-light', !isDark)
  }, [themeMode, isDark])

  const themeConfig = {
    algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    token: {
      colorPrimary: '#0f9f8f',
      colorBgLayout: isDark ? '#0f1115' : '#f5f7fb',
      colorBgBase: isDark ? '#111827' : '#ffffff',
      colorTextBase: isDark ? '#f8fafc' : '#101828',
      borderRadius: 6,
      fontFamily:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    },
    components: {
      Layout: {
        bodyBg: isDark ? '#0f172a' : '#f5f7fb',
      },
    },
  }

  return (
    <ConfigProvider theme={themeConfig}>
      <RouterProvider router={router} />
      <ToastContainer stacked position="top-right" autoClose={2500} />
    </ConfigProvider>
  )
}

export default App


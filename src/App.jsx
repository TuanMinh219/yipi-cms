
import { ConfigProvider } from 'antd'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import routes from '@/configs/routes'
import 'antd/dist/reset.css'
import 'react-toastify/dist/ReactToastify.css'
import '@/assets/styles/index.scss'

const router = createBrowserRouter(routes)

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0f9f8f',
          borderRadius: 6,
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        },
        components: {
          Layout: {
            bodyBg: '#f5f7fb',
          },
        },
      }}
    >
      <RouterProvider router={router} />
      <ToastContainer stacked position="top-right" autoClose={2500} />
    </ConfigProvider>
  )
}

export default App


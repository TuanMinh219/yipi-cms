import { Layout } from 'antd'
import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AppHeader from '@/components/AppHeader'
import AppSider from '@/components/AppSider'
import AppSiderMobile from '@/components/AppSider/AppSiderMobile'
import useMediaQuery, { mediaQueryPoints } from '@/hooks/useMediaQuery'
import './index.scss'

const { Content } = Layout

export default function MainLayout() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const isMobile = useMediaQuery(`(max-width: ${mediaQueryPoints.md}px)`)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Layout className="main-layout">
      {isMobile ? (
        <AppSiderMobile openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      ) : (
        <AppSider />
      )}
      <Layout className="main-layout__body">
        <AppHeader setOpenDrawer={setOpenDrawer} />
        <Content className="site-layout-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

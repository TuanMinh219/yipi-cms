import { Layout } from 'antd'
import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import useMediaQuery, { mediaQueryPoints } from '@/hooks/useMediaQuery'
import UserHeader from '../../components/UserHeader'
import UserSider, { UserSiderMobile } from '../../components/UserSider'
import './index.scss'

const { Content } = Layout

export default function UserLayout() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const isMobile = useMediaQuery(`(max-width: ${mediaQueryPoints.md}px)`)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Layout className="user-layout">
      {isMobile ? (
        <UserSiderMobile open={openDrawer} setOpen={setOpenDrawer} />
      ) : (
        <UserSider />
      )}
      <Layout className="user-layout__body">
        <UserHeader setOpenDrawer={setOpenDrawer} />
        <Content className="user-layout__content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

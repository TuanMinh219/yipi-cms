import { Drawer, Menu } from 'antd'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '@/assets/logo.svg'
import useSider from './hooks/useSider'
import './index.scss'

export default function AppSiderMobile({ openDrawer, setOpenDrawer }) {
  const { t } = useTranslation()
  const location = useLocation()
  const { menuItems, selectedKey, defaultOpenKeys } = useSider()

  useEffect(() => {
    document.body.style.overflow = openDrawer ? 'hidden' : 'auto'
  }, [openDrawer])

  useEffect(() => {
    setOpenDrawer(false)
  }, [location.pathname, setOpenDrawer])

  return (
    <Drawer
      open={openDrawer}
      placement="left"
      width={286}
      closable={false}
      onClose={() => setOpenDrawer(false)}
      className="app-sider-drawer"
      title={
        <div className="sider-logo">
          <img src={logo} alt="Yipi" />
          <div>
            <p>{t('common.app_name')}</p>
            <span>{t('common.learning_platform')}</span>
          </div>
        </div>
      }
    >
      <Menu
        key={`${selectedKey[0]}-${defaultOpenKeys.join('|')}`}
        theme="dark"
        mode="inline"
        selectedKeys={selectedKey}
        defaultOpenKeys={defaultOpenKeys}
        items={menuItems}
      />
    </Drawer>
  )
}

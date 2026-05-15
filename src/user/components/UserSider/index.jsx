import { Drawer, Layout, Menu } from 'antd'
import { PanelLeftClose } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '@/assets/newlogo.jpg'
import useMediaQuery, { mediaQueryPoints } from '@/hooks/useMediaQuery'
import useUserSider from '../../hooks/useUserSider'
import './index.scss'

const { Sider } = Layout

export function UserSiderMobile({ open, setOpen }) {
  const location = useLocation()
  const { menuItems, selectedKey, defaultOpenKeys } = useUserSider()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, setOpen])

  return (
    <Drawer
      open={open}
      placement="left"
      width={286}
      closable={false}
      onClose={() => setOpen(false)}
      className="user-sider-drawer"
      title={<UserSiderBrand />}
    >
      <Menu
        key={`${selectedKey[0]}-${defaultOpenKeys.join('|')}`}
        mode="inline"
        selectedKeys={selectedKey}
        defaultOpenKeys={defaultOpenKeys}
        items={menuItems}
      />
    </Drawer>
  )
}

export default function UserSider() {
  const [collapsed, setCollapsed] = useState(false)
  const isCompact = useMediaQuery(`(max-width: ${mediaQueryPoints.lgPlus}px)`)
  const { menuItems, selectedKey, defaultOpenKeys } = useUserSider()

  useEffect(() => {
    setCollapsed(isCompact)
  }, [isCompact])

  return (
    <Sider
      width={276}
      collapsedWidth={78}
      collapsed={collapsed}
      collapsible
      className="user-sider"
      trigger={
        <button
          type="button"
          className="user-sider__trigger"
          aria-label={collapsed ? 'Expand menu' : 'Collapse menu'}
          onClick={() => setCollapsed((prev) => !prev)}
        >
          <PanelLeftClose size={16} />
        </button>
      }
    >
      <UserSiderBrand collapsed={collapsed} />
      <Menu
        key={`${selectedKey[0]}-${defaultOpenKeys.join('|')}-${collapsed}`}
        mode="inline"
        selectedKeys={selectedKey}
        defaultOpenKeys={collapsed ? undefined : defaultOpenKeys}
        items={menuItems}
        inlineCollapsed={collapsed}
      />
    </Sider>
  )
}

function UserSiderBrand({ collapsed = false }) {
  return (
    <div className="user-sider-brand">
      <img src={logo} alt="Yipi" />
      {!collapsed && (
        <div>
          <strong>Yipi Practice</strong>
          <span>IELTS self-study</span>
        </div>
      )}
    </div>
  )
}

import { Layout, Menu } from 'antd'
import { PanelLeftClose } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import logo from '@/assets/newlogo.jpg'
import useMediaQuery, { mediaQueryPoints } from '@/hooks/useMediaQuery'
import useSider from './hooks/useSider'
import './index.scss'

const { Sider } = Layout

export default function AppSider() {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()
  const { menuItems, selectedKey, defaultOpenKeys } = useSider()
  const isCompact = useMediaQuery(`(max-width: ${mediaQueryPoints.lgPlus}px)`)

  useEffect(() => {
    setCollapsed(isCompact)
  }, [isCompact])

  return (
    <Sider
      collapsible
      width={270}
      collapsedWidth={76}
      theme="dark"
      className="app-sider"
      trigger={
        <button
          type="button"
          className="app-sider__trigger"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          onClick={() => setCollapsed((prev) => !prev)}
        >
          <PanelLeftClose size={16} />
        </button>
      }
      collapsed={collapsed}
    >
      <div className="sider-logo">
        <img src={logo} alt="Yipi" />
        {!collapsed && (
          <div>
            <p>{t('common.app_name')}</p>
            <span>{t('common.learning_platform')}</span>
          </div>
        )}
      </div>
      <Menu
        key={`${selectedKey[0]}-${defaultOpenKeys.join('|')}-${collapsed}`}
        theme="dark"
        mode="inline"
        selectedKeys={selectedKey}
        defaultOpenKeys={collapsed ? undefined : defaultOpenKeys}
        items={menuItems}
        inlineCollapsed={collapsed}
      />
    </Sider>
  )
}

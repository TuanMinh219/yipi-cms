import { Breadcrumb } from 'antd'
import { Home } from 'lucide-react'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import PATH from '@/configs/paths/PATH'
import getMenuItems from '@/components/AppSider/hooks/menuItems'
import './index.scss'

const findTrail = (pathname, items, parents = []) => {
  for (const item of items) {
    const trail = [...parents, item]

    if (item.path === pathname) return trail

    if (item.children) {
      const childTrail = findTrail(pathname, item.children, trail)
      if (childTrail.length) return childTrail
    }
  }

  return []
}

export default function AppBreadcrumb() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const menuItems = useMemo(() => getMenuItems(t), [t])
  const trail = pathname === PATH.HOME ? [] : findTrail(pathname, menuItems)

  const items = [
    {
      key: 'home',
      title: (
        <span className="breadcrumb-label clickable" onClick={() => navigate(PATH.HOME)}>
          <Home size={18} />
          {t('menu.home')}
        </span>
      ),
    },
    ...trail
      .filter((item) => item.key !== 'home')
      .map((item, index) => {
        const isLast = index === trail.filter((node) => node.key !== 'home').length - 1
        return {
          key: item.key,
          title: (
            <span
              className={`breadcrumb-label ${item.path && !isLast ? 'clickable' : ''}`}
              onClick={() => item.path && !isLast && navigate(item.path)}
            >
              {item.label}
            </span>
          ),
        }
      }),
  ]

  return <Breadcrumb className="app-breadcrumb" items={items} />
}

import { Breadcrumb } from 'antd'
import { Home } from 'lucide-react'
import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PATH from '@/configs/paths/PATH'
import userMenuItems from '../../configs/userMenuItems'
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

const getText = (label) => {
  if (typeof label === 'string') return label
  return label?.props?.children?.props?.children || ''
}

export default function UserBreadcrumb() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const trail = useMemo(() => findTrail(pathname, userMenuItems), [pathname])

  const items = [
    {
      key: 'home',
      title: (
        <span className="user-breadcrumb__label clickable" onClick={() => navigate(PATH.USER.ROOT)}>
          <Home size={17} />
          Home
        </span>
      ),
    },
    ...trail
      .filter((item) => item.key !== 'dashboard')
      .map((item, index, list) => {
        const isLast = index === list.length - 1
        return {
          key: item.key,
          title: (
            <span
              className={`user-breadcrumb__label ${item.path && !isLast ? 'clickable' : ''}`}
              onClick={() => item.path && !isLast && navigate(item.path)}
            >
              {getText(item.label)}
            </span>
          ),
        }
      }),
  ]

  return <Breadcrumb className="user-breadcrumb" items={items} />
}

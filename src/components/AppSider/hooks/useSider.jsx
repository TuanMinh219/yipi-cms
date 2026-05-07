import { useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useAuth from '@/features/Auth/useAuth'
import getMenuItems from './menuItems'

const findActiveMenuKeys = (path, items, openKeys = []) => {
  for (const item of items) {
    if (item.path === path) {
      return { selected: item.key, openKeys }
    }

    if (item.children) {
      const result = findActiveMenuKeys(path, item.children, [...openKeys, item.key])

      if (result.selected) return result
    }
  }

  for (const item of items) {
    if (item.path && item.path !== path && path.startsWith(`${item.path}/`)) {
      return { selected: item.key, openKeys }
    }
  }

  return { selected: '', openKeys: [] }
}

const transformMenuItems = (items) =>
  items.map((item) => ({
    ...item,
    label: item.path ? (
      <NavLink to={item.path}>
        <span className="label">{item.label}</span>
      </NavLink>
    ) : (
      <span className="label">{item.label}</span>
    ),
    children: item.children ? transformMenuItems(item.children) : undefined,
  }))

export default function useSider() {
  const location = useLocation()
  const { t } = useTranslation()
  const { user } = useAuth()
  const roleUser = user?.userInfo?.role
  const items = useMemo(() => getMenuItems(t, roleUser), [t, roleUser])
  const active = useMemo(
    () => findActiveMenuKeys(location.pathname, items),
    [location.pathname, items]
  )
  const menuItems = useMemo(() => transformMenuItems(items), [items])

  return {
    rawItems: items,
    menuItems,
    selectedKey: [active.selected || 'home'],
    defaultOpenKeys: active.openKeys,
  }
}

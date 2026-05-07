import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import userMenuItems from '../configs/userMenuItems'

const findActive = (pathname, items, openKeys = []) => {
  for (const item of items) {
    if (item.path === pathname) {
      return { selected: item.key, openKeys }
    }

    if (item.children) {
      const result = findActive(pathname, item.children, [...openKeys, item.key])
      if (result.selected) return result
    }
  }

  return { selected: 'dashboard', openKeys: [] }
}

export default function useUserSider() {
  const location = useLocation()
  const active = useMemo(() => findActive(location.pathname, userMenuItems), [location.pathname])

  return {
    menuItems: userMenuItems,
    selectedKey: [active.selected],
    defaultOpenKeys: active.openKeys,
  }
}

import { Avatar, Badge, Button, Dropdown, Layout } from 'antd'
import { ChevronDown, LogOut, Menu, Search } from 'lucide-react'
import useAuth from '@/features/Auth/useAuth'
import useMediaQuery, { mediaQueryPoints } from '@/hooks/useMediaQuery'
import UserBreadcrumb from '../UserBreadcrumb'
import './index.scss'

const { Header } = Layout

export default function UserHeader({ setOpenDrawer }) {
  const { user, logOutUser } = useAuth()
  const isMobile = useMediaQuery(`(max-width: ${mediaQueryPoints.mdPlus}px)`)
  const fullName = user?.userInfo?.fullName || user?.userInfo?.sub || 'Learner'

  const options = [
    {
      key: 'user',
      label: (
        <div className="learner-menu-user">
          <strong>{fullName}</strong>
          <span>{user?.userInfo?.accountType || 'USER'}</span>
        </div>
      ),
      disabled: true,
    },
    {
      key: 'logout',
      label: 'Sign out',
      icon: <LogOut size={15} />,
      onClick: logOutUser,
    },
  ]

  return (
    <Header className="user-header">
      <div className="user-header__left">
        {isMobile && (
          <Button
            type="text"
            className="user-header__menu"
            icon={<Menu size={20} />}
            onClick={() => setOpenDrawer(true)}
          />
        )}
        <UserBreadcrumb />
      </div>

      <div className="user-header__right">
        <div className="user-search">
          <Search size={16} />
          <span>Search practice</span>
        </div>
        <Dropdown menu={{ items: options }} trigger={['click']}>
          <button type="button" className="learner-trigger">
            <Badge
              count={<ChevronDown size={13} color="#ffffff" />}
              color="#0f9f8f"
              offset={[-4, 32]}
            >
              <Avatar size={38}>{fullName.charAt(0).toUpperCase()}</Avatar>
            </Badge>
          </button>
        </Dropdown>
      </div>
    </Header>
  )
}

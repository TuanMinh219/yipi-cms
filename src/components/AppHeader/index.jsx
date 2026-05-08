import { Avatar, Badge, Button as AntButton, Dropdown, Layout } from 'antd'
import { ChevronDown, LogOut, Menu } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import AppBreadcrumb from '@/components/AppBreadcrumb'
import LanguageSwitcher from '@/components/common/LanguageSwitcher'
import { ThemeToggle } from '@/common/Atoms'
import useAuth from '@/features/Auth/useAuth'
import useMediaQuery, { mediaQueryPoints } from '@/hooks/useMediaQuery'
import './index.scss'

const { Header } = Layout

export default function AppHeader({ setOpenDrawer }) {
  const { t } = useTranslation()
  const { user, logOutUser } = useAuth()
  const isMobile = useMediaQuery(`(max-width: ${mediaQueryPoints.mdPlus}px)`)
  const fullName = user?.userInfo?.fullName || user?.userInfo?.sub || 'Admin'
  const role = user?.userInfo?.role || 'ADMIN'

  const options = [
    {
      key: 'user',
      label: (
        <div className="account-menu__user">
          <strong>{fullName}</strong>
          <span>{role}</span>
        </div>
      ),
      disabled: true,
    },
    {
      key: 'logout',
      label: t('common.sign_out'),
      icon: <LogOut size={15} />,
      onClick: logOutUser,
    },
  ]

  return (
    <Header className="app-header">
      <div className="app-header__left">
        {isMobile && (
          <AntButton
            type="text"
            className="menu-button"
            icon={<Menu size={20} />}
            onClick={() => setOpenDrawer(true)}
          />
        )}
        <AppBreadcrumb />
      </div>

      <div className="app-header__right">
        <ThemeToggle />
        <LanguageSwitcher />
        <Dropdown menu={{ items: options }} trigger={['click']}>
          <button type="button" className="account-trigger">
            <Badge
              count={<ChevronDown size={13} color="#ffffff" />}
              color="#667085"
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

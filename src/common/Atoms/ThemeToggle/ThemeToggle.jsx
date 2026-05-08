import { Tooltip, Switch } from 'antd'
import { Moon, Sun } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleThemeMode } from '@/features/Theme/theme.slice'
import './ThemeToggle.css'

export default function ThemeToggle({ className = '' }) {
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.theme?.mode || 'light')
  const checked = mode === 'light'

  return (
    <Tooltip title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
      <Switch
        checked={checked}
        onChange={() => dispatch(toggleThemeMode())}
        checkedChildren={<Sun size={14} />}
        unCheckedChildren={<Moon size={14} />}
        className={`atom-theme-toggle ${className}`}
      />
    </Tooltip>
  )
}

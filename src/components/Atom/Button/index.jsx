import { Button as AntButton, Tooltip } from 'antd'
import {
  Download,
  Eye,
  Pencil,
  Plus,
  RotateCcw,
  Search,
  Trash2,
} from 'lucide-react'
import './index.scss'

const iconProps = { size: 16, strokeWidth: 2 }

const getIconByAction = (action) => {
  switch (action) {
    case 'create':
      return <Plus {...iconProps} />
    case 'search':
      return <Search {...iconProps} />
    case 'reset':
      return <RotateCcw {...iconProps} />
    case 'view':
      return <Eye {...iconProps} />
    case 'edit':
      return <Pencil {...iconProps} />
    case 'delete':
      return <Trash2 {...iconProps} />
    case 'export':
      return <Download {...iconProps} />
    default:
      return undefined
  }
}

export const Button = ({ tooltip, action, icon, children, ...props }) => {
  const button = (
    <AntButton icon={icon ?? getIconByAction(action)} {...props}>
      {children}
    </AntButton>
  )

  return tooltip ? <Tooltip title={tooltip}>{button}</Tooltip> : button
}

export default Button

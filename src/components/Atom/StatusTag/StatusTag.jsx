import { Tag } from 'antd'

const STATUS_CONFIG = {
  ACTIVE: { color: 'green', label: 'Active' },
  INACTIVE: { color: 'default', label: 'Inactive' },
  DRAFT: { color: 'gold', label: 'Draft' },
  PUBLISHED: { color: 'blue', label: 'Published' },
  REVIEW: { color: 'purple', label: 'Review' },
  ARCHIVED: { color: 'default', label: 'Archived' },
  PENDING: { color: 'orange', label: 'Pending' },
  COMPLETED: { color: 'green', label: 'Completed' },
  REFUNDED: { color: 'red', label: 'Refunded' },
}

export const StatusTag = ({ value, label }) => {
  const config = STATUS_CONFIG[value] || { color: 'default', label: value }

  return <Tag color={config.color}>{label || config.label}</Tag>
}

export default StatusTag

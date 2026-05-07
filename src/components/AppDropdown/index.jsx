import { Dropdown } from 'antd'

export default function AppDropdown({ options = [], onChange, children, ...props }) {
  return (
    <Dropdown
      menu={{
        items: options,
        onClick: onChange,
      }}
      trigger={['click']}
      {...props}
    >
      {children}
    </Dropdown>
  )
}

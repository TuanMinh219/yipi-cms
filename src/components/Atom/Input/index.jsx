import { CloseOutlined } from '@ant-design/icons'
import { Form, Input as AntInput } from 'antd'
import { useTranslation } from 'react-i18next'
import { generateRequiredRules, toCapitalize } from '@/utils/form/common'
import './index.scss'

export const Input = ({
  width = '100%',
  label,
  name,
  required = false,
  rules,
  initialValue,
  validateTrigger,
  validateDebounce,
  validateFirst = true,
  dependencies,
  restField,
  ...rest
}) => {
  const { t } = useTranslation()

  return (
    <Form.Item
      label={label}
      name={name}
      rules={generateRequiredRules(required, rules, t)}
      initialValue={initialValue}
      validateTrigger={validateTrigger}
      validateDebounce={validateDebounce}
      validateFirst={validateFirst}
      dependencies={dependencies}
      className="atom-form-item"
      {...restField}
    >
      <BaseInput width={width} {...rest} />
    </Form.Item>
  )
}

export const BaseInput = ({
  width = '100%',
  onChange = () => {},
  onBlur = () => {},
  autoTrim = true,
  capitalize = false,
  className = '',
  ...rest
}) => (
  <AntInput
    style={{ width }}
    className={`gt-input ${className}`}
    allowClear={{
      clearIcon: <CloseOutlined style={{ fontSize: 14 }} />,
    }}
    onChange={onChange}
    onBlur={(event) => {
      const originalValue = event.target.value
      const trimmedValue = autoTrim ? originalValue.trim() : originalValue
      const finalValue = capitalize ? toCapitalize(trimmedValue) : trimmedValue

      if (finalValue !== originalValue) {
        onChange({ target: { value: finalValue } })
      }

      onBlur(event)
    }}
    {...rest}
  />
)

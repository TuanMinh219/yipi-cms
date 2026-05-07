import { CloseOutlined } from '@ant-design/icons'
import { Form, Select as AntSelect } from 'antd'
import { useTranslation } from 'react-i18next'
import { generateRequiredRules } from '@/utils/form/common'
import './index.scss'

export const Select = ({
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
  options = [],
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
      <BaseSelect width={width} options={options} {...rest} />
    </Form.Item>
  )
}

export const BaseSelect = ({
  width = '100%',
  className = '',
  options = [],
  fieldNames = { label: 'label', value: 'value' },
  ...rest
}) => {
  const { t } = useTranslation()

  return (
    <AntSelect
      style={{ width }}
      className={`gt-select ${className}`}
      allowClear={{
        clearIcon: <CloseOutlined style={{ fontSize: 14 }} />,
      }}
      notFoundContent={<p className="select-empty">{t('table.noData')}</p>}
      fieldNames={fieldNames}
      options={options}
      showSearch
      optionFilterProp={fieldNames.label}
      {...rest}
    />
  )
}

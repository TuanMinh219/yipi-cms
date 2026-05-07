import { Button, Segmented, Tooltip } from 'antd'
import { Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const current = i18n.language?.startsWith('vi') ? 'vi' : 'en'

  return (
    <Tooltip title={t('common.language')}>
      <div className="language-switcher">
        <Button type="text" icon={<Languages size={18} />} />
        <Segmented
          size="small"
          value={current}
          options={[
            { label: 'EN', value: 'en' },
            { label: 'VI', value: 'vi' },
          ]}
          onChange={(value) => i18n.changeLanguage(value)}
        />
      </div>
    </Tooltip>
  )
}

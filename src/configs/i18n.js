import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import enTrans from '@/assets/locales/en.json'
import viTrans from '@/assets/locales/vi.json'

const LANGUAGE_KEY = 'i18nextLng'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: { translation: enTrans },
      vi: { translation: viTrans },
    },
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: LANGUAGE_KEY,
    },
  })

export default i18n

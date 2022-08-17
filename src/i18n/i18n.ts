import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from './localization/en.json'
import translationPT from './localization/pt.json'

export const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
})
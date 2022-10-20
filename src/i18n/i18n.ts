import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from './localization/en.json'
import translationPT from './localization/pt.json'

const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
};

const getDefaultLang = async () => {
  const storedLang = await AsyncStorage.getItem('lang');

  return i18n
    .use(initReactI18next) 
    .init({
      resources,
      lng: storedLang ? storedLang : 'pt', 

      interpolation: {
        escapeValue: false, 
      },

      fallbackLng: ['pt', 'en'],
    });
};

export default getDefaultLang();

/* import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from './localization/en.json'
import translationPT from './localization/pt.json'

export const defaultNS = "en";
export const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
}

i18n.use(initReactI18next).init({
  lng: "en",
  ns: ["ns1", "ns2"],
  defaultNS,
  resources,
}) */
import ReactDOM from 'react-dom/client'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import global_en from './locales/en/global.json'
import global_he from './locales/es/global.json'

import App from './App.js'

import './index.css'

i18next.init({
 interpolation: { escapeValue: false },
  lng: 'auto',
  fallbackLng: 'en',
 resources: {
  en: {
   global: global_en,
  },
 he: {
   global: global_he,
  },
 },
})

ReactDOM.createRoot(document.getElementById('root')).render(
 <I18nextProvider i18n={i18next}>
  <App />
 </I18nextProvider>
)
import { useUnit } from 'effector-react'
import { $lang } from '@/context'
import translationsJson from '../public/translations/translations.json'

export const useLang = () => {
  const lang = useUnit($lang)
  const translations = translationsJson

  return { lang, translations }
}

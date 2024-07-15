'use client'
import { useState } from 'react'
import { useUnit } from 'effector-react'
import { useLang } from '@/hooks'
import { AllowedLangs } from '@/constants'
import { $menuIsOpen, closeMenu, setLang } from '@/context'
import { removeOverflowHiddenFromBody } from '@/lib'

export const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyersList, setShowBuyersList] = useState(false)
  const [showContactsList, setShowContactsList] = useState(false)
  const menuIsOpen = useUnit($menuIsOpen)
  const { lang, translations } = useLang()

  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs)
    localStorage.setItem('lang', JSON.stringify(lang))
  }

  const handleSwitchLangToRu = () => handleSwitchLang('ru')
  const handleSwitchLangToEn = () => handleSwitchLang('en')

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody()
    closeMenu()
  }

  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <div className='container nav-menu__container' />
      <img
        src='/img/menu-bg.png'
        alt='menu backgroud'
        className={`nav-menu__bg ${menuIsOpen ? 'open' : ''}`}
      />
      <button
        className={`btn-reset nav-menu__close ${menuIsOpen ? 'open' : ''}`}
        onClick={handleCloseMenu}
      />
      <div className={`nav-menu__lang ${menuIsOpen ? 'open' : ''}`}>
        <button
          className={`btn-reset nav-menu__lang__btn ${lang === 'ru' ? 'lang-active' : ''}`}
          onClick={handleSwitchLangToRu}
        >
          RU
        </button>
        <button
          className={`btn-reset nav-menu__lang__btn ${lang === 'en' ? 'lang-active' : ''}`}
          onClick={handleSwitchLangToEn}
        >
          EN
        </button>
      </div>
    </nav>
  )
}

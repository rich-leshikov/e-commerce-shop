'use client'
import { useState } from 'react'
import { useUnit } from 'effector-react'
import { useLang } from '@/hooks'
import { $menuIsOpen } from '@/context/modals'

export const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyersList, setShowBuyersList] = useState(false)
  const [showContactsList, setShowContactsList] = useState(false)
  const menuIsOpen = useUnit($menuIsOpen)
  const { lang, translations } = useLang()

  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <h1>Menu</h1>
    </nav>
  )
}

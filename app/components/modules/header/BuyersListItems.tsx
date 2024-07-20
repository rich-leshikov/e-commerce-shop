import React from 'react'
import Link from 'next/link'
import { useLang } from '@/hooks'

export const BuyersListItems = () => {
  const { translations, lang } = useLang()

  return (
    <>
      <li className='nav-menu__accordion__item'>
        <Link
          href='/about'
          className='nav-menu__accordion__item__link nav-menu__accordion__item__title'
        >
          {translations[lang].main_menu.about}
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link href='/blog' className='nav-menu__accordion__item__link'>
          {translations[lang].main_menu.blog}
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link
          href='/shipping-and-payment'
          className='nav-menu__accordion__item__link'
        >
          {translations[lang].main_menu.shipping}
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link
          href='/purchase-returns'
          className='nav-menu__accordion__item__link'
        >
          {translations[lang].main_menu.returns}
        </Link>
      </li>
    </>
  )
}

import React from 'react'
import Link from 'next/link'
import { useLang } from '@/hooks'

export const ContactsListItems = () => {
  const { translations, lang } = useLang()

  return (
    <>
      <li className='nav-menu__accordion__item'>
        <Link
          href='tel:+3753364079845'
          className='nav-menu__accordion__item__link nav-menu__accordion__item__title'
        >
          +375(33)64079845
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link
          href='mailto:richardleshikov@gmail.com'
          className='nav-menu__accordion__item__link'
        >
          Email
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link href='/tg' className='nav-menu__accordion__item__link'>
          {translations[lang].main_menu.tg}
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link href='/vk' className='nav-menu__accordion__item__link'>
          {translations[lang].main_menu.vk}
        </Link>
      </li>
    </>
  )
}

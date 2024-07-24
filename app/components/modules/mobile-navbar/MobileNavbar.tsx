'use client'
import React from 'react'
import Link from 'next/link'
import { useLang } from '@/hooks'
import { CatalogMenu } from '@/components'
import {
  closeCatalogMenu,
  closeMenu,
  openCatalogMenu,
  openMenu,
} from '@/context'
import { addOverflowHiddenToBody } from '@/lib'

export const MobileNavbar = () => {
  const { lang, translations } = useLang()

  const handleOpenMenu = () => {
    addOverflowHiddenToBody('0')
    openMenu()
    closeCatalogMenu()
  }

  const handleOpenCatalogMenu = () => {
    addOverflowHiddenToBody()
    openCatalogMenu()
    closeMenu()
  }

  return (
    <>
      <CatalogMenu />
      <div className='mobile-navbar'>
        <Link href='/' className='mobile-navbar__btn'>
          {translations[lang].breadcrumbs.main}
        </Link>
        <button
          className='btn-reset mobile-navbar__btn'
          onClick={handleOpenCatalogMenu}
        >
          {translations[lang].breadcrumbs.catalog}
        </button>
        <Link href='/favorites' className='btn-reset mobile-navbar__btn'>
          {translations[lang].breadcrumbs.favorites}
        </Link>
        <Link href='/cart' className='btn-reset mobile-navbar__btn'>
          {translations[lang].breadcrumbs.cart}
        </Link>
        <button
          className='btn-reset mobile-navbar__btn'
          onClick={handleOpenMenu}
        >
          {translations[lang].common.more}
        </button>
      </div>
    </>
  )
}

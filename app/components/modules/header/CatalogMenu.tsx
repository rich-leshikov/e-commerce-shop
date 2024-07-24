'use client'
import { useState } from 'react'
import { useUnit } from 'effector-react'
import { AnimatePresence, motion } from 'framer-motion'
import { $catalogMenuIsOpen, closeCatalogMenu } from '@/context'
import { useLang, useMenuAnimation } from '@/hooks'
import { Header } from '@/components'
import { removeOverflowHiddenFromBody } from '@/lib'

export const CatalogMenu = () => {
  const catalogMenuIsOpen = useUnit($catalogMenuIsOpen)
  const [isShowClothList, setIsShowClothList] = useState(false)
  const [isShowAccessoriesList, setIsShowAccessoriesList] = useState(false)
  const [isShowSouvenirsList, setIsShowSouvenirsList] = useState(false)
  const [isShowOfficeList, setIsShowOfficeList] = useState(false)
  const { lang, translations } = useLang()
  const { itemVariants, sideVariants, popupZIndex } = useMenuAnimation(
    2,
    catalogMenuIsOpen
  )

  const handleShowClothList = () => {
    setIsShowClothList(true)
    setIsShowAccessoriesList(false)
    setIsShowSouvenirsList(false)
    setIsShowOfficeList(false)
  }

  const handleShowAccessoriesList = () => {
    setIsShowClothList(false)
    setIsShowAccessoriesList(true)
    setIsShowSouvenirsList(false)
    setIsShowOfficeList(false)
  }

  const handleShowSouvenirsList = () => {
    setIsShowClothList(false)
    setIsShowAccessoriesList(false)
    setIsShowSouvenirsList(true)
    setIsShowOfficeList(false)
  }

  const handleShowOfficeList = () => {
    setIsShowClothList(false)
    setIsShowAccessoriesList(false)
    setIsShowSouvenirsList(false)
    setIsShowOfficeList(true)
  }

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody()
    closeCatalogMenu()
    setIsShowClothList(false)
    setIsShowAccessoriesList(false)
    setIsShowSouvenirsList(false)
    setIsShowOfficeList(false)
  }

  const items = [
    {
      name: translations[lang].main_menu.cloth,
      id: 1,
      items: [
        translations[lang].comparison['t-shirts'],
        translations[lang].comparison['long-sleeves'],
        translations[lang].comparison.hoodie,
        translations[lang].comparison.outerwear,
      ],
      handler: () => handleShowClothList(),
    },
    {
      name: translations[lang].main_menu.accessories,
      id: 2,
      items: [
        translations[lang].comparison.bags,
        translations[lang].comparison.headdress,
        translations[lang].comparison.umbrella,
      ],
      handler: () => handleShowAccessoriesList(),
    },
    {
      name: translations[lang].main_menu.souvenirs,
      id: 3,
      items: [
        translations[lang].comparison['business-souvenirs'],
        translations[lang].comparison['promotional-souvenirs'],
      ],
      handler: () => handleShowSouvenirsList(),
    },
    {
      name: translations[lang].main_menu.office,
      id: 4,
      items: [
        translations[lang].comparison.notebook,
        translations[lang].comparison.pen,
      ],
      handler: () => handleShowOfficeList(),
    },
  ]

  return (
    <div className='catalog-menu' style={{ zIndex: popupZIndex }}>
      <AnimatePresence>
        {catalogMenuIsOpen && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{ width: 300 }}
            exit={{ width: 0, transition: { delay: 0.7, duration: 0.3 } }}
          >
            <div className='catalog-menu__header'>
              <Header />
            </div>
            <motion.div
              className='catalog-menu__inner'
              initial='closed'
              animate='open'
              exit='closed'
              variants={sideVariants}
            >
              <img
                className='catalog-menu__bg'
                src='/img/menu-bg-small.png'
                alt='menu background'
              />
              <motion.button
                className='btn-reset catalog-menu__close'
                variants={itemVariants}
                onClick={handleCloseMenu}
              />
              <motion.h2
                className='catalog-menu__title'
                variants={itemVariants}
              >
                {translations[lang].main_menu.catalog}
              </motion.h2>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  )
}

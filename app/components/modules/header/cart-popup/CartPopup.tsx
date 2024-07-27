'use client'
import { forwardRef } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { IWrappedComponentProps } from '@/types'
import { withClickOutside } from '@/components'
import { useLang } from '@/hooks'

const InnerCartPopup = forwardRef<HTMLDivElement, IWrappedComponentProps>(
  ({ isOpen, setIsOpen }, ref) => {
    const { lang, translations } = useLang()

    const handleShowPopup = () => setIsOpen(true)
    const handleHidePopup = () => setIsOpen(false)

    return (
      <div className='cart-popup' ref={ref}>
        <Link
          className='header__links__item__btn header__links__item__btn--cart'
          href='/cart'
          onMouseEnter={handleShowPopup}
        />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className='cart-popup__wrapper'
              onMouseLeave={handleHidePopup}
            >
              <span className='cart-popup__arrow' />
              <button
                className='btn-reset cart-popup__close'
                onClick={handleHidePopup}
              />
              <h3 className='cart-popup__title'>
                {translations[lang].breadcrumbs.cart}
              </h3>
              <ul className='list-reset cart-popup__cart-list'>
                <li className='cart-popup__cart-list__empty-cart' />
              </ul>
              <div className='cart-popup__footer'>
                <div className='cart-popup__footer__inner'>
                  <span>{translations[lang].common.order_price}:</span>
                  <span>$0</span>
                </div>
                <Link href='/order' className='cart-popup__footer__link'>
                  {translations[lang].breadcrumbs.order}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }
)

InnerCartPopup.displayName = 'CartPopup'

export const CartPopup = withClickOutside(InnerCartPopup)

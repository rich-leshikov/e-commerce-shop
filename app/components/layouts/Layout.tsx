'use client'
import { FC, ReactNode } from 'react'
import { useUnit } from 'effector-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Header, MobileNavbar, SearchModal } from '@/components'
import { useMediaQuery } from '@/hooks'
import { $searchModal } from '@/context'
import { handleCloseSearchModal } from '@/lib'

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  const isMedia800 = useMediaQuery(800)
  const searchModal = useUnit($searchModal)

  return (
    <>
      <Header />
      {children}
      {isMedia800 && <MobileNavbar />}
      <AnimatePresence>
        {searchModal && (
          <motion.div
            initial={{ opacity: 0, zIndex: 102 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SearchModal />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`header__search-overlay ${searchModal ? 'overlay-active' : ''}`}
        onClick={handleCloseSearchModal}
      />
      <div className='footer' />
    </>
  )
}

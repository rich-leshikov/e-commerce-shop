'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const CatalogMenuList = ({ items }: { items: string[] }) => {
  return (
    <motion.ul
      className='list-reset nav-menu__accordion'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {items.map((title, i) => (
        <li
          key={i}
          className='nav-menu__accordion__item__list__item catalog__accordion__item__list__item'
          style={{ position: 'relative' }}
        >
          <Link
            href='/catalog'
            className='nav-menu__accordion__item__list__item__link'
          >
            {title}
          </Link>
        </li>
      ))}
    </motion.ul>
  )
}

import { FC } from 'react'
import Link from 'next/link'
import { IMenuLinkItemProps } from '@/types'

export const MenuLinkItem: FC<IMenuLinkItemProps> = ({
  item,
  handleRedirectToCatalog,
}) => {
  const onRedirect = () => handleRedirectToCatalog(item.href)

  return (
    <li key={item.id} className='nav-menu__accordion__item__list__item'>
      <Link
        href={item.href}
        className='nav-menu__accordion__item__list__item__link'
        onClick={onRedirect}
      >
        {item.text}
      </Link>
    </li>
  )
}

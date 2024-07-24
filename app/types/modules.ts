import { JSX, ReactNode } from 'react'

export interface IAccordionProps {
  children: ReactNode
  title: string | JSX.Element
  titleClass: string
  rotateIconClass?: string
}

type TMenuLinkItemType = {
  id: number
  text: string
  href: string
}

export interface IMenuLinkItemProps {
  item: TMenuLinkItemType
  handleRedirectToCatalog: (arg0: string) => void
}

export interface ICatalogMenuButtonProps {
  name: string
  isActive: boolean
  handler: VoidFunction
}

import { JSX, ReactNode } from 'react'

export interface IAccordionProps {
  children: ReactNode
  title: string | JSX.Element
  titleClass: string
  rotateIconClass?: string
}

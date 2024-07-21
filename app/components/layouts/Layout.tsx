'use client'
import { FC, ReactNode } from 'react'
import { Header, MobileNavbar } from '@/components'
import { useMediaQuery } from '@/hooks'

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  const isMedia800 = useMediaQuery(800)

  return (
    <>
      <Header />
      {children}
      {isMedia800 && <MobileNavbar />}
      <div className='footer' />
    </>
  )
}

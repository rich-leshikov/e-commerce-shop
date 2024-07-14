import { FC, ReactNode } from 'react'
import { Header } from '@/components'

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  const a = 1
  return (
    <>
      <Header />
      {children}
      <div className='footer' />
    </>
  )
}

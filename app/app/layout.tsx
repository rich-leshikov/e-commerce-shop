import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Layout } from '@/components'

import 'bootstrap/dist/css/bootstrap.css'
import './global-styles/catalog-menu.css'
import './global-styles/globals.css'
import './global-styles/header.css'
import './global-styles/menu.css'
import './global-styles/mobile-navbar.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

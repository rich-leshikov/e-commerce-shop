import Link from 'next/link'

export const Logo = () => (
  <Link className='logo' href='/'>
    <img className='logo_img' src='/img/logo.svg' alt='Rostelecom logo' />
  </Link>
)

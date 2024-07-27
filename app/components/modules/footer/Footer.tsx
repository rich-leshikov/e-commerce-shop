'use client'
import Link from 'next/link'
import { useLang, useMediaQuery } from '@/hooks'
import { FooterMobileLink, Logo } from '@/components'
import { FooterLinks } from '@/components/modules/footer/FooterLinks'

export const Footer = () => {
  const { lang, translations } = useLang()
  const isMedia950 = useMediaQuery(950)
  const isMedia640 = useMediaQuery(640)

  return (
    <footer className='footer'>
      <div className='footer__top'>
        <div className='container footer__top__container'>
          <div className='footer__logo'>
            <Logo />
          </div>
          <div className='footer__contacts'>
            <span>
              <a href='tel:+375336787878'>+375(33)678-78-78</a>
            </span>
            <span>
              <a href='mailto:test@mail.com'>test@mail.com</a>
            </span>
            {isMedia950 && <FooterLinks />}
          </div>
          {!isMedia950 && <FooterLinks />}
          <ul className='list-reset footer__socials'>
            <li className='footer__socials__item'>
              <a
                href='https://t.me/vasya98rus'
                className='footer__socials__item__link'
              />
            </li>
            <li className='footer__socials__item'>
              <a
                href='https://vk.com'
                className='footer__socials__item__link'
              />
            </li>
            <li className='footer__socials__item'>
              <a
                href='https://youtu.be'
                className='footer__socials__item__link'
              />
            </li>
          </ul>
        </div>
      </div>
      <div className='footer__bottom'>
        <div className='container footer__bottom__container'>
          <div className='footer__copyright'>
            (c) 2024 ПАО {translations[lang].footer.copyright}
            <br />
            (21+)
          </div>
          <div className='footer__policy'>
            <div className='footer__policy__inner'>
              <Link href='/data-processing-policy'>
                {translations[lang].footer.policy}
              </Link>
              <Link href='/privacy-policy'>
                {translations[lang].footer.privacy}
              </Link>
            </div>
            {isMedia640 && (
              <FooterMobileLink text={translations[lang].footer.full_version} />
            )}
          </div>
          {!isMedia640 && (
            <FooterMobileLink text={translations[lang].footer.mobile_version} />
          )}
        </div>
      </div>
    </footer>
  )
}

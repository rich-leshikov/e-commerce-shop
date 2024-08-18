'use client'
import { useImagePreloader, useLang, useMediaQuery } from '@/hooks'
import { AllLink } from '@/components/elements/all-link/AllLink'

import styles from '@/styles/main-page/index.module.scss'
import img1 from '@/public/img/categories-img-1.png'
import img2 from '@/public/img/categories-img-2.png'
import img3 from '@/public/img/categories-img-3.png'
import img4 from '@/public/img/categories-img-4.png'
import Link from 'next/link'
import Image from 'next/image'

export const Categories = () => {
  const { lang, translations } = useLang()
  const isMedia490 = useMediaQuery(490)
  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader()
  const imgSpinnerClass = imgSpinner ? styles.img_loading : ''

  return (
    <section className={styles.categories}>
      <div className={`container ${styles.categories__container}`}>
        <h2 className={`site-title ${styles.categories__title}`}>
          {translations[lang].main_page.category_title}
        </h2>
        <div className={styles.categories__inner}>
          <AllLink />
          {!isMedia490 && (
            <>
              <Link
                href='/catalog/cloth'
                className={`${styles.categories__right} ${styles.categories__img} ${imgSpinnerClass}`}
              >
                <Image
                  src={img1}
                  alt='Cloth'
                  className='transition-opacity opacity-0 duration'
                  onLoadingComplete={handleLoadingImageComplete}
                />
                <span>{translations[lang].main_page.category_cloth}</span>
              </Link>
              <div className={styles.categories__left}>
                <div className={styles.categories__left__top}>
                  <Link
                    href='/catalog/accessories'
                    className={`${styles.categories__left__top__right} ${styles.categories__img} ${imgSpinnerClass}`}
                  >
                    <Image
                      src={img2}
                      alt='Accessories'
                      className='transition-opacity opacity-0 duration'
                      onLoadingComplete={handleLoadingImageComplete}
                    />
                    <span>
                      {translations[lang].main_page.category_accessories}
                    </span>
                  </Link>
                  <Link
                    href='/catalog/souvenirs'
                    className={`${styles.categories__left__top__left} ${styles.categories__img} ${imgSpinnerClass}`}
                  >
                    <Image
                      src={img3}
                      alt='Souvenirs'
                      className='transition-opacity opacity-0 duration'
                      onLoadingComplete={handleLoadingImageComplete}
                    />
                    <span>
                      {translations[lang].main_page.category_souvenirs}
                    </span>
                  </Link>
                </div>
                <Link
                  href='/catalog/office'
                  className={`${styles.categories__left__bottom} ${styles.categories__img} ${imgSpinnerClass}`}
                >
                  <Image
                    src={img4}
                    alt='Office'
                    className='transition-opacity opacity-0 duration'
                    onLoadingComplete={handleLoadingImageComplete}
                  />
                  <span>{translations[lang].main_page.category_office}</span>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

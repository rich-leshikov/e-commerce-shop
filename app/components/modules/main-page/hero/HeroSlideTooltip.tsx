'use client'
import Image from 'next/image'
import { IHeroSlideTooltip } from '@/types'

import styles from '@/styles/main-page/index.module.scss'

export const HeroSlideTooltip = ({ title, image }: IHeroSlideTooltip) => {
  return (
    <div className={`${styles.hero__slider__slide__popup} slide-popup`}>
      <Image
        className={styles.hero__slider__slide__popup__img}
        src={image}
        alt={title}
      />
      <p className={styles.hero__slider__slide__popup__inner}>
        <b className={styles.hero__slider__slide__popup__title}>{title}</b>
        <span className={styles.hero__slider__slide__popup__price}>$70</span>
      </p>
    </div>
  )
}

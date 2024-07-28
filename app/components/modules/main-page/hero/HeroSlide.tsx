'use client'
import Link from 'next/link'
import Image from 'next/image'
import { HeroSlideTooltip } from '@/components'
import { IHeroSlide } from '@/types'

import styles from '@/styles/main-page/index.module.scss'

export const HeroSlide = ({ slide }: { slide: IHeroSlide }) => (
  <>
    <Link href='/catalog' className={styles.hero__slide__plus} />
    <Image
      src={slide.image}
      alt={slide.title}
      className={styles.hero__slider__slide__img}
    />
    <HeroSlideTooltip title={slide.title} image={slide.image} />
  </>
)

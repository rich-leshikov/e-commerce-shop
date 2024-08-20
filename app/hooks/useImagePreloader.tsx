'use client'
import { SyntheticEvent, useState } from 'react'

export const useImagePreloader = () => {
  const [imgSpinner, setImgSpinner] = useState(true)

  const handleLoadingImageComplete = async (
    img: SyntheticEvent<HTMLImageElement, Event>
  ) => {
    img.currentTarget.classList.remove('opacity-0')
    setImgSpinner(false)
  }

  return { handleLoadingImageComplete, imgSpinner }
}

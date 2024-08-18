import { useState } from 'react'

export const useImagePreloader = () => {
  const [imgSpinner, setImgSpinner] = useState(true)

  const handleLoadingImageComplete = async (img: HTMLImageElement) => {
    img.classList.remove('opacity-0')
    setImgSpinner(false)
  }

  return { handleLoadingImageComplete, imgSpinner }
}

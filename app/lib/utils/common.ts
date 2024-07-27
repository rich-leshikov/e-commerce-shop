import { closeSearchModal } from '@/context'

export const addOverflowHiddenToBody = (paddingRight: string = '') => {
  const body = document.querySelector('body') as HTMLBodyElement
  body.classList.add('overflow-hidden')
  paddingRight && (body.style.paddingRight = paddingRight)
}

export const removeOverflowHiddenFromBody = () => {
  const body = document.querySelector('body') as HTMLBodyElement
  body.classList.remove('overflow-hidden')
}

export const getWindowWidth = () => {
  const { innerWidth: windowWidth } =
    typeof window !== 'undefined' ? window : { innerWidth: 0 }

  return windowWidth
}

export const handleCloseSearchModal = () => {
  closeSearchModal()
  removeOverflowHiddenFromBody()
}

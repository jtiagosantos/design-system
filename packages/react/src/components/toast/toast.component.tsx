import { colors } from '@tiago_santos/tokens'
import { useState, FC, useEffect } from 'react'
import { Provider } from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import {
  ToastContainer,
  ToastTitle,
  ToastDescription,
  ToastCloseButton,
  ToastViewport,
} from './toast.styles'

export interface ToastProps {
  title: string
  description: string
  isOpen: boolean
}

export const Toast: FC<ToastProps> = ({ title, description, isOpen }) => {
  const [open, setOpen] = useState(isOpen)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return (
    <Provider swipeDirection="right">
      <ToastContainer open={open} onOpenChange={setOpen}>
        <ToastCloseButton onClick={() => setOpen(false)}>
          <X size={20} color={colors.gray200} />
        </ToastCloseButton>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </ToastContainer>
      <ToastViewport />
    </Provider>
  )
}

Toast.displayName = 'Toast'

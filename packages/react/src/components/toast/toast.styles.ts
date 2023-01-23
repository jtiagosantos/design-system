import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

export const ToastContainer = styled(Toast.Root, {
  borderRadius: '$sm',
  backgroundColor: '$gray800',
  padding: '$5 $3',
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 900ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 300ms ease-in`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',
  fontFamily: '$default',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
  fontWeight: '$regular',
  fontFamily: '$default',
  marginTop: '$2',
})

export const ToastCloseButton = styled('button', {
  all: 'unset',
  position: 'absolute',
  top: '$4',
  right: '$4',
  cursor: 'pointer',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

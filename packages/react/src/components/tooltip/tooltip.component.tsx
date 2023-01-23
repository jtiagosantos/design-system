import { Provider, Root, Trigger, Portal } from '@radix-ui/react-tooltip'
import { Text } from './../text.component'
import { TooltipContent, TooltipArrow } from './tooltip.styles'
import type { FC, PropsWithChildren } from 'react'

export type TooltipProps = PropsWithChildren<{
  text: string
}>

export const Tooltip: FC<TooltipProps> = ({ children, text }) => {
  return (
    <Provider>
      <Root>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          <TooltipContent>
            <Text>{text}</Text>
            <TooltipArrow />
          </TooltipContent>
        </Portal>
      </Root>
    </Provider>
  )
}

Tooltip.displayName = 'Tooltip'

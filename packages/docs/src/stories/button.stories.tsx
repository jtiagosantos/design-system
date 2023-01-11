import { Button, ButtonProps } from '@ignite-ui/react'

import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
}

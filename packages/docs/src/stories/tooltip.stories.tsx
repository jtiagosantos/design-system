import { Tooltip, TooltipProps, Text } from '@tiago_santos/react'

import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    text: 'Lorem ipsum dollar set...',
    children: <Text>Any Text</Text>,
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          width: '100%',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

import { Box, MultiStep, MultiStepProps } from '@tiago_santos/react'

import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    size: 20,
    currentStep: 1,
  },
  decorators: [(Story) => <Box>{Story()}</Box>],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}

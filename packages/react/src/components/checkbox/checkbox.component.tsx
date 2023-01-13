import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicator } from './checkbox.styles'

import type { FC, ComponentProps } from 'react'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export const Checkbox: FC<CheckboxProps> = ({ ...props }) => {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'

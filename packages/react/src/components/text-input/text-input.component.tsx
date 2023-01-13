import { TextInputContainer, Prefix, Input } from './text-input.styles'

import type { ComponentProps, FC } from 'react'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput: FC<TextInputProps> = ({ prefix, ...props }) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'

import { User } from 'phosphor-react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './avatar.styles'
import type { ComponentProps, FC } from 'react'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export const Avatar: FC<AvatarProps> = ({ ...props }) => {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'

import React, { ReactNode } from 'react'
import * as S from './Button.styles'

type ButtonProps = {
  className?: string
  children: ReactNode
  onClick?(): void
  type?: any
}

function UiButton({ className, children, ...rest }: ButtonProps) {
  return (
    <S.Wrapper className={className} {...rest}>
      {children}
    </S.Wrapper>
  )
}

export default UiButton

import React, { ReactNode } from 'react'
import * as S from './Button.styles'
import Button from '@mui/material/Button';

type ButtonProps = {
  className?: string
  children: ReactNode
  onClick?(): void
  type?: any
}

function UiButton({ className, children, ...rest }: ButtonProps) {
  return (
    <Button variant="contained" className={className} {...rest}>
      {children}
    </Button>
    // <S.Wrapper className={className} {...rest}>
    //   {children}
    // </S.Wrapper>
  )
}

export default UiButton

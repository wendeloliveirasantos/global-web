import React, { ReactNode } from 'react'
import { FormControl, Button } from '@mui/material';
import * as S from './Button.styles'

type ButtonProps = {
  className?: string
  children: ReactNode
  onClick?(): void
  type?: any
  variant?: string
  href?: string
  color?: string
  textColor?: string
}

function UiButton({ className, children, onClick, variant, href, color, textColor, ...rest }: ButtonProps) {
  return (
    <FormControl fullWidth>
      { variant == 'text' ?
      <S.StyledButton onClick={onClick} href={href} variant="text" className={className} buttonColor={color} textColor={textColor} {...rest}>
        {children}
      </S.StyledButton> :
      variant == 'outlined' ?
      <S.StyledButtonOut onClick={onClick} href={href} variant="outlined" className={className} buttonColor={color} textColor={textColor} {...rest}>
        {children}
      </S.StyledButtonOut> :
      <S.StyledButton onClick={onClick} href={href} variant="contained" className={className} buttonColor={color} textColor={textColor} {...rest}>
        {children}
      </S.StyledButton>
      }
    </FormControl>
  )
}

export default UiButton

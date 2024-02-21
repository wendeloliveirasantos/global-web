import React, { ReactNode } from 'react'
import * as S from './Button.styles'
import { FormControl, Button } from '@mui/material';

type ButtonProps = {
  className?: string
  children: ReactNode
  onClick?(): void
  type?: any
  variant?: string
}

function UiButton({ className, children, variant, ...rest }: ButtonProps) {
  return (
    <FormControl fullWidth>
      { variant == 'text' ?
      <Button variant="text" className={className} {...rest}>
        {children}
      </Button> :
      variant == 'outlined' ?
      <Button variant="outlined" className={className} {...rest}>
        {children}
      </Button> :
      <Button variant="contained" className={className} {...rest}>
        {children}
      </Button>
      }
    </FormControl>
  )
}

export default UiButton

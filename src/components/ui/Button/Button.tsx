import React, { ReactNode } from 'react'
import * as S from './Button.styles'
import { FormControl, Button } from '@mui/material';

type ButtonProps = {
  className?: string
  children: ReactNode
  onClick?(): void
  type?: any
}

function UiButton({ className, children, ...rest }: ButtonProps) {
  return (
    <FormControl fullWidth>
      <Button variant="contained" className={className} {...rest}>
        {children}
      </Button>
    </FormControl>
  )
}

export default UiButton

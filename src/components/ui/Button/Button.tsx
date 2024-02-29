import React, { ReactNode } from 'react'
import { FormControl, Button } from '@mui/material';

type ButtonProps = {
  className?: string
  children: ReactNode
  onClick?(): void
  type?: any
  variant?: string
  href?: string
}

function UiButton({ className, children, onClick, variant, href, ...rest }: ButtonProps) {
  return (
    <FormControl fullWidth>
      { variant == 'text' ?
      <Button onClick={onClick} href={href} variant="text" className={className} {...rest}>
        {children}
      </Button> :
      variant == 'outlined' ?
      <Button onClick={onClick} href={href} variant="outlined" className={className} {...rest}>
        {children}
      </Button> :
      <Button onClick={onClick} href={href} variant="contained" className={className} {...rest}>
        {children}
      </Button>
      }
    </FormControl>
  )
}

export default UiButton

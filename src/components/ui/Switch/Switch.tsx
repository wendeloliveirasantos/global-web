import React, { ReactNode } from 'react'
import * as S from './Switch.styles'
import { FormControl, Button, FormControlLabel, FormGroup, Switch, FormHelperText } from '@mui/material';

type SwitchProps = {
  label: string
  children?: ReactNode
  onChange(value: boolean): void
  type?: any
  variant?: string
}

function UiSwitch({ label, children, onChange, type, variant, ...rest }: SwitchProps) {
  return (
    <FormControl fullWidth>
      <FormGroup style={{ alignContent: 'center' }}>
        <FormControlLabel control={<Switch onChange={(e) => onChange(e.target.checked)} />} label={label} {...rest}/>
      </FormGroup>
    </FormControl>
  )
}

export default UiSwitch

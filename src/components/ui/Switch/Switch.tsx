import React, { ReactNode } from 'react'
import * as S from './Switch.styles'
import { FormControl, Button, FormControlLabel, FormGroup, Switch, FormHelperText } from '@mui/material';

type SwitchProps = {
  label: string
  children?: ReactNode
  onChange(value: boolean): void
  type?: any
  variant?: string
  helperText?: string
}

function UiSwitch({ label, children, onChange, type, variant, helperText,...rest }: SwitchProps) {
  return (
    <FormControl error={helperText != ""} fullWidth>
      <FormGroup style={{ alignContent: 'center' }}>
        <FormControlLabel sx={{ m: 0, width: '100%', height: '100%', color: '#333333', fontSize: 14, fontWeight: '400', wordWrap: 'break-word' }} control={<S.MaterialUISwitch sx={{ marginRight: '18px' }} onChange={(e) => onChange(e.target.checked)} />} label={label} {...rest}/>
      </FormGroup>
      {helperText != "" && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  )
}

export default UiSwitch
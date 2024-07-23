import React, { ReactNode } from 'react'
import * as S from './Checkbox.styles'
import { FormControl, Button, FormControlLabel, FormGroup, Switch, FormHelperText, FormLabel, Checkbox } from '@mui/material';

type CheckboxProps = {
  label: string
  children?: ReactNode
  onChange(value: boolean): void
  type?: any
  variant?: string
  helperText?: string
}

function UiCheckbox({ label, children, onChange, type, variant, helperText, ...rest }: CheckboxProps) {
  return (
    <FormControl
      error={helperText != ""}
      fullWidth
    >
      <FormGroup>
        <FormControlLabel sx={{ width: '100%', height: '100%', color: '#333333', fontSize: 14, fontWeight: '400', wordWrap: 'break-word' }}
          control={
            <Checkbox onChange={(e) => onChange(e.target.checked)} />
          }
          label={label}
          {...rest}
        />
      </FormGroup>
      {helperText != "" && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  )
}

export default UiCheckbox

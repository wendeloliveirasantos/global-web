import React from 'react'
import * as S from './Select.styles'
import { useState } from 'react';
import Select from '@mui/material/Select';
import { FormControl, FormHelperText, InputLabel, MenuItem } from '@mui/material';

type SelectProps = {
  className?: string
  options: { label: string; value: any }[]
  defaultValue?: string
  loading?: boolean
  label?: string
  onChange(value: string | object | number): void
  disabled?: boolean
  value?: string | number
  helperText?: string
}

export default function UiSelect({
  className,
  options,
  defaultValue,
  loading = false,
  onChange,
  label,
  helperText,
  ...rest
}: SelectProps) {
  return (
    <FormControl fullWidth error={helperText != ""}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        className={className}
        labelId="demo-simple-select-label"
        value={defaultValue}
        onChange={(e) => onChange(e.target.value)}
        label={label}
        {...rest}
      >
        { loading ? 
        ( 
          <MenuItem>Carregando...</MenuItem> 
        ) : (       
          options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))
        )}
      </Select>
      {helperText != "" && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  )
}

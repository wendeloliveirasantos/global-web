import React from 'react'
import * as S from './Select.styles'
import { useState } from 'react';
import Select from '@mui/material/Select';
import { FormControl, FormHelperText, InputLabel, MenuItem } from '@mui/material';

type SelectProps = {
  className?: string
  options: { label: string; value: any }[]
  defaultValue?: any
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
      <InputLabel 
        sx={{ 
          '&.Mui-focused': {
            color: '#D9D9D9',
            backgroundColor: '#FF5A62',
            padding: '1px 8px',
            marginLeft: '-5px',
          },
        }} 
       id="demo-simple-select-label">{label}</InputLabel>
      <Select
        sx={{
          borderRadius: '35px',
          '& fieldset': {
            borderRadius: '35px',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#FF5A62 !important',
            '& legend': {
              visibility: 'visible',
              backgroundColor: '#FF5A62',
            },
          },
          '& .MuiInputBase-root': {
            borderRadius: '35px',
            '& fieldset': {
              borderColor: '#FF5A62',
            },
            '&:hover fieldset': {
              borderColor: '#FF5A62',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FF5A62',
            },
          }
        }}
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

import React from 'react'
import * as S from './TextInput.styles'
import { FormControl, FormHelperText, TextField } from '@mui/material'

type TextInputProps = {
  name: string
  label?: string
  register?: any
  maxLength?: number
  required?: boolean
  onChange?(e: any): void
  onBlur?(e: any): void
  type?: string
  defaultValue?: string | number
  min?: any
  max?: any
  placeholder?: string
  value?: string | number
  helperText?: string
  mask?: string
}

export default function TextInput({
  type = "text",
  name,
  label,
  register,
  required = false,
  onChange,
  onBlur,
  defaultValue,
  helperText,
  mask,
  min,
  ...rest
}: TextInputProps) {
  return (
    <FormControl fullWidth>
      <TextField id={name} error={helperText != ""} inputProps={{ min }} variant="outlined" label={label} type={type} defaultValue={defaultValue} name={name} autoComplete="off" onChange={onChange} onBlur={onBlur} helperText={helperText} {...rest}/>
    </FormControl>
  )
}
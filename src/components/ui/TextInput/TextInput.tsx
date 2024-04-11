import React from 'react'
import * as S from './TextInput.styles'
import { FilledTextFieldProps, FormControl, FormHelperText, OutlinedTextFieldProps, StandardTextFieldProps, TextField, TextFieldVariants } from '@mui/material'
import InputMask from 'react-input-mask';


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
  value,
  ...rest
}: TextInputProps) {
  return (
    <FormControl fullWidth>
      { mask != null ? (
        <InputMask mask={mask} onChange={onChange} onBlur={onBlur} value={value} maskPlaceholder={null}>
          <TextField id={name} error={helperText !== ""} inputProps={{ min }} variant="outlined" label={label} value={value} type={type} defaultValue={defaultValue} name={name} autoComplete="off" onChange={onChange} onBlur={onBlur} helperText={helperText}/>
        </InputMask>
      ) : (
        <TextField id={name} error={helperText !== "" && helperText !== undefined} inputProps={{ min }} variant="outlined" label={label} value={value} type={type} defaultValue={defaultValue} name={name} autoComplete="off" onChange={onChange} onBlur={onBlur} helperText={helperText} {...rest}/>
      )}
    </FormControl>
  )
}
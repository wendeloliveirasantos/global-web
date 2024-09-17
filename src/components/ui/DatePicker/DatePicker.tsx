import React from 'react'
import * as S from './DatePicker.styles'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/pt-br';
import { FormControl } from '@mui/material';
import dayjs from 'dayjs';
import { DateValidationError } from '@mui/x-date-pickers';

type DatePickerProps = {
  name: string
  label?: string
  register?: any
  maxLength?: number
  required?: boolean
  onChange(date: string | number | null): void
  onBlur?: () => void
  type?: string
  defaultValue?: string | number
  min?: any
  max?: any
  placeholder?: string
  value?: any
  helperText?: string
  disabled?: boolean
  border?: boolean
}

export default function UiDatePicker({
  type = "text",
  name,
  label,
  register,
  required = false,
  onChange,
  onBlur,
  defaultValue,
  helperText,
  min,
  value,
  disabled,
  border,
  ...rest
}: DatePickerProps) {
  
  return (
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <DatePicker
          sx={ border ? {
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
              '&.Mui-focused fieldset': {
                borderColor: '#FF5A62',
                '& legend': {
                  visibility: 'visible',
                  backgroundColor: '#FF5A62',
                },
              },
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#D9D9D9',
              backgroundColor: '#FF5A62',
              padding: '1px 8px',
              marginLeft: '-5px',
            },
          } : {
            '&.Mui-focused fieldset': {
              borderColor: '#FF5A62 !important',
              '& legend': {
                visibility: 'visible',
                backgroundColor: '#FF5A62',
              },
            },
            '& .MuiInputBase-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#FF5A62',
                '& legend': {
                  visibility: 'visible',
                  backgroundColor: '#FF5A62',
                },
              },
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#D9D9D9',
              backgroundColor: '#FF5A62',
              padding: '1px 8px',
              marginLeft: '-5px',
            },
          }}
          slotProps={{
            textField: {
              error: !!helperText,
              helperText: helperText,
              InputProps: {
                endAdornment: null
              },
              onBlur: onBlur
            },
          }} defaultValue={defaultValue} value={value} name={name} onChange={(date) => onChange(dayjs(date).format('YYYY-MM-DD'))} label={label} {...rest} disabled={disabled} />
      </LocalizationProvider>
    </FormControl>
  )
}

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
  type?: string
  defaultValue?: string | number
  min?: any
  max?: any
  placeholder?: string
  value?: any
  helperText?: string
  disabled?: boolean
}

export default function UiDatePicker({
  type = "text",
  name,
  label,
  register,
  required = false,
  onChange,
  defaultValue,
  helperText,
  min,
  value,
  disabled,
  ...rest
}: DatePickerProps) {
  
  return (
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <DatePicker slotProps={{
            textField: {
              error: !!helperText,
              helperText: helperText,
            },
          }} defaultValue={defaultValue} value={value} name={name} onChange={(date) => onChange(dayjs(date).format('YYYY-MM-DD'))} label={label} {...rest} disabled={disabled} />
      </LocalizationProvider>
    </FormControl>
  )
}

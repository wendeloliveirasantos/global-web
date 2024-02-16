import React from 'react'
import * as S from './DatePicker.styles'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/pt-br';
import { FormControl } from '@mui/material';
import dayjs from 'dayjs';

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
  value?: string | number
}

export default function UiDatePicker({
  type = "text",
  name,
  label,
  register,
  required = false,
  onChange,
  defaultValue,
  ...rest
}: DatePickerProps) {
  return (
    // <>
    //   {label && <S.Label>{label}</S.Label>}
    //   <S.Wrapper>
    //     {register ? <input type={type} name={name} autoComplete="off" {...register(name, { required })} /> :
    //     <input type={type} defaultValue={defaultValue} name={name} autoComplete="off" onChange={onChange} {...rest} />}
    //   </S.Wrapper>
    // </>
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <DatePicker defaultValue={defaultValue} name={name} onChange={(date) => onChange(dayjs(date).format('YYYY-MM-DD'))} label={label} {...rest}/>
      </LocalizationProvider>
    </FormControl>
  )
}

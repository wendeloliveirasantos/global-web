import React from 'react'
import * as S from './TextInput.styles'

type TextInputProps = {
  name: string
  label?: string
  register?: any
  maxLength?: number
  required?: boolean
  onChange?(e: any): void
  type?: string
  defaultValue?: string | number
  min?: any
  max?: any
  placeholder?: string
  value?: string | number
}

export default function TextInput({
  type = "text",
  name,
  label,
  register,
  required = false,
  onChange,
  defaultValue,
  ...rest
}: TextInputProps) {
  return (
    <>
      {label && <S.Label>{label}</S.Label>}
      <S.Wrapper>
        {register ? <input type={type} name={name} autoComplete="off" {...register(name, { required })} /> :
        <input type={type} defaultValue={defaultValue} name={name} autoComplete="off" onChange={onChange} {...rest} />}
      </S.Wrapper>
    </>
  )
}
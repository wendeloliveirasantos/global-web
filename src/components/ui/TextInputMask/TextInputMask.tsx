import React from 'react'
import * as S from './TextInput.styles'
import InputMask from 'react-input-mask'

type InputProps = {
  name: string
  label?: string
  register?: any
  maxLength?: number
  required?: boolean
  mask: string
  onChange?(e: any): void
  onBlur?(e: any): void
  defaultValue?: string | number
  value?: string | number
}

function Input({
  mask,
  name,
  label,
  register,
  required = false,
  onChange,
  onBlur,
  defaultValue
}: InputProps) {
  return (
    <>
      {label && <S.Label>{label}</S.Label>}
      <S.Wrapper>
        {register ? 
        <InputMask mask={mask} name={name} autoComplete="off" {...register(name, { required })} /> :
        <InputMask defaultValue={defaultValue} mask={mask} name={name} autoComplete="off" onChange={onChange} onBlur={onBlur} />}
      </S.Wrapper>
    </>
  )
}

export default Input

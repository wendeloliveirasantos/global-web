import React from 'react'
import * as S from './Select.styles'
import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

type SelectProps = {
  className?: string
  options: { label: string; value: any }[]
  defaultValue?: string
  loading?: boolean
  label?: string
  onChange(value: string | object | number): void
  disabled?: boolean
  value?: string | number
}

export default function UiSelect({
  className,
  options,
  defaultValue,
  loading = false,
  onChange,
  label,
  ...rest
}: SelectProps) {
  return (
    <div>
      {label && <S.Label>{label}</S.Label>}
      <Select
        value={defaultValue}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      >
        <MenuItem value="">Selecione uma opção</MenuItem>
        <MenuItem value="option1">Opção 1</MenuItem>
        <MenuItem value="option2">Opção 2</MenuItem>
        <MenuItem value="option3">Opção 3</MenuItem>
      </Select>
    </div>
    // <>
    //   {label && <S.Label>{label}</S.Label>}
    //   <S.Wrapper
    //     className={className}
    //     onChange={(e) => onChange(e.target.value)}
    //     {...rest}
    //   >
    //     <S.Option value={defaultValue}>{defaultValue}</S.Option>
    //     {loading ? (
    //       <S.Option>Carregando...</S.Option>
    //     ) : (
    //       options.map((option) => (
    //         <S.Option key={option.value} value={option.value}>
    //           {option.label}
    //         </S.Option>
    //       ))
    //     )}
    //   </S.Wrapper>
    // </>
  )
}

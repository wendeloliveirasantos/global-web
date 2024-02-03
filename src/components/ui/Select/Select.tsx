import React from 'react'
import * as S from './Select.styles'

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

export default function Select({
  className,
  options,
  defaultValue,
  loading = false,
  onChange,
  label,
  ...rest
}: SelectProps) {
  return (
    <>
      {label && <S.Label>{label}</S.Label>}
      <S.Wrapper
        className={className}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      >
        <S.Option value={defaultValue}>{defaultValue}</S.Option>
        {loading ? (
          <S.Option>Carregando...</S.Option>
        ) : (
          options.map((option) => (
            <S.Option key={option.value} value={option.value}>
              {option.label}
            </S.Option>
          ))
        )}
      </S.Wrapper>
    </>
  )
}

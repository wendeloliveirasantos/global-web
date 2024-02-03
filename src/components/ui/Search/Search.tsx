import React, { useState } from 'react'
import * as S from './styled'

function Select({
  onSearch,
  options,
  className,
  label,
  loading = false,
  onChange,
  ...rest
}: any) {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)

  function handleChangeText(v: string) {
    setText(v)
    onSearch(v)
  }

  function handleClick(v: any) {
    setText(v.label)
    onChange(v.value)
    setOpen(false)
  }

  return (
    <S.Wrapper>
      {label && <S.Label>{label}</S.Label>}
      <S.Select className={className} {...rest}>
        <input
          value={text}
          onFocus={() => setOpen(true)}
          onChange={(e) => handleChangeText(e.target.value)}
        />
        {/* <S.Option value={defaultValue}>{defaultValue}</S.Option>
            {loading ? (
                <S.Option>Carregando...</S.Option>
            ) : (
                options.map((option) => (
                    <S.Option key={option.value} value={option.value}>
                        {option.label}
                    </S.Option>
                ))
            )} */}
      </S.Select>
      <S.Options open={open}>
        {!loading && !options.length && <S.Option>Procurando...</S.Option>}
        {loading ? (
          <S.Option>Procurando...</S.Option>
        ) : (
          options.map((option: any, i: number) => (
            <S.Option onClick={() => handleClick(option)} key={i}>
              {option.label}
            </S.Option>
          ))
        )}
      </S.Options>
    </S.Wrapper>
  )
}

export default Select

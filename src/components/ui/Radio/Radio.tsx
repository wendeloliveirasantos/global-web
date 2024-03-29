import React from 'react'
import * as S from './Radio.styles'
import { useState } from 'react';
import Radio from '@mui/material/Radio'

type Props = {
  answer: string
  change(v: string): void
  label?: string
  className?: string
}

function UiRadio({ answer, change, label, ...rest }: Props) {
  return (
    <S.Wrapper>
      {label && <S.Label>{label}</S.Label>}
      <div>
        <label>
          Sim
          <input
            type="radio"
            value="yes"
            checked={answer === 'yes'}
            onChange={(e) => change(e.target.value)}
            {...rest}
          />
          <span></span>
        </label>
        <label>
          Não
          <input
            type="radio"
            value="no"
            checked={answer === 'no'}
            onChange={(e) => change(e.target.value)}
            {...rest}
          />
          <span></span>
        </label>
      </div>
    </S.Wrapper>
  )
}

export default UiRadio

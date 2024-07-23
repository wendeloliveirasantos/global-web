import React, { ReactNode } from 'react'
import * as S from './Bar.styles'
import { FormControl, Button, FormControlLabel, FormGroup, Switch, FormHelperText } from '@mui/material';

type BarProps = {
  step: number
}

function UiBar({ step, ...rest }: BarProps) {
  return (
    <S.Container>
      <S.InnerContainer>
        <S.BarContainer>
          <S.Bar sx={{ width: `${step}%` }}/>
          <S.BarOff sx={{ width: `${100 - step}%` }}/>
        </S.BarContainer>
        <S.DotContainer>
          <S.Dot />
        </S.DotContainer>
      </S.InnerContainer>
    </S.Container>
  )
}

export default UiBar
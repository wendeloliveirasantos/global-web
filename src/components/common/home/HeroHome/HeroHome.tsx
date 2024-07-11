import React from 'react'
import * as S from './HeroHome.styles'
import { Carousel } from '@/components/ui'
import { Container } from '@mui/material'

export default function HeroHome() {
  return (
    <S.Container>
      <Carousel />
    </S.Container>
  )
}

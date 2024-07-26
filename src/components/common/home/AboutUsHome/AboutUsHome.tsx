/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import * as S from './AboutUsHome.styles'
import { CarouselProduto } from '@/components/ui/CarouselProduto'
import { Container } from '@mui/material'

export default function AboutUsHome() {
  return (
    <S.Container>
      <Container maxWidth="xl">
        <CarouselProduto />
      </Container>
    </S.Container>
  )
}

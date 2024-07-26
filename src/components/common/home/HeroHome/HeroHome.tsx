import React from 'react'
import * as S from './HeroHome.styles'
import { Carousel } from '@/components/ui'
import { Container } from '@mui/material'

export default function HeroHome() {
  const items = [
    { src: '/images/carousel-item-1.png', alt: 'Image 1' },
    { src: '/images/carousel-item-1.png', alt: 'Image 2' }
  ];
  return (
    <S.Container>
      <Container maxWidth="xl">
        <Carousel items={items}/> 
      </Container>
    </S.Container>
  )
}

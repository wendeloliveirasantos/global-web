import React from 'react'
import * as S from './HeroHome.styles'
import { Button, Carousel } from '@/components/ui'
import { Box, Container } from '@mui/material'

export default function HeroHome() {
  const items = [
    { src: '/images/nosso-seguro.png', alt: 'Image 1' }
  ];
  return (
    <S.Container>
      <Container maxWidth="xl">
        <Carousel multiplier={1} items={items}/> 
        <S.TextBoxContainer sx={{ marginTop: 3 }}>
          <S.TextContainer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
            Aenean vestibulum nulla eu ultrices vulputate. Etiam viverra ante ut dui congue, a tincidunt lectus posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </S.TextContainer>
          <Box display="flex" alignItems="center" justifyContent="center" sx={{ marginTop: 3 }}>
            <S.ButtonBox>
              <Button variant="outlined" color='#FFFFFF' textColor="#FFFFFF">Contrate agora</Button>
            </S.ButtonBox>
          </Box>
        </S.TextBoxContainer>
      </Container>
    </S.Container>  
  )
}

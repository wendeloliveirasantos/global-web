import React from 'react'
import * as S from './HeroHome.styles'
import { Button, Carousel } from '@/components/ui'
import { Box, Container } from '@mui/material'

export default function HeroHome() {
  const items = [
    { src: '/images/produto-item-1.png', alt: 'Image 1', text: 'Seguro <br/> Viagem', href: '/seguros/viagem/detalhes' },
    { src: '/images/nosso-seguro.png', alt: 'Image 2', text: 'Seguro <br/> Acidentes Pessoais', href: '/seguros/acidentes-pessoais/detalhes' },
    { src: '/images/produto-item-4.png', alt: 'Image 3', text: 'Seguro <br/> Residencial', href: '/seguros/residencial/detalhes' },
    { src: '/images/produto-item-3.jpeg', alt: 'Image 4', text: 'Seguro <br/> Híbrido', href: '/seguros/hibrido/detalhes' },
    { src: '/images/produto-item-2.png', alt: 'Image 5', text: 'Seguro <br/> Vida', href: '/seguros/vida/detalhes' },
    { src: '/images/produto-item-3.jpeg', alt: 'Image 6', text: 'Seguro <br/> Empresarial', href: '/seguros/empresarial/detalhes' },
  ];
  return (
    <S.Container>
      <Container maxWidth="xl">
        <Carousel multiplier={1} items={items}/> 
        <S.TextBoxContainer sx={{ marginTop: 3 }}>
          <S.TextContainer>
            A Dobyseg é uma corretora de seguros 100% digital, com mais de 10 anos de experiência. <br/>
            Oferecemos atendimento personalizado em todas as etapas, da contratação ao pós-vendas, sempre com as melhores seguradoras do mercado.
          </S.TextContainer>
          {/* <Box display="flex" alignItems="center" justifyContent="center" sx={{ marginTop: 3 }}>
            <S.ButtonBox>
              <Button variant="outlined" color='#FFFFFF' textColor="#FFFFFF">Contrate agora</Button>
            </S.ButtonBox>
          </Box> */}
        </S.TextBoxContainer>
      </Container>
    </S.Container>  
  )
}

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import * as S from './CarouselProduto.styles'
import useWindowSize from '../UseWindowSize/UseWindowSize';
import Link from 'next/link';

type CarouselProdutoProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?(): void;
  type?: any;
  variant?: string;
  href?: string;
};

const items = [
  { src: '/images/produto-item-1.png', alt: 'Image 1', text: 'Seguro-Viagem', href: '' },
  { src: '/images/produto-item-2.png', alt: 'Image 2', text: 'Seguro-Residencial', href: '' },
  { src: '/images/produto-item-1.png', alt: 'Image 3', text: 'Seguro-Híbrido', href: '' },
  { src: '/images/produto-item-2.png', alt: 'Image 4', text: 'Seguro-Empresarial', href: '' },
  { src: '/images/produto-item-1.png', alt: 'Image 5', text: 'Seguro-Vida', href: '' },
  { src: '/images/produto-item-2.png', alt: 'Image 6', text: 'Seguro-Acidentes-Pessoais', href: '' },
];


function UiCarouselProduto({ className, children, onClick, variant, href,...rest }: CarouselProdutoProps) {
  
  const { width } = useWindowSize();
  const qtdItems = width < 600 ? 2 : 3;

  const groupedItems = [];
  for (let i = 0; i < items.length; i += qtdItems) {
    groupedItems.push(items.slice(i, i + qtdItems));
  }

  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false}>
      {groupedItems.map((group, groupIndex) => (
        <Box key={groupIndex} display="flex" width="100%" height="100%">
          {group.map((item, index) => (
            <S.WelcomeContainer
              key={index}
              style={{
                backgroundImage: `url(${item.src})`,
                flex: 1,
                margin: '0 5px'
              }}
              multiplier={1.5}
            >
              <S.TextContainer>
                {item.text}
                <Link href="/saiba-mais">
                  <S.StyledLink>Saiba Mais</S.StyledLink>
                </Link>
              </S.TextContainer>
              
            </S.WelcomeContainer>
          ))}
        </Box>
      ))}
    </Carousel>
  );
}

export default UiCarouselProduto;

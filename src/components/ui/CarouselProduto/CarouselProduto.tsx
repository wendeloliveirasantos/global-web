import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import * as S from './CarouselProduto.styles'
type CarouselProdutoProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?(): void;
  type?: any;
  variant?: string;
  href?: string;
};

const items = [
  { src: '/images/produto-item-1.png', alt: 'Image 1', text: 'Seguro-Viagem' },
  { src: '/images/produto-item-2.png', alt: 'Image 2', text: 'Seguro-Residencial' },
  { src: '/images/produto-item-1.png', alt: 'Image 3', text: 'Seguro-Híbrido' },
  { src: '/images/produto-item-2.png', alt: 'Image 4', text: 'Seguro-Empresarial' },
  { src: '/images/produto-item-1.png', alt: 'Image 5', text: 'Seguro-Vida' },
  { src: '/images/produto-item-2.png', alt: 'Image 6', text: 'Seguro-Acidentes-Pessoais' },
];

const groupedItems: { src: string; alt: string; text: string }[][] = [];
for (let i = 0; i < items.length; i += 3) {
  groupedItems.push(items.slice(i, i + 3));
}

function UiCarouselProduto({ className, children, onClick, variant, href, ...rest }: CarouselProdutoProps) {
  
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
            >
              <S.TextContainer>
                {item.text}
              </S.TextContainer>
            </S.WelcomeContainer>
          ))}
        </Box>
      ))}
    </Carousel>
  );
}

export default UiCarouselProduto;

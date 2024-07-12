import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import * as S from './Carousel.styles'
type CarouselProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?(): void;
  type?: any;
  variant?: string;
  href?: string;
  items: { src: string, alt: string }[];
};

function UiCarousel({ className, children, onClick, variant, href, items, ...rest }: CarouselProps) {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false}>
      {items.map((item, index) => (
        <S.WelcomeContainer
          key={index}
          style={{ backgroundImage: `url(${item.src})` }}
        >
          <S.TextContainer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
            Aenean vestibulum nulla eu ultrices vulputate. Etiam viverra ante ut dui congue, a tincidunt lectus posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </S.TextContainer>
          <S.ContrateAgoraButton variant="outlined">Contrate agora</S.ContrateAgoraButton>
        </S.WelcomeContainer>
      ))}
    </Carousel>
  );
}

export default UiCarousel;

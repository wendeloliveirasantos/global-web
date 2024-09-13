import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import * as S from './Carousel.styles'
import removeResidencial from '@/hooks/removeResidencial';
import removeViagem from '@/hooks/removeViagem';
import { useRouter } from 'next/router';
type CarouselProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?(): void;
  type?: any;
  variant?: string;
  items: { src: string, alt: string, text: string, href: string }[];
  multiplier: number;
};

function UiCarousel({ className, children, onClick, variant, items, multiplier, ...rest }: CarouselProps) {

  const router = useRouter();
  
  function handleClick(item: { src: string, alt: string, text: string, href: string }) {
    removeResidencial();
    removeViagem();
    router.push(item.href);
  }
  
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false}>
      {items.map((item, index) => (
        <S.WelcomeContainer
          key={index}
          style={{ backgroundImage: `url(${item.src})` }}
          multiplier={multiplier}
        >
          {item.text !== '' ?
            <S.TextTitleContainer dangerouslySetInnerHTML={{ __html: item.text }} /> : null}
          <S.TextContainer>
            A Dobyseg é uma corretora de seguros 100% digital, com mais de 10 anos de experiência. <br/>
            Oferecemos atendimento personalizado em todas as etapas, da contratação ao pós-vendas, sempre com as melhores seguradoras do mercado.
          </S.TextContainer>
          {item.href != null ? <S.ContrateAgoraButton variant="contained" onClick={ () => handleClick(item) }>Contrate agora</S.ContrateAgoraButton> : null}
        </S.WelcomeContainer>
      ))}
    </Carousel>
  );
}

export default UiCarousel;

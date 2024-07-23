import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import * as S from './CarouselPlano.styles'
import { Product } from '@/types/viagem';
import { TravelCard } from '@/components/common';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { STORAGE_VIAGEM_PRODUTO } from '@/constants';
import { useRouter } from 'next/router';

type CarouselPlanoProps = {
  products: Array<Product>;
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

function UiCarouselPlano({ products, className, children, onClick, variant, href, ...rest }: CarouselPlanoProps) {
  
  const [, setProduto] = useLocalStorage(STORAGE_VIAGEM_PRODUTO, "");
  const router = useRouter();
  
  const groupedItems: Array<Product>[] = [];
  for (let i = 0; i < products.length; i += 3) {
    groupedItems.push(products.slice(i, i + 3));
  }

  function handleSubmit(value: Product) {
    setProduto(JSON.stringify(value));
    router.push("/seguros/viagem/dados-titular");
  }

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Carousel showThumbs={true} showArrows={true} showStatus={false}>
        {groupedItems.map((group, groupIndex) => (
          <Box key={groupIndex} display="flex" width="100%" height="100%">
            {group.map((item, index) => (
              // <S.WelcomeContainer
              //   key={index}
              //   style={{
              //     flex: 1,
              //     margin: '0 5px'
              //   }}
              // >
              // </S.WelcomeContainer>
              <TravelCard
                key={item.productReferenceId}
                handleSubmit={handleSubmit}
                produto={item}
              />
            ))}
          </Box>
        ))}
      </Carousel>
    </Box>
    
  );
}

export default UiCarouselPlano;

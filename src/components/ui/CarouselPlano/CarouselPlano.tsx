import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import * as S from './CarouselPlano.styles'
import { Product } from '@/types/viagem';
import { TravelCard } from '@/components/common';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { STORAGE_RESIDENCIAL_PRODUTO, STORAGE_VIAGEM_PRODUTO } from '@/constants';
import { useRouter } from 'next/router';
import useWindowSize from '../UseWindowSize/UseWindowSize';

type CarouselPlanoProps = {
  products: Array<Product>;
  className?: string;
  children?: React.ReactNode;
  onClick?(): void;
  type?: any;
  variant?: string;
  href: string;
  operator?: string;
};

function UiCarouselPlano({ products, className, children, onClick, variant, href, operator, ...rest }: CarouselPlanoProps) {
  
  const [, setProduto] = useLocalStorage(operator == null ? STORAGE_VIAGEM_PRODUTO : STORAGE_RESIDENCIAL_PRODUTO, "");
  const router = useRouter();

  const { width } = useWindowSize();
  const qtdItems = width < 900 ? 1 : width < 1200 ? 2 : 3;
  
  const groupedItems: Array<Product>[] = [];
  for (let i = 0; i < products.length; i += qtdItems) {
    groupedItems.push(products.slice(i, i + qtdItems));
  }

  const url = new URL(href, window.location.origin);

  function handleSubmit(value: Product) {
    setProduto(JSON.stringify(value));
    router.push(url.toString());
  }

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Carousel showThumbs={true} showArrows={true} showStatus={false}>
        {groupedItems.map((group, groupIndex) => (
          <Box key={groupIndex} display="flex" width="100%" height="100%">
            {group.map((item, index) => (
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

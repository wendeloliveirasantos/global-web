import { Box, Button, ButtonProps } from '@mui/material';
import { purple } from '@mui/material/colors';
import styled from 'styled-components';

export const Card = styled.div`
`

// Contêiner que envolve o Carousel
export const CarouselWrapper = styled.div`
  position: relative; /* Define o contêiner como referência para o posicionamento */
  padding-bottom: 60px; /* Cria espaço extra na parte inferior */
`;

// Estiliza o Carousel e remove restrições de overflow
export const StyledCarousel = styled.div`
  .carousel-slider {
    overflow: visible !important; /* Permite que os pontos sejam exibidos fora do slider */
  }

  .control-dots {
    position: absolute;
    bottom: -40px; /* Posiciona os pontos mais abaixo do contêiner */
    left: 50%;
    transform: translateX(-50%); /* Centraliza horizontalmente */
  }

  .control-dots .dot {
    background-color: #233896; /* Define a cor azul para os pontos */
    width: 12px; /* Largura do ponto */
    height: 12px; /* Altura do ponto */
    border-radius: 50%; /* Mantém o formato redondo */
    margin: 0 5px; /* Espaçamento entre os pontos */
  }

  .control-dots .dot.selected {
    background-color: #233896; /* Cor para o ponto selecionado */
  }

  /* Adiciona os estilos para as setas */

  /* Seta próxima (next) */
  .carousel .control-next.control-arrow:before {
    border-left: 12px solid #233896; /* Define a cor da seta direita */
  }

  /* Seta anterior (prev) */
  .carousel .control-prev.control-arrow:before {
    border-right: 12px solid #233896; /* Define a cor da seta esquerda */
  }

  .carousel .control-arrow:before, .carousel.carousel-slider .control-arrow:before {
    margin: 0 5px;
    display: inline-block;
    border-top: 12px solid transparent; /* Transparente na parte superior */
    border-bottom: 12px solid transparent; /* Transparente na parte inferior */
    content: '';
  }
`;
import { Box, Button, ButtonProps } from '@mui/material';
import { purple } from '@mui/material/colors';
import styled from 'styled-components';

export const WelcomeContainer = styled(Box)`
width: calc(100% - 20px); /* Ajuste o tamanho total da largura e subtraia 20 pixels para o espaço à direita */
height: 60vh;
padding-left: 16px;
padding-right: 16px;
padding-top: 8px;
padding-bottom: 8px;
display: inline-flex;
justify-content: flex-start;
align-items: flex-start;
gap: 8px;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
border-radius: 28px;
position: relative;
background-color: #333; /* Background color */
`;

export const StyledCarouselItem = styled.li`
  background: ${({ theme }) => theme.colors.default};
`;

export const ContrateAgoraButton = styled(Button)<ButtonProps>`
  position: absolute;
  bottom: 39px;
  right: 66px;
  text-transform: math-auto;
  color: white !important;
  border: 1px solid white !important;
  &:hover: {
    border: 1px solid white !important;
    color: white !important;
  };

  font-size: 18px;
  font-weight: 500;
  word-wrap: break-word;
  border-radius: 50px;
  padding: 10px 24px;
`;

export const TextContainer = styled(Box)`
  position: absolute;
  bottom: 39px;
  left: 66px;
  color: white;
  font-size: 19px;
  font-weight: 500;
  line-height: 18px;
  word-wrap: break-word;
  text-align: left;
  right: 35%;
`;

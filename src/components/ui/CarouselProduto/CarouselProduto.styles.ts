import { Box, BoxProps, Button, ButtonProps } from '@mui/material';
import { purple } from '@mui/material/colors';
import styled from 'styled-components';

interface WelcomeContainerProps extends BoxProps {
  multiplier: number;
}

export const WelcomeContainer = styled(Box)<WelcomeContainerProps>(({ multiplier }) => ({
  width: '100%',
  height: `${450}px`,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 8,
  paddingBottom: 8,
  display: 'inline-flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: 8,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: 28,
  position: 'relative',
  backgroundColor: '#333', // Background color

  '@media (max-width: 899px)': {
    height: `${250}px`,
  },

  '@media (max-width: 599px)': {
    height: `${multiplier * 200}px`,
  },

  '@media (max-width: 479px)': {
    height: `${multiplier * 150}px`,
  },
}));

export const StyledCarouselItem = styled.li`
  background: ${({ theme }) => theme.colors.blue};
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
  bottom: 30px;
  left: 16px;
  color: white;
  font-size: 19px;
  font-weight: 500;
  line-height: 18px;
  word-wrap: break-word;
  text-align: left;
  right: 35%;
`;

export const StyledLink = styled.p`
  padding-top: 8px;
  color: white;
  font-size: 15px;
  font-weight: 500;
  text-decoration: underline;
  line-height: 16px;
  letter-spacing: 0.5px;
  word-wrap: break-word;
  cursor: pointer; /* Adiciona o cursor de ponteiro */
`;
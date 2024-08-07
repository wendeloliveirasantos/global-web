import { Box, BoxProps, Button, ButtonProps } from '@mui/material';
import { purple } from '@mui/material/colors';
import styled from 'styled-components';

interface WelcomeContainerProps extends BoxProps {
  multiplier: number;
}

export const WelcomeContainer = styled(Box)<WelcomeContainerProps>(({ multiplier }) => ({
  width: '100%',
  height: `${600}px`,
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
    height: `${350}px`,
  },

  '@media (max-width: 599px)': {
    height: `${multiplier * 250}px`,
  },

  '@media (max-width: 479px)': {
    height: `${multiplier * 200}px`,
  },
}));

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

  @media (max-width: 899px) {
    display: none;
  }
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

  @media (max-width: 899px) {
    display: none;
  }
`;

export const TextTitleContainer = styled(Box)`
  position: absolute;
  top: 38px;
  left: 47px;
  color: white;
  font-size: 80px;
  font-weight: 700;
  line-height: 62px;
  word-wrap: break-word;
  text-align: left;

  @media (max-width: 899px) {
    display: none;
  }
`;
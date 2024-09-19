import { Box, Button, ButtonProps, Typography } from '@mui/material';
import styled from 'styled-components';

export const InsuranceContainer = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 20px 0px 20px 0px;
`;

export const StyledTitleTypography = styled(Typography)`
    color: #333333;
    font-size: 32px;
    font-weight: 700;
    line-height: 30px;
    word-wrap: break-word
`;

export const Text = styled.p`
    width: 1100px;
    font-size: 18px;
    line-height: 30px;
`;


export const TextInfo = styled(Typography)`
    color: #333333;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    word-wrap: break-word
`;

export const ButtonBox = styled(Box)`
    @media (max-width: 599px) {
        width: 100%;
    }
    @media (min-width: 600px) {
        width: 225px;
    }
`

export const ContrateAgoraButton = styled(Button)<ButtonProps>`
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

  @media (min-width: 899px) {
    display: none;
  }
`;

export const TextContainer = styled(Box)`
    color: #333333;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    word-wrap: break-word
`;

export const TextBoxContainer = styled(Box)` 
  @media (min-width: 899px) {
    display: none;
  }
`
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const Card = styled.div`
`

export const Header = styled.div`
  text-align: center;
  
  h1 {
    color: ${props => props.theme.colors.textColor};

  }

  h2 {
    color: ${props => props.theme.colors.lightBlue};
  }
`

export const Title = styled.h2`
  margin-top: 20px;
  text-align: center;
  color: ${props => props.theme.colors.lightBlue};
`


export const Group = styled.div`
  width: 100%;
  padding: 0 0px;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`

export const PriceContainer = styled(Box)({
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '20px'
});

export const PricePart = styled(Typography)({
  fontSize: 20,
  lineHeight: '30px',
  wordWrap: 'break-word',
});

export const PriceValue = styled(PricePart)({
  color: '#FF5A62',
  fontWeight: 700,
});

export const PriceText = styled(PricePart)({
  color: '#333333',
  fontWeight: 400,
});

export const TypographyText = styled(Typography)({
  color: '#333333', 
  fontSize: 14, 
  fontWeight: '400', 
  wordWrap: 'break-word'
});
import { Box, Card, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledTitleTypography = styled(Typography)`
  color: #333333;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.50px;
  word-wrap: break-word
`;

export const StyledItemTypography = styled(Typography)`
  color: #333333;
  font-size: 17px;
  font-weight: 400;
  line-height: 16px;
`;

export const StyledCard = styled(Card)`
  width: 100%; 
  height: 100%; 
  background: ${props => props.theme.colors.white};
  border-radius: 24px; 
  flex-direction: column; 
  justify-content: center;
  align-items: center; 
  display: inline-flex;
  box-shadow: none;
`;



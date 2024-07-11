import { Box, Card, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledTitleTypography = styled(Typography)`
  color: #333333;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word
`;

export const StyledItemTypography = styled(Typography)`
  color: #333333;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word
`;

export const StyledCard = styled(Card)`
  width: 100%; 
  height: 100%; 
  background: #27C7FF; 
  border-radius: 24px; 
  flex-direction: column; 
  justify-content: center;
  align-items: center; 
  display: inline-flex;
  box-shadow: none;
`;



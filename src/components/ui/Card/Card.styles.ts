import { Box, Card, Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledTitleTypography = styled(Typography)`
  color: #333333;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.50px;
  word-wrap: break-word;
`;

export const StyledItemTypography = styled(Typography)`
  color: #333333;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;

export const StyledCard = styled(Card)`
  width: 100%;
  height: 100%; /* Garante que o Card ocupe toda a altura disponível */
  border-radius: 24px;
  border: 1px solid #ff5a62;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: none;
  background: none;
`;
import { Box, Card, CardContent, Typography } from '@mui/material';
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
    color: '#333333';
    fontSize: 18;
    fontWeight: '400';
    lineHeight: 24;
    wordWrap: 'break-word'
`;

export const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
  border-radius: 24px;
  border: 1px #FF5A62 solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
  background: white;
`;
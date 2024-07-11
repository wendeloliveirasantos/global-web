import styled from 'styled-components';
import { Box, Button, ButtonProps } from '@mui/material';

export const StyledButton = styled(Button)<ButtonProps>`
  text-transform: math-auto;
  font-size: 18px;
  font-weight: 500;
  word-wrap: break-word;
  border-radius: 50px;
  padding: 10px 24px;
  background-color: ${props => props.theme.colors.default} !important;
  &:hover: {
    background-color: ${props => props.theme.colors.default} !important;
  },
  &:active: {
    background-color: ${props => props.theme.colors.default} !important;
  };
`;
import styled from 'styled-components';
import { Box, Button, ButtonProps } from '@mui/material';

interface StyledButtonProps extends ButtonProps {
  buttonColor?: string;
  textColor?: string;
}

export const StyledButton = styled(Button)<StyledButtonProps>`
  text-transform: math-auto;
  font-size: 18px;
  font-weight: 500;
  word-wrap: break-word;
  border-radius: 50px;
  padding: 10px 24px;
  color: ${props => props.textColor || props.theme.colors.white} !important;
  background-color: ${props => props.buttonColor || props.theme.colors.default} !important;
  &:hover: {
    background-color: ${props => props.buttonColor || props.theme.colors.default}!important;
    color: ${props => props.textColor || props.theme.colors.white} !important;
  },
  &:active: {
    background-color: ${props => props.buttonColor || props.theme.colors.default} !important;
    color: ${props => props.textColor || props.theme.colors.white} !important;
  };
`;

export const StyledButtonOut = styled(Button)<StyledButtonProps>`
  text-transform: math-auto;
  font-size: 18px;
  font-weight: 500;
  word-wrap: break-word;
  border-radius: 50px;
  padding: 10px 24px;
  color: ${props => props.textColor || props.theme.colors.default} !important;
  border-color: ${props => props.buttonColor || props.theme.colors.default} !important;
  &:hover: {
    color: ${props => props.textColor || props.theme.colors.default} !important;
  },
  &:active: {
    color: ${props => props.textColor || props.theme.colors.default} !important;
  };
`;
import { Box, Switch } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  marginTop: 17,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const InnerContainer = styled(Box)(({ theme }) => ({
  flex: '1 1 0',
  height: 12,
  paddingLeft: 2,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
}));

export const BarContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 12,
  paddingTop: 4,
  paddingBottom: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
}));

export const Bar = styled(Box)(({ theme }) => ({
  height: 4,
  background: '#FF5A62',
  borderRadius: 8,
}));

export const BarOff = styled(Box)(({ theme }) => ({
  height: 4,
  background: '#FFFFFF',
  borderRadius: 8,
}));

export const DotContainer = styled(Box)(({ theme }) => ({
  width: 4,
  height: 4,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Dot = styled(Box)(({ theme }) => ({
  width: 4,
  height: 4,
  background: '#FF5A62',
  borderRadius: 26,
}));
import { Box, Typography } from '@mui/material'
import styled from 'styled-components'

export const Card = styled.div`
  max-width: 480px;
`

export const RowInputs = styled.div`
  display: flex;
`

export const Passengers = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
`

export const Row = styled.div`
  width: 100%;
  padding: 1% 0%;
`
export const Container = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '5px',
});

export const Background = styled(Box)({
  width: 150,
  height: 31,
  background: 'white',
  borderRadius: 35,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const Text = styled(Typography)({
  width: 150,
  textAlign: 'center',
  color: '#333333',
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '0.50px',
  wordWrap: 'break-word',
});
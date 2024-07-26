import React from 'react'
import * as S from './Insurances.styles'
import { useRouter } from 'next/router';
import { Box, CardActions, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import { Item } from '../../auto/AnswerQuestion/AnswerQuestion.styles';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui';

export default function Insurances() {
  const router = useRouter();

  return (
    <Container maxWidth="xl">
      <S.InsuranceContainer>
        <Box sx={{ marginBottom: 6 }}>
          <S.StyledTitleTypography>
            Por que contratar um seguro com a Dobyseg?
          </S.StyledTitleTypography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} >
              <Item>
                <Card titulo='Vantagem 1' texto='Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Aeneam vestibulum nulla.'></Card>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <Card titulo='Vantagem 2' texto='Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Aeneam vestibulum nulla.'></Card>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <Card titulo='Vantagem 3' texto='Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Aeneam vestibulum nulla.'></Card>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <Card titulo='Vantagem 4' texto='Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Aeneam vestibulum nulla.'></Card>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ marginTop: 3 }}>
          <S.ButtonBox>
            <Button>Contrate agora</Button>
          </S.ButtonBox>
        </Box>
      </S.InsuranceContainer>
    </Container>
  )
}

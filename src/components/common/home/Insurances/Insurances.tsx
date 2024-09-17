import React from 'react'
import * as S from './Insurances.styles'
import { useRouter } from 'next/router';
import { Box, CardActions, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui';
import { Item } from '../../auto/AnswerQuestion/AnswerQuestion.styles';

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
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <Card
                  titulo="Segurança e Confiabilidade"
                  texto="A Dobyseg trabalha com as melhores seguradoras, garantindo a proteção que você precisa."
                />
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <Card
                  titulo="Facilidade"
                  texto="Todo o processo pode ser feito de forma prática e rápida, diretamente pelo celular."
                />
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <Card
                  titulo="Rapidez"
                  texto="Contrate seu seguro de maneira rápida, sem complicações."
                />
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <Card
                  titulo="Melhores Ofertas"
                  texto="Encontre as melhores opções de seguros que se adaptam às suas necessidades."
                />
              </Item>
            </Grid>
          </Grid>
        </Box>

        {/* <Box display="flex" alignItems="center" justifyContent="center" sx={{ marginTop: 3 }}>
          <S.ButtonBox>
            <Button>Contrate agora</Button>
          </S.ButtonBox>
        </Box> */}
      </S.InsuranceContainer>
    </Container>
  )
}

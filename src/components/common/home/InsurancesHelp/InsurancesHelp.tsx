import React from 'react'
import * as S from './InsurancesHelp.styles'
import { useRouter } from 'next/router';
import { Box, CardActions, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import { Item } from '../../auto/AnswerQuestion/AnswerQuestion.styles';
import { CardHelp } from '@/components/ui/CardHelp';
import { Button } from '@/components/ui';

export default function InsurancesHelp() {
  const router = useRouter();

  return (
    <S.InsuranceContainer>
      <Container maxWidth="xl">
        <Box sx={{ marginBottom: 2 }}>
          <S.StyledTitleTypography>
            Como contratar?
          </S.StyledTitleTypography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1.5}>
            <Grid item xs={12} sm={6} md={4} lg={2.4}>
              <Item>
                <CardHelp titulo='Acesse o site' texto='Visite o site da Dobyseg.'></CardHelp>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2.4}>
              <Item>
                <CardHelp titulo='Escolha o seguro' texto='Selecione o tipo de seguro que você precisa.'></CardHelp>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2.4}>
              <Item>
                <CardHelp titulo='Preencha o cadastro' texto='Inclua suas informações pessoais e de contato.'></CardHelp>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={2.4}>
              <Item>
                <CardHelp titulo='Receba as opções' texto='A Dobyseg apresentará as melhores opções de seguros para você.'></CardHelp>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2.4}>
              <Item>
                <CardHelp titulo='Conclua a contratação' texto='Escolha a opção que mais se adapta às suas necessidades e finalize a contratação.'></CardHelp>
              </Item>
            </Grid>
          </Grid>
        </Box>
        {/* <Box display="flex" alignItems="center" justifyContent="center" sx={{ marginTop: 3 }}>
          <S.ButtonBox>
            <Button>Contrate agora</Button>
          </S.ButtonBox>
        </Box> */}
      </Container>
    </S.InsuranceContainer>
  )
}

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
                <CardHelp titulo='1 - Lorem Ipsum' texto='Supporting line text lorem ipsum dolor sit amet, consectetur.'></CardHelp>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2.4}>
              <Item>
                <CardHelp titulo='2 - Lorem Ipsum' texto='Supporting line text lorem ipsum dolor sit amet, consectetur.'></CardHelp>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2.4}>
              <Item>
                <CardHelp titulo='3 - Lorem Ipsum' texto='Supporting line text lorem ipsum dolor sit amet, consectetur.'></CardHelp>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={2.4}>
              <Item>
                <CardHelp titulo='4 - Lorem Ipsum' texto='Supporting line text lorem ipsum dolor sit amet, consectetur.'></CardHelp>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2.4}>
              <Item>
                <CardHelp titulo='5 - Lorem Ipsum' texto='Supporting line text lorem ipsum dolor sit amet, consectetur.'></CardHelp>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ marginTop: 3 }}>
          <S.ButtonBox>
            <Button>Contrate agora</Button>
          </S.ButtonBox>
        </Box>
      </Container>
    </S.InsuranceContainer>
  )
}

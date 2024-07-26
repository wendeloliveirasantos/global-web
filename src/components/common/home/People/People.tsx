import React from 'react'
import * as S from './People.styles'
import { useRouter } from 'next/router';
import { Box, CardActions, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import { Item } from '../../auto/AnswerQuestion/AnswerQuestion.styles';
import { CardPeople } from '@/components/ui/CardPeople';
import { Button } from '@/components/ui';

export default function PeopleHelp() {
  const router = useRouter();

  return (
    <S.InsuranceContainer>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1.5}>
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <CardPeople titulo='Nome Sobrenome' texto='Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Aeneam vestibulum nulla.' src='/images/people-1.png'></CardPeople>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <CardPeople titulo='Nome Sobrenome' texto='Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Aeneam vestibulum nulla.' src='/images/people-2.png'></CardPeople>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <CardPeople titulo='Nome Sobrenome' texto='Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Aeneam vestibulum nulla.' src='/images/people-3.png'></CardPeople>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <CardPeople titulo='Nome Sobrenome' texto='Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Aeneam vestibulum nulla.' src='/images/people-4.png'></CardPeople>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </S.InsuranceContainer>
  )
}

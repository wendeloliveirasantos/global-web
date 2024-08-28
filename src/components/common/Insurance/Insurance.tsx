import { Button } from '@/components/ui'
import React, { Fragment } from 'react'
import * as S from './Insurance.styles'
import removeViagem from '@/hooks/removeViagem'
import removeResidencial from '@/hooks/removeResidencial'
import { Card } from '@/components/ui/Card';
import { Box, Grid } from '@mui/material'
import { Item } from '../auto/AnswerQuestion/AnswerQuestion.styles'
import { CardSeguro } from '@/components/ui/CardSeguro'
import { useRouter } from 'next/router'

type InsuranceInformation = {
  title: string
  description: string
  advantages: any[]
  services: any
}

type InsuranceProps = {
  href: string
  insuranceInformation: InsuranceInformation
}

export default function Insurance({
  href,
  insuranceInformation
}: InsuranceProps) {

  const router = useRouter();
  
  function handleClick() {
    removeResidencial();
    removeViagem();
    router.push(href);
  }

  return (
    <S.InsuranceContainer>
      <S.TextBoxContainer sx={{ marginBottom: 3 }}>
        <S.TextContainer>
          {insuranceInformation.description}
        </S.TextContainer>
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ marginTop: 3 }}>
          <S.ButtonBox>
            <Button color='#62F4BC' textColor='#333333' onClick={handleClick}>Contrate agora</Button>
          </S.ButtonBox>
        </Box>
      </S.TextBoxContainer>
      <Box sx={{ marginBottom: 3 }}>
        <S.StyledTitleTypography>
          {insuranceInformation.title}
        </S.StyledTitleTypography>
        <S.TextInfo sx={{ marginTop: 3 }}>
          {insuranceInformation.description}
        </S.TextInfo>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {insuranceInformation.advantages.map((value, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Item>
                <CardSeguro titulo={value.title} texto='Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Aeneam vestibulum nulla.' items={value.items}></CardSeguro>
              </Item>
            </Grid>
          ))}
          {/* <Grid item xs={3}>
            <Item>
              <CardSeguro titulo='Opção 1' texto='Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Aeneam vestibulum nulla.' items={insuranceInformation.advantages[0].items}></CardSeguro>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <CardSeguro titulo='Opção 2' texto='Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Aeneam vestibulum nulla.' items={insuranceInformation.advantages[0].items}></CardSeguro>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <CardSeguro titulo='Opção 3' texto='Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Aeneam vestibulum nulla.' items={insuranceInformation.advantages[0].items}></CardSeguro>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <CardSeguro titulo='Opção 4' texto='Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Aeneam vestibulum nulla.' items={insuranceInformation.advantages[0].items}></CardSeguro>
            </Item>
          </Grid> */}
        </Grid>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" sx={{ marginTop: 3 }}>
        <S.ButtonBox>
          <Button color='#62F4BC' textColor='#333333' onClick={handleClick}>Contrate agora</Button>
        </S.ButtonBox>
      </Box>
      
    </S.InsuranceContainer>
  )
}

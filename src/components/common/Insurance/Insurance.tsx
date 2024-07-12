import { Button } from '@/components/ui'
import React, { Fragment } from 'react'
import * as S from './Insurance.styles'
import removeViagem from '@/hooks/removeViagem'
import removeResidencial from '@/hooks/removeResidencial'
import { Card } from '@/components/ui/Card';
import { Box, Grid } from '@mui/material'
import { Item } from '../auto/AnswerQuestion/AnswerQuestion.styles'
import { CardSeguro } from '@/components/ui/CardSeguro'

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
  function handleClick() {
    removeResidencial();
    removeViagem();
  }

  return (
    <S.InsuranceContainer>
      <Box sx={{ marginBottom: 6 }}>
        <S.StyledTitleTypography>
          {insuranceInformation.title}
        </S.StyledTitleTypography>
        <S.TextInfo sx={{ marginTop: 6 }}>
          {insuranceInformation.description}
        </S.TextInfo>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {insuranceInformation.advantages.map((value, index) => (
            <Grid key={index} item xs={3}>
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
        <Box height={50} width={225}>
          <a href={href} onClick={handleClick}>
            <Button color='#62F4BC' textColor='#333333'>Contrate agora</Button>
          </a>
        </Box>
      </Box>
      
    </S.InsuranceContainer>
  )
}

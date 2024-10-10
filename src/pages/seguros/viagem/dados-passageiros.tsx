import { ContainerBox, Wrapper } from '@/components/common'
import { PageTitle } from '@/components/common/PageTitle'
import SubTitle from '@/components/common/SubTitle/SubTitle'
import { MainLayout } from '@/components/common/layouts'
import { DadosPassageiro } from '@/components/common/travel/travel-passageiro'
import { Bar } from '@/components/ui/Bar'
import { Container } from '@mui/material'
import React from 'react'

export default function DadosPassageiros() {
  return (
    <MainLayout>
      <Container maxWidth="xl">
        <Wrapper style={{ flex: 1 }} background="/images/city.png">
          <ContainerBox style={{ display: "flex" }}>
            <PageTitle bold="Dados" regular="dos Passageiros" />
            <SubTitle regular="Por favor informe os dados dos demais passageiros para podermos prosseguir com o seu seguro." />
            <DadosPassageiro />
            <Bar step={50}/>
          </ContainerBox>
        </Wrapper>
      </Container>
    </MainLayout>
  )
}

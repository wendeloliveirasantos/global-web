import { Container, Wrapper } from '@/components/common'
import { PageTitle } from '@/components/common/PageTitle'
import SubTitle from '@/components/common/SubTitle/SubTitle'
import { MainLayout } from '@/components/common/layouts'
import { DadosPassageiro } from '@/components/common/travel/travel-passageiro'
import React from 'react'

export default function DadosPassageiros() {
  return (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <Container style={{ display: "flex" }}>
          <PageTitle bold="Dados" regular="dos Passageiros" />
          <SubTitle regular="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at maximus leo, sit amet bibendum orci. Nam vel scelerisque est. Mauris luctus nisl ut molestie malesuada." />
          <DadosPassageiro />
        </Container>
      </Wrapper>
    </MainLayout>
  )
}

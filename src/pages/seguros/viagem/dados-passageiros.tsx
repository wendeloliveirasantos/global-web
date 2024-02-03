import { Container, Wrapper } from '@/components/common'
import { MainLayout } from '@/components/common/layouts'
import { DadosPassageiro } from '@/components/common/travel/travel-passageiro'
import React from 'react'

export default function DadosPassageiros() {
  return (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <Container>
          <DadosPassageiro />
        </Container>
      </Wrapper>
    </MainLayout>
  )
}

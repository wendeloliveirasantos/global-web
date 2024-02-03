import { Container, TravelQuote, Wrapper } from "@/components/common";
import { PageTitle } from "@/components/common/PageTitle";
import { MainLayout } from "@/components/common/layouts";
import React from "react";

export default function DadosBasicos() {
  return (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <Container>
          <PageTitle bold="Faça uma" regular="cotação" />
          <TravelQuote />
        </Container>
      </Wrapper>
    </MainLayout>
  );
}

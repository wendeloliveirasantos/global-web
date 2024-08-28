import { ContainerBox, TravelCoverage, Wrapper } from "@/components/common";
import Loading from "@/components/common/Loading/Loading";
import { PageTitle } from "@/components/common/PageTitle";
import SubTitle from "@/components/common/SubTitle/SubTitle";
import { MainLayout } from "@/components/common/layouts";
import { Bar } from "@/components/ui/Bar";
import { Button } from "@/components/ui/Button";
import { CarouselPlano } from "@/components/ui/CarouselPlano";
import useOfertasViagem from "@/hooks/use-ofertas-viagem";
import { Container, Stack } from "@mui/material";
import React from "react";

export default function Coberturas() {
  const { products } = useOfertasViagem();

  return products.length > 0 ? (
    <MainLayout>
      <Container maxWidth="xl">
        <Wrapper style={{ flex: 1 }} background="/images/city.png">
          <ContainerBox style={{ display: "flex" }}>
            <PageTitle bold="Escolha sua" regular="Cobertura" />
            <SubTitle regular="Selecione a cobertura que melhor atende às suas necessidades. Se precisar revisar, você pode retornar à tela anterior a qualquer momento." />
            <CarouselPlano products={products} href="/seguros/viagem/dados-titular"/>
            <Bar step={25}/>
          </ContainerBox>
        </Wrapper>
      </Container>
    </MainLayout>
  ) : (
    <Loading />
  );
}

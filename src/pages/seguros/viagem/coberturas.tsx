import { Container, TravelCoverage, Wrapper } from "@/components/common";
import Loading from "@/components/common/Loading/Loading";
import { PageTitle } from "@/components/common/PageTitle";
import SubTitle from "@/components/common/SubTitle/SubTitle";
import { MainLayout } from "@/components/common/layouts";
import { Button } from "@/components/ui/Button";
import useOfertasViagem from "@/hooks/use-ofertas-viagem";
import { Stack } from "@mui/material";
import React from "react";

export default function Coberturas() {
  const { products } = useOfertasViagem();

  return products.length > 0 ? (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <Container>
          <PageTitle bold="Escolha a" regular="sua cobertura" />
          <SubTitle regular="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at maximus leo, sit amet bibendum orci. Nam vel scelerisque est. Mauris luctus nisl ut molestie malesuada." />
          <TravelCoverage products={products} />
        </Container>
        <Container style={{ display: "flex" }}>
          <Stack spacing={2} direction="row">
            <Button href="/seguros/viagem/dados-basicos" variant="outlined">Refazer Busca</Button>
          </Stack>
        </Container>
      </Wrapper>
    </MainLayout>
  ) : (
    <Loading />
  );
}

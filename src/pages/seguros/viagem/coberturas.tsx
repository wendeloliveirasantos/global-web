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
            <SubTitle regular="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum nulla eu ultrices vulputate. Etiam viverra ante ut dui congue, a tincidunt lectus posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            {/* <TravelCoverage products={products} /> */}
            <CarouselPlano products={products}/>
            <Bar step={25}/>
          </ContainerBox>
          {/* <Container style={{ display: "flex" }}>
            <Stack spacing={2} direction="row">
              <Button href="/seguros/viagem/dados-basicos" variant="outlined">Refazer Busca</Button>
            </Stack>
          </Container> */}
        </Wrapper>
      </Container>
    </MainLayout>
  ) : (
    <Loading />
  );
}

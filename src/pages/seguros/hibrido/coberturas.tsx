import { ContainerBox, TravelCoverage, Wrapper } from "@/components/common";
import Loading from "@/components/common/Loading/Loading";
import { PageTitle } from "@/components/common/PageTitle";
import SubTitle from "@/components/common/SubTitle/SubTitle";
import { HybridCoverage } from "@/components/common/hybrid/hybrid-coverage";
import { MainLayout } from "@/components/common/layouts";
import { Bar } from "@/components/ui/Bar";
import { Button } from "@/components/ui/Button";
import { CarouselPlano } from "@/components/ui/CarouselPlano";
import useOfertasResidencial from "@/hooks/use-ofertas-residencial";
import { Product } from "@/types/residencial";
import { Container, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export default function Coberturas() {
  const router = useRouter();
  async function onSubmit(value: Product){
    router.push("/seguros/hibrido/dados-titular");
  }
  const { products } = useOfertasResidencial("Hibrido");
  return products.length > 0 ? (
    <MainLayout>
      <Container maxWidth="xl">
        <Wrapper style={{ flex: 1 }} background="/images/city.png">
          <ContainerBox style={{ display: "flex" }}>
            <PageTitle bold="Escolha sua" regular="Cobertura" />
            <SubTitle regular="Selecione a cobertura que melhor atende às suas necessidades. Se precisar revisar, você pode retornar à tela anterior a qualquer momento." />
            <CarouselPlano products={products} operator="nowSys" href="/seguros/hibrido/dados-titular"/>
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

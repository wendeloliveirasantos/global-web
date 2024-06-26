import { Container, TravelCoverage, Wrapper } from "@/components/common";
import Loading from "@/components/common/Loading/Loading";
import { PageTitle } from "@/components/common/PageTitle";
import SubTitle from "@/components/common/SubTitle/SubTitle";
import { HybridCoverage } from "@/components/common/hybrid/hybrid-coverage";
import { MainLayout } from "@/components/common/layouts";
import { Button } from "@/components/ui/Button";
import useOfertasResidencial from "@/hooks/use-ofertas-residencial";
import { Product } from "@/types/residencial";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export default function Coberturas() {
  const router = useRouter();
  async function onSubmit(value: Product){
    router.push("/seguros/vida/dados-titular");
  }
  const { products } = useOfertasResidencial("VIDA");
  return products.length > 0 ? (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <Container>
          <PageTitle bold="Escolha a" regular="sua cobertura" />
          <SubTitle regular="Temos a melhor opção do Seguro de Vida para você." />
          <HybridCoverage onSubmit={onSubmit} products={products} />
        </Container>
        <Container style={{ display: "flex" }}>
          <Stack spacing={2} direction="row">
            <Button href="/seguros/vida/dados-basicos" variant="outlined">Refazer Busca</Button>
          </Stack>
        </Container>
      </Wrapper>
    </MainLayout>
  ) : (
    <Loading />
  );
}

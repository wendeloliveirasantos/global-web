import { Container, TravelCoverage, Wrapper } from "@/components/common";
import Loading from "@/components/common/Loading/Loading";
import { MainLayout } from "@/components/common/layouts";
import useOfertasViagem from "@/hooks/use-ofertas-viagem";
import React from "react";

export default function Coberturas() {
  const { products } = useOfertasViagem();

  return products.length > 0 ? (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <Container>
          <TravelCoverage products={products} />
        </Container>
      </Wrapper>
    </MainLayout>
  ) : (
    <Loading />
  );
}

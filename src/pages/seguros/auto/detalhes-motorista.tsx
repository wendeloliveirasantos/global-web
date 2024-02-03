import { Container, Wrapper } from "@/components/common";
import { DriverData } from "@/components/common/auto/DriverData";
import { MainLayout } from "@/components/common/layouts";
import Loading from "@/components/common/Loading/Loading";
import { PageTitle } from "@/components/common/PageTitle";
import React, { useState } from "react";

export default function Offers() {
  return (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <Container>
          <div style={{ maxWidth: 400, width: "100%" }}>
            <PageTitle bold="Dados" regular="do Motorista" />
            <DriverData onSubmit={() => {}} />
          </div>
        </Container>
      </Wrapper>
    </MainLayout>
  );
}

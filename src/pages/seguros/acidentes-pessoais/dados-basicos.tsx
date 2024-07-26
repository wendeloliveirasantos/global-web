import { ContainerBox, Wrapper } from "@/components/common";
import { PageTitle } from "@/components/common/PageTitle";
import { Item } from "@/components/common/auto/AnswerQuestion/AnswerQuestion.styles";
import { MainLayout } from "@/components/common/layouts";
import { Box } from "@mui/material";
import React from "react";
import Grid from '@mui/material/Unstable_Grid2'; 
import SubTitle from "@/components/common/SubTitle/SubTitle";
import { HybridQuote } from "@/components/common/hybrid/hybrid-quote";
import { useRouter } from "next/router";

export default function DadosBasicos() {
  const router = useRouter();
  async function onSubmit(){
    router.push("/seguros/acidentes-pessoais/coberturas");
  }
  return (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <ContainerBox style={{ display: "flex" }}>
          <PageTitle bold="Faça uma" regular="cotação" />
          <SubTitle regular="Por favor informe seus dados para podermos calcular o seu seguro." />
          <HybridQuote onSubmit={onSubmit} business="acidentesPessoais"/>
        </ContainerBox>
      </Wrapper>
    </MainLayout>
  );
}

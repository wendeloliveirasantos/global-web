import { ContainerBox, TravelQuote, Wrapper } from "@/components/common";
import { PageTitle } from "@/components/common/PageTitle";
import { Item } from "@/components/common/auto/AnswerQuestion/AnswerQuestion.styles";
import { MainLayout } from "@/components/common/layouts";
import { Box, Container, styled } from "@mui/material";
import React from "react";
import Grid from '@mui/material/Unstable_Grid2'; 
import SubTitle from "@/components/common/SubTitle/SubTitle";
import { Bar } from "@/components/ui/Bar";

export default function DadosBasicos() {
  return (
    <MainLayout>
      <Container maxWidth="xl">
        <Wrapper style={{ flex: 1 }} background="/images/city.png">
          <ContainerBox style={{ display: "flex" }}>
            <PageTitle bold="Faça uma" regular="cotação" />
            <SubTitle regular="Insira suas informações de cadastro para receber as melhores opções de seguro disponíveis." />
            <TravelQuote />
            <Bar step={0}/>
          </ContainerBox>
        </Wrapper>
      </Container>
    </MainLayout>
  );
}

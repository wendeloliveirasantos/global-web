import { ContainerBox, TravelQuote, Wrapper } from "@/components/common";
import { PageTitle } from "@/components/common/PageTitle";
import { Item } from "@/components/common/auto/AnswerQuestion/AnswerQuestion.styles";
import { MainLayout } from "@/components/common/layouts";
import { Box, Container, styled } from "@mui/material";
import React from "react";
import Grid from '@mui/material/Unstable_Grid2'; 
import SubTitle from "@/components/common/SubTitle/SubTitle";
import { Bar } from "@/components/ui/Bar";
import { AdminLogin } from "@/components/common/admin/admin-login";

export default function Login() {
  return (
    <MainLayout>
      <Container maxWidth="xl">
        <Wrapper style={{ flex: 1 }} background="/images/city.png">
          <ContainerBox style={{ display: "flex" }}>
            <PageTitle bold="Faça seu" regular="login" />
            <SubTitle regular="Faça o login para acessar e gerenciar as apólices des seguros. Insira suas credenciais abaixo." />
            <AdminLogin />
          </ContainerBox>
        </Wrapper>
      </Container>
    </MainLayout>
  );
}

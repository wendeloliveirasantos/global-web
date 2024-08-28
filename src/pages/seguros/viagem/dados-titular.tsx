import { ContainerBox, TravelTitular, Wrapper } from "@/components/common";
import { PageTitle } from "@/components/common/PageTitle";
import SubTitle from "@/components/common/SubTitle/SubTitle";
import { MainLayout } from "@/components/common/layouts";
import { Bar } from "@/components/ui/Bar";
import { Container } from "@mui/material";

export default function DadosTitular() {
  return (
    <MainLayout>
      <Container maxWidth="xl">
        <Wrapper style={{ flex: 1 }} background="/images/city.png">
          <ContainerBox style={{ display: "flex" }}>
            <PageTitle bold="Dados do" regular="Titular" />
            <SubTitle regular="Preencha os dados do titular, que é a pessoa beneficiária do seguro contratado." />
            <TravelTitular />
            <Bar step={50}/>
          </ContainerBox>
        </Wrapper>
      </Container>
    </MainLayout>
  )
}
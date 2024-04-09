import { Container, TravelTitular, Wrapper } from "@/components/common";
import { PageTitle } from "@/components/common/PageTitle";
import SubTitle from "@/components/common/SubTitle/SubTitle";
import { MainLayout } from "@/components/common/layouts";

export default function DadosTitular() {
  return (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <Container style={{ display: "flex" }}>
          <PageTitle bold="Dados" regular="do Titular" />
          <SubTitle regular="Por favor informe seus dados para podermos prosseguir com o seu seguro." />
          <TravelTitular />
        </Container>
      </Wrapper>
    </MainLayout>
  )
}
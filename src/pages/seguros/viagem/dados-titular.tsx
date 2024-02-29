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
          <SubTitle regular="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at maximus leo, sit amet bibendum orci. Nam vel scelerisque est. Mauris luctus nisl ut molestie malesuada." />
          <TravelTitular />
        </Container>
      </Wrapper>
    </MainLayout>
  )
}
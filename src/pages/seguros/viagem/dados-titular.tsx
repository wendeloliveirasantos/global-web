import { Container, TravelTitular, Wrapper } from "@/components/common";
import { MainLayout } from "@/components/common/layouts";

export default function DadosTitular() {
  return (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <Container>
          <TravelTitular />
        </Container>
      </Wrapper>
    </MainLayout>
  )
}
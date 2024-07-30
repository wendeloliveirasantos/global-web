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
            <SubTitle regular="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum nulla eu ultrices vulputate. Etiam viverra ante ut dui congue, a tincidunt lectus posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            <TravelTitular />
            <Bar step={50}/>
          </ContainerBox>
        </Wrapper>
      </Container>
    </MainLayout>
  )
}
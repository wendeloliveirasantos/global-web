import { ContainerBox, Wrapper } from "@/components/common";
import { PageTitle } from "@/components/common/PageTitle";
import SubTitle from "@/components/common/SubTitle/SubTitle";
import { HybridTitular } from "@/components/common/hybrid/hybrid-titular";
import { MainLayout } from "@/components/common/layouts";
import { Bar } from "@/components/ui/Bar";
import { Container } from "@mui/material";
import { useRouter } from "next/router";

export default function DadosTitular() {
  const router = useRouter();
  async function onSubmit(){
    router.push("/seguros/hibrido/pagamento");
  }
  return (
    <MainLayout>
      <Container maxWidth="xl">
        <Wrapper style={{ flex: 1 }} background="/images/city.png">
          <ContainerBox style={{ display: "flex" }}>
            <PageTitle bold="Dados do" regular="Titular" />
            <SubTitle regular="Preencha os dados do titular, que é a pessoa beneficiária do seguro contratado." />
            <HybridTitular onSubmit={onSubmit} business="hibrido"/>
            <Bar step={50}/>
          </ContainerBox>
        </Wrapper>
      </Container>
    </MainLayout>
  )
}
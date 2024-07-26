import { ContainerBox, Wrapper } from "@/components/common";
import { PageTitle } from "@/components/common/PageTitle";
import SubTitle from "@/components/common/SubTitle/SubTitle";
import { HybridTitular } from "@/components/common/hybrid/hybrid-titular";
import { MainLayout } from "@/components/common/layouts";
import { useRouter } from "next/router";

export default function DadosTitular() {
  const router = useRouter();
  async function onSubmit(){
    router.push("/seguros/empresarial/pagamento");
  }
  return (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <ContainerBox style={{ display: "flex" }}>
          <PageTitle bold="Dados" regular="do Titular" />
          <SubTitle regular="Por favor informe seus dados para podermos prosseguir com o seu seguro." />
          <HybridTitular onSubmit={onSubmit} business="empresarial"/>
        </ContainerBox>
      </Wrapper>
    </MainLayout>
  )
}
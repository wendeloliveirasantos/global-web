import React from 'react'
import { ContainerBox, Wrapper } from '@/components/common'
import ConcluidoComponent from '@/components/common/concluido'
import { MainLayout } from '@/components/common/layouts'
import { PageTitle } from "@/components/common/PageTitle";
import SubTitle from '@/components/common/SubTitle/SubTitle';
import { Bar } from '@/components/ui/Bar';
import { STORAGE_VIAGEM_COMPRA } from '@/constants';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export default function Concluido() {
  //const [compra] = useLocalStorage(STORAGE_VIAGEM_COMPRA, "");
  return (
    // <MainLayout>
    //   <ConcluidoComponent compra={JSON.parse("{}")} />
    // </MainLayout>
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <ContainerBox style={{ display: "flex" }}>
          <PageTitle inverter={true} bold=" Agora é só deixar com a gente!" regular="Pronto!" />
          <img style={{ paddingBottom: 25 }} src='/images/layer-concluido.png' width={400} alt="Custom Icon"/>
          <SubTitle regular="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum nulla eu ultrices vulputate. Etiam viverra ante ut dui congue, a tincidunt lectus posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
          <ConcluidoComponent compra={JSON.parse("{}")} />
          <Bar step={100}/>
        </ContainerBox>
      </Wrapper>
    </MainLayout>
  )
}

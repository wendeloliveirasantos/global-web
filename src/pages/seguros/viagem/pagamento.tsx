import { ContainerBox, Wrapper } from '@/components/common'
import Loading from '@/components/common/Loading/Loading'
import { PagamentoForm } from '@/components/common/PagamentoForm'
import { PageTitle } from '@/components/common/PageTitle'
import SubTitle from '@/components/common/SubTitle/SubTitle'
import { MainLayout } from '@/components/common/layouts'
import { Bar } from '@/components/ui/Bar'
import { Dialog } from '@/components/ui/Dialog'
import { STORAGE_VIAGEM_COMPRA, STORAGE_VIAGEM_COTACAO } from '@/constants'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import useViagem from '@/hooks/useViagem'
import api from '@/utils/api'
import { Container } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Pagamento() {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [, setCompra] = useLocalStorage(STORAGE_VIAGEM_COMPRA, "");
  const { oferta, titular, cotacao, passageiros } = useViagem()

  const [open, setOpen] = React.useState(false);
  const onClose = () => setOpen(false);

  const [error, setError] = useState<string>("")

  async function onSubmit(values: {
    nomeTitular: "",
    cpfTitular: "",
    numeroCartao: "",
    mesValidade: "",
    anoValidade: "",
    cvv: "",
    parcelas: "",
    nomeEmergencial: "",
    contatoEmergencial: ""
  }) {
    try {
      setLoading(true)
      const input = {
        "quoteId": oferta.id,
        "productReferenceId": JSON.stringify(oferta.productReferenceId),
        "provider": oferta.operator,
        "holder": {
          "firstName": titular.firstName,
          "lastName": titular.lastName,
          "gender": "",
          "cpfNumber": titular.document,
          "cellPhone": titular.phone.replace(" ", ""),
          "birthDate": titular.birthDate,
          "email": titular.email,
          "address": titular.address,
          "number": titular.number,
          "city": titular.city,
          "neighborhood": titular.neighborhood,
          "uf": titular.state,
          "country": "BR",
          "zipCode": titular.postalCode.replace(" ", "")
        },
        "passengers": passageiros != null ? passageiros : [],
        "payment": {
          "cardholderName": values.nomeTitular,
          "cardholderCPF": values.cpfTitular,
          "cardNumber": values.numeroCartao,
          "securityCode": values.cvv,
          "expiryMonth": values.mesValidade,
          "expiryYear": values.anoValidade,
          "installments": values.parcelas,
          "operator": 'mastercard',
        },
        "emergencyContact": {
          "name": values.nomeEmergencial,
          "cellPhone": values.contatoEmergencial
        }
      }
      router.push("/seguros/viagem/concluido")
      // const response = await api.post("/travels/purchases", input);
      // if (response.status == 201) {
      //   setCompra(JSON.stringify(response.data))
      //   router.push("/seguros/viagem/concluido")
      //   setLoading(false)
      // }
      // else {
      //   setLoading(false)
      //   setOpen(true)
      //   setError(response.data.message)
      // }
      
    } catch (error) {
      setLoading(false)
      throw new Error()
    }
  }

  if (loading) return <Loading />

  return oferta && (
    <MainLayout>
      <Container maxWidth="xl">
        <Wrapper style={{ flex: 1 }} background="/images/city.png">
          <ContainerBox style={{ display: "flex" }}>
            <PageTitle bold='Dados para' regular='Pagamento' />
            <SubTitle regular="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum nulla eu ultrices vulputate. Etiam viverra ante ut dui congue, a tincidunt lectus posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            <PagamentoForm
              onSubmit={onSubmit}
              amount={oferta.amount ?? 0}
            />
            <Dialog title='ERRO AO PROCESSAR PAGAMENTO' text={error} open={open} onClose={onClose}></Dialog>
            <Bar step={75}/>
          </ContainerBox>
        </Wrapper>
      </Container>
    </MainLayout>
  )
}

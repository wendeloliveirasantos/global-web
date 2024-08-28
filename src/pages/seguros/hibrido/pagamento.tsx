import { ContainerBox, Wrapper } from '@/components/common'
import Loading from '@/components/common/Loading/Loading'
import { PagamentoForm } from '@/components/common/PagamentoForm'
import { PageTitle } from '@/components/common/PageTitle'
import SubTitle from '@/components/common/SubTitle/SubTitle'
import { HybridPagamento } from '@/components/common/hybrid/hybrid-pagamento'
import { MainLayout } from '@/components/common/layouts'
import { Bar } from '@/components/ui/Bar'
import { Dialog } from '@/components/ui/Dialog'
import { STORAGE_RESIDENCIAL_COMPRA, STORAGE_RESIDENCIAL_COTACAO } from '@/constants'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import useResidencial from '@/hooks/useResidencial'
import api from '@/utils/api'
import { Container } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Pagamento() {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [, setCompra] = useLocalStorage(STORAGE_RESIDENCIAL_COMPRA, "");
  const { oferta, titular, cotacao } = useResidencial()

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
        "payment": {
          "cardholderName": values.nomeTitular,
          "cardholderCPF": values.cpfTitular,
          "cardNumber": values.numeroCartao,
          "securityCode": values.cvv,
          "expiryMonth": values.mesValidade,
          "expiryYear": values.anoValidade,
          "installments": values.parcelas,
          "operator": 'mastercard',
        }
      }
      router.push("/seguros/hibrido/concluido")
      // const response = await api.post("/hybrids/purchases", input);
      // if (response.status == 201) {
      //   setCompra(JSON.stringify(response.data))
      //   router.push("/seguros/hibrido/concluido")
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
            <PageTitle bold='Dados para' regular='pagamento' />
            <SubTitle regular="Verifique se as informações do seguro estão corretas. Caso necessário, você pode voltar e atualizar os dados do titular do cartão." />
            <HybridPagamento
              onSubmit={onSubmit}
              amount={oferta.amount ?? 0}
              business="hibrido"
            />
            <Dialog title='ERRO AO PROCESSAR PAGAMENTO' text={error} open={open} onClose={onClose}></Dialog>
            <Bar step={75}/>
          </ContainerBox>
        </Wrapper>  
      </Container>
    </MainLayout>
  )
}
